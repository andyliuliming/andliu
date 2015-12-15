package ostc.sh.webconsole.command;

public class CommandResult {
	private String id;
	private String action;
	private String[] parameters;

	public CommandResult(String id, String action, String[] parameter) {
		this.id = id;
		this.action = action;
		parameters = parameter;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String[] getParameters() {
		return parameters;
	}

	public void setParameters(String[] parameters) {
		this.parameters = parameters;
	}

}
