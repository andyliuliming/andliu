package ostc.sh.webconsole.controllers;

import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.RenderingHints;

import javax.swing.JPanel;

/**
 * 
 * @author andliu
 *
 */
public class AutoScaleImage extends JPanel {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	Image image;

	public AutoScaleImage(Image image) {
		this.setOpaque(false);
		this.image = image;
	}
	
	public void SetImage(Image image){
		this.image=image;
	}

	protected void paintComponent(Graphics g) {
		super.paintComponent(g);
		Graphics2D g2 = (Graphics2D) g;
		g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION,
				RenderingHints.VALUE_INTERPOLATION_BICUBIC);
		g2.drawImage(image, 0, 0, getWidth(), getHeight(), this);
	}
}