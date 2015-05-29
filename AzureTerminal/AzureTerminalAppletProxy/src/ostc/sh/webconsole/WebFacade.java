package ostc.sh.webconsole;

public interface WebFacade {

	public void SetAction(String action, String parameter);

	public void SetFrontCommandResult(String id, String result);

	public String TakeFrontCommand();
	
	public String TakeOutput();
}
