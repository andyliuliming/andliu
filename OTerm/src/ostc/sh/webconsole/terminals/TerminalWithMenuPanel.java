package ostc.sh.webconsole.terminals;

import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.net.URL;
import javax.swing.ImageIcon;
import javax.swing.JPanel;
import javax.swing.WindowConstants;
import ostc.sh.webconsole.config.Palette;
import ostc.sh.webconsole.controllers.ActionController;
import ostc.sh.webconsole.filecopy.SCPDialog;
import ostc.sh.webconsole.jsinteract.ZoomChangeable;
import ostc.sh.webconsole.keypair.KeyGenerator;
import ostc.sh.webconsole.keypair.KeyPairDialog;
import ostc.sh.webconsole.locresource.OTermResource;
import ostc.sh.webconsole.ssh.TerminalShellChannel;
import ostc.sh.webconsole.ssh.WebConsoleConnection;

public class TerminalWithMenuPanel extends JPanel implements AutoCloseable, ZoomChangeable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private WebConsoleCanvasTerminal webConsoleCanvasTerminal;
	private ActionController fileAction;
	private ActionController settingsAction;
	private ActionController actionsAction;

	private WebConsoleConnection connection = null;
	private JPanel menuPanel;
	private GridBagLayout gridBagLayout;
	/**
	 * Create the panel.
	 */
	public TerminalWithMenuPanel() {
		gridBagLayout = new GridBagLayout();
		gridBagLayout.columnWidths = new int[] {70, 0};
		gridBagLayout.columnWeights = new double[] { 0.0, 1.0 };
		gridBagLayout.rowWeights = new double[] { 1.0 };
		setLayout(gridBagLayout);
		
		menuPanel = new JPanel();
		menuPanel.setLayout(null);
		menuPanel.setBackground(Palette.LightBackground);
		GridBagConstraints menuPanelGBC = new GridBagConstraints();
		menuPanelGBC.fill = GridBagConstraints.BOTH;
		menuPanelGBC.gridx = 0;
		menuPanelGBC.gridy = 0;
		add(menuPanel, menuPanelGBC);
		
		fileAction = new ActionController(new ImageIcon(TerminalWithMenuPanel.class.getResource("/ostc/sh/webconsole/images/File.png")), OTermResource.Instance().GetString("FileAction"));
		
		menuPanel.add(fileAction);
		
		settingsAction = new ActionController(new ImageIcon(TerminalWithMenuPanel.class.getResource("/ostc/sh/webconsole/images/settings.png")), OTermResource.Instance().GetString("SettingsAction"));
		
		menuPanel.add(settingsAction);
		
		actionsAction = new ActionController(new ImageIcon(TerminalWithMenuPanel.class.getResource("/ostc/sh/webconsole/images/Action.png")), OTermResource.Instance().GetString("ActionsAction"));
		
		menuPanel.add(actionsAction);
		
		webConsoleCanvasTerminal = new WebConsoleCanvasTerminal();
		GridBagConstraints gbc_panel2 = new GridBagConstraints();
		gbc_panel2.fill = GridBagConstraints.BOTH;
		gbc_panel2.gridx = 1;
		gbc_panel2.gridy = 0;
		add(webConsoleCanvasTerminal, gbc_panel2);
		
		Config();
	}
	
	public void Initialize(WebConsoleConnection connection){
		this.connection = connection;
		TerminalShellChannel shellChannel = connection.GetShellChannel();
		webConsoleCanvasTerminal.Initialize(shellChannel);
	}
	
	@Override
	public void requestFocus() {
		this.webConsoleCanvasTerminal.requestFocus();
    }
	
	private void Config(){	

		fileAction.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e){
				final KeyPairDialog dialog = new KeyPairDialog();

				URL url =  TerminalWithMenuPanel.class.getResource("/ostc/sh/webconsole/images/Action.png");
				ImageIcon img = new ImageIcon(url);
				dialog.setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
				dialog.setIconImage(img.getImage());
				dialog.setSize(500,300);
				dialog.setLocationRelativeTo(null);
				dialog.setVisible(true);
				dialog.addWindowListener(new WindowListener(){

					@Override
					public void windowOpened(WindowEvent e) {
						// TODO Auto-generated method stub
						
					}

					@Override
					public void windowClosing(WindowEvent e) {
						// TODO Auto-generated method stub
						char[] passphrase = dialog.getPassphrase();
						byte[] passphraseByteArray = new String(passphrase).getBytes();
						KeyGenerator generator = new KeyGenerator();
						generator.Generator(dialog.getPrivateKeyFile(), dialog.getPublicKeyFile(), passphraseByteArray);
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
					
				});
			}
		});
		settingsAction.addMouseListener(new MouseAdapter() {

		});
		actionsAction.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e){
				SCPDialog dialog = new SCPDialog(connection);
				dialog.setLocationRelativeTo(null);
				dialog.setVisible(true);
			}
		});
	}

	@Override
	public void close() throws Exception {
		if (this.webConsoleCanvasTerminal != null) {
			this.webConsoleCanvasTerminal.close();
		}
	}

	@Override
	public void SetZoom(float zoom) {
		this.webConsoleCanvasTerminal.SetZoom(zoom);
		this.actionsAction.SetZoom(zoom);
		this.fileAction.SetZoom(zoom);
		this.settingsAction.SetZoom(zoom);
		gridBagLayout.columnWidths = new int[] {(int)(70*zoom), 0};
		fileAction.setBounds(0, 52, (int)(70*zoom),  (int)(47*zoom));
		settingsAction.setBounds(0, 182,  (int)(70*zoom), (int)(47*zoom));
		actionsAction.setBounds(0, 305,  (int)(70*zoom), (int)(47*zoom));
	}
}
