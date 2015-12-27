#include "GoalState.h"
#include "HttpRoutine.h"
#include <iostream>
#ifdef _WIN32
//windows code goes here

#else
//linux code goes here
#include <stdio.h>
#include <libxml/xmlreader.h>
#include <libxml/xmlmemory.h>
#endif
using namespace std;

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

    string result = HttpRoutine::Get("http://168.63.129.16/machine/?comp=goalstate", chunk);

    curl_slist_free_all(chunk);

    xmlDocPtr pdoc = xmlParseMemory(result.c_str(), result.size());
    xmlNodePtr root = xmlDocGetRootElement(pdoc);
    cout << "root name is " << root->name << endl;
#endif
}

void GoalState::Parse(const char *goalStateXmlContent)
{

}


GoalState::~GoalState()
{
}
