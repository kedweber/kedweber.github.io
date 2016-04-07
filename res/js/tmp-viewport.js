function getViewportWidth(that) {
    var widthz = -1;
    var elem = (document.compatMode === "CSS1Compat") ?
        document.documentElement :
        document.body;

    var height = elem.clientHeight;
    var width = elem.clientWidth;

    console.log('function getViewportWidth');
    console.log(window.onresize(getViewportWidth(this)));
    console.log('compatMode: ' + document.compatMode + '; width: ' + width + '; height: ' + height);

}
