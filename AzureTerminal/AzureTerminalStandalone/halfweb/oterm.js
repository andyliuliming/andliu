var term;
$(document).ready(function() {
	term = new Terminal({
		cols : 80,
		rows : 24,
		useStyle : true,
		screenKeys : true,
		cursorBlink : false
	});
	term.on('data', function(data) {

		//if(input!=""){
			input+=data;
		//}
		//socket.emit('data', data);
	});
	term.on('title', function(title) {
		document.title = title;
	});
	//term.write('\x1b[31mWelcome to term.js!\x1b[m\r\n');
});

var initialized = false;
var input = "";
function pickInput() {
	var toReturn = input;
	input="";
	return toReturn;
}

function printLog(log){
	alert("log "+log);
}
function flushData(data){
	if(!initialized){
		initialized=true;
		//$("#oterm_proxy").css("display","none");
		var term_region = $("#term_region");
		term.open(term_region[0]);
	}
	
	term.write(data);
}