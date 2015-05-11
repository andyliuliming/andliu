package ostc.sh.webconsole.terminals;

import java.awt.AWTEvent;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.event.AdjustmentEvent;
import java.awt.event.AdjustmentListener;
import java.awt.event.ComponentAdapter;
import java.awt.event.ComponentEvent;
import java.awt.event.InputMethodEvent;
import java.awt.event.InputMethodListener;
import java.awt.image.BufferedImage;
import java.io.IOException;

import javax.swing.JScrollBar;

import ostc.sh.webconsole.config.GlobalConfig;
import ostc.sh.webconsole.domain.CharacterImages;
import ostc.sh.webconsole.domain.FontAttributes;
import ostc.sh.webconsole.jsinteract.ZoomChangeable;
import ostc.sh.webconsole.ssh.TerminalShellChannel;
import ostc.sh.webconsole.ssh.TerminalShellDataBuffer;
import ostc.sh.webconsole.util.GraphicsUtil;

/**
 * the terminal is responsible to the terminal view. it's used by the
 * TerminalDaemon to do the paint and so on.
 * 
 * @author andliu
 * 
 */
public class WebConsoleCanvasTerminal extends AbstractTerminal implements InputMethodListener,AutoCloseable,ZoomChangeable {
	private static final long serialVersionUID = 1L;
	private Image cursor_img = null;
	private int char_width = 10; // the width of each character.
	private int char_height = 15; // the height of each character.
	private int descent = 0;
	private int line_space = 1; // the under line size
	private VT100TerminalDaemon daemon = null;
	private TerminalShellChannel shellChannel = null;
	private JScrollBar scrollBar = null;
	private TerminalSelector selector = null;
	private boolean started = false;
	private KeyInputAdapter keyAdapter = null;
	private Thread daemonThread = null;
	private TerminalShellDataBuffer buffer = null;
	
	public WebConsoleCanvasTerminal() {
		setLayout(new BorderLayout(0, 0));
		this.scrollBar = new JScrollBar();
		this.scrollBar.setBackground(Color.LIGHT_GRAY);
		this.scrollBar.setForeground(Color.WHITE);
		this.scrollBar.setBorder(null);
		add(this.scrollBar, BorderLayout.EAST);
		this.ResetStyle();
	}
	
	public void Initialize(TerminalShellChannel shellChannel){
		this.shellChannel = shellChannel;
		Config();
	}
	
	
	public void StartTerminal() {
		if(!this.started){
			this.started = true;
			this.shellChannel.requestResize(this);
			this.buffer = new TerminalShellDataBuffer(this.shellChannel);			
			this.daemon = new VT100TerminalDaemon(buffer, this);
			this.daemonThread = new Thread(this.daemon);
			this.daemonThread.start();
		}
	}
	
	private void ResetScrollBarValue() {
		this.scrollBar.setMaximum(this.currentScreen.windowMarginTop);
		this.scrollBar.setValue(this.currentScreen.windowMarginTop);
	}	
	
	// this should only be called one time.
	private void Config() {
		this.enableEvents(AWTEvent.KEY_EVENT_MASK);
		this.setFocusable(true);
		this.enableInputMethods(true);
		this.setFocusTraversalKeysEnabled(false);
		
		this.addComponentListener(new ComponentAdapter() {
			public void componentResized(ComponentEvent e) {
				ResizeWindow();
			}
		});

		this.scrollBar.addAdjustmentListener(new AdjustmentListener() {
			@Override
			public void adjustmentValueChanged(AdjustmentEvent e) {
				repaint();
			}
		});

		this.selector = new TerminalSelector(this);
		this.keyAdapter = new KeyInputAdapter(this);
		this.addMouseMotionListener(selector);
		this.addMouseListener(selector);
		this.addKeyListener(keyAdapter);
		this.requestFocus();
	}

	private void BuildCursorImage(){
		this.cursor_img = new BufferedImage(this.char_width, this.char_height, BufferedImage.TYPE_INT_RGB);
		Graphics2D cursorGraphics = (Graphics2D) cursor_img.getGraphics();
		cursorGraphics.setColor(FontAttributes.getForeColor(GlobalConfig.Instance().getCurrentAttribute()));
		cursorGraphics.fillRect(0, 0, this.char_width, this.char_height);		
		cursorGraphics.dispose();
	}

