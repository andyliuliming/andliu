package ostc.sh.webconsole.domain;

import java.awt.Color;
import java.awt.Font;

import ostc.sh.webconsole.config.GlobalConfig;

/**
 * 
 * @author andliu
 *
 */
public class FontAttributes {
	// top 6 for color       
	public final static int Normal = 0xE0000000;
	public final static int ReverseColor = 1;
	public final static int Underline = 1 << 1;
	public final static int Bord = 1 << 2;
	public final static int IsTabSet = 1 << 3;
	public final static int IsVerticalTabSet=1<<4;
	
	public final static int SingleWidth = 0;
	public final static int DoubleHeightLineTopHalf = 1;
	public final static int DoubleHeightLineBottomHalf = 2;
	public final static int DoubleWidth = 3;
	
	public static int ReverseColor(int fontAttr){
		// reverse color		
		int tmp = fontAttr >>> (32 - 6);
		int tmp2 = tmp >>> 3;
		int tmp3 = ((tmp & 0x7) << 3);

		int colorPart = tmp2 | tmp3;
		colorPart = colorPart << (32 - 6);

		int restPart = fontAttr & 0x3FFFFFF;
		fontAttr = colorPart | restPart;
		return fontAttr;
	}
	
	public static int getCharAttributes(int fontAttr){
		//TODO return the real attributes.
		return fontAttr;
	}
	// top 3 bits is the fore color
	public static Color getForeColor(int currentAttribute) {
		/*if(GlobalConfig.Instance().isReverseColorSceenMode()){
			int cu = (currentAttribute << 3) >>> (32 - 3);
			return GlobalConfig.Instance().GetColor(cu);
		}*/
		int cu = currentAttribute >>> (32 - 3);	
		return GlobalConfig.Instance().GetColor(cu);
	}
	
	// top 4-6 bits is the fore color
	public static Color getBackgroundColor(int currentAttribute) {
		/*if(GlobalConfig.Instance().isReverseColorSceenMode()){
			int cu = currentAttribute >>> (32 - 3);	
			return GlobalConfig.Instance().GetColor(cu);
		}*/
		int cu = (currentAttribute << 3) >>> (32 - 3);
		return GlobalConfig.Instance().GetColor(cu);
	}

	
	public static Font getFont(int currentAttribute) {		
		boolean isBold = ((currentAttribute & FontAttributes.Bord) != 0);
		boolean isUnderline = ((currentAttribute & FontAttributes.Underline) != 0);

		if (isBold && isUnderline) {
			return GlobalConfig.Instance().getBordUnderlineFont();
		}

		if (isBold) {
			return GlobalConfig.Instance().getBordFont();
		}
		if (isUnderline) {
			return GlobalConfig.Instance().getUnderlineFont();
		}
		return GlobalConfig.Instance().getNormalFont();
	}
}


