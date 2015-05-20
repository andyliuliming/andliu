package ostc.sh.webconsole.keypair;

import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;

public class KeyDialogWindowLisener implements WindowListener {
	KeyPairDialog keyPairDialog;

	public KeyDialogWindowLisener(KeyPairDialog keyPairDialog) {
		this.keyPairDialog = keyPairDialog;
	}

	@Override
	public void windowOpened(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowClosing(WindowEvent e) {
		// TODO Auto-generated method stub
		char[] passphrase = keyPairDialog.getPassphrase();
		byte[] passphraseByteArray = new String(passphrase).getBytes();
		KeyGenerator generator = new KeyGenerator();
		generator.Generator(keyPairDialog.getPrivateKeyFile(),
				keyPairDialog.getPublicKeyFile(), passphraseByteArray);
	}

	@Override
	public void windowClosed(WindowEvent e) {
		// TODO Auto-generated method stub
	}

	@Override
	public void windowIconified(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowDeiconified(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowActivated(WindowEvent e) {
		// TODO Auto-generated method stub

	}

	@Override
	public void windowDeactivated(WindowEvent e) {
		// TODO Auto-generated method stub

	}
}
