var map = L.map('map').setView([-6.362141, 106.824923], 17);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c'],
}).addTo(map);
L.marker([-6.362141, 106.824923]).addTo(map)
.bindPopup("We're based in here, <b>CCIT-FTUI</b>").openPopup();
var popup = L.popup();