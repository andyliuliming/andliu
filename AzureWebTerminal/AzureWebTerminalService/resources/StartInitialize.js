if (window.parent !== window) {
    window.parent.postMessage({
        startinitialize: true
    }, "*");
}
