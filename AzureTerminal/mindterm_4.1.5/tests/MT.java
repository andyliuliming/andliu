package tests;

import java.io.*;
import java.net.Socket;
import java.security.*;
import javax.crypto.Cipher;
import javax.crypto.KeyAgreement;
import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Random;

import java.security.interfaces.*;
import java.security.spec.*;

import javax.crypto.KeyAgreement;

import com.mindbright.nio.NetworkConnection;
import com.mindbright.nio.NonBlockingOutput;
import com.mindbright.ssh2.*;
import com.mindbright.util.Crypto;
import com.mindbright.util.HexDump;

public class MT {
    private static boolean SSH_SPAWN = true;
    private static String  SSH_HOST  = "127.0.0.1";
    private static int     SSH_PORT  = 2222;
    private static String  SSHD_BIN  = "/usr/sbin/sshd";

    private final static int START_SLEEP = 500; // might need to be increased since we need to wait for sshd to start
    //private final static int STOP_SLEEP  = 100;

    private static boolean DEBUG_SSHD = false;

    // port forwarding parameters
    private static int MAX_PACKET_SIZE      = 4*1024;
    private static int SOCKETS_PER_LISTENER = 8;
    private static int MAX_LISTENERS        = 8;
    private static int RCVSIZE              = 32*1024;
    private static int SNDSIZE              = 32*1024;

    private static boolean SUPPORT_JCE_STRENGTH = false;
    
    private static void checkCryptoSupport() 
    {
        if (SUPPORT_JCE_STRENGTH = Crypto.hasUnlimitedStrengthJCE())
            System.out.println("Found support for unlimited strength JCE");

        if (Crypto.hasCASTSupport())
            System.out.println("Found support for CAST");

        if (Crypto.hasUnlimitedDHSupport())
            System.out.println("Found support for unlimited DH");

        if (Crypto.hasECDHSupport())
            System.out.println("Found support for ECDH");

        if (Crypto.hasECDSASupport())
            System.out.println("Found support for ECDSA");

        System.out.println("");
    }

    private static boolean cachekps = true;
    private static Hashtable<String, KeyPair> kps = new Hashtable<String, KeyPair>();
    
    private static KeyPair generateKeyPair(String alg, int bits,
					   SecureRandom rand)
	throws NoSuchAlgorithmException {
        KeyPair kp = cachekps ? kps.get(alg + bits) : null;
        if (kp == null) {
            KeyPairGenerator kpg = KeyPairGenerator.getInstance(alg);
            kpg.initialize(bits, rand);
            kp = kpg.generateKeyPair();
            if (cachekps)
                kps.put(alg + bits, kp);
        }
        return kp;
    }

    private static void saveKeyPair(KeyPair kp,
                                    String passwd, String fileName,
                                    String subject, String comment,
                                    boolean sshComFormat,
                                    SecureRandom rand)
	throws IOException, SSH2Exception, NoSuchAlgorithmException {

        SSH2PublicKeyFile pkif = new SSH2PublicKeyFile(kp.getPublic(),
                                                       subject, comment);

        if(!sshComFormat && (passwd == null || passwd.length() == 0)) {
            subject = null;
            comment = null;
        }

        SSH2KeyPairFile kpf = new SSH2KeyPairFile(kp, subject, comment);

        kpf.store(fileName, rand, passwd, sshComFormat);
        pkif.store(fileName + ".pub", sshComFormat);
    }

