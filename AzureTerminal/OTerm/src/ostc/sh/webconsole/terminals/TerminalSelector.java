package ostc.sh.webconsole.terminals;

import java.awt.Point;
import java.awt.Polygon;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.UnsupportedEncodingException;

import ostc.sh.webconsole.config.GlobalConfig;
import ostc.sh.webconsole.interfaces.ITerminal;
import ostc.sh.webconsole.util.ClipBoardUtil;

public class TerminalSelector extends MouseAdapter{
	
	//the start point in char in current screen
	private Point startPointInChar;
	private Point endPointInChar;
	
	private ITerminal terminal;	
	
	public TerminalSelector(ITerminal terminal){
		this.terminal = terminal;
	}
	
	private void ClearSelection(){
		startPointInChar = null;
		endPointInChar = null;
	}
	
	/**
	 * 
	 * @param x_index this is the x index in char of the screen.
	 * @param y_index this is the y index in char of the screen.
	 * @return
	 */
	public boolean InSelectedRegion(int x_index, int y_index){
		if(startPointInChar==null||endPointInChar==null){
			return false;
		}
		Point p = new Point(x_index,y_index);
		return this.Contains(p);
	}
	
	// calculate the current pixel coordinate to the character in the 
	
	private Point ConvertToScreen(Point currentLocation){
		int highX = currentLocation.x / terminal.CurrentCharWidth();
		int highY = currentLocation.y / terminal.CurrentCharHeight();
		
		return new Point(highX,this.terminal.CurrentScreen().windowMarginTop+highY);
	}
	
	
	private boolean Contains(Point currentLocation){
		Point highPoint = startPointInChar.y > endPointInChar.y ? endPointInChar : startPointInChar;
		Point lowPoint = startPointInChar.y > endPointInChar.y ? startPointInChar : endPointInChar;

		if (highPoint.y == lowPoint.y) {
			Polygon p = new Polygon();
			p.addPoint(highPoint.x, highPoint.y);
			p.addPoint(lowPoint.x, highPoint.y);
			p.addPoint(lowPoint.x, highPoint.y + 1);
			p.addPoint(highPoint.x, highPoint.y + 1);
			boolean contains = p.contains(currentLocation);
			return contains;
		}

		if (highPoint.x < lowPoint.x) {
			Polygon p = new Polygon();
			p.addPoint(highPoint.x, highPoint.y);
			p.addPoint(lowPoint.x, highPoint.y);
			p.addPoint(lowPoint.x, lowPoint.y);
			p.addPoint(highPoint.x, lowPoint.y);
			boolean contains = p.contains(currentLocation);
			return contains;
		} else {
			if (lowPoint.y == (highPoint.y + 1)) {
				Polygon p1 = new Polygon();
				p1.addPoint(highPoint.x, highPoint.y);
				p1.addPoint(terminal.CurrentScreen().terminal_width_in_char * 1, highPoint.y);
				p1.addPoint(terminal.CurrentScreen().terminal_width_in_char * 1, highPoint.y + 1);
				p1.addPoint(highPoint.x, highPoint.y + 1);

				Polygon p2 = new Polygon();
				p2.addPoint(0, lowPoint.y - 1);
				p2.addPoint(lowPoint.x, lowPoint.y - 1);
				p2.addPoint(0, lowPoint.y);
				p2.addPoint(lowPoint.x, lowPoint.y);
				boolean contains= p1.contains(currentLocation)
						|| p2.contains(currentLocation);
				return contains;
			} else {
				Polygon p = new Polygon();
				p.addPoint(highPoint.x, highPoint.y);
				p.addPoint(terminal.CurrentScreen().terminal_width_in_char * 1, highPoint.y);
				p.addPoint(terminal.CurrentScreen().terminal_width_in_char * 1, lowPoint.y - 1);
				p.addPoint(lowPoint.x, lowPoint.y - 1);
				p.addPoint(lowPoint.x, lowPoint.y);
				p.addPoint(0, lowPoint.y);
				p.addPoint(0, highPoint.y + 1);
				boolean contains = p.contains(currentLocation);
				return contains;
			}
		}
	}
	

