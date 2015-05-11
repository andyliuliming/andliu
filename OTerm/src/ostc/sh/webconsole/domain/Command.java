package ostc.sh.webconsole.domain;
/***
 * 
 * @author andliu
 *
 */
public class Command {
	public EscapePattern pattern = null;
	public int Parameters[] = null;
	public int ParameterCount;

	public Command() {
		//this.pattern = EscapePattern.None;
		this.ParameterCount=0;
		this.Parameters = new int[10];
	}
}
