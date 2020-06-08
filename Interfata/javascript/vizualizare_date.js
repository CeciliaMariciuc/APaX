var currentDataTabel = [];

function setCurrentDataTabel(data) {
    currentDataTabel = data;
}
async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        if (key != '_id') {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            if (key != '_id') {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
}

function removeData() {
    const tableData = document.getElementById("tabel");
    while (tableData.firstChild) {
        tableData.removeChild(tableData.lastChild);
    }
}

window.onload = function() {

    var filter_url;
    var selectJudet = document.getElementById('judet_opt');
    var selectAn = document.getElementById('an_opt');
    var selectCategorieNationala = document.getElementById('categ_nat_opt');
    var selectMarca = document.getElementById('marca_opt');
    var info = document.getElementById('printValue');
    var displayMesaj = document.getElementById('noData');
    filterUrl = 'http://127.0.0.1:8125/api/' + selectAn.value + '/filter?judet=' + selectJudet.value + '&categorie_nationala=' + selectCategorieNationala.value + '&marca=' + selectMarca.value;
    fetchData(filterUrl).then((data) => {
        let table = document.querySelector("table");
        generateTable(table, data);
        generateTableHead(table, Object.keys(data[0]));
    })

    info.onclick =
        function() {
            filterUrl = 'http://127.0.0.1:8125/api/' + selectAn.value + '/filter?judet=' + selectJudet.value + '&categorie_nationala=' + selectCategorieNationala.value + '&marca=' + selectMarca.value;
            fetchData(filterUrl).then((data) => {
                let table = document.querySelector("table");
                removeData();
                generateTable(table, data);
                setCurrentDataTabel(data);
                if (data[0] == null) {
                    console.log('gol');
                    displayMesaj.style.display = "block";
                } else {
                    displayMesaj.style.display = "none";
                    generateTableHead(table, Object.keys(data[0]));
                }
            })

        }

    var exporta = document.getElementById("exportaTabel");
    var selectFormatExportTabel = document.getElementById('export_opt_tabel');
    exporta.onclick =
        function() {
            var data = currentDataTabel;
            if (selectFormatExportTabel.value == 'SVG') exportSVG("tabel.svg");
            else if (selectFormatExportTabel.value == 'WebP') exportWebP("tabel.webp", "tabel");
            else exportCSV("tabel.csv", data);
        }
}