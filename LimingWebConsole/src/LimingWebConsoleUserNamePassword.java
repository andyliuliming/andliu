import java.applet.Applet;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintStream;

import javax.swing.JButton;
import javax.swing.JOptionPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.JTextPane;

import ostc.sh.webconsole.MyUserInfo;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.UserInfo;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

public class LimingWebConsoleUserNamePassword extends Applet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JTextField textBox;
	private JTextArea textArea;
	private JButton goButton;
	protected BufferedReader bufferedReader;

	public void InitizlizeConnection() throws JSchException {

		JSch jsch = new JSch();

		// jsch.setKnownHosts("/home/foo/.ssh/known_hosts");

		String host = null;
		host = JOptionPane.showInputDialog("Enter username@hostname",
				 "liming@localhost");

		String user = host.substring(0, host.indexOf('@'));
		host = host.substring(host.indexOf('@') + 1);
		
		/*String user = "andy";
		host = "10.156.57.169";*/

		Session session = jsch.getSession(user, host, 22);

		String passwd = JOptionPane.showInputDialog("Enter password");
		session.setPassword(passwd);

		UserInfo ui = new MyUserInfo() {
			public void showMessage(String message) {
				// JOptionPane.showMessageDialog(null, message);
			}

			public boolean promptYesNo(String message) {
				Object[] options = { "yes", "no" };
				int foo = JOptionPane.showOptionDialog(null, message,
						"Warning", JOptionPane.DEFAULT_OPTION,
						JOptionPane.WARNING_MESSAGE, null, options, options[0]);
				return foo == 0;
			}
		};

		session.setUserInfo(ui);

		session.connect(3000); // making a connection with timeout.

		Channel channel = session.openChannel("shell");

		channel.setInputStream(inputStream);

		channel.setOutputStream(outputStream);

		channel.connect(3 * 1000);
	}

	private ConsoleInputStream inputStream;
	private ConsoleOutputStream outputStream;

	public LimingWebConsoleUserNamePassword() throws IOException, JSchException {
		setLayout(null);
		this.setSize(1000, 600);
		textArea = new JTextArea();
		textArea.setBounds(10, 0, 825, 223);
		add(textArea);

		textBox = new JTextField();
		textBox.addKeyListener(new KeyAdapter() {
			@Override
			public void keyReleased(KeyEvent e) {
				if (e.getKeyCode() == e.VK_ENTER) {
					inputStream.setInput(textBox.getText());
				}
			}
		});
		
		textBox.setBounds(10, 395, 715, 20);
		add(textBox);

		goButton = new JButton("Go");
		goButton.setBounds(735, 394, 89, 23);
		add(goButton);

		inputStream = new ConsoleInputStream(null);
		outputStream = new ConsoleOutputStream(textArea);
		
		InitizlizeConnection();
	}

	public void init() {
	}
}
