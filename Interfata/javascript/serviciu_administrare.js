function checkPassword() {
    if (document.getElementById('password').value == 'hello') {
        alert('Correct Password!');
        location.href = "http://127.0.0.1:8125/administrare";
    } else {
        alert('Wrong Password!');
        return false;
    }
}

function deleteData(item, url) {
    return fetch(url + '/' + item, {
        method: 'delete'
    }).then(response =>
        response.json().then(json => {
            return json;
        })
    );
}

function insertData(item, url) {
    return fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
}

function updateData(item, url, id) {
    return fetch(url + '/' + id, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
}

currentOp = null;

function setCurrentOp(operatie) {
    currentOp = operatie;
}

function showOperatie(operatie) {

    var inserareOp = document.getElementById('inserareDate');
    var stergereOp = document.getElementById('stergereDate');
    var actualizareOp = document.getElementById('actualizareDate');

    inserareOp.style.display = "none";
    stergereOp.style.display = "none";
    actualizareOp.style.display = "none";

    document.getElementById(operatie).style.display = "flex";

}

window.onload = function() {
    var operatie = document.getElementById('operatie_opt');
    var alegeOperatie = document.getElementById('operatieAleasa');
    var colectie = document.getElementById('colectie_an_opt');
    var executaInserare = document.getElementById('executaInserare');
    var executaStergere = document.getElementById('executaStergere')
    var executaActualizare = document.getElementById('executaActualizare')

    alegeOperatie.onclick = function() {
        showOperatie(operatie.value);
        setCurrentOp(operatie.value);
    }

    executaInserare.onclick = function() {
        var judet = document.getElementById('judet_inserare');
        var categ_nationala = document.getElementById('categ_nationala_inserare');
        var categ_comunitara = document.getElementById('categ_comunitara_inserare');
        var marca = document.getElementById('marca');
        var descr_comerciala = document.getElementById('descr_comerciala_inserare');
        var value_name = document.getElementById('value_name_inserare');
        var t_vehicule = document.getElementById('t_vehicule_inserare');
        var object = {
            "JUDET": judet.value,
            "CATEGORIE_NATIONALA": categ_nationala.value,
            "CATEGORIE_COMUNITARA": categ_comunitara.value,
            "MARCA": marca.value,
            "DESCRIERE_COMERCIALA": descr_comerciala.value,
            "VALUE_NAME": value_name.value,
            "TOTAL_VEHICULE": parseInt(t_vehicule.value)
        }
        insertData(object, 'http://127.0.0.1:8125/api/' + colectie.value).then((data) => {
            document.getElementById("raspunsInserare").innerHTML = JSON.stringify(data);
            console.log(data);
        })
    }
    executaStergere.onclick = function() {
        var id = document.getElementById('id_stergere');
        console.log(id.value);
        deleteData(id.value, 'http://127.0.0.1:8125/api/' + colectie.value).then((data) => {
            console.log(data);
            document.getElementById("raspunsStergere").innerHTML = JSON.stringify(data);
        })
    }
    executaActualizare.onclick = function() {
        var id = document.getElementById('id_actualizare');
        var judet = document.getElementById('judet_actualizare');
        var categ_nationala = document.getElementById('categ_nationala_actualizare');
        var categ_comunitara = document.getElementById('categ_comunitara_actualizare');
        var marca = document.getElementById('marca_actualizare');
        var descr_comerciala = document.getElementById('descr_comerciala_actualizare');
        var value_name = document.getElementById('value_name_actualizare');
        var t_vehicule = document.getElementById('t_vehicule_actualizare');
        var object = {
            "JUDET": judet.value,
            "CATEGORIE_NATIONALA": categ_nationala.value,
            "CATEGORIE_COMUNITARA": categ_comunitara.value,
            "MARCA": marca.value,
            "DESCRIERE_COMERCIALA": descr_comerciala.value,
            "VALUE_NAME": value_name.value,
            "TOTAL_VEHICULE": parseInt(t_vehicule.value)
        }
        console.log(object);
        updateData(object, 'http://127.0.0.1:8125/api/' + colectie.value, id.value).then((data) => {
            console.log(data);
            document.getElementById("raspunsActualizare").innerHTML = JSON.stringify(data);
        })
    }
}