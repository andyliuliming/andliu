package ostc.sh.webconsole.progress;

import java.awt.Color;

import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.JPanel;
import java.awt.BorderLayout;

public class ProgressPanel extends JPanel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JLabel statusLabel;

	/**
	 * Create the panel.
	 */
	public ProgressPanel() {
		this.setBackground(new Color(46, 128, 171));
		setLayout(new BorderLayout(0, 0));

		statusLabel = new JLabel(new ImageIcon(
				ProgressPanel.class.getResource("cloud.png")));
		add(statusLabel);
	}

	public void SetProgress(int progressValue) {
		System.err.println("current progressValue is " + progressValue);
	}
}
