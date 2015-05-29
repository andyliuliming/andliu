package ostc.sh.webconsole.command;

public class Command {
	private String id;
	private String action;
	private String parameter;

	public Command(String id, String action, String parameter) {
		this.id = id;
		this.action = action;
		this.setParameter(parameter);
	}

	public Command(String action, String parameter) {
		this.id = "";
		this.action = action;
		this.setParameter(parameter);
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getParameter() {
		return parameter;
	}

	public void setParameter(String parameter) {
		this.parameter = parameter;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}
