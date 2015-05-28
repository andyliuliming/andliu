package ostc.sh.webconsole.filecopy;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.swing.DefaultListModel;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JDialog;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.border.CompoundBorder;
import javax.swing.border.EmptyBorder;
import javax.swing.border.LineBorder;

import ostc.sh.webconsole.OTermEnvironment;
import ostc.sh.webconsole.controllers.AutoScaleImage;
import ostc.sh.webconsole.locresource.OTermResource;

import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSchException;

/**
 * 
 * @author andliu
 *
 */
public class SCPDialog extends JDialog {
	private static final long serialVersionUID = 1L;
	private final JPanel contentPanel = new JPanel();
	private FileCopyUtil util = null;
	private JComboBox<String> localFileComboBox = new JComboBox<String>();
	private JComboBox<String> remoteFileComboBox = new JComboBox<String>();
	private JList<String> localFileList = null;
	private JList<String> remoteFileList = null;
	
	private String localCurrentFolder = "";
	private String remoteCurrentFolder = "/";
	private String UpItemConstString = "..";
	private AutoScaleImage sendToRemoteButton = null;
	private AutoScaleImage sendToLocalButton = null;
	private JButton localChDirButton = null;
	private JButton remoteDeleteButton = null;
	private JButton remoteRefreshButton = null;
	private JButton remoteRenameButton = null;
	private JButton remoteMkDirButton = null;
	private JButton remoteChDirButton = null;
	private JButton localDeleteButton = null;
	private JButton localRefreshButton = null;
	private JButton localRenameButton = null;
	private JButton localMkDirButton = null;
	private JLabel lblNewLabel;
	private JLabel lblRemoteFile;
	private JLabel statusLabel;
	/**
	 * Create the dialog.
	 */
	public SCPDialog() {
		setIconImage(Toolkit.getDefaultToolkit().getImage(SCPDialog.class.getResource("/ostc/sh/webconsole/images/File.png")));
		this.setTitle(OTermResource.Instance().GetString("CopyFile"));		
		setBounds(100, 100, 792, 550);
		getContentPane().setLayout(new BorderLayout());
		contentPanel.setBorder(new EmptyBorder(5, 5, 5, 5));
		getContentPane().add(contentPanel, BorderLayout.CENTER);
		contentPanel.setLayout(null);
		localFileComboBox.setEditable(true);
		localFileComboBox.setBorder(new CompoundBorder(new LineBorder(new Color(192, 192, 192)), null));
		localFileComboBox.setForeground(Color.GRAY);
		localFileComboBox.setBackground(Color.WHITE);
		localFileComboBox.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		localFileComboBox.setBounds(31, 60, 286, 30);
		contentPanel.add(localFileComboBox);
		
		util = new FileCopyUtil();		
		remoteFileComboBox.setEditable(true);
		remoteFileComboBox.setBorder(null);
		remoteFileComboBox.setBackground(Color.WHITE);
		remoteFileComboBox.setForeground(Color.GRAY);
		remoteFileComboBox.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		remoteFileComboBox.setBorder(new CompoundBorder(new LineBorder(new Color(192, 192, 192)), null));
		remoteFileComboBox.setBounds(445, 60, 275, 30);
		contentPanel.add(remoteFileComboBox);
		
		sendToRemoteButton = new AutoScaleImage(new ImageIcon(SCPDialog.class.getResource("/ostc/sh/webconsole/images/Arrow_right.png")).getImage());
		sendToRemoteButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		sendToRemoteButton.setForeground(Color.WHITE);
		sendToRemoteButton.setBackground(new Color(0, 153, 255));	
		sendToRemoteButton.setBounds(361, 138, 36, 36);
		contentPanel.add(sendToRemoteButton);

		sendToLocalButton = new AutoScaleImage(new ImageIcon(SCPDialog.class.getResource("/ostc/sh/webconsole/images/Arrow_left.png")).getImage());
		sendToLocalButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		sendToLocalButton.setForeground(Color.WHITE);
		sendToLocalButton.setBackground(new Color(0, 153, 255));	
		sendToLocalButton.setBounds(361, 230, 36, 36);
		contentPanel.add(sendToLocalButton);

		JScrollPane localScrollPane1 = new JScrollPane();
		
		localFileList = new JList<String>();
		localFileList.setBorder(new LineBorder(Color.LIGHT_GRAY));
		DefaultListModel<String> localFileModel = new DefaultListModel<String>();
		localFileList.setModel(localFileModel);
		localFileList.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		localScrollPane1.setBounds(31, 107, 286, 279);	
		localScrollPane1.setViewportView(localFileList);
		contentPanel.add(localScrollPane1);
		
		JScrollPane remoteScrollPane1 = new JScrollPane();

		remoteFileList = new JList<String>();
		remoteFileList.setBorder(new LineBorder(Color.LIGHT_GRAY));
		DefaultListModel<String> remoteFileModel = new DefaultListModel<String>();
		remoteFileList.setModel(remoteFileModel);
		remoteFileList.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		remoteScrollPane1.setBounds(445, 107, 275, 279);		
		remoteScrollPane1.setViewportView(remoteFileList);		
		contentPanel.add(remoteScrollPane1);

		localChDirButton = new JButton(OTermResource.Instance().GetString("ChDir"));
		localChDirButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));			
		localChDirButton.setBounds(31, 414, 89, 23);
		localChDirButton.setForeground(Color.WHITE);
		localChDirButton.setBackground(new Color(0, 153, 255));	
		contentPanel.add(localChDirButton);

		localMkDirButton = new JButton(OTermResource.Instance().GetString("MkDir"));
		localMkDirButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));		
		localMkDirButton.setBounds(129, 414, 89, 23);
		localMkDirButton.setForeground(Color.WHITE);
		localMkDirButton.setBackground(new Color(0, 153, 255));	
		contentPanel.add(localMkDirButton);

		localRenameButton = new JButton(OTermResource.Instance().GetString("Rename"));
		localRenameButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		localRenameButton.setForeground(Color.WHITE);
		localRenameButton.setBackground(new Color(0, 153, 255));	
		localRenameButton.setBounds(228, 414, 89, 23);
		contentPanel.add(localRenameButton);

		localDeleteButton = new JButton(OTermResource.Instance().GetString("Delete"));
		localDeleteButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		localDeleteButton.setForeground(Color.WHITE);
		localDeleteButton.setBackground(new Color(0, 153, 255));	
		localDeleteButton.setBounds(31, 448, 89, 23);
		contentPanel.add(localDeleteButton);

		localRefreshButton = new JButton(OTermResource.Instance().GetString("Refresh"));
		localRefreshButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		localRefreshButton.setForeground(Color.WHITE);
		localRefreshButton.setBackground(new Color(0, 153, 255));	
		localRefreshButton.setBounds(129, 448, 89, 23);
		contentPanel.add(localRefreshButton);

		remoteChDirButton = new JButton(OTermResource.Instance().GetString("ChDir"));
		remoteChDirButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		remoteChDirButton.setForeground(Color.WHITE);
		remoteChDirButton.setBackground(new Color(0, 153, 255));	
		remoteChDirButton.setBounds(445, 414, 89, 23);
		contentPanel.add(remoteChDirButton);

		remoteMkDirButton = new JButton(OTermResource.Instance().GetString("MkDir"));
		remoteMkDirButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		remoteMkDirButton.setForeground(Color.WHITE);
		remoteMkDirButton.setBackground(new Color(0, 153, 255));	
		remoteMkDirButton.setBounds(543, 414, 89, 23);
		contentPanel.add(remoteMkDirButton);

		remoteRenameButton = new JButton(OTermResource.Instance().GetString("Rename"));
		remoteRenameButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		remoteRenameButton.setForeground(Color.WHITE);
		remoteRenameButton.setBackground(new Color(0, 153, 255));	
		remoteRenameButton.setBounds(642, 414, 89, 23);
		contentPanel.add(remoteRenameButton);

		remoteRefreshButton = new JButton(OTermResource.Instance().GetString("Refresh"));
		remoteRefreshButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		remoteRefreshButton.setForeground(Color.WHITE);
		remoteRefreshButton.setBackground(new Color(0, 153, 255));
		remoteRefreshButton.setBounds(543, 448, 89, 23);
		contentPanel.add(remoteRefreshButton);

		remoteDeleteButton = new JButton(OTermResource.Instance().GetString("Delete"));
		remoteDeleteButton.setFont(new Font("Segoe UI", Font.PLAIN, 11));
		remoteDeleteButton.setForeground(Color.WHITE);
		remoteDeleteButton.setBackground(new Color(0, 153, 255));
		remoteDeleteButton.setBounds(445, 448, 89, 23);
		contentPanel.add(remoteDeleteButton);
		
		lblNewLabel = new JLabel(OTermResource.Instance()
				.GetString("LocalFile"));
		lblNewLabel.setFont(new Font("Segoe UI", Font.PLAIN, 16));
		lblNewLabel.setBounds(31, 22, 286, 30);
		contentPanel.add(lblNewLabel);

		lblRemoteFile = new JLabel(OTermResource.Instance().GetString(
				"RemoteFile"));
		lblRemoteFile.setFont(new Font("Segoe UI", Font.PLAIN, 16));
		lblRemoteFile.setBounds(445, 22, 286, 30);
		contentPanel.add(lblRemoteFile);

		statusLabel = new JLabel("");
		statusLabel.setBounds(320, 385, 122, 23);
		contentPanel.add(statusLabel);
		
		Configure();
		Initialize();
	}
	
	private void RefreshLocalComboBox(){
		List<String> toFill = util.ListLocalFolder("");		
		if (localCurrentFolder != ""
				&& !toFill.contains(localCurrentFolder)) {
			toFill.add(localCurrentFolder);
		}
		
		RefillLocalComboBox(toFill);
	}
	
	public void RefreshRemoteComboBox(){
		ChannelExec exec = null;
		try {
			exec = (ChannelExec) OTermEnvironment.Instance().getSshConnection().getSession().openChannel("exec");					
			List<String> children = util.ListRemoteFolder(exec, remoteCurrentFolder);
			
			children.add(0, "/");
			RefillRemoteComboBox(children);
		} catch (JSchException e1) {
			e1.printStackTrace();
		}
	}
	
	private void Initialize(){
		RefreshLocalComboBox();
		RefreshRemoteComboBox();
	}
	
	private void Configure(){
		sendToRemoteButton.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e){
				// copy the selected files in local to the remote
				List<String> selectedItems = localFileList.getSelectedValuesList();
				for(String selectedItem : selectedItems){					
					String filePath = new File(localCurrentFolder, selectedItem)
							.getAbsolutePath();
					String remoteFile = remoteCurrentFolder + "/"
							+ selectedItem;
					statusLabel.setText(OTermResource.Instance().GetString("Copying"));
					util.CopyTo(OTermEnvironment.Instance().getSshConnection().getSession(), filePath, remoteFile);
					statusLabel.setText(OTermResource.Instance().GetString("Copied"));
				}			
			}
		});
		
		sendToLocalButton.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				// copy the selected files in remote to the local
				List<String> selectedItems = remoteFileList.getSelectedValuesList();
				for(String selectedItem : selectedItems){
					String filePath = new File(localCurrentFolder, selectedItem)
							.getAbsolutePath();
					String remoteFile = remoteCurrentFolder + "/"+selectedItem;
					statusLabel.setText(OTermResource.Instance().GetString("Copying"));
					util.CopyFrom(OTermEnvironment.Instance().getSshConnection().getSession(), remoteFile, filePath);
					statusLabel.setText(OTermResource.Instance().GetString("Copied"));
				}	
			}
		});
		
		
		localFileComboBox.addItemListener(new ItemListener() {
			@Override
			public void itemStateChanged(ItemEvent e) {
				if (e.getStateChange() == ItemEvent.SELECTED) {
					String selected = (String) e.getItem();
					System.err.println("itemStateChanged " + selected);
					// refresh the local items.
					List<String> toFill = util.ListLocalFolder(selected);
					localCurrentFolder  = selected;				
					
					// add the .. into the list.
					toFill.add(0, UpItemConstString);
					
					RefillLocalList(toFill);
				}
			}
		});

		localFileList.addMouseListener(new MouseAdapter() {
			public void mouseClicked(MouseEvent evt) {
				@SuppressWarnings("unchecked")
				JList<String> list = (JList<String>) (evt.getSource());
				if (evt.getClickCount() == 2) {					
					// if the selected is ".." go up to the current folder.					
					int index 			= list.locationToIndex(evt.getPoint());
					String localFolder  = localFileList.getModel().getElementAt(index);
					
					String folderToOpen = localCurrentFolder + "\\" + localFolder;
					List<String> toFill = util.ListLocalFolder(folderToOpen);

					toFill.add(0, UpItemConstString);
					
					RefillLocalList(toFill);
					File f=new File(folderToOpen);
					
					try {
						localCurrentFolder = f.getCanonicalPath();
						localFileComboBox.setSelectedItem(localCurrentFolder);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
		});
		
		remoteFileComboBox.addItemListener(new ItemListener() {
			@Override
			public void itemStateChanged(ItemEvent e) {
				if (e.getStateChange() == ItemEvent.SELECTED) {
					String selected = (String) e.getItem();
					// if the selected is ".." go up to the current folder.					
					// refresh the local items.
					ChannelExec exec = null;
					try {
						if(!selected.startsWith("/"))
						{
							remoteCurrentFolder = "/"+selected;
						}else
						{
							remoteCurrentFolder = selected;
						}
						System.err.println("set remoteCurrentFolder to "+remoteCurrentFolder);
						exec = (ChannelExec) OTermEnvironment.Instance().getSshConnection().getSession().openChannel("exec");					
						List<String> children = util.ListRemoteFolder(exec, remoteCurrentFolder);
						exec.disconnect();
						children.add(0, UpItemConstString);
						RefillRemoteList(children);
					} catch (JSchException e1) {
						e1.printStackTrace();
					}
				}
			}
		});

		remoteFileList.addMouseListener(new MouseAdapter() {
			public void mouseClicked(MouseEvent evt) {
				@SuppressWarnings("unchecked")
				JList<String> list = (JList<String>) (evt.getSource());
				if (evt.getClickCount() == 2) {					
					ChannelExec exec;
					int index = list.locationToIndex(evt.getPoint());
					String remoteFolder = remoteFileList.getModel().getElementAt(index);
					
					try {
						exec = (ChannelExec) OTermEnvironment.Instance().getSshConnection().getSession().openChannel("exec");
						String folderToOpen;
						if(remoteCurrentFolder.endsWith("/")){
							 folderToOpen=remoteCurrentFolder+remoteFolder;
						}else
						{
							folderToOpen=remoteCurrentFolder+"/"+remoteFolder;
						}
						List<String> children = util.ListRemoteFolder(exec, folderToOpen);
						children.add(0, UpItemConstString);
						
						RefillRemoteList(children);
						remoteCurrentFolder = folderToOpen;
						remoteFileComboBox.setSelectedItem(remoteCurrentFolder);
						System.err.println("set remoteCurrentFolder to "+remoteCurrentFolder);
					} catch (JSchException e1) {
						e1.printStackTrace();
					}						
				}
			}
		});
		
		
		localChDirButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		localMkDirButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		localRenameButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		localDeleteButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});	
		
		localRefreshButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		remoteChDirButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		remoteMkDirButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		remoteRenameButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		remoteRefreshButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		remoteDeleteButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
	}
	
	private void RefillLocalList(List<String> toFill){
		DefaultListModel<String> localListModel = (DefaultListModel<String>) (localFileList.getModel());
		localListModel.removeAllElements();
		for(int i = 0; i<toFill.size(); i++){						
			localListModel.add(localListModel.getSize(), toFill.get(i));
		}
	}
	
	private void RefillLocalComboBox(List<String> toFill){
		localFileComboBox.removeAllItems();
		for (int i = 0; i < toFill.size(); i++) {			
			localFileComboBox.addItem(toFill.get(i));
		}
	}
	
	private void RefillRemoteList(List<String> toFill){
		DefaultListModel<String> remoteFileListModel = (DefaultListModel<String>) (remoteFileList.getModel());
		remoteFileListModel.removeAllElements();
		for(int i = 0; i<toFill.size(); i++){						
			remoteFileListModel.add(remoteFileListModel.getSize(), toFill.get(i));
		}
	}
	
	private void RefillRemoteComboBox(List<String> toFill){
		remoteFileComboBox.removeAllItems();
		for(int i = 0; i<toFill.size(); i++){			
			remoteFileComboBox.addItem(toFill.get(i));
		}
	}	
}
