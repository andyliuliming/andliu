package ostc.sh.webconsole.controllers;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;

import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JPanel;

import ostc.sh.webconsole.jsinteract.ZoomChangeable;

public class ActionController extends JPanel implements ZoomChangeable {

	private JLabel label;
	private float zoom=1;
	private AutoScaleImage lblNewLabel;
	
	public ActionController(ImageIcon image, String description) {
		setOpaque(false);
		GridBagLayout gridBagLayout = new GridBagLayout();
		gridBagLayout.rowHeights = new int[] { 0, 15 };
		gridBagLayout.columnWeights = new double[] { 1.0 };
		gridBagLayout.rowWeights = new double[] { 1.0, 0.0 };
		setLayout(gridBagLayout);
		
		lblNewLabel = new AutoScaleImage(image.getImage());
		GridBagConstraints gbc_lblNewLabel = new GridBagConstraints();
		gbc_lblNewLabel.insets = new Insets(0, 0, 5, 0);
		gbc_lblNewLabel.gridx = 0;
		gbc_lblNewLabel.gridy = 0;
		add(lblNewLabel, gbc_lblNewLabel);

		label = new JLabel();
		label.setForeground(Color.WHITE);
		label.setText(description);
		GridBagConstraints gbc_label = new GridBagConstraints();
		gbc_label.gridx = 0;
		gbc_label.gridy = 1;
		add(label, gbc_label);
		
		this.SetZoom(this.zoom);
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public void SetZoom(float zoom) {
		// TODO Auto-generated method stub
		this.zoom = zoom;
		label.setFont(new Font("Segoe UI", Font.PLAIN, (int)(11*zoom)));
		lblNewLabel.setSize(30, 30);
		lblNewLabel.setMinimumSize(new Dimension(30,30));
		lblNewLabel.setPreferredSize(new Dimension(30, 30));
	}
}
