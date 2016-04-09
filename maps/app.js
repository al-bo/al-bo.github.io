var $pages = document.getElementsByClassName('page'),
    $map = document.getElementById('map'),
    map,
    markers = [
        {lat: 46.439050, lng:  30.711899},
        {lat: 46.438666,  lng:  30.712427},
        {lat: 46.437730,  lng:  30.714531},
        {lat: 46.436503,   lng:  30.717446}
    ],
    i;


Path.map('#map').to(goToMap);

Path.map('#login').to(goToLogin);


function goToLogin() {
    showPage(this);
}



function goToMap() {
    showPage(this);
    setTimeout(drawmarkers,2200);
}

function initMap () {
    var h;

    map =  new google.maps.Map($map, {
        center: {lat: 46.439050, lng:  30.711899},
        zoom: 15
    });
    if ( $map.offsetHeight > $map.offsetWidth ) {
        h = $map.offsetWidth - 40 + 'px';
    } else {
        h = screen.height - 40 + 'px';
    }
    //$map.style.height = h;
    console.log(h);
}

function drawmarkers ( cb ) {
    markers.forEach(function ( m ) {
        var marker = new google.maps.Marker({
            position: m,
            map: map
        });
    });
}

function showPage ( p ) {
    var last,
        id = p.path.slice(1),
        page = document.getElementById(id + '-page');
    if (last = document.getElementsByClassName('page active')[0]) {
        last.classList.remove('active');
    }
    page.classList.add('active');
}
Path.root('#login');
Path.listen();