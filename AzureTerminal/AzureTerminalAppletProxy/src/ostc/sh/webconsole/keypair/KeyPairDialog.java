package ostc.sh.webconsole.keypair;

import java.awt.Color;
import java.awt.FileDialog;
import java.awt.Font;
import java.awt.Frame;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.swing.JButton;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import javax.swing.border.CompoundBorder;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;

import ostc.sh.webconsole.config.Palette;
import ostc.sh.webconsole.locresource.OTermResource;
import ostc.sh.webconsole.util.ClipBoardUtil;

import com.jcraft.jsch.KeyPair;

public class KeyPairDialog extends JDialog {

	private static final long serialVersionUID = 1L;
	private JPasswordField passPhraseField;
	private JTextField privateKeyTextField;
	private JTextField publicKeyTextField;
	private JLabel tipsLabel;

	public KeyPairDialog() {
		setTitle(OTermResource.Instance().GetString("KeyPairDialogTitle"));
		setBackground(Color.WHITE);
		setFont(new Font("Segoe UI", Font.PLAIN, 12));
		this.setOpacity(1);

		getContentPane().setLayout(null);

		JButton browseButton = new JButton("...");
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

				String privateKeyFile = filePath.toString();
				String publicKeyFile = filePath.toString() + ".pub";

				publicKeyTextField.setText(publicKeyFile);
				privateKeyTextField.setText(privateKeyFile);
			}
		});

		browseButton.setBounds(420, 31, 37, 23);
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
		privateKeyTextField.setBounds(154, 31, 256, 23);
		getContentPane().add(privateKeyTextField);
		privateKeyTextField.setColumns(10);

		publicKeyTextField = new JTextField();
		publicKeyTextField.setFont(new Font("Segoe UI", Font.PLAIN, 12));
		publicKeyTextField.setBorder(new CompoundBorder(new LineBorder(
				new Color(192, 192, 192)), new EmptyBorder(3, 8, 4, 8)));
		publicKeyTextField.setBounds(153, 74, 256, 23);
		getContentPane().add(publicKeyTextField);
		publicKeyTextField.setColumns(10);
		
		JButton generateButton = new JButton(OTermResource.Instance().GetString("Generate"));
		generateButton.setForeground(Palette.ButtonSelectedForColor);
		generateButton.setBackground(Palette.ButtonSelectedBackground);
		generateButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				char[] passphrase = passPhraseField.getPassword();
				byte[] passphraseByteArray = new String(passphrase).getBytes();
				KeyGenerator generator = new KeyGenerator();
				KeyPair keyPairGenerated = generator.Generator(privateKeyTextField.getText(),
						publicKeyTextField.getText(), passphraseByteArray);				
				OutputStream output = new OutputStream()
				{
				    private StringBuilder string = new StringBuilder();
				    @Override
				    public void write(int b) throws IOException {
				        this.string.append((char) b );
				    }

				    public String toString(){
				        return this.string.toString();
				    }
				};
				keyPairGenerated.writePublicKey(output, "");
				
				String publicKey = new String(output.toString());
				ClipBoardUtil.setClipboardContents(publicKey);
				tipsLabel.setText(OTermResource.Instance().GetString("PublicKeyCopied"));
			}
		});
		generateButton.setBounds(281, 175, 89, 23);
		getContentPane().add(generateButton);
		
		JButton closeButton = new JButton(OTermResource.Instance().GetString("Close"));
		closeButton.setForeground(Palette.ButtonSelectedForColor);
		closeButton.setBackground(Palette.ButtonSelectedBackground);
		closeButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Close();
			}
		});
		closeButton.setBounds(380, 175, 89, 23);
		getContentPane().add(closeButton);
		
		tipsLabel = new JLabel("");
		tipsLabel.setBounds(154, 150, 256, 23);
		getContentPane().add(tipsLabel);
	}
	private void Close(){
		this.dispose();
	}
}
