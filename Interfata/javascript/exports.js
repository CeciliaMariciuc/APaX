function exportWebP(file, chart) {
    console.log('export webp');
    if (chart != 'tabel') {
        var canvas = document.getElementById(chart);
        var webp = canvas.toDataURL("image/webp");
        var a = document.createElement('a');
        a.href = webp;
        a.download = file;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        html2canvas(document.getElementById("tabel"), {
            onrendered: function(canvas) {
                var webp = canvas.toDataURL("image/webp");
                var a = document.createElement('a');
                a.href = webp;
                a.download = file;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        })
    }
}

function exportSVG(file, data) {
    //in lucru...
    var svg = '<?xml version="1.0" standalone="yes"?>';
    svg += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
    svg += '<svg width="1065px" height="529px" xmlns="http://www.w3.org/2000/svg" version="1.1">';

    saveAs(new Blob([svg], { type: "application/svg+xml" }), "file");

}

function exportCSV(filename, data) {

    //second answear: https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
    var csv = '';
    var keys = Object.keys(data);
    keys.forEach(key => csv = csv + key + " , " + JSON.stringify(data[key]) + '\n');
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        var a = document.createElement("a");
        if (a.download !== undefined) {
            var url = URL.createObjectURL(blob);
            a.setAttribute("href", url);
            a.setAttribute("download", filename);
            a.style.visibility = 'hidden';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
}