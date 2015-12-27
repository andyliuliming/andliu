#include "GoalState.h"
#include "HttpRoutine.h"
#ifdef _WIN32
//windows code goes here

#else
//linux code goes here
#endif


GoalState::GoalState()
{
}

void GoalState::UpdateGoalState()
{
#ifdef _WIN32
#else
    struct curl_slist *chunk = NULL;

    /* Add a custom header */
    /*"x-ms-agent-name": GuestAgentName,
        "x-ms-version" : ProtocolVersion*/
    chunk = curl_slist_append(chunk, "x-ms-agent-name: WALinuxAgent");

    /* Modify a header curl otherwise adds differently */
    chunk = curl_slist_append(chunk, "x-ms-version: 2012-11-30");

    /* set our custom set of headers */

    HttpRoutine::Get("http://168.63.129.16/machine/?comp=goalstate", chunk);

    curl_slist_free_all(chunk);
#endif
}

void GoalState::Parse(const char *goalStateXmlContent)
{

}


GoalState::~GoalState()
{
}
