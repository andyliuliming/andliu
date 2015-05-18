package ostc.sh.webconsole.error;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 * @author andliu
 * 
 */
public class NetworkIssueNotifier {
	private NetworkIssueNotifier() {

	}

	private List<INetworkIssueCallback> callbacks;
	private static NetworkIssueNotifier config;
	private static Object object = new Object();

	public static NetworkIssueNotifier Instance() {
		if (config == null) {
			synchronized (object) {
				config = new NetworkIssueNotifier();
				config.callbacks = new ArrayList<INetworkIssueCallback>();
			}
		}
		return config;
	}

	public void Register(INetworkIssueCallback network) {
		callbacks.add(network);
	}

	public void NotifyAll() {
		for (INetworkIssueCallback callback : callbacks) {
			callback.NetworkError();
		}
	}
}
