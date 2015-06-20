function getLocalPathSeperator() {
    getOS();
    switch (OSName) {
        case "Windows":
            return "\\";
        default:
            return "/";
    }
}
function useHttps() {
    //if (window.location.protocol != "https:")
    //    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}