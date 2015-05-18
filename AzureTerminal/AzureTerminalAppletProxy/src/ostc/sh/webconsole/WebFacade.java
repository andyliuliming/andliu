package ostc.sh.webconsole;

public interface WebFacade {

	public void SetAction(String action, String parameter);
	
	public String GetOutput();
	
	public String IsSignedIn();
}
