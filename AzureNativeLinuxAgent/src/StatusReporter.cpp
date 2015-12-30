#include "HttpRoutine.h"
#include "StatusReporter.h"

StatusReporter::StatusReporter()
{
}

void StatusReporter::ReportReady(AzureEnvironment *environment, GoalState * goalState)
{
    string healthReport = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Health xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><GoalStateIncarnation>"
        + goalState->incarnation
        + "</GoalStateIncarnation><Container><ContainerId>"
        + goalState->containerId
        + "</ContainerId><RoleInstanceList><Role><InstanceId>"
        + goalState->roleInstanceId
        + "</InstanceId><Health><State>Ready</State></Health></Role></RoleInstanceList></Container></Health>";
    map<string, string> headers;
    headers["x-ms-agent-name"] = "AzureNativeLinuxAgent";
    headers["Content-Type"] = "text/xml; charset=utf-8";
    headers["x-ms-version"] = "2012-11-30";
    string apiAddress = "http://" + environment->wireServerAddress + "/machine?comp=health";
    HttpRoutine::Post(apiAddress.c_str(), &headers, healthReport.c_str());
}

void StatusReporter::ReportNotReady(AzureEnvironment *environment, GoalState * goalState, const char*status, const char*desc)
{
    string healthReport = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Health xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"><GoalStateIncarnation>"
        + goalState->incarnation
        + "</GoalStateIncarnation><Container><ContainerId>"
        + goalState->containerId
        + "</ContainerId><RoleInstanceList><Role><InstanceId>"
        + goalState->roleInstanceId
        + "</InstanceId><Health><State>NotReady</State>"
        + "<Details><SubStatus>" + status + "</SubStatus><Description>" + desc + "</Description></Details>"
        + "</Health></Role></RoleInstanceList></Container></Health>";
    map<string, string> headers;
    headers["x-ms-agent-name"] = "AzureNativeLinuxAgent";
    headers["Content-Type"] = "text/xml; charset=utf-8";
    headers["x-ms-version"] = "2012-11-30";
    string apiAddress = "http://" + environment->wireServerAddress + "/machine?comp=health";
    HttpRoutine::Post(apiAddress.c_str(), &headers, healthReport.c_str());
}

void StatusReporter::ReportRoleProperties(AzureEnvironment * environment, GoalState * goalState, const char * thumbprint)
{
    string healthReport = ("<?xml version=\"1.0\" encoding=\"utf-8\"?><RoleProperties><Container><ContainerId>"
        + goalState->containerId + "</ContainerId>"
        + "<RoleInstances><RoleInstance>"
        + "<Id>" + goalState->roleInstanceId + "</Id>"
        + "<Properties><Property name=\"CertificateThumbprint\" value=\"" + thumbprint + "\" /></Properties>"
        + "</RoleInstance></RoleInstances></Container></RoleProperties>");
    map<string, string> headers;
    headers["x-ms-agent-name"] = "AzureNativeLinuxAgent";
    headers["Content-Type"] = "text/xml; charset=utf-8";
    headers["x-ms-version"] = "2012-11-30";
    string apiAddress = "http://" + environment->wireServerAddress + "/machine?comp=roleProperties";
    HttpRoutine::Post(apiAddress.c_str(), &headers, healthReport.c_str());
}


StatusReporter::~StatusReporter()
{
}
