package ostc.sh.webconsole.domain;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.util.HashMap;
import java.util.Map;

/**
 * 
 * @author andliu
 *
 */

class FontImagesForChar{
	private Map<Integer, Image> images = null;
	char[] toPaintData = new char[1];
	public FontImagesForChar(char c){
		toPaintData[0] = c;
		images = new HashMap<Integer,Image>();
	}

    public Image getImage(int fontAttr, int charWidth, int charHeight, int descent) {
    	//TODO comment out the optimization, because the optimization would make the looks bad.
    	/*if(images.containsKey(fontAttr))
            return images.get(fontAttr);*/

        Color foreColor = FontAttributes.getForeColor(fontAttr);
        Font font = FontAttributes.getFont(fontAttr);
        Color backgroundColor = FontAttributes.getBackgroundColor(fontAttr);
       
        Image image = new BufferedImage(charWidth, charHeight, BufferedImage.TYPE_INT_RGB);
        Graphics g = image.getGraphics();
        g.setColor(backgroundColor);
        g.fillRect(0, 0, charWidth, charHeight);
        g.setColor(foreColor);        
        g.setFont(font);
        
        g.drawChars(toPaintData, 0, 1, 0, charHeight - descent);

        images.put(fontAttr, image);
        return image;
    }
}

public class CharacterImages {
	private Map<Character, FontImagesForChar> images;

	private CharacterImages() {
		images = new HashMap<Character, FontImagesForChar>();
	}

	private static CharacterImages instance = null;
	static Object object = new Object();

	public static CharacterImages Instance() {
		if (instance == null) {
			synchronized (object) {
				instance = new CharacterImages();
			}
		}
		return instance;
	}
	
	public Image GetImage(char c, int fontAttr, int charWidth,int charHeight,int descent){
		//TODO comment out the optimization, because the optimization would make the looks bad.
		 if(images.containsKey(c)){
	            return images.get(c).getImage(fontAttr, charWidth, charHeight, descent);
		 }
		 else
		 {
			 FontImagesForChar fontImagesForChar = new FontImagesForChar(c);
			 images.put(c,fontImagesForChar);
			 return fontImagesForChar.getImage(fontAttr, charWidth, charHeight, descent);
		 }
	}
}