	private void CalculateCharSize() {
		BufferedImage img = new BufferedImage(1, 1, BufferedImage.TYPE_INT_RGB);
		Graphics2D graphics = (Graphics2D) (img.getGraphics());
		graphics.setFont(GlobalConfig.Instance().getNormalFont());
		FontMetrics fo = graphics.getFontMetrics();
		descent = fo.getDescent();
		char_width = (int) (fo.charWidth((char) '@'));

		System.err.println("char_width==" + char_width);
		char_height = (int) (fo.getHeight()) ;
		descent += line_space;

		img.flush();
		graphics.dispose();
	}
	
	/**
	 * the d should bigger than 0
	 * 
	 * @param d
	 */
	private void ResizeWindow() {
		if (!(this.getWidth() > 0 && this.getHeight() > 0)) {
			return;
		}
		this.StartTerminal();		
		ResetWindow();
	}
	
	// re-calculate the char size, build the cursor image and so on.
	private void ResetWindow(){
		this.CalculateCharSize();
		this.BuildCursorImage();		
		int terminal_char_width = (int) ((this.getWidth() - scrollBar.getWidth()) / (this.char_width));
		
		System.err.println("terminal_char_width==" + terminal_char_width);
		int terminal_char_height = (int) (this.getHeight() / (this.char_height));
		System.err.println("terminal_char_height==" + terminal_char_height);
		this.AdjustWindow(terminal_char_width, terminal_char_height);

		this.shellChannel.requestResize(this);
	}
	
	@Override
	public void AdjustWindow(int terminalWidth,int terminalHeight){
		this.currentScreen.AdjustWindow(terminalHeight, terminalWidth);
	}	

	@Override
	public int CurrentCharWidth() {
		return  this.char_width;
	}

	@Override
	public int CurrentCharHeight() {
		return this.char_height;
	}
	@Override
	public void SetZoom(float zoom) {
		this.ResetWindow();
		this.repaint();
	}
	
	public void paintComponent(Graphics g) {
		if (!started) {
			return;
		}
		
		int terminal_pix_width = this.currentScreen.terminal_width_in_char * char_width;
		int terminal_pix_height = this.currentScreen.terminal_height_in_char * char_height;
		
		int backgroundAttr = FontAttributes.Normal;
		if (GlobalConfig.Instance().isReverseColorSceenMode()) {
			backgroundAttr = FontAttributes.ReverseColor(backgroundAttr);
		}
		Color background = FontAttributes.getBackgroundColor(backgroundAttr);
		g.setColor(background);
		g.fillRect(0, 0, this.getWidth(), this.getHeight());
		
		BufferedImage newImage = new BufferedImage(terminal_pix_width, terminal_pix_height, BufferedImage.TYPE_INT_RGB);
		Graphics2D newGraphics = (Graphics2D) newImage.getGraphics();
		
		// when the scroll bar is 0, we do not plus 1		
		int scrollLocation = this.scrollBar.getValue();

		if (scrollLocation != 0) {
			scrollLocation++;
		}
		
		for (int y = 0; y < this.currentScreen.terminal_height_in_char; y++) {
			int characterY = scrollLocation + y;
			
			for (int x = 0; x < this.currentScreen.characters[characterY].length;) {
				int fontAttr = this.currentScreen.attributes[characterY][x];
				int lineAttr = this.currentScreen.lineAttributes[characterY];
				char char_to_paint = this.currentScreen.characters[characterY][x];
				if (char_to_paint == '\0') {
					x++;
					continue;
				}
				int width_in_ascii_char = GraphicsUtil.CalculateCharSize(char_to_paint, char_width);
				
				if (GlobalConfig.Instance().isReverseColorSceenMode()) {					
					fontAttr = FontAttributes.ReverseColor(fontAttr);
				}
				
				if (selector.InSelectedRegion(x, characterY)) {
					fontAttr = FontAttributes.ReverseColor(fontAttr);
				}
				
				Image toPaint = CharacterImages.Instance().GetImage(char_to_paint, fontAttr, this.char_width*width_in_ascii_char,this.char_height,this.descent);				
				
				int drawX = 0, drawY = 0, drawWidth = 0, drawHeight = 0;
				
				switch (lineAttr) {
				case FontAttributes.DoubleHeightLineTopHalf:
					drawX = char_width* x * 2;
					drawY = char_height * y;
					drawWidth = char_width*width_in_ascii_char*2;
					drawHeight = char_height;
					newGraphics.drawImage(toPaint, drawX, drawY, drawX+drawWidth, drawY+drawHeight, 0, 0, char_width*width_in_ascii_char, char_height/2,null);
					break;
				case FontAttributes.DoubleHeightLineBottomHalf:
					drawX = char_width* x * 2;
					drawY = char_height * y;
					drawWidth = char_width*width_in_ascii_char*2;
					drawHeight = char_height;
					newGraphics.drawImage(toPaint, drawX, drawY, drawX+drawWidth, drawY+drawHeight, 0, char_height/2, char_width*width_in_ascii_char, char_height,null);
					break;
				case FontAttributes.DoubleWidth:
					drawX = char_width * x * 2;
					drawY = char_height * y;
					drawWidth = char_width*width_in_ascii_char*2;
					drawHeight = char_height;
					newGraphics.drawImage(toPaint, drawX, drawY, drawX + char_width*width_in_ascii_char*2, drawY+drawHeight, 0, 0, char_width*width_in_ascii_char, char_height,null);
					break;
				case FontAttributes.SingleWidth:
					drawX = char_width * x;
					drawY = char_height * y;
					drawWidth = char_width*width_in_ascii_char ;
					drawHeight = char_height;
					newGraphics.drawImage(toPaint, drawX, drawY, drawWidth, drawHeight,  null);
					break;
				default:
					break;
				}
				x++;
			}
		}	

		g.drawImage(newImage, 0, 0, this);	
		
		// draw the cursor.
		g.setXORMode(FontAttributes.getBackgroundColor(GlobalConfig.Instance().getCurrentAttribute()));
		g.drawImage(cursor_img, this.currentScreen.window_x_char_index * char_width, (this.currentScreen.window_y_char_index) * char_height, char_width,char_height,null);
		g.setPaintMode();
	}

