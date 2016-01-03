#include <iostream>

#include "JsonRoutine.h"

#ifdef _WIN32
#else
#endif
using namespace std;

JsonRoutine::JsonRoutine()
{
}

#ifdef _WIN32
#else
JsonNode * JsonRoutine::ParseFile(const char * filePath)
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
    cout << "handlerManifest count is: " << count << endl;
    for (i = 0; i < count; ++i)
    {
        json_reader_read_element(reader, i); //read the i-index element
        json_reader_read_member(reader, "handlerManifest");
        json_reader_read_member(reader, "installCommand");
        printf("install command is %s\n", json_reader_get_string_value(reader));
        json_reader_end_member(reader);
        json_reader_read_member(reader, "enableCommand");
        printf("enable command is %s\n", json_reader_get_string_value(reader));
    }
    return nullptr;
}
#endif

JsonRoutine::~JsonRoutine()
{
}
