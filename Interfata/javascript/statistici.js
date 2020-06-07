var currentDataDistributie = [];
var currentDataCombutsibil = []

function setCurrentDataDistributie(data) {
    currentDataDistributie = data;
}

function setCurrentDataCombustibil(data) {
    currentDataCombutsibil = data;
}

function removeLegendData() {
    const legendData = document.getElementById("legendCombustibil");
    while (legendData.firstChild) {
        legendData.removeChild(legendData.lastChild);
    }
}

async function fetchCategNationalaData(url) {
    return Promise.all([
        fetch(url + '&categorie_nationala=Autotractor').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Motocar').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Motocicleta').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Remorca').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Autospeciala').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Autoturism').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Mototriciclu').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Tractor_rutier').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Autoutilitara').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Microbuz').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Motociclu').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Autobuz').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Motoreta').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Motocvadriciclu').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Autorulota').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Autospecializata').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Scuter').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Tractor').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Semiremorca').then(resp => resp.json()),
        fetch(url + '&categorie_nationala=Automobil_mixt').then(resp => resp.json())
    ]);
}

async function fetchCombustibil(url) {
    return Promise.all([
        fetch(url + '&value_name=motorina').then(resp => resp.json()),
        fetch(url + '&value_name=benzina').then(resp => resp.json()),
        fetch(url + '&value_name=hibrid_01').then(resp => resp.json())
    ])
}

function drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

