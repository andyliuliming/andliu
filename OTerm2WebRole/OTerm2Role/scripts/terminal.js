function renderTerminal() {

    term = new Terminal({
        cols: 120,
        rows: 60,
        useStyle: true,
        screenKeys: true,
        cursorBlink: false
    });
    term.open(document.body);
}
