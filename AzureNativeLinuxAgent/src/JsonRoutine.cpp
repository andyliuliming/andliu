#include "JsonRoutine.h"
#include "FileOperator.h"
using namespace std;

JsonRoutine::JsonRoutine()
{
}

int JsonRoutine::ParseHandlerManifest(string &filePath, HandlerManifest &result)
{
    string content;
    FileOperator::get_content(filePath.c_str(), content);
    const char* jsonContent = content.c_str();
    json_object * jarray = json_tokener_parse(jsonContent);
    int arraylen = json_object_array_length(jarray); /*Getting the length of the array*/

    if (arraylen > 0)
    {
        json_object * jvalue;
        jvalue = json_object_array_get_idx(jarray, 0);
        json_object * handlerManifest=NULL;
        json_object_object_get_ex(jvalue, "handlerManifest", &handlerManifest);

        json_object * installCommand = NULL;
        json_object_object_get_ex(jvalue, "handlerManifest", &installCommand);

        json_object * enableCommand = NULL;
        json_object_object_get_ex(jvalue, "handlerManifest",&enableCommand);

        json_object * uninstallCommand = NULL;
        json_object_object_get_ex(jvalue, "handlerManifest",&uninstallCommand);

        json_object * disableCommand = NULL;
        json_object_object_get_ex(jvalue, "handlerManifest",&disableCommand);
        
        const char* installCommandStr = json_object_get_string(installCommand);
        const char* enableCommandStr = json_object_get_string(enableCommand);
        const char* uninstallCommandStr = json_object_get_string(uninstallCommand);
        const char* disableCommandStr = json_object_get_string(disableCommand);
        result.installCommand = installCommandStr;
        result.enableCommand = installCommandStr;
        result.uninstallCommand = uninstallCommandStr;
        result.disableCommand = disableCommandStr;
        return AGENT_SUCCESS;
    }
    else
    {
        return AGENT_FAILED;
    }
    return AGENT_SUCCESS;
}

JsonRoutine::~JsonRoutine()
{
}
