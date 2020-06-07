async function fetchAsyncData(url1, url2, url3, url4, url5) {
    return Promise.all([
        fetch(url1).then(resp => resp.json()),
        fetch(url2).then(resp => resp.json()),
        fetch(url3).then(resp => resp.json()),
        fetch(url4).then(resp => resp.json()),
        fetch(url5).then(resp => resp.json())
    ]);
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(45.9432, 24.9668),
        zoom: 7,
        gestureHandling: 'cooperative'
    });

    var vaslui = {
        lat: 46.6407,
        lng: 27.7276
    };
    

    var markerVS = new google.maps.Marker({
        position: vaslui,
        map: map,
        title: 'Vaslui',
        icon: {
            path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            scale: 5,
            strokeColor: "#7fd4d2"
        }
    });

    fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=vaslui", 'http://127.0.0.1:8125/api/2016/sum?judet=vaslui', 'http://127.0.0.1:8125/api/2017/sum?judet=vaslui', 'http://127.0.0.1:8125/api/2018/sum?judet=vaslui', 'http://127.0.0.1:8125/api/2019/sum?judet=vaslui')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringVS =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Vaslui:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowVS = new google.maps.InfoWindow({
                content: contentStringVS,
                maxWidth: 200
            });

            markerVS.addListener('click', function() {
                infowindowVS.open(map, markerVS);
            });

        })

        //Judetul Iasi

        var iasi = {
            lat: 47.151726,
            lng: 27.587914
        };

        var markerIS = new google.maps.Marker({
            position: iasi,
            map: map,
            title: 'Iasi',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=iasi", 'http://127.0.0.1:8125/api/2016/sum?judet=iasi', 'http://127.0.0.1:8125/api/2017/sum?judet=iasi', 'http://127.0.0.1:8125/api/2018/sum?judet=iasi', 'http://127.0.0.1:8125/api/2019/sum?judet=iasi')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringIS =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Iasi:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowIS = new google.maps.InfoWindow({
                content: contentStringIS,
                maxWidth: 200
            });

            markerIS.addListener('click', function() {
                infowindowIS.open(map, markerIS);
            });

        })

        //Judetul Botosani

        var botosani = {
            lat: 47.75,
            lng: 26.6666698
        };

        var markerBT = new google.maps.Marker({
            position: botosani,
            map: map,
            title: 'Botosani',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=botosani", 'http://127.0.0.1:8125/api/2016/sum?judet=botosani', 'http://127.0.0.1:8125/api/2017/sum?judet=botosani', 'http://127.0.0.1:8125/api/2018/sum?judet=botosani', 'http://127.0.0.1:8125/api/2019/sum?judet=botosani')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringBT =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Botosani:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowBT = new google.maps.InfoWindow({
                content: contentStringBT,
                maxWidth: 200
            });

            markerBT.addListener('click', function() {
                infowindowBT.open(map, markerBT);
            });

        })

        //Judetul Suceava

        var suceava = {
            lat: 47.6333313,
            lng: 26.25
        };

        var markerSV = new google.maps.Marker({
            position: suceava,
            map: map,
            title: 'Suceava',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=suceava", 'http://127.0.0.1:8125/api/2016/sum?judet=suceava', 'http://127.0.0.1:8125/api/2017/sum?judet=suceava', 'http://127.0.0.1:8125/api/2018/sum?judet=suceava', 'http://127.0.0.1:8125/api/2019/sum?judet=suceava')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringSV =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Suceava:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowSV = new google.maps.InfoWindow({
                content: contentStringSV,
                maxWidth: 200
            });

            markerSV.addListener('click', function() {
                infowindowSV.open(map, markerSV);
            });

        })

        //Judetul Bacau

        var bacau = {
            lat: 46.5671806,
            lng: 26.9138393
        };

        var markerBC = new google.maps.Marker({
            position: bacau,
            map: map,
            title: 'Bacau',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=bacau", 'http://127.0.0.1:8125/api/2016/sum?judet=bacau', 'http://127.0.0.1:8125/api/2017/sum?judet=bacau', 'http://127.0.0.1:8125/api/2018/sum?judet=bacau', 'http://127.0.0.1:8125/api/2019/sum?judet=bacau')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringBC =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Bacau:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowBC = new google.maps.InfoWindow({
                content: contentStringBC,
                maxWidth: 200
            });

            markerBC.addListener('click', function() {
                infowindowBC.open(map, markerBC);
            });

        })

        //Judetul Bacau

        var galati = {
            lat: 45.4500008,
            lng: 28.0499992
        };

        var markerGL = new google.maps.Marker({
            position: galati,
            map: map,
            title: 'Galati',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=galati", 'http://127.0.0.1:8125/api/2016/sum?judet=galati', 'http://127.0.0.1:8125/api/2017/sum?judet=galati', 'http://127.0.0.1:8125/api/2018/sum?judet=galati', 'http://127.0.0.1:8125/api/2019/sum?judet=galati')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringGL =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Galati:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowGL = new google.maps.InfoWindow({
                content: contentStringGL,
                maxWidth: 200
            });

            markerGL.addListener('click', function() {
                infowindowGL.open(map, markerGL);
            });

        })

        //Judetul Constanta

        var constanta = {
            lat: 44.1807289,
            lng: 28.6343193
        };

        var markerCT = new google.maps.Marker({
            position: constanta,
            map: map,
            title: 'Constanta',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=constanta", 'http://127.0.0.1:8125/api/2016/sum?judet=constanta', 'http://127.0.0.1:8125/api/2017/sum?judet=constanta', 'http://127.0.0.1:8125/api/2018/sum?judet=constanta', 'http://127.0.0.1:8125/api/2019/sum?judet=constanta')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringCT =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Constanta:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowCT = new google.maps.InfoWindow({
                content: contentStringCT,
                maxWidth: 200
            });

            markerCT.addListener('click', function() {
                infowindowCT.open(map, markerCT);
            });

        })

        //Judetul Brasov

        var brasov = {
            lat: 45.6486092,
            lng: 25.6061306
        };

        var markerBV = new google.maps.Marker({
            position: brasov,
            map: map,
            title: 'Brasov',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=brasov", 'http://127.0.0.1:8125/api/2016/sum?judet=brasov', 'http://127.0.0.1:8125/api/2017/sum?judet=brasov', 'http://127.0.0.1:8125/api/2018/sum?judet=brasov', 'http://127.0.0.1:8125/api/2019/sum?judet=brasov')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringBV =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Brasov:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowBV = new google.maps.InfoWindow({
                content: contentStringBV,
                maxWidth: 200
            });

            markerBV.addListener('click', function() {
                infowindowBV.open(map, markerBV);
            });

        })

        //Judetul Dolj

        var craiova = {
            lat: 44.3166695,
            lng: 23.7999992
        };

        var markerDJ = new google.maps.Marker({
            position: craiova,
            map: map,
            title: 'Craiova',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=dolj", 'http://127.0.0.1:8125/api/2016/sum?judet=dolj', 'http://127.0.0.1:8125/api/2017/sum?judet=dolj', 'http://127.0.0.1:8125/api/2018/sum?judet=dolj', 'http://127.0.0.1:8125/api/2019/sum?judet=dolj')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringDJ =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Dolj:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowDJ = new google.maps.InfoWindow({
                content: contentStringDJ,
                maxWidth: 200
            });

            markerDJ.addListener('click', function() {
                infowindowDJ.open(map, markerDJ);
            });

        })

        //Judetul Arad

        var arad = {
            lat: 46.1833305,
            lng: 21.3166695
        };

        var markerAR = new google.maps.Marker({
            position: arad,
            map: map,
            title: 'Arad',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=arad", 'http://127.0.0.1:8125/api/2016/sum?judet=arad', 'http://127.0.0.1:8125/api/2017/sum?judet=arad', 'http://127.0.0.1:8125/api/2018/sum?judet=arad', 'http://127.0.0.1:8125/api/2019/sum?judet=arad')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringAR =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Arad:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowAR = new google.maps.InfoWindow({
                content: contentStringAR,
                maxWidth: 200
            });

            markerAR.addListener('click', function() {
                infowindowAR.open(map, markerAR);
            });

        })

         //Judetul Sibiu

         var sibiu = {
            lat: 45.7999992,
            lng: 24.1499996
        };

        var markerSB = new google.maps.Marker({
            position: sibiu,
            map: map,
            title: 'Sibiu',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=sibiu", 'http://127.0.0.1:8125/api/2016/sum?judet=sibiu', 'http://127.0.0.1:8125/api/2017/sum?judet=sibiu', 'http://127.0.0.1:8125/api/2018/sum?judet=sibiu', 'http://127.0.0.1:8125/api/2019/sum?judet=sibiu')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringSB =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Sibiu:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowSB = new google.maps.InfoWindow({
                content: contentStringSB,
                maxWidth: 200
            });

            markerSB.addListener('click', function() {
                infowindowSB.open(map, markerSB);
            });

        })

        //Judetul Bihor

        var oradea = {
            lat: 47.0457993,
            lng: 21.9183292
        };

        var markerBH = new google.maps.Marker({
            position: oradea,
            map: map,
            title: 'Bihor',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=bihor", 'http://127.0.0.1:8125/api/2016/sum?judet=bihor', 'http://127.0.0.1:8125/api/2017/sum?judet=bihor', 'http://127.0.0.1:8125/api/2018/sum?judet=bihor', 'http://127.0.0.1:8125/api/2019/sum?judet=bihor')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringBH =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Bihor:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowBH = new google.maps.InfoWindow({
                content: contentStringBH,
                maxWidth: 200
            });

            markerBH.addListener('click', function() {
                infowindowBH.open(map, markerBH);
            });

        })

        //Judetul Arges

        var pitesti = {
            lat: 44.8499985,
            lng: 24.8666706
        };

        var markerBH = new google.maps.Marker({
            position: pitesti,
            map: map,
            title: 'Arges',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=arges", 'http://127.0.0.1:8125/api/2016/sum?judet=arges', 'http://127.0.0.1:8125/api/2017/sum?judet=arges', 'http://127.0.0.1:8125/api/2018/sum?judet=arges', 'http://127.0.0.1:8125/api/2019/sum?judet=arges')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringAG =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Arges:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowAG = new google.maps.InfoWindow({
                content: contentStringAG,
                maxWidth: 200
            });

            markerAG.addListener('click', function() {
                infowindowAG.open(map, markerAG);
            });

        })

         //Judetul Braila

         var braila = {
            lat: 45.2666702,
            lng: 27.9833298
        };

        var markerBR = new google.maps.Marker({
            position: braila,
            map: map,
            title: 'Braila',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=braila", 'http://127.0.0.1:8125/api/2016/sum?judet=braila', 'http://127.0.0.1:8125/api/2017/sum?judet=braila', 'http://127.0.0.1:8125/api/2018/sum?judet=braila', 'http://127.0.0.1:8125/api/2019/sum?judet=braila')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringBR =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Braila:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowBR = new google.maps.InfoWindow({
                content: contentStringBR,
                maxWidth: 200
            });

            markerBR.addListener('click', function() {
                infowindowBR.open(map, markerBR);
            });

        })

         //Judetul Cluj

         var cluj = {
            lat: 46.7666702,
            lng: 23.6000004
        };

        var markerCJ = new google.maps.Marker({
            position: cluj,
            map: map,
            title: 'Cluj',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=cluj", 'http://127.0.0.1:8125/api/2016/sum?judet=cluj', 'http://127.0.0.1:8125/api/2017/sum?judet=cluj', 'http://127.0.0.1:8125/api/2018/sum?judet=cluj', 'http://127.0.0.1:8125/api/2019/sum?judet=cluj')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringCJ =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Cluj:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowCJ = new google.maps.InfoWindow({
                content: contentStringCJ,
                maxWidth: 200
            });

            markerCJ.addListener('click', function() {
                infowindowCJ.open(map, markerCJ);
            });

        })

        //Capitala Bucuresti

        var bucuresti = {
            lat: 44.432251,
            lng: 26.1062603
        };

        var markerB = new google.maps.Marker({
            position: bucuresti,
            map: map,
            title: 'Bucuresti',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=bucuresti", 'http://127.0.0.1:8125/api/2016/sum?judet=bucuresti', 'http://127.0.0.1:8125/api/2017/sum?judet=bucuresti', 'http://127.0.0.1:8125/api/2018/sum?judet=bucuresti', 'http://127.0.0.1:8125/api/2019/sum?judet=bucuresti')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringB =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Capitala Bucuresti:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowB = new google.maps.InfoWindow({
                content: contentStringB,
                maxWidth: 200
            });

            markerB.addListener('click', function() {
                infowindowB.open(map, markerB);
            });

        })

        //Judetul Hunedoara

        var deva = {
            lat: 45.8833313,
            lng: 22.8999996
        };

        var markerHD = new google.maps.Marker({
            position: deva,
            map: map,
            title: 'Hunedoara',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=hunedoara", 'http://127.0.0.1:8125/api/2016/sum?judet=hunedoara', 'http://127.0.0.1:8125/api/2017/sum?judet=hunedoara', 'http://127.0.0.1:8125/api/2018/sum?judet=hunedoara', 'http://127.0.0.1:8125/api/2019/sum?judet=hunedoara')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringHD =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Hunedoara:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowHD = new google.maps.InfoWindow({
                content: contentStringHD,
                maxWidth: 200
            });

            markerHD.addListener('click', function() {
                infowindowHD.open(map, markerHD);
            });

        })

        //Judetul Gorj

        var gorj = {
            lat: 45.0499992,
            lng: 23.2833309
        };

        var markerGJ = new google.maps.Marker({
            position: gorj,
            map: map,
            title: 'Gorj',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=gorj", 'http://127.0.0.1:8125/api/2016/sum?judet=gorj', 'http://127.0.0.1:8125/api/2017/sum?judet=gorj', 'http://127.0.0.1:8125/api/2018/sum?judet=gorj', 'http://127.0.0.1:8125/api/2019/sum?judet=gorj')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringGJ =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Gorj:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowGJ = new google.maps.InfoWindow({
                content: contentStringGJ,
                maxWidth: 200
            });

            markerGJ.addListener('click', function() {
                infowindowGJ.open(map, markerGJ);
            });

        })

        //Judetul Mures

        var mures = {
            lat: 46.54245,
            lng: 24.5574703
        };

        var markerMS = new google.maps.Marker({
            position: mures,
            map: map,
            title: 'Mures',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=mures", 'http://127.0.0.1:8125/api/2016/sum?judet=mures', 'http://127.0.0.1:8125/api/2017/sum?judet=mures', 'http://127.0.0.1:8125/api/2018/sum?judet=mures', 'http://127.0.0.1:8125/api/2019/sum?judet=mures')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringMS =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Mures:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowMS = new google.maps.InfoWindow({
                content: contentStringMS,
                maxWidth: 200
            });

            markerMS.addListener('click', function() {
                infowindowMS.open(map, markerMS);
            });

        })

         //Judetul Bistrita-Nasaud

         var bistrita = {
            lat: 47.1331596,
            lng: 24.5001106
        };

        var markerBN = new google.maps.Marker({
            position: bistrita,
            map: map,
            title: 'Bistrita-Nasaud',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=bistrita-nasaud", 'http://127.0.0.1:8125/api/2016/sum?judet=bistrita-nasaud', 'http://127.0.0.1:8125/api/2017/sum?judet=bistrita-nasaud', 'http://127.0.0.1:8125/api/2018/sum?judet=bistrita-nasaud', 'http://127.0.0.1:8125/api/2019/sum?judet=bistrita-nasaud')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringBN =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Bistrita-Nasaud:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowBN = new google.maps.InfoWindow({
                content: contentStringBN,
                maxWidth: 200
            });

            markerBN.addListener('click', function() {
                infowindowBN.open(map, markerBN);
            });

        })

        //Judetul Vrancea

        var vrancea = {
            lat: 45.7000008,
            lng: 27.1833305
        };

        var markerVN = new google.maps.Marker({
            position: vrancea,
            map: map,
            title: 'Vrancea',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=vrancea", 'http://127.0.0.1:8125/api/2016/sum?judet=vrancea', 'http://127.0.0.1:8125/api/2017/sum?judet=vrancea', 'http://127.0.0.1:8125/api/2018/sum?judet=vrancea', 'http://127.0.0.1:8125/api/2019/sum?judet=vrancea')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringVN =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Vrancea:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowVN = new google.maps.InfoWindow({
                content: contentStringVN,
                maxWidth: 200
            });

            markerVN.addListener('click', function() {
                infowindowVN.open(map, markerVN);
            });

        })

        //Judetul Maramures

        var maramures = {
            lat: 47.9319496,
            lng: 23.8860302
        };

        var markerMM = new google.maps.Marker({
            position: maramures,
            map: map,
            title: 'Maramures',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=maramures", 'http://127.0.0.1:8125/api/2016/sum?judet=maramures', 'http://127.0.0.1:8125/api/2017/sum?judet=maramures', 'http://127.0.0.1:8125/api/2018/sum?judet=maramures', 'http://127.0.0.1:8125/api/2019/sum?judet=maramures')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringMM =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Maramures:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowMM = new google.maps.InfoWindow({
                content: contentStringMM,
                maxWidth: 200
            });

            markerMM.addListener('click', function() {
                infowindowMM.open(map, markerMM);
            });

        })

        //Judetul Caras-Severin

        var resita = {
            lat: 45.3008308,
            lng: 21.8891697
        };

        var markerCS = new google.maps.Marker({
            position: resita,
            map: map,
            title: 'Caras-Severin',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=caras-severin", 'http://127.0.0.1:8125/api/2016/sum?judet=caras-severin', 'http://127.0.0.1:8125/api/2017/sum?judet=caras-severin', 'http://127.0.0.1:8125/api/2018/sum?judet=caras-severin', 'http://127.0.0.1:8125/api/2019/sum?judet=caras-severin')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringCS =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Caras-Severin:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowCS = new google.maps.InfoWindow({
                content: contentStringCS,
                maxWidth: 200
            });

            markerCS.addListener('click', function() {
                infowindowCS.open(map, markerCS);
            });

        })

        //Judetul Olt

        var olt = {
            lat: 44.4333305,
            lng: 24.3666706
        };

        var markerOT = new google.maps.Marker({
            position: olt,
            map: map,
            title: 'Olt',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=olt", 'http://127.0.0.1:8125/api/2016/sum?judet=olt', 'http://127.0.0.1:8125/api/2017/sum?judet=olt', 'http://127.0.0.1:8125/api/2018/sum?judet=olt', 'http://127.0.0.1:8125/api/2019/sum?judet=olt')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringOT =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Olt:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowOT = new google.maps.InfoWindow({
                content: contentStringOT,
                maxWidth: 200
            });

            markerOT.addListener('click', function() {
                infowindowOT.open(map, markerOT);
            });

        })

        //Judetul Buzau

        var buzau = {
            lat: 45.1500015,
            lng: 26.8333302
        };

        var markerBZ = new google.maps.Marker({
            position: buzau,
            map: map,
            title: 'Buzau',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=buzau", 'http://127.0.0.1:8125/api/2016/sum?judet=buzau', 'http://127.0.0.1:8125/api/2017/sum?judet=buzau', 'http://127.0.0.1:8125/api/2018/sum?judet=buzau', 'http://127.0.0.1:8125/api/2019/sum?judet=buzau')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringBZ =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Buzau:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowBZ = new google.maps.InfoWindow({
                content: contentStringBZ,
                maxWidth: 200
            });

            markerBZ.addListener('click', function() {
                infowindowBZ.open(map, markerBZ);
            });

        })

        //Judetul Covasna

        var covasna = {
            lat: 45.8666687,
            lng: 25.7833309
        };

        var markerCV = new google.maps.Marker({
            position: covasna,
            map: map,
            title: 'Covasna',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=covasna", 'http://127.0.0.1:8125/api/2016/sum?judet=covasna', 'http://127.0.0.1:8125/api/2017/sum?judet=covasna', 'http://127.0.0.1:8125/api/2018/sum?judet=covasna', 'http://127.0.0.1:8125/api/2019/sum?judet=covasna')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringCV =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Covasna:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowCV = new google.maps.InfoWindow({
                content: contentStringCV,
                maxWidth: 200
            });

            markerCV.addListener('click', function() {
                infowindowCV.open(map, markerCV);
            });

        })

        //Judetul Neamt

        var neamt = {
            lat: 46.9166718,
            lng: 26.3333302
        };

        var markerNT = new google.maps.Marker({
            position: neamt,
            map: map,
            title: 'Neamt',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=neamt", 'http://127.0.0.1:8125/api/2016/sum?judet=neamt', 'http://127.0.0.1:8125/api/2017/sum?judet=neamt', 'http://127.0.0.1:8125/api/2018/sum?judet=neamt', 'http://127.0.0.1:8125/api/2019/sum?judet=neamt')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringNT =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Neamt:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowNT = new google.maps.InfoWindow({
                content: contentStringNT,
                maxWidth: 200
            });

            markerNT.addListener('click', function() {
                infowindowNT.open(map, markerNT);
            });

        })

        //Judetul Tulcea

        var tulcea = {
            lat: 45.1666718,
            lng: 28.7999992
        };

        var markerTL = new google.maps.Marker({
            position: tulcea,
            map: map,
            title: 'Tulcea',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=tulcea", 'http://127.0.0.1:8125/api/2016/sum?judet=tulcea', 'http://127.0.0.1:8125/api/2017/sum?judet=tulcea', 'http://127.0.0.1:8125/api/2018/sum?judet=tulcea', 'http://127.0.0.1:8125/api/2019/sum?judet=tulcea')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringTL =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Tulcea:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowTL = new google.maps.InfoWindow({
                content: contentStringTL,
                maxWidth: 200
            });

            markerTL.addListener('click', function() {
                infowindowTL.open(map, markerTL);
            });

        })

        //Judetul Alba

        var alba = {
            lat: 46.0666695,
            lng: 23.5833302
        };

        var markerAB = new google.maps.Marker({
            position: alba,
            map: map,
            title: 'Alba',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=alba", 'http://127.0.0.1:8125/api/2016/sum?judet=alba', 'http://127.0.0.1:8125/api/2017/sum?judet=alba', 'http://127.0.0.1:8125/api/2018/sum?judet=alba', 'http://127.0.0.1:8125/api/2019/sum?judet=alba')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringAB =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Alba:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowAB = new google.maps.InfoWindow({
                content: contentStringAB,
                maxWidth: 200
            });

            markerAB.addListener('click', function() {
                infowindowAB.open(map, markerAB);
            });

        })

        //Judetul Salaj

        var salaj = {
            lat: 47.2000008,
            lng: 23.0499992
        };

        var markerSJ = new google.maps.Marker({
            position: salaj,
            map: map,
            title: 'Salaj',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=salaj", 'http://127.0.0.1:8125/api/2016/sum?judet=salaj', 'http://127.0.0.1:8125/api/2017/sum?judet=salaj', 'http://127.0.0.1:8125/api/2018/sum?judet=salaj', 'http://127.0.0.1:8125/api/2019/sum?judet=salaj')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringSJ =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Salaj:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowSJ = new google.maps.InfoWindow({
                content: contentStringSJ,
                maxWidth: 200
            });

            markerSJ.addListener('click', function() {
                infowindowSJ.open(map, markerSJ);
            });

        })

        //Judetul Mehedinti

        var mehedinti = {
            lat: 44.6319389,
            lng: 22.6561108
        };

        var markerMD = new google.maps.Marker({
            position: mehedinti,
            map: map,
            title: 'Mehedinti',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=mehedinti", 'http://127.0.0.1:8125/api/2016/sum?judet=mehedinti', 'http://127.0.0.1:8125/api/2017/sum?judet=mehedinti', 'http://127.0.0.1:8125/api/2018/sum?judet=mehedinti', 'http://127.0.0.1:8125/api/2019/sum?judet=mehedinti')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringMD =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Mehedinti:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowMD = new google.maps.InfoWindow({
                content: contentStringMD,
                maxWidth: 200
            });

            markerMD.addListener('click', function() {
                infowindowMD.open(map, markerMD);
            });

        })

        //Judetul Timis

        var timis = {
            lat: 45.7537193,
            lng: 21.2257099
        };

        var markerTM = new google.maps.Marker({
            position: timis,
            map: map,
            title: 'Timis',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=timis", 'http://127.0.0.1:8125/api/2016/sum?judet=timis', 'http://127.0.0.1:8125/api/2017/sum?judet=timis', 'http://127.0.0.1:8125/api/2018/sum?judet=timis', 'http://127.0.0.1:8125/api/2019/sum?judet=timis')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringTM =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Timis:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowTM = new google.maps.InfoWindow({
                content: contentStringTM,
                maxWidth: 200
            });

            markerTM.addListener('click', function() {
                infowindowTM.open(map, markerTM);
            });

        })

        //Judetul Prahova

        var prahova = {
            lat: 44.9500008,
            lng: 26.0166702
        };

        var markerPH = new google.maps.Marker({
            position: prahova,
            map: map,
            title: 'Prahova',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=prahova", 'http://127.0.0.1:8125/api/2016/sum?judet=prahova', 'http://127.0.0.1:8125/api/2017/sum?judet=prahova', 'http://127.0.0.1:8125/api/2018/sum?judet=prahova', 'http://127.0.0.1:8125/api/2019/sum?judet=prahova')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringPH =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Prahova:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowPH = new google.maps.InfoWindow({
                content: contentStringPH,
                maxWidth: 200
            });

            markerPH.addListener('click', function() {
                infowindowPH.open(map, markerPH);
            });

        })

        //Judetul Valcea

        var valcea = {
            lat: 45.0999985,
            lng: 24.3666706
        };

        var markerVL = new google.maps.Marker({
            position: valcea,
            map: map,
            title: 'Valcea',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=vilcea", 'http://127.0.0.1:8125/api/2016/sum?judet=vilcea', 'http://127.0.0.1:8125/api/2017/sum?judet=vilcea', 'http://127.0.0.1:8125/api/2018/sum?judet=vilcea', 'http://127.0.0.1:8125/api/2019/sum?judet=vilcea')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringVL =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Valcea:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowVL = new google.maps.InfoWindow({
                content: contentStringVL,
                maxWidth: 200
            });

            markerVL.addListener('click', function() {
                infowindowVL.open(map, markerVL);
            });

        })

        //Judetul Dambovita

        var dambovita = {
            lat: 44.9254303,
            lng: 25.4566994
        };

        var markerDB = new google.maps.Marker({
            position: dambovita,
            map: map,
            title: 'Dambovita',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=dimbovita", 'http://127.0.0.1:8125/api/2016/sum?judet=dimbovita', 'http://127.0.0.1:8125/api/2017/sum?judet=dimbovita', 'http://127.0.0.1:8125/api/2018/sum?judet=dimbovita', 'http://127.0.0.1:8125/api/2019/sum?judet=dimbovita')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringDB =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Dambovita:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowDB = new google.maps.InfoWindow({
                content: contentStringDB,
                maxWidth: 200
            });

            markerDB.addListener('click', function() {
                infowindowDB.open(map, markerDB);
            });

        })

        //Judetul Calarasi

        var calarasi = {
            lat: 44.200000,
            lng: 27.333333
        };

        var markerCL = new google.maps.Marker({
            position: calarasi,
            map: map,
            title: 'Calarasi',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=calarasi", 'http://127.0.0.1:8125/api/2016/sum?judet=calarasi', 'http://127.0.0.1:8125/api/2017/sum?judet=calarasi', 'http://127.0.0.1:8125/api/2018/sum?judet=calarasi', 'http://127.0.0.1:8125/api/2019/sum?judet=calarasi')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringCL =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Calarasi:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowCL = new google.maps.InfoWindow({
                content: contentStringCL,
                maxWidth: 200
            });

            markerCL.addListener('click', function() {
                infowindowCL.open(map, markerCL);
            });

        })

        
        //Judetul Ialomita

        var ialomita = {
            lat: 44.5647011,
            lng: 27.3633003
        };

        var markerIL = new google.maps.Marker({
            position: ialomita,
            map: map,
            title: 'Ialomita',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=ialomita", 'http://127.0.0.1:8125/api/2016/sum?judet=ialomita', 'http://127.0.0.1:8125/api/2017/sum?judet=ialomita', 'http://127.0.0.1:8125/api/2018/sum?judet=ialomita', 'http://127.0.0.1:8125/api/2019/sum?judet=ialomita')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringIL =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Ialomita:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowIL = new google.maps.InfoWindow({
                content: contentStringIL,
                maxWidth: 200
            });

            markerIL.addListener('click', function() {
                infowindowIL.open(map, markerIL);
            });

        })

        //Judetul Teleorman

        var teleorman = {
            lat: 43.9833298,
            lng: 25.3333302
        };

        var markerTL = new google.maps.Marker({
            position: teleorman,
            map: map,
            title: 'Teleorman',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=teleorman", 'http://127.0.0.1:8125/api/2016/sum?judet=teleorman', 'http://127.0.0.1:8125/api/2017/sum?judet=teleorman', 'http://127.0.0.1:8125/api/2018/sum?judet=teleorman', 'http://127.0.0.1:8125/api/2019/sum?judet=teleorman')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringTL =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Teleorman:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowTL = new google.maps.InfoWindow({
                content: contentStringTL,
                maxWidth: 200
            });

            markerTL.addListener('click', function() {
                infowindowTL.open(map, markerTL);
            });

        })

        //Judetul Giurgiu

        var giurgiu = {
            lat: 43.8833313,
            lng: 25.9666691
        };

        var markerGG = new google.maps.Marker({
            position: giurgiu,
            map: map,
            title: 'Giurgiu',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=giurgiu", 'http://127.0.0.1:8125/api/2016/sum?judet=giurgiu', 'http://127.0.0.1:8125/api/2017/sum?judet=giurgiu', 'http://127.0.0.1:8125/api/2018/sum?judet=giurgiu', 'http://127.0.0.1:8125/api/2019/sum?judet=giurgiu')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringGG =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Giurgiu:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowGG = new google.maps.InfoWindow({
                content: contentStringGG,
                maxWidth: 200
            });

            markerGG.addListener('click', function() {
                infowindowGG.open(map, markerGG);
            });

        })

        //Judetul Harghita

        var harghita = {
            lat: 46.3499985,
            lng: 25.7999992
        };

        var markerHG = new google.maps.Marker({
            position: harghita,
            map: map,
            title: 'Harghita',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=harghita", 'http://127.0.0.1:8125/api/2016/sum?judet=harghita', 'http://127.0.0.1:8125/api/2017/sum?judet=harghita', 'http://127.0.0.1:8125/api/2018/sum?judet=harghita', 'http://127.0.0.1:8125/api/2019/sum?judet=harghita')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringHG =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Harghita:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowHG = new google.maps.InfoWindow({
                content: contentStringHG,
                maxWidth: 200
            });

            markerHG.addListener('click', function() {
                infowindowHG.open(map, markerHG);
            });

        })

        /*Judetul Satu Mare

        var satumare = {
            lat: 47.790001,
            lng: 22.889999
        };

        var markerSM = new google.maps.Marker({
            position: satumare,
            map: map,
            title: 'Satu Mare',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=harghita", 'http://127.0.0.1:8125/api/2016/sum?judet=harghita', 'http://127.0.0.1:8125/api/2017/sum?judet=harghita', 'http://127.0.0.1:8125/api/2018/sum?judet=harghita', 'http://127.0.0.1:8125/api/2019/sum?judet=harghita')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringSM =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Satu Mare:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowSM = new google.maps.InfoWindow({
                content: contentStringSM,
                maxWidth: 200
            });

            markerSM.addListener('click', function() {
                infowindowSM.open(map, markerSM);
            });

        })*/

        /*Judetul Maramures

        var satumare = {
            lat: 47.6572914,
            lng: 23.5680809
        };

        var markerMA = new google.maps.Marker({
            position: maramures,
            map: map,
            title: 'Maramures',
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 5,
                strokeColor: "#7fd4d2"
            }
        });

        fetchAsyncData("http://127.0.0.1:8125/api/2015/sum?judet=harghita", 'http://127.0.0.1:8125/api/2016/sum?judet=harghita', 'http://127.0.0.1:8125/api/2017/sum?judet=harghita', 'http://127.0.0.1:8125/api/2018/sum?judet=harghita', 'http://127.0.0.1:8125/api/2019/sum?judet=harghita')
        .then((data) => {
            console.log(JSON.stringify(data));


            var contentStringMA =
                '<div class ="infoWindow">' +
                '<h1 class = "infoHeading">Date Judet Maramures:</h1>' +
                '<p> Numar total de masini pe ani: </p> ' +
                '<p> 2015 ->  ' + JSON.stringify(data[0]) + '</p>' +
                '<p> 2016 ->  ' + JSON.stringify(data[1]) + '</p>' +
                '<p> 2017 ->  ' + JSON.stringify(data[2]) + '</p>' +
                '<p> 2018 ->  ' + JSON.stringify(data[3]) + '</p>' +
                '<p> 2019 ->  ' + JSON.stringify(data[4]) + '</p>' +
                '</div>';
            var infowindowMA = new google.maps.InfoWindow({
                content: contentStringMA,
                maxWidth: 200
            });

            markerMA.addListener('click', function() {
                infowindowMA.open(map, markerMA);
            });

        })*/
}