window.onload = function() {
    //canvas distributie
    var selectJudet = document.getElementById('judet_opt');
    var selectAn = document.getElementById('an_opt');
    var selectCategorie = document.getElementById('categorie_opt');
    var info = document.getElementById('printValue');
    var myLegend = document.getElementById("legendaPie");
    var infoCombustibil = document.getElementById("printValueCombust");

    var canvasDistributie = document.getElementById("pieChartDistributie");
    canvasDistributie.width = 400;
    canvasDistributie.height = 400;

    //canvas combustibil

    var selectJudetCombustibil = document.getElementById('judet_opt_combust');
    var selectAnCombustibil = document.getElementById('an_opt_combust');
    var selectChartCombustibil = document.getElementById('chart_opt_combust');

    var canvasCombustibil = document.getElementById("chartCombustibil");
    canvasCombustibil.width = 400;
    canvasCombustibil.height = 400;

    var ctx = canvasDistributie.getContext("2d");

    info.onclick =
        function() {
            filterUrl = 'http://127.0.0.1:8125/api/' + selectAn.value + '/sum?judet=' + selectJudet.value;
            console.log(filterUrl);
            console.log(2 * Math.PI);
            fetchCategNationalaData(filterUrl).then((data) => {
                console.log(data);
                var categoriaL = {
                    "Motociclu": data[10],
                    "Motocvadriciclu": data[13],
                    "Scuter": data[16],
                    "Motoreta": data[12],
                    "Motocar": data[1],
                    "Motocicleta": data[2]
                }

                var categoriaM = {
                    "Autoturism": data[5],
                    "Microbuz": data[9],
                    "Autobuz": data[11],
                    "Autorulota": data[14]
                }

                var categoriaN = {
                    "Autoutilitara": data[8],
                    "Automobil mixt": data[19],
                    "Autospeciala": data[4],
                    "Autospecializata": data[15]
                }

                var categoriaO = {
                    "Remorca": data[3],
                    "Semiremorca": data[18]
                }

                var categoriaT = {
                    "Tractor": data[17],
                    "Tractor rutier": data[7],
                    "Autotractor": data[0]
                }
                var sumCategorii = {
                    "Autotractor": data[0],
                    "Motocicleta": data[1],
                    "Autovehicul_special": data[2],
                    "Autospeciala": data[3],
                    "Tractor_rutier": data[4],
                    "Autoutilitara": data[5],
                    "Autoturism": data[6],
                    "Microbuz": data[7],
                    "Motociclu": data[8],
                    "Autobuz": data[9],
                    "Motoreta": data[10],
                    "Scuter": data[11],
                    "Tractor": data[12],
                }
                var myPiechart;
                if (selectCategorie.value == 'M') {
                    myPiechart = new Piechart({
                        canvas: canvasDistributie,
                        data: categoriaM,
                        colors: ["#0A9669", "#0A9596", "#075C91", "#230791", "#660791", "#91078A"],
                        legend: myLegend
                    });
                    setCurrentDataDistributie(categoriaM);
                }
                if (selectCategorie.value == 'N') {
                    myPiechart = new Piechart({
                        canvas: canvasDistributie,
                        data: categoriaN,
                        colors: ["#0A9669", "#0A9596", "#075C91", "#230791", "#660791", "#91078A"],
                        legend: myLegend
                    });
                    setCurrentDataDistributie(categoriaN);
                }
                if (selectCategorie.value == 'O') {
                    myPiechart = new Piechart({
                        canvas: canvasDistributie,
                        data: categoriaO,
                        colors: ["#0A9669", "#0A9596", "#075C91", "#230791", "#660791", "#91078A"],
                        legend: myLegend
                    });
                    setCurrentDataDistributie(categoriaO);
                }
                if (selectCategorie.value == 'L') {
                    myPiechart = new Piechart({
                        canvas: canvasDistributie,
                        data: categoriaL,
                        colors: ["#0A9669", "#0A9596", "#075C91", "#230791", "#660791", "#91078A"],
                        legend: myLegend
                    });
                    setCurrentDataDistributie(categoriaL);
                }
                if (selectCategorie.value == 'T') {
                    myPiechart = new Piechart({
                        canvas: canvasDistributie,
                        data: categoriaT,
                        colors: ["#0A9669", "#0A9596", "#075C91", "#230791", "#660791", "#91078A"],
                        legend: myLegend
                    });
                    setCurrentDataDistributie(categoriaT);
                }

                myPiechart.draw();
            })
        }

    infoCombustibil.onclick = function() {
        filterUrl = 'http://127.0.0.1:8125/api/' + selectAnCombustibil.value + '/sum?judet=' + selectJudetCombustibil.value;
        fetchCombustibil(filterUrl).then((data) => {
            var sumCombustibil = {
                "Motorina": data[0],
                "Benzina": data[1],
                "Hibrid": data[2]
            }

            const context = canvasCombustibil.getContext('2d');
            removeLegendData();

            context.clearRect(0, 0, canvasCombustibil.width, canvasCombustibil.height);

            var myLegend = document.getElementById("legendaCombustibil");
            if (selectChartCombustibil.value == 'piechart') {
                myPiechart = new Piechart({
                    canvas: canvasCombustibil,
                    data: sumCombustibil,
                    colors: ["#0A9669", "#0A9596", "#075C91", "#230791", "#660791", "#91078A"],
                    legend: myLegend
                });
                myPiechart.draw();
                setCurrentDataCombustibil(sumCombustibil);
            } else {

                var myBarchart = new Barchart({
                    canvas: canvasCombustibil,
                    seriesName: "Procente utilizare combustibil",
                    padding: 40,
                    gridScale: 10000,
                    gridColor: "#4d4d4d",
                    data: sumCombustibil,
                    colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743"]
                });
                myBarchart.draw();
                setCurrentDataCombustibil(sumCombustibil);
            }

        })
    }

    var exporta = document.getElementById("exporta");
    var selectFormatExport = document.getElementById('export_opt');

    var exportaCombustibil = document.getElementById("exportaCombustibil");
    var selectFormatExportCombustibil = document.getElementById('export_opt_combust');
    exportaCombustibil.onclick =
        function() {
            var data = currentDataCombutsibil;
            if (selectFormatExportCombustibil.value == 'SVG') exportSVG("combustibil.svg");
            else if (selectFormatExportCombustibil.value == 'WebP') exportWebP("combustibil.webp", "chartCombustibil");
            else exportCSV("combustibil.csv", data);
        }

    exporta.onclick =
        function() {
            var data = currentDataDistributie;
            if (selectFormatExport.value == 'SVG') exportSVG("date.svg");
            else if (selectFormatExport.value == 'WebP') exportWebP("date.webp", "pieChartDistributie");
            else exportCSV("date.csv", data);
        }
}