	@Override
	public void Refresh(){
		this.repaint();
	}
	
	@Override
	public void PrintChar(char b) {
		int size_in_char = GraphicsUtil.CalculateCharSize(b,this.char_width);
		if(this.currentScreen.window_x_char_index >= this.currentScreen.terminal_width_in_char)
		{
			if (GlobalConfig.Instance().isAutoWrap()) {
				int newY = this.currentScreen.window_y_char_index + 1;
				if (newY > this.currentScreen.scroll_region_end_index) {
					this.ScrollUp();
					newY = this.currentScreen.scroll_region_end_index;
				}

				this.SetCursorPosition(0, newY);
				this.currentScreen.VPrint(b);
				this.SetCursorPosition(1, newY);
			}else {
				this.SetCursorPosition(this.currentScreen.terminal_width_in_char - 1,this.currentScreen.window_y_char_index);
				this.currentScreen.VPrint(b);
			}

		}else{
			this.currentScreen.VPrint(b);
			this.SetCursorPosition(this.currentScreen.window_x_char_index + size_in_char, this.currentScreen.window_y_char_index);
		}
		
		this.repaint();
	}
	
	@Override
	public void CursorLeft() {
		// System.err.println("Cursor Left");		
		this.SetCursorPosition(this.currentScreen.window_x_char_index - 1, this.currentScreen.window_y_char_index);
	}

	@Override
	public void CursorRight() {
		// System.err.println("Cursor Right");
		// if it's bigger than the max X, set to the max 
		this.SetCursorPosition(this.currentScreen.window_x_char_index + 1, this.currentScreen.window_y_char_index);
	}

	@Override
	public void CarriageReturn() {
		// System.err.println("Carriage Return");
		this.SetCursorPosition(0, this.currentScreen.window_y_char_index);
	}

	@Override
	public void Bell() {
		java.awt.Toolkit.getDefaultToolkit().beep();
	}

	@Override
	public void Tab() {
		// TODO implement the tab
		System.err.println("Tab");
	}

	public void Backspace(){
		if ((this.currentScreen.window_x_char_index - 1) < 0) {
			System.err.println("backspace reached the left margin");
			this.SetCursorPosition(0, this.currentScreen.window_y_char_index);
		} else {
			this.SetCursorPosition(this.currentScreen.window_x_char_index - 1, this.currentScreen.window_y_char_index);
		}
	}
	
	@Override
	public void ParamCursorUp(int param) {
		if ((this.currentScreen.window_y_char_index - param) < this.currentScreen.scroll_region_start_index) {
			System.err.println("reached the top margin");
			this.SetCursorPosition(this.currentScreen.window_x_char_index, this.currentScreen.scroll_region_start_index);
		} else {
			this.SetCursorPosition(this.currentScreen.window_x_char_index, this.currentScreen.window_y_char_index - param);
		}
	}

