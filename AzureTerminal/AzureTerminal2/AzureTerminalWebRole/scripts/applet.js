function initializeApplet() {
    var attributes = {
        id: 'otermApplet',
        code: 'ostc.sh.webconsole.OTermApplet.class',
        width: '0',
        height: '0',
        margin: '0'
    };

    var parameters = {
        jnlp_href: './java/WebConsole.jnlp',
        initial_focus: 'false'
    };

    deployJava.runApplet(attributes, parameters, '1.7');

}