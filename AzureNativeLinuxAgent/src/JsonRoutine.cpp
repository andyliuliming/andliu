#include "JsonRoutine.h"

using namespace std;

JsonRoutine::JsonRoutine()
{
}

int JsonRoutine::ParseHandlerManifest(const char * filePath,HandlerManifest &result)
{
    JsonParser *parser;
    JsonNode *node;
    JsonReader *reader;
    int i;

    //g_type_init(); // this is deperecated in 2.36, it's done automatically.
    parser = json_parser_new();  //

    json_parser_load_from_file(parser, filePath, NULL); //
    node = json_parser_get_root(parser); //

    reader = json_reader_new(node);
    int count = json_reader_count_elements(reader);
    if (count > 0)
    {
        json_reader_read_element(reader, 0); //read the i-index element
        json_reader_read_member(reader, "handlerManifest");

        json_reader_read_member(reader, "installCommand");
        const char*installCommand = json_reader_get_string_value(reader);
        result.installCommand = installCommand;
        json_reader_end_member(reader);
        json_reader_read_member(reader, "enableCommand");
        const char *enableCommand = json_reader_get_string_value(reader);
        result.enableCommand = enableCommand;
        json_reader_end_member(reader);
        json_reader_end_member(reader);
    }
    return 0;
}

JsonRoutine::~JsonRoutine()
{
}
