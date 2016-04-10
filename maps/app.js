var $pages = document.getElementsByClassName('page'),
    $map = document.getElementById('map'),
    map,
    markers = [
        {lat: 46.439050, lng:  30.711899},
        {lat: 46.438666,  lng:  30.712427},
        {lat: 46.437730,  lng:  30.714531},
        {lat: 46.436503,   lng:  30.717446}
    ],
    users = [
        {
            name:'Paul Smith', id:0
        },
        {
            id: 1, name: 'John Doe'
        },
        {
            id: 8, name: 'John Cena'
        }
    ],
    i;


Path.map('#map').to(goToMap);
Path.map('#login').to(goToLogin);
Path.map('#users').to(goToUsers);





function authorize () {
    var userList = document.getElementById('user-list');
    users.forEach(function (u) {
       var _u = new User(u);
        userList.appendChild(_u.$node);
        _u.$node.addEventListener('click', function () {
           console.log(_u);
            location.hash = '#map';
        });
    });
    location.hash='#users';



}


function goToLogin() {
    showPage(this);
}

function goToUsers() {
    showPage(this);
}


function goToMap() {
    showPage(this);
    setTimeout(drawmarkers,2200);
    //setInterval(randomMarker, 5000);
}

function initMap () {
    var h;

    window.map = map =  new google.maps.Map($map, {
        center: {lat: 46.439050, lng:  30.711899},
        zoom: 15
    });
    if ( $map.offsetHeight > $map.offsetWidth ) {
        h = $map.offsetWidth - 40 + 'px';
    } else {
        h = screen.height - 40 + 'px';
    }
    //$map.style.height = h;
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


function User ( config ) {
    var li = document.createElement('li'),
        span = document.createElement('span'),
        i = document.createElement('i'),
        text = document.createTextNode(config.name || '');

    li.className = 'mdl-list__item';
    span.className = 'mdl-list__item-primary-content';
    i.className = 'material-icons mdl-list__item-icon';

    i.innerText = 'person';
    span.appendChild(i);
    span.appendChild(text);
    li.appendChild(span);

    this.$node = li;
    this.name = config.name;
    this.id = config.id;

}



function randomMarker () {
    var lat = 46 + +Math.random().toFixed(6),
        lng = 30 + +Math.random().toFixed(6),
        marker;

    marker = new google.maps.Marker({
        position:{
            lat:lat,
            lng: lng
        },
        map: map
    });

    map.setCenter(marker.getPosition());
    console.log('add new marker---');


}

window.addEventListener("orientationchange", function() {

});