package ostc.sh.webconsole.util;

import java.awt.FontMetrics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;

import ostc.sh.webconsole.config.GlobalConfig;

public class GraphicsUtil {
	/**
	 * calculate the width in normal character metric
	 * @param c
	 * @return
	 */
	public static int CalculateCharSize(char c,int char_width){
		BufferedImage img = new BufferedImage(1, 1, BufferedImage.TYPE_INT_RGB);
		Graphics2D graphics = (Graphics2D) (img.getGraphics());
		graphics.setFont(GlobalConfig.Instance().getNormalFont());

		FontMetrics fo = graphics.getFontMetrics();
		int this_char_width = (int) (fo.charWidth((char) c));

		img.flush();
		graphics.dispose();
		if (this_char_width > char_width) {
			return 2;
		}
		return 1;
	}
}
