function InitializeFileCopy() {
}

function RefreshLocalDropBox(items) {
    $("#copy_file_dialog_local_selections").empty();
    for (var i = 0; i < items.length; i++) {
        var opt = $("<option></option>").attr("value", items[i]);
        $("#copy_file_dialog_local_selections").append(opt);
    }
}
function RefreshLocalList(fileItems) {
    $("#copy_file_dialog_local_list_view >ul").empty();
    for (var i = 0; i < fileItems.length; i++) {
        var opt = $("<li></li>").html(fileItems[i]);
        $("#copy_file_dialog_local_list_view>ul").append(opt);
    }
}


function test_refresh_local_list() {

    var fileItems = ['..', 'Program Files'];
    RefreshLocalList(fileItems);

    RefreshLocalDropBox(fileItems);
}