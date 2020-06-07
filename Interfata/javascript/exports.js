function exportWebP(file) {
    console.log('export webp');
    var canvas = document.getElementById("pieChartDistributie");
    var webp = canvas.toDataURL("image/webp");
    var a = document.createElement('a');
    a.href = webp;
    a.download = file;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function exportSVG() {
    /* var canvas = document.getElementById("pieChartDistributie");
     var blob = new Blob([], { type: 'text/svg;charset=utf-8;' });
     var img = canvas.toDataURL("image/png");
     const a = document.createElement("a")
     document.body.appendChild(a)
     a.href = img //URL.createObjectURL(blob)
     a.download = "chart.svg"
     a.click();
     document.body.removeChild(a)*/
}

function exportCSV() {

}