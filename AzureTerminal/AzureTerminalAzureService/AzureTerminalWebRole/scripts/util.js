var isFirefox = false;
var isMSIE = false;
var isChrome = false;

function getInnerText(element) {
    if (!(isChrome || isMSIE || isFirefox)) {
        isMSIE = !!~window.navigator.userAgent.indexOf('MSIE');
        isMSIE = this.isMSIE || !!~window.navigator.userAgent.indexOf('Trident');
        isFirefox = !!~window.navigator.userAgent.indexOf('Firefox');
        isChrome = !!~window.navigator.userAgent.indexOf('Chrome');
    }

    if (isFirefox) {
        return element.textContent;
    }
    return element.innerText;
}