	@Override
	public void ParamCursorLeft(int param) {
		// we should calculate the
		if ((this.currentScreen.window_x_char_index - param) < 0) {
			System.err.println("reached the left margin");
			this.SetCursorPosition(0, this.currentScreen.window_y_char_index);
		} else {
			this.SetCursorPosition(this.currentScreen.window_x_char_index - param, this.currentScreen.window_y_char_index);
		}
	}

	@Override
	public void ParamCursorDown(int param) {
		if ((this.currentScreen.window_y_char_index + param) > this.currentScreen.scroll_region_end_index) {
			System.err.println("reached the bottom margin");
			this.SetCursorPosition(this.currentScreen.window_x_char_index, this.currentScreen.scroll_region_end_index);
		} else {
			this.SetCursorPosition(this.currentScreen.window_x_char_index, this.currentScreen.window_y_char_index + param);
		}
	}

	@Override
	public void ParamCursorRight(int param) {
		// System.err.print("ParamCursorRight " + param);
		if ((this.currentScreen.window_x_char_index + param) > this.currentScreen.terminal_width_in_char) {
			System.err.println("reached the right margin");
			this.SetCursorPosition(this.currentScreen.terminal_width_in_char - 1, this.currentScreen.window_y_char_index);
		} else {
			this.SetCursorPosition(this.currentScreen.window_x_char_index + param, this.currentScreen.window_y_char_index);
		}
	}

	@Override
	public void ChangeScrollRegion(int start, int end) {
		this.currentScreen.ChangeScrollRegion(start, end);
	}

	@Override
	public void CursorHome(){
		if(GlobalConfig.Instance().isOriginMode()){
			this.SetCursorPosition(0, this.CurrentScreen().scroll_region_start_index);
		}else
		{
			this.SetCursorPosition(0, 0);
		}
	}
	
	@Override
	public void SetCursorPosition(int x_ch_index, int y_ch_index) {
		// System.err.println("=====>SetCursorPosition "+x_ch_index+" "+y_ch_index);
		this.currentScreen.SetCursorPosition(x_ch_index, y_ch_index);
		this.repaint();
	}

	//
	// Scroll display up or down.
	// -1 means Scroll display down one line.
	// 1 mean Scroll display up one line.
	@Override
	public void ScrollUp() {		
		this.currentScreen.ScrollUp();	
		ResetScrollBarValue();
		//this.currentScreen.PrintForDebug();
		this.repaint();
	}
	
	@Override
	public void ScrollDown() {		
		this.currentScreen.ScrollDown();	
		ResetScrollBarValue();
		//this.currentScreen.PrintForDebug();
		this.repaint();
	}


	@Override
	public void Erase(int startX, int startY, int endX, int endY,char ch) {
		this.currentScreen.Erase(startX, startY, endX, endY,ch);
		this.repaint();
	}
	
	@Override
	public void ClearCurrentToEnd() {
		// System.err.println("ClearCurrentToEnd");
		this.currentScreen.ClearCurrentToEnd();
		this.repaint();
	}

	@Override
	public void ClearStartToCurrent() {
		// System.err.println("ClearStartToCurrent");
		this.currentScreen.ClearStartToCurrent();
		this.repaint();
	}

	@Override
	public void EraseUp(){
		this.currentScreen.EraseUp();
		this.repaint();
	}
	
	@Override
	public void EraseScreen(){
		this.currentScreen.EraseScreen();
		this.repaint();
	}
	
	@Override
	public void EraseDown() {
		this.currentScreen.EraseDown();
		this.repaint();
	}

	@Override
	public int CurrentTerminalWidth() {
		return this.currentScreen.terminal_width_in_char;
	}

	@Override
	public int CurrentTerminalHeight() {
		return this.currentScreen.terminal_height_in_char;
	}
	
	@Override
	public synchronized void Input(byte[] bytes) {
		// TODO Auto-generated method stub		
		try {
			shellChannel.getOutputStream().write(bytes, 0, bytes.length);
			shellChannel.getOutputStream().flush();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}

	@Override
	public void Input(byte[] bytes,int offset,int length) {
		// TODO Auto-generated method stub
		try {
			shellChannel.getOutputStream().write(bytes, offset, length);
			shellChannel.getOutputStream().flush();
		} catch (IOException e1) {
			e1.printStackTrace();
		}
	}

	@Override
	public void inputMethodTextChanged(InputMethodEvent event) {
		// TODO Auto-generated method stub		
	}

	@Override
	public void caretPositionChanged(InputMethodEvent event) {
		// TODO Auto-generated method stub		
	}

	@Override
	public void close() throws Exception {
		// TODO Auto-generated method stub
		started = false;
	}

}
