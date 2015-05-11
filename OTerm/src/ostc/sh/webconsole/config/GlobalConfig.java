package ostc.sh.webconsole.config;

import java.awt.Color;
import java.awt.Font;
import java.awt.font.TextAttribute;
import java.util.HashMap;
import java.util.Map;

import ostc.sh.webconsole.domain.CharsetEnum;
import ostc.sh.webconsole.domain.FontAttributes;
import ostc.sh.webconsole.jsinteract.ZoomChangeable;
/**
 * 
 * @author andliu
 *
 */
public class GlobalConfig implements ZoomChangeable {
	static GlobalConfig config = null;
	static Object object = new Object();
	private Font NormalFont;
	private Font BordFont;
	private Font UnderlineFont;
	private Font BordUnderlineFont;
	// it's useful to debug.
	private boolean showLineNumber;
	private boolean debug = false;
	private boolean printVerbose = true;
	private boolean autoWrap = true;
	private boolean pausePrint = false;
	// high 3 bit is the fore color
	// high 4-6 bit is the background color
	private int currentAttribute = FontAttributes.Normal;

	private boolean currentCursorKeyModeApplication = false;
	private boolean currentKeypadModeApplication = false;
	private String currentEncoding = "UTF-8";
	private String currentPtyType = "vt100";
	private boolean originMode = false;
	private boolean linefeedMode = false;
	private boolean autoRepeatMode = false;
	private boolean reverseColorSceenMode = false;
	private CharsetEnum G0;
	private CharsetEnum G1;
	
	public static GlobalConfig Instance() {
		if (config == null) {
			synchronized (object) {
				config = new GlobalConfig();				
				config.showLineNumber = false;
			}
		}
		return config;
	}

	@Override
	public void SetZoom(float zoom) {
		// TODO Auto-generated method stub
		String fontName = "Monospaced-"+(int)(13*zoom);
		this.NormalFont = java.awt.Font.decode(fontName);
		this.BordFont = config.NormalFont.deriveFont(java.awt.Font.BOLD);

		Map<TextAttribute, Integer> fontAttributes = new HashMap<TextAttribute, Integer>();
		fontAttributes.put(TextAttribute.UNDERLINE, TextAttribute.UNDERLINE_ON);
		this.UnderlineFont = config.NormalFont.deriveFont(fontAttributes);

		this.BordUnderlineFont = config.UnderlineFont.deriveFont(java.awt.Font.BOLD);
	}

	public int getCurrentAttribute() {
		return currentAttribute;
	}

	public void setCurrentAttribute(int currentAttribute) {
		this.currentAttribute = currentAttribute;
	}
	
	public Font getNormalFont() {
		return NormalFont;
	}

	public Font getBordFont() {
		return BordFont;
	}

	public Font getUnderlineFont() {
		return UnderlineFont;
	}

	public Font getBordUnderlineFont() {
		return BordUnderlineFont;
	}

	public void ResetStyle() {
		currentAttribute = FontAttributes.Normal;
	}

	public void SetForeColor(int foreColorCode) {
		foreColorCode = foreColorCode << (32 - 3);
		// set the CurrentAttribute top 3 bit to 0;
		// >>> means unsigned shift, 
		currentAttribute = (currentAttribute >>> 3) << 3;
		currentAttribute = foreColorCode ^ currentAttribute;
	}

	public void SetBackgroundColor(int backColorCode) {
		backColorCode = backColorCode << (32 - 6);
		currentAttribute = currentAttribute & 0xE3FFFFFF;
		currentAttribute = backColorCode ^ currentAttribute;
	}
	
	// switch the forecolor and the background color
	public void ReverseColor() {
		// reverse color		
		currentAttribute = FontAttributes.ReverseColor(currentAttribute);
	}	


	private final Color[] colors = { Color.BLACK, Color.RED, Color.GREEN, Color.YELLOW, Color.BLUE, Color.MAGENTA, Color.CYAN, Color.WHITE };

	public Color GetColor(int index) {
		if (colors == null || index < 0 || colors.length <= index)
			return null;
		return colors[index];
	}
	
	public void SetBold(boolean isBold) {
		currentAttribute = isBold ? (currentAttribute | FontAttributes.Bord)
				: (currentAttribute & (~FontAttributes.Bord));
	}

	public void SetUnderline(boolean isUnderline) {
		currentAttribute = isUnderline ? (currentAttribute | FontAttributes.Underline)
				: (currentAttribute & (~FontAttributes.Underline));
	}
	
	public static boolean IsTabSet(int currentAttribute){
		boolean isTabSet = ((currentAttribute & FontAttributes.IsTabSet) != 0);
		return isTabSet;
	}	

	public boolean isShowLineNumber() {
		return showLineNumber;
	}

	public void setShowLineNumber(boolean showLineNumber) {
		this.showLineNumber = showLineNumber;
	}

	public boolean isDebug() {
		return debug;
	}

	public void setDebug(boolean debug) {
		this.debug = debug;
	}

	public boolean isAutoWrap() {
		return autoWrap;
	}

	public void setAutoWrap(boolean autoWrap) {
		this.autoWrap = autoWrap;
	}

	public boolean isCurrentKeypadModeApplication() {
		return currentKeypadModeApplication;
	}

	public void setCurrentKeypadModeApplication(boolean currentKeypadModeApplication) {
		this.currentKeypadModeApplication = currentKeypadModeApplication;
	}

	public boolean isCurrentCursorKeyModeApplication() {
		return currentCursorKeyModeApplication;
	}

	public void setCurrentCursorKeyModeApplication(
			boolean currentCursorKeyModeApplication) {
		this.currentCursorKeyModeApplication = currentCursorKeyModeApplication;
	}

	public String getCurrentEncoding() {
		return currentEncoding;
	}

	public void setCurrentEncoding(String currentEncoding) {
		this.currentEncoding = currentEncoding;
	}

	public String getCurrentPtyType() {
		return currentPtyType;
	}

	public void setCurrentPtyType(String currentPtyType) {
		this.currentPtyType = currentPtyType;
	}

	public boolean isOriginMode() {
		return originMode;
	}

	public void setOriginMode(boolean originMode) {
		this.originMode = originMode;
	}

	public boolean isLinefeedMode() {
		return linefeedMode;
	}

	public void setLinefeedMode(boolean linefeedMode) {
		this.linefeedMode = linefeedMode;
	}

	public boolean isPrintVerbose() {
		return printVerbose;
	}

	public void setPrintVerbose(boolean printVerbose) {
		this.printVerbose = printVerbose;
	}

	public boolean isPausePrint() {
		return pausePrint;
	}

	public void setPausePrint(boolean pausePrint) {
		this.pausePrint = pausePrint;
	}

	public boolean isAutoRepeatMode() {
		return autoRepeatMode;
	}

	public void setAutoRepeatMode(boolean autoRepeatMode) {
		this.autoRepeatMode = autoRepeatMode;
	}

	public boolean isReverseColorSceenMode() {
		return reverseColorSceenMode;
	}

	public void setReverseColorSceenMode(boolean reverseColorSceenMode) {
		this.reverseColorSceenMode = reverseColorSceenMode;
	}

	public CharsetEnum getG0() {
		return G0;
	}

	public void setG0(CharsetEnum g0) {
		G0 = g0;
	}

	public CharsetEnum getG1() {
		return G1;
	}

	public void setG1(CharsetEnum g1) {
		G1 = g1;
	}

}
