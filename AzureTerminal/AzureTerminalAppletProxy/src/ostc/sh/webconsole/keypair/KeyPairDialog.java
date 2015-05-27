package ostc.sh.webconsole.keypair;

import javax.swing.JDialog;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import javax.swing.border.CompoundBorder;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;

import ostc.sh.webconsole.config.Palette;
import ostc.sh.webconsole.locresource.OTermResource;

import java.awt.Color;
import java.awt.FileDialog;
import java.awt.Frame;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.awt.Font;

public class KeyPairDialog extends JDialog {

	private String privateKeyFile;
	private String publicKeyFile;
	private char[] passphrase;
	private static final long serialVersionUID = 1L;
	private JPasswordField passPhraseField;
	private JTextField privateKeyTextField;
	private JTextField publicKeyTextField;

	public KeyPairDialog() {
		setTitle(OTermResource.Instance().GetString("KeyPairDialogTitle"));
		setBackground(Color.WHITE);
		setFont(new Font("Segoe UI", Font.PLAIN, 12));
		this.setOpacity(1);
		addWindowListener(new WindowAdapter() {
			@Override
			public void windowClosing(WindowEvent e) {
				passphrase = passPhraseField.getPassword();
			}
		});
		getContentPane().setLayout(null);

		JButton browseButton = new JButton(OTermResource.Instance().GetString(
				"Browse"));
		browseButton.setForeground(Palette.ButtonSelectedForColor);
		browseButton.setBackground(Palette.ButtonSelectedBackground);
		browseButton.setFocusPainted(false);
		browseButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Frame frame = null;
				FileDialog fd = new java.awt.FileDialog(frame, OTermResource
						.Instance().GetString("GenerateRSAKeyPair"),
						(int) FileDialog.SAVE);
				fd.setVisible(true);
				Path filePath = Paths.get(fd.getDirectory(), fd.getFile());

				privateKeyFile = filePath.toString();
				publicKeyFile = filePath.toString() + ".pub";

				publicKeyTextField.setText(publicKeyFile);
				privateKeyTextField.setText(privateKeyFile);
			}
		});

		browseButton.setBounds(288, 150, 122, 23);
		getContentPane().add(browseButton);

		JLabel passPhraseLabel = new JLabel(OTermResource.Instance().GetString(
				"PassphraseLabel"));
		passPhraseLabel.setFont(new Font("Segoe UI", Font.PLAIN, 12));
		passPhraseLabel.setBounds(22, 116, 71, 23);
		getContentPane().add(passPhraseLabel);

		passPhraseField = new JPasswordField();
		passPhraseField.setFont(new Font("Segoe UI", Font.PLAIN, 12));
		passPhraseField.setBorder(new CompoundBorder(new LineBorder(new Color(
				192, 192, 192)), new EmptyBorder(3, 8, 4, 8)));
		passPhraseField.setBounds(154, 116, 256, 23);
		getContentPane().add(passPhraseField);

		JLabel privateKeyLabel = new JLabel(OTermResource.Instance().GetString(
				"PrivateKeyLocationLabel"));
		privateKeyLabel.setFont(new Font("Segoe UI", Font.PLAIN, 12));
		privateKeyLabel.setBounds(22, 24, 122, 35);
		getContentPane().add(privateKeyLabel);

		JLabel publicKeyLabel = new JLabel(OTermResource.Instance().GetString(
				"PublicKeyLocationLabel"));
		publicKeyLabel.setFont(new Font("Segoe UI", Font.PLAIN, 12));
		publicKeyLabel.setBounds(22, 70, 107, 35);
		getContentPane().add(publicKeyLabel);

		privateKeyTextField = new JTextField();
		privateKeyTextField.setFont(new Font("Segoe UI", Font.PLAIN, 12));
		privateKeyTextField.setBorder(new CompoundBorder(new LineBorder(
				new Color(192, 192, 192)), new EmptyBorder(3, 8, 4, 8)));
		privateKeyTextField.setBounds(154, 31, 256, 20);
		getContentPane().add(privateKeyTextField);
		privateKeyTextField.setColumns(10);

		publicKeyTextField = new JTextField();
		publicKeyTextField.setFont(new Font("Segoe UI", Font.PLAIN, 12));
		publicKeyTextField.setBorder(new CompoundBorder(new LineBorder(
				new Color(192, 192, 192)), new EmptyBorder(3, 8, 4, 8)));
		publicKeyTextField.setBounds(153, 77, 256, 20);
		getContentPane().add(publicKeyTextField);
		publicKeyTextField.setColumns(10);
	}

	public String getPublicKeyFile() {
		return publicKeyFile;
	}

	public String getPrivateKeyFile() {
		return privateKeyFile;
	}

	public char[] getPassphrase() {
		return passphrase;
	}
}
