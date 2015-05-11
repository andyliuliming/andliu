package ostc.sh.webconsole;

import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.io.File;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import javax.swing.SwingConstants;

import ostc.sh.webconsole.config.Palette;
import ostc.sh.webconsole.controllers.AutoScaleImage;
import ostc.sh.webconsole.controllers.OTextField;
import ostc.sh.webconsole.error.NetworkException;
import ostc.sh.webconsole.error.NetworkIssueNotifier;
import ostc.sh.webconsole.interfaces.IConnectionCallback;
import ostc.sh.webconsole.jsinteract.ZoomChangeable;
import ostc.sh.webconsole.locresource.OTermResource;
import ostc.sh.webconsole.ssh.IdentityInfo;
import ostc.sh.webconsole.ssh.WebConsoleConnection;
import javax.swing.border.CompoundBorder;
import javax.swing.border.LineBorder;
import javax.swing.border.EmptyBorder;

public class SignInPanel extends JPanel implements ZoomChangeable{

	private static final long serialVersionUID = 1L;
	private OTextField hostNameField = null;
	private OTextField userNameField = null;
	private JLabel passwordLabel = null;
	private IdentityInfo identityInfo = null;
	private IConnectionCallback callback = null;
	private WebConsoleConnection connection = null;
	private JPasswordField passwordField = null;
	private JButton passwordToggleButton = null;
	private JButton privateKeyButton = null;
	private JButton connectButton = null;
	private JButton browsePrivateKeyButton = null;
	private JPanel signInInnerPanel = null;
	private JLabel lblMakeYourConnection = null;
	private JLabel lblNewLabel = null;
	private JLabel hostNameLabel = null;
	private JLabel userNameLabel = null;
	private JLabel authenticationTypeLabel = null;
	private JPanel realPanel = null;
	private JPanel decorationPanel = null;
	private boolean userKeyToAuthorize = false;
	private JTextField privateKeyLocation = null;
	private JLabel lblPrivatekey = null;
	private AutoScaleImage decorationImage;
	
	private void SetInitialValue() {
		if (this.identityInfo != null) {
			if (this.identityInfo.HostName != null
					&& this.identityInfo.HostName != "") {
				this.hostNameField.setText(this.identityInfo.HostName);
			}

			if (this.identityInfo.UserName != null
					&& this.identityInfo.HostName != "") {
				this.userNameField.setText(this.identityInfo.UserName);
			}
			
			if (this.identityInfo.Password != null
					&& this.identityInfo.Password != "") {
				this.passwordField.setText(this.identityInfo.Password);
			}
		}
	}

	public void SetIdenityInfo(IdentityInfo info) {
		this.identityInfo = info;
		SetInitialValue();
	}
	
	private void SignIn(){
		identityInfo.HostName = hostNameField.getText();
		identityInfo.UserName = userNameField.getText();
		identityInfo.Password = new String(passwordField.getPassword());
		if(userKeyToAuthorize)
		{
			identityInfo.KeyPath = this.privateKeyLocation.getText();
		}
		try {
			this.connection.Connect();
			callback.SignedIn();
		} catch (NetworkException e) {			
			e.printStackTrace();
			NetworkIssueNotifier.Instance().NotifyAll();
		}
	}

	private void SetPasswordSelected(){
		passwordLabel.setText(OTermResource.Instance().GetString("Password"));
		passwordToggleButton.setForeground(Palette.ButtonSelectedForColor);
		passwordToggleButton.setBackground(Palette.ButtonSelectedBackground);
		privateKeyButton.setForeground(Palette.MiddleDarkColor);
		privateKeyButton.setBackground(Palette.ButtonNormalBackground);
		browsePrivateKeyButton.setVisible(false);
		passwordToggleButton.setFocusPainted(false);
		privateKeyLocation.setVisible(false);
		lblPrivatekey.setVisible(false);
		userKeyToAuthorize = false;
	}
	
