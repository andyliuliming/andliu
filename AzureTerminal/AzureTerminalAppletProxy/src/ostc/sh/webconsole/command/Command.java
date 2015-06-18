package ostc.sh.webconsole.command;

public class Command {
	private String id;
	private String action;
	private String parameter1;
	private String parameter2;
	private String parameter3;

	/* private String[] parameters; */
	public Command(String id, String action, String parameter1,
			String parameter2, String parameter3) {
		this.id = id;
		this.action = action;
		this.setParameter1(parameter1);
		this.setParameter2(parameter2);
		this.setParameter3(parameter3);
		/* parameters = parameter; */
	}

	public Command(String id, String action, String parameter1,
			String parameter2) {
		this.id = id;
		this.action = action;
		this.setParameter1(parameter1);
		this.setParameter2(parameter2);
		/* parameters = parameter; */
	}

	public Command(String id, String action, String parameter1) {
		this.id = "";
		this.action = action;
		this.setParameter1(parameter1);
		/* parameters = parameter; */
	}

	public Command(String action, String parameter1) {
		this.id = "";
		this.action = action;
		this.setParameter1(parameter1);
		/* parameters = parameter; */
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

	public String getParameter1() {
		return parameter1;
	}

	public void setParameter1(String parameter1) {
		this.parameter1 = parameter1;
	}

	public String getParameter2() {
		return parameter2;
	}

	public void setParameter2(String parameter2) {
		this.parameter2 = parameter2;
	}

	public String getParameter3() {
		return parameter3;
	}

	public void setParameter3(String parameter3) {
		this.parameter3 = parameter3;
	}

	/*
	 * public String[] getParameters() { return parameters; }
	 * 
	 * public void setParameters(String[] parameters) { this.parameters =
	 * parameters; }
	 */

}
