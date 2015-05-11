package ostc.sh.webconsole.progress;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Container;
import java.net.URL;

import javax.jnlp.DownloadServiceListener;
import javax.swing.JPanel;

public class CustomProgress implements DownloadServiceListener {
	private Container surfaceContainer = null;
	boolean uiCreated = false;
	private ProgressPanel progressPanel;

	public CustomProgress(Object surface) {
		init(surface, null);
		System.err.println("CustomProgress Contructed!");
	}

	public CustomProgress(Object surface, Object stub) {
		init(surface, stub);
	}

	public void init(Object surface, Object stub) {
		try {
			surfaceContainer = (Container) surface;
			surfaceContainer.setBackground(new Color(46, 128, 171));
		} catch (ClassCastException cce) {
			cce.printStackTrace();
		}
	}

	public void downloadFailed(java.net.URL url, java.lang.String version) {
	}

	public void progress(URL url, String version, long readSoFar, long total,
			int overallPercent) {
		// check progress of download and update display
		updateProgressUI(overallPercent);
	}

	public void upgradingArchive(java.net.URL url, java.lang.String version,
			int patchPercent, int overallPercent) {
		updateProgressUI(overallPercent);
	}

	public void validating(java.net.URL url, java.lang.String version,
			long entry, long total, int overallPercent) {
		updateProgressUI(overallPercent);
	}

	private void updateProgressUI(int overallPercent) {
		if (!uiCreated && overallPercent > 0 && overallPercent < 100) {
			// create custom progress indicator's UI only if
			// there is more work to do, meaning overallPercent > 0 and < 100
			// this prevents flashing when RIA is loaded from cache
			create();
			uiCreated = true;
		}
		if (uiCreated) {
			progressPanel.SetProgress(overallPercent);
		}
	}

	private void create() {
		JPanel top = createComponents();
		if (surfaceContainer != null) {
			// lay out the loading progress indicator UI in the given Container
			surfaceContainer.add(top, BorderLayout.CENTER);
			surfaceContainer.invalidate();
			surfaceContainer.validate();
		}
	}

	private JPanel createComponents() {
		progressPanel = new ProgressPanel();
		return progressPanel;
	}

}