    private static void listProviders(String filter) 
    {    
        try {
            Provider p[] = Security.getProviders();
            for (int i = 0; i < p.length; i++) {
                System.out.println(p[i]);
                for (Enumeration e = p[i].keys(); e.hasMoreElements();) {
                    String alg = (String)e.nextElement();
                    if (filter == null ||
                        alg.indexOf(filter) != -1)
                        System.out.println("\t" + alg);
                }
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
    
    private static void listUsedProviders() {
        int i;

        String[] kpgs = new String[] { "RSA", "DSA", "DH", "EC" };
        for (i=0; i<kpgs.length; i++) {
            KeyPairGenerator kpg = null;
            try {
                kpg = KeyPairGenerator.getInstance(kpgs[i]);
            } catch (Throwable t) {
            }
            System.out.println("KeyPairGenerator." + kpgs[i] + ": " + ((kpg == null) ? "NONE" : kpg.getProvider()));
        }
        
        String[] kas = new String[] { "DH", "ECDH" };
        for (i=0; i<kas.length; i++) {
            KeyAgreement ka = null;
            try {
                ka = KeyAgreement.getInstance(kas[i]);
            } catch (Throwable t) {
            }
            System.out.println("KeyAgreement." + kas[i] + ": " + ((ka == null) ? "NONE" : ka.getProvider()));
        }
        
        String[] macs = new String[] { "MD5", "SHA1", "SHA256", "SHA512", "RipeMD160" };
        for (i=0; i<macs.length; i++) {
            Mac mac = null;
            try {
                mac = Mac.getInstance("Hmac" + macs[i]);
            } catch (Throwable t) {
            }
            System.out.println("Hmac." + macs[i] + ": " + ((mac == null) ? "NONE" : mac.getProvider()));
        }
        
        String[] ciphers = new String[] { "AES/CBC", "AES/CTR", 
                                          "DESede/CBC", "DESede/CTR", 
                                          "Blowfish/CBC", "Blowfish/CTR",
                                          "Twofish/CBC", "Twofish/CTR",
                                          "RC4",
                                          "CAST5/CBC",
                                          "IDEA/CBC"
        };
        for (i=0; i<ciphers.length; i++) {
            Cipher cipher = null;
            try {
                try {
                    cipher = Cipher.getInstance(ciphers[i]);
                }  catch (Throwable t) {
                }
                if (cipher == null)
                    cipher = Cipher.getInstance(ciphers[i] + "/NoPadding");
            } catch (Throwable t) {
                // t.printStackTrace();
            }
            System.out.println("Cipher." + ciphers[i] + ": " + 
			       ((cipher == null) ? "NONE" : cipher.getProvider()));
        }
    }
    
    private static Process startSSHDaemon(int port, File sshprefs) throws IOException {
        if (!DEBUG_SSHD)
            return (new ProcessBuilder("/bin/bash", "-c",
                                       "exec " + SSHD_BIN + " -4 -D -p " + port + 
                                       " -f " + sshprefs.getAbsolutePath() + " >/dev/null 2>&1")).start();
        
        ProcessBuilder pb  = new ProcessBuilder(SSHD_BIN, 
                                                "-4", "-D", "-d", "-d", "-d",
                                                "-p", ""+port, 
                                                "-f", sshprefs.getAbsolutePath());
        pb.redirectErrorStream(true);
        final Process p = pb.start();
        Thread t = new Thread(new Runnable() {
            public void run() {
                try {
                    BufferedReader br = new BufferedReader(
                        new InputStreamReader(p.getInputStream()));
                    for(;;) {
                        String line = br.readLine();
                        if (line == null) break;
                        System.out.println("sshd: " + line);
                    }
                } catch (Throwable tt) {
                }
            }
        }, "MT_Debug_Output_Reader");
        t.start();
        return p;
    }
    
    private static File generateSSHPrefs(String[] cfg) throws IOException {
        File f = File.createTempFile("sshdcfg", "");
        BufferedWriter bw = new BufferedWriter(new FileWriter(f));
        for (int i=0; i<cfg.length; i++) {
            if (DEBUG_SSHD)
                System.out.println("Using SSH prefs: " + cfg[i]);
            bw.write(cfg[i]);
            bw.newLine();
        }
        bw.close();
        return f;
    }
    

    private static void runcmd(String... args) throws IOException {
	try {
	    Runtime.getRuntime().exec(args).waitFor();
	} catch (InterruptedException ie) {}
    }

    private static boolean checkFileContents(File f, String[] what) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(f));
        int idx = 0;
        String line;
        boolean ret = false;
        for(;;) {
            line = br.readLine();
            if (line == null) {
                br.close();
                if (what.length == idx)
                    ret = true;
                break;
            }
            if (what.length == idx ||
                !what[idx].equals(line))
                break;
            idx++;
        }        
        br.close();
        return ret;
    }

    private static boolean checkFileContents(File f, String what) throws IOException {
        return checkFileContents(f, new String[] { what });
    }

    private static void delete(File... f) {
        for (int i=0; i<f.length; i++) 
            try {
                if (f[i] != null)
                    f[i].delete();
            } catch (Throwable t) {
            }
    }

    private static boolean testReadWrite(InputStream in, OutputStream out,
                                         byte[] bin, byte[] bout, int len) throws IOException {
        int i = len;
        out.write(bin, 0, len);
        Arrays.fill(bout, 0, len, (byte)0);
        while (len > 0) {
            int n = in.read(bout, i - len, len);
            if (n == -1) break;
            len -= n;
        }
        if (len > 0) {
            System.out.println("read fail");
            return false;
        }
        for (int j=0; j<i; j++)
            if (bin[j] != bout[j]) {
                System.out.println("compare fail");
                return false;
            }
        return true;
    }
    
    private static boolean runBasicSocketTests(Socket s, int maxpktsize) throws IOException {
        try {
            Random rand = new Random();
            byte[] bin  = new byte[maxpktsize];
            rand.nextBytes(bin);
            byte[] bout = new byte[maxpktsize];
            InputStream in = s.getInputStream();
            OutputStream out = s.getOutputStream();
            if (!testReadWrite(in, out, bin, bout, 1))
                return false;
            if (1025 <= maxpktsize && !testReadWrite(in, out, bin, bout, 1025))
                return false;
            if (!testReadWrite(in, out, bin, bout, bin.length))
                return false;
            long totdata = 1 + 1025 + bin.length;
            for (int i=256; i<bin.length; i+=256) {
                if (!testReadWrite(in, out, bin, bout, i))
                    return false;
                totdata += i;
            }
            for (int i=0; i<256; i++) {
                int len = 1 + rand.nextInt(bin.length);
                if (!testReadWrite(in, out, bin, bout, len))
                    return false;
                totdata += len;
            }
            return true;
        } catch (Throwable t) {
            t.printStackTrace();
        }
        return false;
    }
    

    private static boolean runThreadedSocketTest(SSH2Connection conn, int maxlisteners, int maxsockets) 
        throws IOException, InterruptedException
    {
        boolean ret = true;
        
        Thread[] t = new Thread[maxlisteners*maxsockets];
        final Hashtable<Integer,Boolean> rets = new Hashtable<Integer,Boolean>();
        int i;
        for (i=0; i<t.length; i+=maxsockets) {
            final SSH2Listener l = conn.newLocalForward("127.0.0.1", 0, "127.0.0.1", 7);
            for (int j=0; j<maxsockets; j++) {
                final int tid = i + j;
                t[tid] = new Thread(new Runnable() {
                    public void run() {
                        Socket s = null;
                        boolean ret = false;
                        try {
                            s = new Socket("127.0.0.1", l.getListenPort());
                            s.setReceiveBufferSize(RCVSIZE);
                            s.setSendBufferSize(SNDSIZE);
                            ret = runBasicSocketTests(s, MAX_PACKET_SIZE);
                        } catch (IOException ioe) {
                        }
                        try { if (s != null) s.close(); } catch (IOException ioe) {}
                        rets.put(new Integer(tid), new Boolean(ret));
                    }
                }, "MT_RW_"+tid);
            }
        }

        for (i=0; i<t.length; i++) 
            t[i].start();
        
        for (i=0; i<t.length; i++) 
            t[i].join();
        
        for (i=0; i<t.length; i++)  {
            Boolean b = rets.get(new Integer(i));
            if (b == null || !b.booleanValue()) {
                ret = false;
                break;
            }
        }
        rets.clear();

        return ret;
    }
    
    private static boolean testSimpleConnect(KeyPair hostkp, 
                                             SSH2Preferences prefs, 
                                             KeyPair pubkey,
                                             boolean savepeerprefs,
                                             int testtype) {
        Process p = null;
        File priv_hkey_file = null;
        File pub_hkey_file  = null;
        File priv_dir = null;
        File priv_key_file = null;
        File pub_key_file  = null;
        File ssh_prefs_file = null;

	try {
            if (SSH_SPAWN) {
                ArrayList<String> v = new ArrayList<String>();
                
                v.clear();
                v.add("Protocol 2");
                v.add("UsePrivilegeSeparation no");
                v.add("PrintMotd no");
                v.add("PrintLastLog no");
                v.add("X11Forwarding no");
                v.add("UsePam yes");

                if (pubkey == null) {
                    v.add("PasswordAuthentication yes");
                } else {
                    v.add("PasswordAuthentication no");
                    v.add("PubkeyAuthentication yes");
                    priv_dir = new File(System.getProperty("user.home") + "/.mttestk");
                    priv_dir.mkdir();
                    runcmd("chmod", "0700", priv_dir.getAbsolutePath());
                    priv_key_file = new File(priv_dir.getAbsolutePath() + "/k");
                    pub_key_file = new File(priv_dir.getAbsolutePath() + "/k.pub");
                    saveKeyPair(pubkey, null, priv_key_file.getAbsolutePath(), null, null, false, Crypto.getSecureRandom());
                    runcmd("chmod", "0600", priv_key_file.getAbsolutePath());
                    runcmd("chmod", "0600", pub_key_file.getAbsolutePath());
                    v.add("AuthorizedKeysFile " + pub_key_file.getAbsolutePath());
                }

                priv_hkey_file = new File("/tmp/mttesthk1");
                pub_hkey_file = new File("/tmp/mttesthk1.pub");
                saveKeyPair(hostkp, null, priv_hkey_file.getAbsolutePath(), null, null, false, Crypto.getSecureRandom());
                runcmd("chmod", "0600", priv_hkey_file.getAbsolutePath());
                runcmd("chmod", "0600", pub_hkey_file.getAbsolutePath());
                
                v.add("HostKey " + priv_hkey_file.getAbsolutePath());
            
                p = startSSHDaemon(SSH_PORT, ssh_prefs_file = generateSSHPrefs(v.toArray(new String[v.size()])));
                Thread.sleep(START_SLEEP);
            }

            NetworkConnection socket = NetworkConnection.open(SSH_HOST, SSH_PORT);
            SSH2Transport transport = new SSH2Transport(socket, prefs,
                                                        Crypto.getSecureRandomAndPad());
            if (SSH_SPAWN)
                transport.setEventHandler(new SSH2HostKeyVerifier(hostkp.getPublic()));

            SSH2SimpleClient client;
            
            if (pubkey == null) {
                client = new SSH2SimpleClient
                    (transport, getUser(), getPassword());
            } else {
                client =  new SSH2SimpleClient
                    (transport, getUser(), priv_key_file.getAbsolutePath(), "");
            }

            SSH2ConsoleRemote console =
                new SSH2ConsoleRemote(client.getConnection());

            if (savepeerprefs)
                peerPrefs = transport.getPeerPreferences();
            
            boolean ret = true;

            if (testtype == 0) {
                int exitStatus = 0;
                File outpf = File.createTempFile("sshout", "");
                NonBlockingOutput out = new NonBlockingOutput(outpf.getAbsolutePath());
                if (console.command("/usr/bin/printf abcdefghijklmnopqrstuvwxyz0123456789", null, out, out)) {
                    exitStatus = console.waitForExitStatus();
                } else {
                    System.out.println("console.command failed");
                    ret = false;
                }
                if (exitStatus != 0) {
                    System.out.println("console.command failed, wrong exitstatus=" + exitStatus);
                    ret = false;
                } else if (!checkFileContents(outpf, "abcdefghijklmnopqrstuvwxyz0123456789")) {
                    System.out.println("console.command failed, wrong file contents");
                    ret = false;
                }
                delete(outpf);
            } else if (testtype == 1) {
                // single listener, single socket
                if (!runThreadedSocketTest(client.getConnection(), 1, 1))
                    ret = false;
            } else if (testtype == 2) {
                // single listener, several sockets
                if (!runThreadedSocketTest(client.getConnection(), 1, SOCKETS_PER_LISTENER))
                    ret = false;
            } else if (testtype == 3) {
                // several listeners, several sockets
                if (!runThreadedSocketTest(client.getConnection(), MAX_LISTENERS, SOCKETS_PER_LISTENER))
                    ret = false;
            }
            
            transport.normalDisconnect("User disconnects");
            if (p != null) {
                p.destroy();
                p.waitFor();
                p = null;
            }

	    return ret;
	} catch (Throwable t) {
	    t.printStackTrace();
        } finally {
            delete(priv_hkey_file, pub_hkey_file,
                   priv_key_file, pub_key_file,
                   priv_dir, ssh_prefs_file);
            if (p != null)
                p.destroy();
	}
        return false;
    }

    
    private static String[] intersect(String[] l1, String s) {
        String[] l2 = s.split(",");
        ArrayList<String> a = new ArrayList<String>();
        for (int i=0; i<l1.length; i++)
            for (int j=0; j<l2.length; j++) {
                if (l1[i].equals(l2[j])) {
                    a.add(l1[i]);
                    break;
                }
            }
        return a.toArray(new String[a.size()]);
    }
    
    // generate a minimum of configurations that utilize all algorithms
    private static ArrayList<SSH2Preferences> generateSSH2PrefsMinimum() {
        SSH2Preferences prefs = new SSH2Preferences();
        ArrayList<SSH2Preferences> a = new ArrayList<SSH2Preferences>();
        String kexalgs = prefs.getPreference(SSH2Preferences.KEX_ALGORITHMS);
        String[] kex  = kexalgs.split(",");
        String[] hkey = prefs.getPreference(SSH2Preferences.HOST_KEY_ALG).split(",");
        String[] ciph = prefs.getPreference(SSH2Preferences.CIPHERS_C2S).split(",");
        String[] mac  = prefs.getPreference(SSH2Preferences.MACS_C2S).split(",");
        String[] comp = prefs.getPreference(SSH2Preferences.COMP_C2S).split(",");
        
        kex  = intersect(kex, peerPrefs.getPreference(SSH2Preferences.KEX_ALGORITHMS));
        hkey = intersect(hkey, peerPrefs.getPreference(SSH2Preferences.HOST_KEY_ALG));
        ciph = intersect(ciph, peerPrefs.getPreference(SSH2Preferences.CIPHERS_C2S));
        mac  = intersect(mac, peerPrefs.getPreference(SSH2Preferences.MACS_C2S));
        comp = intersect(comp, peerPrefs.getPreference(SSH2Preferences.COMP_C2S));

        int kexl  = kex.length;
        int hkeyl = hkey.length;
        int ciphl = ciph.length;
        int macl  = mac.length;
        int compl = comp.length;

        for(;;) {
            if (kexl >= 1)  kexl--;
            if (ciphl >= 1) ciphl--;
            if (macl >= 1)  macl--;
            if (compl >= 1) compl--;
            if (hkeyl >= 1) hkeyl--;

            prefs = new SSH2Preferences();
            prefs.setPreference(SSH2Preferences.KEX_ALGORITHMS, kex[kexl]);
            prefs.setPreference(SSH2Preferences.HOST_KEY_ALG, hkey[hkeyl]);
            prefs.setPreference(SSH2Preferences.CIPHERS_C2S, ciph[ciphl]);
            prefs.setPreference(SSH2Preferences.CIPHERS_S2C, ciph[ciphl]);
            prefs.setPreference(SSH2Preferences.MACS_C2S, mac[macl]);
            prefs.setPreference(SSH2Preferences.MACS_S2C, mac[macl]);
            prefs.setPreference(SSH2Preferences.COMP_C2S, comp[compl]);
            prefs.setPreference(SSH2Preferences.COMP_S2C, comp[compl]);
            a.add(prefs);
            
            if (kexl == 0 && ciphl == 0 && macl == 0 && compl == 0 && hkeyl == 0)
                break;
        }

        return a;
    }
    
    private static ArrayList<SSH2Preferences> generateSSH2Prefs() {
        SSH2Preferences prefs = new SSH2Preferences();
        ArrayList<SSH2Preferences> a = new ArrayList<SSH2Preferences>();
        String kexalgs = prefs.getPreference(SSH2Preferences.KEX_ALGORITHMS);
        String[] kex  = kexalgs.split(",");
        String[] hkey = prefs.getPreference(SSH2Preferences.HOST_KEY_ALG).split(",");
        String[] ciph = prefs.getPreference(SSH2Preferences.CIPHERS_C2S).split(",");
        String[] mac  = prefs.getPreference(SSH2Preferences.MACS_C2S).split(",");
        String[] comp = prefs.getPreference(SSH2Preferences.COMP_C2S).split(",");

        kex  = intersect(kex, peerPrefs.getPreference(SSH2Preferences.KEX_ALGORITHMS));
        hkey = intersect(hkey, peerPrefs.getPreference(SSH2Preferences.HOST_KEY_ALG));
        ciph = intersect(ciph, peerPrefs.getPreference(SSH2Preferences.CIPHERS_C2S));
        mac  = intersect(mac, peerPrefs.getPreference(SSH2Preferences.MACS_C2S));
        comp = intersect(comp, peerPrefs.getPreference(SSH2Preferences.COMP_C2S));

        int kexl  = kex.length;
        int hkeyl = hkey.length;
        int ciphl = ciph.length;
        int macl  = mac.length;
        int compl = comp.length;
        
        for (int i=0; i<kexl; i++)
            for (int ii=0; ii<hkeyl; ii++)
                for (int j=0; j<ciphl; j++)
                    for (int k=0; k<macl; k++)
                        for (int l=0; l<compl; l++) {
                            prefs = new SSH2Preferences();
                            prefs.setPreference(SSH2Preferences.KEX_ALGORITHMS, kex[i]);
                            prefs.setPreference(SSH2Preferences.HOST_KEY_ALG, hkey[ii]);
                            prefs.setPreference(SSH2Preferences.CIPHERS_C2S, ciph[j]);
                            prefs.setPreference(SSH2Preferences.CIPHERS_S2C, ciph[j]);
                            prefs.setPreference(SSH2Preferences.MACS_C2S, mac[k]);
                            prefs.setPreference(SSH2Preferences.MACS_S2C, mac[k]);
                            prefs.setPreference(SSH2Preferences.COMP_C2S, comp[l]);
                            prefs.setPreference(SSH2Preferences.COMP_S2C, comp[l]);
                            a.add(prefs);
                        }
        return a;
    }

    private final static int[][] KEY_PAIRS = new int[][] { 
        { 2, 256 },  /* ECDSA  */
        { 2, 384 },
        { 2, 521 },
        { 1, 1024 }, /* DSA */
        { 0, 768 },  /* RSA */
        { 0, 1024 },
        { 0, 1536 },
        { 0, 2048 },
        { 0, 4096 },
    };
    
    
    private static boolean testConnectivity(boolean minimum) 
    {
        String testname = minimum ? "Testing all algorithms (quick) ... " : "Testing all algorithms ... ";
        
	System.out.println("");
	System.out.println(testname);
        boolean ret = true;

        int testsidx = Crypto.hasECDSASupport() ? 0 : 3;
        for (SSH2Preferences prefs : (minimum ? generateSSH2PrefsMinimum() : generateSSH2Prefs())) {
            try {
                int[][] tests = KEY_PAIRS;
                if (SSH_SPAWN && !minimum)
                    testsidx = Crypto.hasECDSASupport() ? 0 : 3;
                
                for (int i=testsidx; i < (SSH_SPAWN ? tests.length : 1); i++) {
                    KeyPair kp = null;
                    String hkeymode;
                    String alg;
                    int bits;
                    if (SSH_SPAWN) {
                        bits = tests[i][1];
                        switch (tests[i][0]) {
                            case 0:
                                alg = "RSA";
                                hkeymode = "ssh-rsa";
                                break;
                            case 1:
                                alg = "DSA";
                                hkeymode = "ssh-dss";
                                break;
                            default:
                                alg = "EC";
                                hkeymode = "ecdsa-sha2-nistp" + bits;
                                break;
                        }
                        prefs.setPreference(SSH2Preferences.HOST_KEY_ALG, hkeymode);
                        if (tests[i][0] != 2)
                            hkeymode += "("+bits+")";
                        kp = generateKeyPair(alg, bits, Crypto.getSecureRandom());
                    } else {
                        hkeymode = prefs.getPreference(SSH2Preferences.HOST_KEY_ALG);
                    }
                    String ctype = 
                        prefs.getPreference(SSH2Preferences.KEX_ALGORITHMS) +"/"+
                        hkeymode + "/" +
                        prefs.getPreference(SSH2Preferences.CIPHERS_C2S) + "/" +
                        prefs.getPreference(SSH2Preferences.MACS_C2S) + "/" +
                        prefs.getPreference(SSH2Preferences.COMP_C2S) + " ... ";
                    System.out.print("  Testing " + ctype);
                    if (testSimpleConnect(kp, prefs, null, false, 0)) {
                        System.out.println(" OK");
                    } else {
                        System.out.println(" FAIL");
                        ret = false;
                    }
                    // if (SSH_SPAWN)
                    //     Thread.sleep(STOP_SLEEP);
                    if (minimum)
                        break;
                }
                if (SSH_SPAWN && minimum && testsidx < tests.length - 1)
                    testsidx++;
            } catch (Throwable t) {
                t.printStackTrace();
            }
        }
        
        System.out.println(testname + (ret ? "OK" : "FAIL"));
	return ret;
    }

    private static boolean testPubKeyAuth() {
        String testname = "Testing public key authentication ... ";

	System.out.println("");
	System.out.println(testname);
        boolean ret = true;

        cachekps = false;

        try {
            SSH2Preferences prefs = new SSH2Preferences();
            KeyPair hostkp = generateKeyPair("RSA", 1024, Crypto.getSecureRandom());
            for (int i=0; i<KEY_PAIRS.length; i++) {
                String alg = "RSA";
                if (KEY_PAIRS[i][0] == 1) {
                    alg = "DSA";
                } else if (KEY_PAIRS[i][0] == 2) {
                    if (!Crypto.hasECDSASupport()) continue;
                    alg = "EC";
                }
                System.out.print("  Testing " + alg + "/" + KEY_PAIRS[i][1] + " key...");
                KeyPair kp = generateKeyPair(alg, KEY_PAIRS[i][1], Crypto.getSecureRandom());
                if (!testSimpleConnect(hostkp, prefs, kp , false, 0)) {
                    ret = false;
                    System.out.println(" FAIL");
                } else {
                    System.out.println(" OK");
                }
            }            
        } catch (Throwable t) {
            t.printStackTrace();
        }

        cachekps = true;

        System.out.println(testname + (ret ? "OK" : "FAIL"));
	return ret;
        
    }

    private static boolean testPortForwarding() {
        String testname = "Testing port forwarding ... ";

	System.out.println("");
	System.out.println(testname);
        boolean ret = true;

        cachekps = false;

        try {
            SSH2Preferences prefs = new SSH2Preferences();
            prefs.setPreference(SSH2Preferences.CIPHERS_C2S, "arcfour");
            prefs.setPreference(SSH2Preferences.CIPHERS_S2C, "arcfour");
            prefs.setPreference(SSH2Preferences.MACS_C2S, "hmac-md5");
            prefs.setPreference(SSH2Preferences.MACS_S2C, "hmac-md5");
            prefs.setPreference(SSH2Preferences.COMP_C2S, "none");
            prefs.setPreference(SSH2Preferences.COMP_S2C, "none");
            
            KeyPair kp = generateKeyPair("RSA", 768, Crypto.getSecureRandom());

            System.out.print("  Single listener / single socket ... ");
            if (!testSimpleConnect(kp, prefs, null, false, 1)) {
                ret = false;
                System.out.println(" FAIL");
            } else {
                System.out.println(" OK");
            }

            System.out.print("  Single listener / multiple sockets ... ");
            if (!testSimpleConnect(kp, prefs, null, false, 2)) {
                ret = false;
                System.out.println(" FAIL");
            } else {
                System.out.println(" OK");
            }

            System.out.print("  Multiple listeners / multiple sockets ... ");
            if (!testSimpleConnect(kp, prefs, null, false, 3)) {
                ret = false;
                System.out.println(" FAIL");
            } else {
                System.out.println(" OK");
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }

        cachekps = true;

        System.out.println(testname + (ret ? "OK" : "FAIL"));
	return ret;
        
    }
    
    private static String getFirstLineFrom(String cmd) {
        String line = "";
        try {
            Process p = Runtime.getRuntime().exec(cmd);
            BufferedReader br = new BufferedReader(new InputStreamReader(p.getInputStream()));
            line = br.readLine();
	    p.waitFor();
        } catch (Throwable t) {
        }
        return line;
    }

    private static boolean compare(PrivateKey k1, PrivateKey k2) {
        boolean ret = true;
        try {
            if (k1 instanceof ECPrivateKey) {
                ECPrivateKey ek1 = (ECPrivateKey)k1;
                ECPrivateKey ek2 = (ECPrivateKey)k2;
                return ek1.getS().equals(ek2.getS());
            } else if (k1 instanceof RSAPrivateKey) {
                RSAPrivateKey rk1 = (RSAPrivateKey)k1;
                RSAPrivateKey rk2 = (RSAPrivateKey)k2;
                return rk1.getPrivateExponent().equals(rk2.getPrivateExponent());
            } else if (k1 instanceof DSAPrivateKey) {
                DSAPrivateKey dk1 = (DSAPrivateKey)k1;
                DSAPrivateKey dk2 = (DSAPrivateKey)k2;
                return dk1.getX().equals(dk2.getX());
            }
        } catch (Throwable t) {
        }
        return ret;
    }
    
    private static boolean testKeyPairGeneration() 
    {
        boolean ret = true;

        System.out.println("");
	System.out.println("Testing keypair generation ...");

        try {
            String[] keys = new String[] { 
                "ecdsa", "256", "EC",
                "ecdsa", "384", "EC",
                "ecdsa", "521", "EC",
                "ssh-dss", "1024", "DSA",
                "ssh-rsa", "768",  "RSA",
                "ssh-rsa", "1024", "RSA",
                "ssh-rsa", "1536", "RSA",
		"ssh-rsa", "2048", "RSA",
		"ssh-rsa", "4096", "RSA",
            };
            int KEYGEN_ITERS = 3;
            String KEYFILE_PUB = "/tmp/keytest.pub";
            String KEYFILE_PRV = "/tmp/keytest";
            
            cachekps = false;
            for (int i=0; i<keys.length/3; i++) {
                String message = "";
                String type = keys[i*3+2];
                if (type.equals("EC") && !Crypto.hasECDHSupport())
                    continue;
                int bits = Integer.parseInt(keys[i*3+1]);
                System.out.print("  Generating " + keys[i*3] + "/" + bits + " keypairs ... ");
                KeyPair kp = null;
                try {
                    for (int ii=0; ii<KEYGEN_ITERS; ii++) {
                        delete(new File(KEYFILE_PRV), new File(KEYFILE_PUB));
			kp = null;
			if (ii % 3 == 0) {
			    kp = generateKeyPair(type, bits, Crypto.getSecureRandom());
			} else {
			    String pass = (ii%3==1) ? "SomePassword" : "";
			    runcmd("ssh-keygen", "-q", "-t", keys[i*3], "-b", ""+bits, 
                                   "-N", pass, "-f", KEYFILE_PRV);
			    SSH2PublicKeyFile pkf = new SSH2PublicKeyFile(null, null, null);
			    pkf.load(KEYFILE_PUB);
			    PublicKey pk = pkf.getPublicKey();
			    if (pk != null) {
				SSH2KeyPairFile kpf = new SSH2KeyPairFile(null, null, null);
				kpf.load(KEYFILE_PRV, pass);
				kp = kpf.getKeyPair();
			    }
			}
			
                        PublicKey pk1 = kp.getPublic();
                        SSH2PublicKeyFile pkf1 = new SSH2PublicKeyFile(pk1, null, null);
                        pkf1.store(KEYFILE_PUB);
                        SSH2PublicKeyFile pkf2 = new SSH2PublicKeyFile(null, null, null);
                        pkf2.load(KEYFILE_PUB);
                        PublicKey pk2 = pkf2.getPublicKey();
                        String bubble = SSH2KeyFingerprint.bubbleBabble(pk1);
                        String md5 = SSH2KeyFingerprint.md5Hex(pk1);
                        if (!md5.equals(SSH2KeyFingerprint.md5Hex(pk2)) ||
                            !bubble.equals(SSH2KeyFingerprint.bubbleBabble(pk2))) {
                            kp = null;
                            message = "fingerprint mismatch";
                            break;
                        }
			String obubble = getFirstLineFrom
			    ("ssh-keygen -B -f " + KEYFILE_PUB).split(" ")[1];
                        String omd5 = getFirstLineFrom
			    ("ssh-keygen -l -f " + KEYFILE_PUB).split(" ")[1];
                        if (!bubble.equals(obubble) || !md5.equals(omd5)) {
                            kp = null;
                            message = "fingerprint (vs openssh) mismatch";
                            break;
                        }
                        
                        SSH2KeyPairFile kpf1 = new SSH2KeyPairFile(kp, null, null);
                        kpf1.store(KEYFILE_PRV, Crypto.getSecureRandom(), null);

                        SSH2KeyPairFile kpf2 = new SSH2KeyPairFile(null, null, null);
                        kpf2.load(KEYFILE_PRV, null);
                        
                        KeyPair kp2 = kpf2.getKeyPair();
                        pk2 = kp2.getPublic();
                        if (!md5.equals(SSH2KeyFingerprint.md5Hex(pk2)) ||
                            !bubble.equals(SSH2KeyFingerprint.bubbleBabble(pk2))) {
                            kp = null;
                            message = "fingerprint mismatch";
                            break;
                        }

                        if (!compare(kp.getPrivate(), kp2.getPrivate())) {
                            kp = null;
                            message = "private key mismatch";
                            break;
                        }

                        kpf1 = new SSH2KeyPairFile(kp, null, null);
                        kpf1.store(KEYFILE_PRV, Crypto.getSecureRandom(), "P$ssW0rd");
                        
                        kpf2 = new SSH2KeyPairFile(null, null, null);
                        kpf2.load(KEYFILE_PRV, "P$ssW0rd");
                        
                        kp2 = kpf2.getKeyPair();
                        pk2 = kp2.getPublic();
                        if (!md5.equals(SSH2KeyFingerprint.md5Hex(pk2)) ||
                            !bubble.equals(SSH2KeyFingerprint.bubbleBabble(pk2))) {
                            kp = null;
                            message = "fingerprint mismatch";
                            break;
                        }

                        if (!compare(kp.getPrivate(), kp2.getPrivate())) {
                            kp = null;
                            message = "private key mismatch";
                            break;
                        }
                    }
                } catch (Throwable t) {
		    message = t.getMessage();
                }
                if (kp == null) {
                    ret = false;
                    System.out.println("FAIL " + message);
                    continue;
                }
                System.out.println("OK");
	    }            
            delete(new File(KEYFILE_PRV), new File(KEYFILE_PUB));
        } catch (Throwable t) {
            t.printStackTrace();
        }
	System.out.println("Testing keypair generation ... " + (ret?"OK":"FAIL"));
        cachekps = true;
        return ret;
    }
    

    private static String user, passwd;
    
    private static String getUser() {
        if (user == null) 
            user = System.console().readLine("User: ");
        if (passwd == null) 
            passwd = new String(System.console().readPassword("Password: "));
        return user;
    }

    private static String getPassword() {
        return passwd;
    }


    private static SSH2Preferences peerPrefs;
    
    private static boolean checkPeerSupport() {
        try {
            System.out.println("Checking peer crypto support...");
            if (!SSH_SPAWN) {
                peerPrefs = Util.getPeerPrefs(SSH_HOST, SSH_PORT, Crypto.getSecureRandomAndPad());
                if (peerPrefs == null) {
                    System.out.println("Checking peer crypto support... FAILED");
                    return false;
                }
                System.out.println("Checking peer crypto support... OK");
                return true;
            }
            
            SSH2Preferences prefs = new SSH2Preferences();
            prefs.setPreference(SSH2Preferences.KEX_ALGORITHMS,
                                SSH2Preferences.FIPS_KEX_ALGORITHMS);
            KeyPair kp = SSH_SPAWN ? generateKeyPair("RSA", 1024, Crypto.getSecureRandom()) : null;
            if (testSimpleConnect(kp, prefs, null, true, 0)) {
                System.out.println("Checking peer crypto support... OK");
                //Thread.sleep(STOP_SLEEP);
                return true;
            }
            System.out.println("Checking peer crypto support... FAILED");
            //Thread.sleep(STOP_SLEEP);
        } catch (Throwable t) {
            t.printStackTrace();
        }
        return false;
    }

    private static String combined(SSH2Preferences mine, SSH2Preferences peer, String what) {
        String[] l = intersect(mine.getPreference(what).split(","),
                               peer.getPreference(what));
        String res = "";
        for (int i=0; i<l.length; i++) {
            if (!res.equals("")) res+=",";
            res+=l[i];
        }
        return res;
    }

    private static void listCombinedSupport() {
        SSH2Preferences prefs = new SSH2Preferences();
        System.out.println(" our kex algs : " + prefs.getPreference(SSH2Preferences.KEX_ALGORITHMS));
        System.out.println("peer kex algs : " + peerPrefs.getPreference(SSH2Preferences.KEX_ALGORITHMS));
        System.out.println("     combined : " + combined(prefs, peerPrefs, SSH2Preferences.KEX_ALGORITHMS));
        System.out.println(" our key algs : " + prefs.getPreference(SSH2Preferences.HOST_KEY_ALG));
        System.out.println("peer key algs : " + peerPrefs.getPreference(SSH2Preferences.HOST_KEY_ALG));
        System.out.println("     combined : " + combined(prefs, peerPrefs, SSH2Preferences.HOST_KEY_ALG));
        System.out.println(" our ciph algs: " + prefs.getPreference(SSH2Preferences.CIPHERS_C2S));
        System.out.println("peer ciph algs: " + peerPrefs.getPreference(SSH2Preferences.CIPHERS_C2S));
        System.out.println("     combined : " + combined(prefs, peerPrefs, SSH2Preferences.CIPHERS_C2S));
        System.out.println(" our mac algs : " + prefs.getPreference(SSH2Preferences.MACS_C2S));
        System.out.println("peer mac algs : " + peerPrefs.getPreference(SSH2Preferences.MACS_C2S));
        System.out.println("     combined : " + combined(prefs, peerPrefs, SSH2Preferences.MACS_C2S));
        System.out.println(" our comp algs: " + prefs.getPreference(SSH2Preferences.COMP_C2S));
        System.out.println("peer comp algs: " + peerPrefs.getPreference(SSH2Preferences.COMP_C2S));
        System.out.println("     combined : " + combined(prefs, peerPrefs, SSH2Preferences.COMP_C2S));
    }
    
    private final static String PROVIDER_IBM = "com.ibm.crypto.provider.IBMJCE";
    
    private static void usage() {
        System.out.println("Usage: ... [-d] [-h <host>] [-p <port] [-u <user>] [-P <passwd>]");
        System.exit(-1);
    }

    public static void main(String[] args) {

        int argn = 0;
        while (argn < args.length) {
            if (args[argn].equals("-d")) {
                DEBUG_SSHD = true;
                argn++;
            } else if (argn < args.length - 1 && args[argn].equals("-h")) {
                SSH_HOST = args[++argn];
                SSH_SPAWN = false;
                argn++;
            } else if (argn < args.length - 1 && args[argn].equals("-p")) {
                SSH_PORT = Integer.parseInt(args[++argn]);
                SSH_SPAWN = false;
                argn++;
            } else if (argn < args.length - 1 && args[argn].equals("-u")) {
                user = args[++argn];
                argn++;
            } else if (argn < args.length - 1 && args[argn].equals("-P")) {
                passwd = args[++argn];
                argn++;
            } else
                usage();
        }        

        System.out.println("Initializing....");

        try {
            Security.insertProviderAt((Provider)Class.forName(PROVIDER_IBM).newInstance(), 1);
            System.out.println("Loaded JCE provider: " + PROVIDER_IBM);
        } catch (Throwable t) {
        }

        // check what our crypto engine support
        checkCryptoSupport();

        // check what our SSH server support
        if (SSH_SPAWN) getUser();        
        System.out.println("");
        checkPeerSupport();
        System.out.println("");
        listCombinedSupport();
        System.out.println("");
        
        // listUsedProviders();
        
        // listProviders(null);

        boolean allok = true;

        /////// Test keypair generation/fingerprinting
        if (!SSH_SPAWN) getUser();
        if (!testKeyPairGeneration()) allok = false;

        /////// Test public key authentication
        if (SSH_SPAWN)
            if (!testPubKeyAuth()) allok = false;

        /////// Test port forwarding
        if (!testPortForwarding()) allok = false;
        
        /////// Test all possible/supported combinations of kex / host key / cipher / mac / compression
        if (!testConnectivity(true)) allok = false;
        if (!testConnectivity(false)) allok = false;

        

        /////// Test SCP
        // XXX:


        /////// Test SFTP
        // XXX:
        

        System.out.println("");
        if (allok) {
            System.out.println("All tests OK");
        } else {
            System.out.println("Some tests FAILED");
        }
    }
}
