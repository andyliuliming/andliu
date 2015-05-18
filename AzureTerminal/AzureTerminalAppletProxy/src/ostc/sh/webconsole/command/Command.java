package ostc.sh.webconsole.command;

public class Command {
	private String action;
	private String parameter;

	public Command(String action, String parameter) {
		// TODO Auto-generated constructor stub
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

}