	public void mouseDragged(MouseEvent e) {
		//System.err.println("mouseDragged" + e.getPoint());
		if (e.getButton() == MouseEvent.BUTTON1) {
			// calculate the
			//System.err.println("mouseDragged" + e.getPoint());
			// TODO: repaint this area since we need to know this area
			// is selected
			//Point endPoint = e.getPoint();
			
			//set the selection point?
			//keep on calculating, the mouse released would reset the points.
			//this.endPointInChar = this.ConverToScreen(endPoint);
		}
		//((WebConsoleCanvasTerminal)terminal).requestFocus();
		//e.consume();
	}
	
	/**
	 * {@inheritDoc}
	 */
	public void mouseClicked(MouseEvent e) {
		// right click
		if(e.getButton() == MouseEvent.BUTTON1){
			Point currentPoint = this.ConvertToScreen(e.getPoint());
			if (!Contains(currentPoint)) {
				//TODO clear the selection.
				this.ClearSelection();
			}
		}
		
		if(e.getButton()==MouseEvent.BUTTON2){
			GlobalConfig.Instance().setPausePrint(!GlobalConfig.Instance().isPausePrint());
		}
		
		if (e.getButton() == MouseEvent.BUTTON3) {
			// if nothing selected
			Point currentPoint = this.ConvertToScreen(e.getPoint());
			if (Contains(currentPoint)) {

				Point highPoint = startPointInChar.y > endPointInChar.y ? endPointInChar : startPointInChar;
				Point lowPoint = startPointInChar.y > endPointInChar.y ? startPointInChar : endPointInChar;

				int highX = highPoint.x ;
				int highY = highPoint.y ;
				int lowX  = lowPoint.x  ;
				int lowY  = lowPoint.y -1 ;
				//
				String tmp = terminal.CurrentScreen().GetSelection(highX, highY, lowX, lowY);
				ClipBoardUtil.setClipboardContents(tmp);
			} else {
				// if we have a copy clip, then paste it
				String toTypeIn = ClipBoardUtil.getClipboardContents();
				if (!toTypeIn.isEmpty()) {
					try {
						byte[] toTypeInArray = toTypeIn.getBytes("UTF-8");
						terminal.Input(toTypeInArray);
					} catch (UnsupportedEncodingException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
				}
			}
		}
		//e.consume();
	}

	public void mousePressed(MouseEvent e) {
		// mouse left click
		if (e.getButton() == MouseEvent.BUTTON1) {
			
			Point eventPoint = e.getPoint();
			int x = 0;
			int y = 0;
			if ((eventPoint.x % terminal.CurrentCharWidth()) == 0) {
				x = eventPoint.x;
			} else {
				x = (eventPoint.x / terminal.CurrentCharWidth()) * terminal.CurrentCharWidth();
			}

			if ((eventPoint.y % terminal.CurrentCharHeight()) == 0) {
				y = eventPoint.y;
			} else {
				y = (eventPoint.y / terminal.CurrentCharHeight()) * terminal.CurrentCharHeight();
			}
			Point startPoint = new Point(x, y);
			this.startPointInChar = this.ConvertToScreen(startPoint);
			System.err.println("startPointInChar" + startPointInChar.x+" "+startPointInChar.y);
		}
		//e.consume();
	}

	public void mouseReleased(MouseEvent e) {
		// mouse left released
		if (e.getButton() == MouseEvent.BUTTON1) {
			System.err.println("mouseReleased" + e.getPoint());
			Point eventPoint = e.getPoint();
			int x = 0;
			int y = 0;
			if ((eventPoint.x % terminal.CurrentCharWidth()) == 0) {
				x = eventPoint.x;
			} else {
				x = (eventPoint.x / terminal.CurrentCharWidth()) * terminal.CurrentCharWidth() + terminal.CurrentCharWidth();
			}

			if ((eventPoint.y % terminal.CurrentCharHeight()) == 0) {
				y = eventPoint.y;
			} else {
				y = (eventPoint.y / terminal.CurrentCharHeight()) * terminal.CurrentCharHeight() + terminal.CurrentCharHeight();
			}
			
			Point endPoint = new Point(x, y);
			this.endPointInChar = this.ConvertToScreen(endPoint);
			System.err.println("endPointInChar" + endPointInChar.x+" "+endPointInChar.y);
			terminal.Refresh();
		}
		//e.consume();
	}
}
