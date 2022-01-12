// create the map element inside the div with id=map
const map = L.map('map', {
    center: [<map_lat>, <map_lng>],
    zoom: <map_zoom>,
});

// add the openstreetmap tileLayer
L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// OPTIONAL: create a custom marker icon
const markerIcon = L.icon({
    iconUrl: 'path/to/custom_icon',
    iconSize: [40, 40],
});

// OPTIONAL: add the marker with custom icon to the map
L.marker([<marker_lat>, <marker_lng>], { icon: markerIcon }).addTo(map);
