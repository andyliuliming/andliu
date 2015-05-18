package ostc.sh.webconsole.test;

import static org.junit.Assert.fail;

import java.awt.FontMetrics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.UnsupportedEncodingException;

import org.junit.Test;

import ostc.sh.webconsole.config.GlobalConfig;

public class CharacterTest {
	@Test
	public void test() throws UnsupportedEncodingException {
		String aa=new String("严");
		
		System.out.println(aa.length());
		System.out.println(aa.charAt(0));
		//'228''184''165'
		byte [] bytear={(byte)228,(byte)184,(byte)165};
		String srt2=new String(bytear,"UTF-8");
		System.out.println(srt2.length());
		System.out.println(srt2.charAt(0));
		
		byte [] bytear2= srt2.getBytes("UTF-8");
		System.out.println(bytear2.length);
		
		
		BufferedImage img = new BufferedImage(1, 1, BufferedImage.TYPE_INT_RGB);
		Graphics2D graphics = (Graphics2D) (img.getGraphics());
		graphics.setFont(GlobalConfig.Instance().getNormalFont());

		FontMetrics fo = graphics.getFontMetrics();
		int char_width = (int) (fo.charWidth((char) '@'));
		int char_width2 = (int) (fo.charWidth((char) srt2.charAt(0)));
		System.out.println(char_width);
		System.out.println( char_width2);
		img.flush();
		graphics.dispose();
		
		
		//fail("Not yet implemented");
	}
}
