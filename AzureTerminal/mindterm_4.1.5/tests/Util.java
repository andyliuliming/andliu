package tests;

import com.mindbright.nio.NetworkConnection;

import com.mindbright.ssh2.SSH2Preferences;
import com.mindbright.ssh2.SSH2Transport;
import com.mindbright.ssh2.SSH2TransportEventAdapter;

import com.mindbright.util.SecureRandomAndPad;

public class Util {

    public static SSH2Preferences getPeerPrefs(String host, int port, SecureRandomAndPad srandpad) {
        SSH2Preferences peerPrefs = null;
        try {
            NetworkConnection socket = NetworkConnection.open(host, port);
            final SSH2Preferences myPrefs = new SSH2Preferences();
            myPrefs.setPreference(SSH2Preferences.KEX_ALGORITHMS,
                                  SSH2Preferences.FIPS_KEX_ALGORITHMS);
            SSH2Transport transport = new SSH2Transport
                (socket, 
                 myPrefs, 
                 new SSH2TransportEventAdapter() {
                     public void kexAgreed(SSH2Transport tp,
                                           SSH2Preferences oPrefs, 
                                           SSH2Preferences pPrefs) {
                         synchronized(myPrefs) {
                             myPrefs.notify();
                         }
                     }
                 },
                 srandpad);
            transport.boot();
            synchronized(myPrefs) {
                myPrefs.wait(5000);
            }
            peerPrefs = transport.getPeerPreferences();
            transport.normalDisconnect("");
            socket.close();
        } catch (Throwable t) {
        }
        return peerPrefs;
    }
    
}