	private void SetPrivateKeySelected(){
		passwordLabel.setText(OTermResource.Instance().GetString("PrivateKey"));
		passwordToggleButton.setForeground(Palette.MiddleDarkColor);
		passwordToggleButton.setBackground(Palette.ButtonNormalBackground);
		privateKeyButton.setForeground(Palette.ButtonSelectedForColor);
		privateKeyButton.setBackground(Palette.ButtonSelectedBackground);
		browsePrivateKeyButton.setVisible(true);
		privateKeyLocation.setVisible(true);
		lblPrivatekey.setVisible(true);
		userKeyToAuthorize = true;
	}
	
	private void RegisterEvents(){
		passwordToggleButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {				
				SetPasswordSelected();				
			}
		});
		privateKeyButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				SetPrivateKeySelected();
			}
		});
		

		browsePrivateKeyButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				JFileChooser saveFile = new JFileChooser();
			    if (saveFile.showOpenDialog(null) == JFileChooser.APPROVE_OPTION ){
			        File xyz = saveFile.getSelectedFile();
			        privateKeyLocation.setText(xyz.getAbsolutePath());
			    }
			}
		});
		
		connectButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				SignIn();
			}
		});
		passwordField.addKeyListener(new KeyAdapter() {
			@Override
			public void keyPressed(KeyEvent e) {
				if(e.getKeyCode() == KeyEvent.VK_ENTER){
					SignIn();
				}
			}
		});
	}
	
	/**
	 * Create the panel.
	 */
	public SignInPanel(final IConnectionCallback callback, WebConsoleConnection c) {
		this.callback = callback;
		this.connection = c;
		GridBagLayout gridBagLayout = new GridBagLayout();
		gridBagLayout.columnWeights = new double[] {0.4, 1 };
		gridBagLayout.rowWeights = new double[] { 1.0 };
		setLayout(gridBagLayout);

		realPanel = new JPanel();
		realPanel.setBackground(Color.WHITE);
		GridBagConstraints gbc_panel3 = new GridBagConstraints();
		gbc_panel3.fill = GridBagConstraints.BOTH;
		gbc_panel3.gridx = 0;
		gbc_panel3.gridy = 0;
		add(realPanel, gbc_panel3);
		
		GridBagLayout gbl_realPanel = new GridBagLayout();
		gbl_realPanel.rowHeights = new int[] {100};
		gbl_realPanel.columnWeights = new double[] { 1.0 };
		gbl_realPanel.rowWeights = new double[] { 0.0, 1.0 };
		realPanel.setLayout(gbl_realPanel);
		
		JPanel headerPanel = new JPanel();
		headerPanel.setBackground(Color.BLACK);
		GridBagConstraints gbc_headerPanel = new GridBagConstraints();
		gbc_headerPanel.fill = GridBagConstraints.BOTH;
		
		gbc_headerPanel.gridx = 0;
		gbc_headerPanel.gridy = 0;
		realPanel.add(headerPanel, gbc_headerPanel);
		GridBagLayout gbl_headerPanel = new GridBagLayout();
		gbl_headerPanel.columnWidths = new int[] {0};
		gbl_headerPanel.rowHeights = new int[] {0};
		gbl_headerPanel.columnWeights = new double[]{1.0};
		gbl_headerPanel.rowWeights = new double[]{1.0};
		headerPanel.setLayout(gbl_headerPanel);
		
		lblNewLabel = new JLabel(OTermResource.Instance().GetString("LoginHeader"));
		lblNewLabel.setForeground(Color.WHITE);
		GridBagConstraints gbc_lblNewLabel = new GridBagConstraints();
		gbc_lblNewLabel.insets = new Insets(10, 10, 0, 0);
		gbc_lblNewLabel.anchor = GridBagConstraints.NORTHWEST;
		gbc_lblNewLabel.gridx = 0;
		gbc_lblNewLabel.gridy = 0;
		headerPanel.add(lblNewLabel, gbc_lblNewLabel);
		
		signInInnerPanel = new JPanel();
		signInInnerPanel.setBackground(Color.WHITE);
		GridBagConstraints gbc_signInInnerPanel = new GridBagConstraints();
		gbc_signInInnerPanel.insets = new Insets(0, 20, 0, 0);
		gbc_signInInnerPanel.fill = GridBagConstraints.HORIZONTAL;
		gbc_signInInnerPanel.anchor = GridBagConstraints.NORTH;
		gbc_signInInnerPanel.gridx = 0;
		gbc_signInInnerPanel.gridy = 1;
		
		realPanel.add(signInInnerPanel, gbc_signInInnerPanel);
		GridBagLayout gbl_signInInnerPanel = new GridBagLayout();
		gbl_signInInnerPanel.columnWidths = new int[] {0, 0};
		gbl_signInInnerPanel.columnWeights = new double[] {  1.0, 0.5 };
		gbl_signInInnerPanel.rowHeights = new int[] {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
		gbl_signInInnerPanel.rowWeights = new double[]{ 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0};
		signInInnerPanel.setLayout(gbl_signInInnerPanel);
		
		hostNameLabel = new JLabel(OTermResource.Instance().GetString("HostName"));
		hostNameLabel.setForeground(Palette.ForeColor);
		GridBagConstraints gbc_hostNameLabel = new GridBagConstraints();
		gbc_hostNameLabel.gridwidth = 2;
		gbc_hostNameLabel.anchor = GridBagConstraints.WEST;
		gbc_hostNameLabel.insets = new Insets(15, 0, 5, 0);
		gbc_hostNameLabel.gridx = 0;
		gbc_hostNameLabel.gridy = 0;
		signInInnerPanel.add(hostNameLabel, gbc_hostNameLabel);
		
		hostNameField = new OTextField();
		hostNameField.setBorder(new CompoundBorder(new LineBorder(new Color(192, 192, 192)), new EmptyBorder(3, 8, 4, 8)));
		hostNameLabel.setLabelFor(hostNameField);
		GridBagConstraints gbc_hostNameField = new GridBagConstraints();
		gbc_hostNameField.gridwidth = 2;
		gbc_hostNameField.fill = GridBagConstraints.BOTH;
		gbc_hostNameField.insets = new Insets(0, 0, 5, 50);
		gbc_hostNameField.gridx = 0;
		gbc_hostNameField.gridy = 1;
		signInInnerPanel.add(hostNameField, gbc_hostNameField);
		hostNameField.setColumns(1);
		
		userNameLabel = new JLabel(OTermResource.Instance().GetString("UserName"));
		userNameLabel.setForeground(Palette.ForeColor);
		GridBagConstraints gbc_userNameLabel = new GridBagConstraints();
		gbc_userNameLabel.gridwidth = 2;
		gbc_userNameLabel.anchor = GridBagConstraints.WEST;
		gbc_userNameLabel.insets = new Insets(15, 0, 5, 0);
		gbc_userNameLabel.gridx = 0;
		gbc_userNameLabel.gridy = 2;
		signInInnerPanel.add(userNameLabel, gbc_userNameLabel);
		
		userNameField = new OTextField();
		userNameField.setBorder(new CompoundBorder(new LineBorder(new Color(192, 192, 192)), new EmptyBorder(3, 8, 4, 8)));
		userNameLabel.setLabelFor(userNameField);
		GridBagConstraints gbc_userNameField = new GridBagConstraints();
		gbc_userNameField.gridwidth = 2;
		gbc_userNameField.fill = GridBagConstraints.BOTH;
		gbc_userNameField.insets = new Insets(0, 0, 5, 50);
		gbc_userNameField.gridx = 0;
		gbc_userNameField.gridy = 3;
		signInInnerPanel.add(userNameField, gbc_userNameField);
		userNameField.setColumns(10);
		
		authenticationTypeLabel = new JLabel(OTermResource.Instance().GetString("AuthenticationType"));
		authenticationTypeLabel.setForeground(Palette.ForeColor);
		GridBagConstraints gbc_authenticationTypeLabel = new GridBagConstraints();
		gbc_authenticationTypeLabel.gridwidth = 2;
		gbc_authenticationTypeLabel.anchor = GridBagConstraints.WEST;
		gbc_authenticationTypeLabel.insets = new Insets(15, 0, 5, 0);
		gbc_authenticationTypeLabel.gridx = 0;
		gbc_authenticationTypeLabel.gridy = 4;
		signInInnerPanel.add(authenticationTypeLabel, gbc_authenticationTypeLabel);
		
		JPanel panel = new JPanel();
		panel.setBackground(Color.WHITE);
		FlowLayout flowLayout = (FlowLayout) panel.getLayout();
		flowLayout.setVgap(0);
		flowLayout.setHgap(0);
		flowLayout.setAlignment(FlowLayout.LEFT);
		GridBagConstraints gbc_panel1 = new GridBagConstraints();
		gbc_panel1.gridwidth = 2;
		gbc_panel1.insets = new Insets(0, 0, 5, 0);
		gbc_panel1.fill = GridBagConstraints.BOTH;
		gbc_panel1.gridx = 0;
		gbc_panel1.gridy = 5;
		signInInnerPanel.add(panel, gbc_panel1);
		
		passwordToggleButton = new JButton(OTermResource.Instance().GetString("Password"));
		passwordToggleButton.setHorizontalAlignment(SwingConstants.LEFT);
		panel.add(passwordToggleButton);

		passwordToggleButton.setFocusPainted(false);
		
		privateKeyButton = new JButton(OTermResource.Instance().GetString("SSHPrivateKey"));
		panel.add(privateKeyButton);
		privateKeyButton.setFocusPainted(false);
		
		passwordLabel = new JLabel(OTermResource.Instance().GetString("Password"));
		passwordLabel.setForeground(Palette.ForeColor);
		GridBagConstraints gbc_passwordLabel = new GridBagConstraints();
		gbc_passwordLabel.anchor = GridBagConstraints.WEST;
		gbc_passwordLabel.insets = new Insets(15, 0, 5, 5);
		gbc_passwordLabel.gridx = 0;
		gbc_passwordLabel.gridy = 6;
		signInInnerPanel.add(passwordLabel, gbc_passwordLabel);
		
		passwordField = new JPasswordField();
		passwordField.setBorder(new CompoundBorder(new LineBorder(new Color(192, 192, 192)), new EmptyBorder(3, 8, 4, 8)));
		passwordLabel.setLabelFor(passwordField);
		GridBagConstraints gbc_passwordField = new GridBagConstraints();
		gbc_passwordField.gridwidth = 2;
		gbc_passwordField.fill = GridBagConstraints.BOTH;
		gbc_passwordField.insets = new Insets(0, 0, 5, 50);
		gbc_passwordField.gridx = 0;
		gbc_passwordField.gridy = 7;
		signInInnerPanel.add(passwordField, gbc_passwordField);
		
		lblPrivatekey = new JLabel(OTermResource.Instance().GetString("PrivateKeyLocation"));
		lblPrivatekey.setForeground(Palette.ForeColor);
		GridBagConstraints gbc_lblPrivatekey = new GridBagConstraints();
		gbc_lblPrivatekey.anchor = GridBagConstraints.WEST;
		gbc_lblPrivatekey.insets = new Insets(0, 0, 5, 5);
		gbc_lblPrivatekey.gridx = 0;
		gbc_lblPrivatekey.gridy = 8;
		signInInnerPanel.add(lblPrivatekey, gbc_lblPrivatekey);
		
		privateKeyLocation = new JTextField();
		privateKeyLocation.setBorder(new CompoundBorder(new LineBorder(new Color(192, 192, 192)), new EmptyBorder(3, 8, 4, 8)));
		GridBagConstraints gbc_textField = new GridBagConstraints();
		gbc_textField.gridwidth = 2;
		gbc_textField.insets = new Insets(0, 0, 5, 50);
		gbc_textField.fill = GridBagConstraints.HORIZONTAL;
		gbc_textField.gridx = 0;
		gbc_textField.gridy = 9;
		signInInnerPanel.add(privateKeyLocation, gbc_textField);
		
		browsePrivateKeyButton = new JButton("...");
		browsePrivateKeyButton.setFocusPainted(false);
		GridBagConstraints gbc_browsePrivateKeyButton = new GridBagConstraints();
		gbc_browsePrivateKeyButton.anchor = GridBagConstraints.EAST;
		gbc_browsePrivateKeyButton.insets = new Insets(0, 0, 5, 50);
		gbc_browsePrivateKeyButton.gridx = 1;
		gbc_browsePrivateKeyButton.gridy = 10;
		signInInnerPanel.add(browsePrivateKeyButton, gbc_browsePrivateKeyButton);
		browsePrivateKeyButton.setForeground(Color.WHITE);
		browsePrivateKeyButton.setBackground(Palette.ButtonSelectedBackground);	
		
		connectButton = new JButton(OTermResource.Instance().GetString("Connect"));
		
		connectButton.setForeground(Color.WHITE);
		connectButton.setBackground(new Color(0, 153, 255));
		connectButton.setFocusPainted(false);
		GridBagConstraints gbc_connectButton = new GridBagConstraints();
		gbc_connectButton.insets = new Insets(15, 0, 5, 5);
		gbc_connectButton.anchor = GridBagConstraints.WEST;
		gbc_connectButton.gridx = 0;
		gbc_connectButton.gridy = 11;
		signInInnerPanel.add(connectButton, gbc_connectButton);
		

		decorationPanel = new JPanel();
		decorationPanel.setOpaque(false);
		decorationPanel.setLayout(null);
		GridBagConstraints gbc_panel_1 = new GridBagConstraints();
		gbc_panel_1.insets = new Insets(0, 0, 5, 0);
		gbc_panel_1.fill = GridBagConstraints.BOTH;
		gbc_panel_1.gridx = 1;
		gbc_panel_1.gridy = 0;
		add(decorationPanel, gbc_panel_1);
		
		lblMakeYourConnection = new JLabel(OTermResource.Instance().GetString("TerminalSlogan"));
		lblMakeYourConnection.setVerticalAlignment(SwingConstants.TOP);
		lblMakeYourConnection.setForeground(Color.WHITE);
		decorationPanel.add(lblMakeYourConnection);

		ImageIcon icon = new ImageIcon(SignInPanel.class.getResource("/ostc/sh/webconsole/images/heroillustration.png"));
		decorationImage = new AutoScaleImage(icon.getImage());	
		decorationPanel.add(decorationImage);
		
		RegisterEvents();
		SetPasswordSelected();

		this.SetZoom(1);
	}

	@Override
	public void SetZoom(float zoom) {
		hostNameField.setFont(new Font("Segoe UI", Font.PLAIN, (int)(12*zoom)));
		userNameField.setFont(new Font("Segoe UI", Font.PLAIN, (int)(12*zoom)));
		lblNewLabel.setFont(new Font("Segoe UI", Font.PLAIN, (int)(30*zoom)));
		hostNameLabel.setFont(new Font("Segoe UI", Font.PLAIN, (int)(12*zoom)));
		lblPrivatekey.setFont(new Font("Segoe UI", Font.PLAIN, (int)(12*zoom)));
		userNameLabel.setFont(new Font("Segoe UI", Font.PLAIN, (int)(12*zoom)));
		authenticationTypeLabel.setFont(new Font("Segoe UI", Font.PLAIN,  (int)(12*zoom)));
		passwordToggleButton.setFont(new Font("Segoe UI", Font.PLAIN,  (int)(12*zoom)));
		passwordField.setFont(new Font("Segoe UI", Font.PLAIN,  (int)(12*zoom)));
		privateKeyButton.setFont(new Font("Segoe UI", Font.PLAIN,  (int)(12*zoom)));
		passwordLabel.setFont(new Font("Segoe UI", Font.PLAIN,  (int)(12*zoom)));
		privateKeyLocation.setFont(new Font("Segoe UI", Font.PLAIN,  (int)(12*zoom)));
		browsePrivateKeyButton.setFont(new Font("Segoe UI", Font.PLAIN,  (int)(12*zoom)));
		connectButton.setFont(new Font("Segoe UI", Font.PLAIN, (int)(12*zoom)));
		lblMakeYourConnection.setFont(new Font("Segoe UI", Font.PLAIN,  (int)(48*zoom)));		
		decorationImage.setBounds(77, 124, (int)(970*zoom), (int)(780*zoom));
		lblMakeYourConnection.setBounds(77, 37, (int)(643*zoom), (int)(104*zoom));
	}
}
