// Objeto mapa
var mapa = L.map("mapaid", {
  center: [9.7, -84],
  zoom: 8,
});

// mapa.setMinZoom(6);
// mapa.setMaxZoom(10);
// mapa.setZoom(10);

// Capa base de OSM
osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);

// Capa base de OpenTopoMap
opentopomap = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(mapa);

// Capa base de rutas de ciclismo
ciclismo = L.tileLayer(
  "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

// Marcadores
liberia = L.marker([10.633333, -85.433333]);
liberia.bindTooltip("Liberia").openTooltip();
liberia.addTo(mapa);

limon = L.marker([10.002216, -83.084037]);
limon.bindTooltip("Limón").openTooltip();
limon.addTo(mapa);

puntarenas = L.marker([9.966667, -84.833333]);
puntarenas.bindTooltip("Puntarenas").openTooltip();
puntarenas.addTo(mapa);

sanjose = L.marker([9.934959, -84.103496]);
sanjose.bindTooltip("Lago de la Sabana").openTooltip();
sanjose.addTo(mapa);

// Marcador para la Catedral Metropolitana de San José
catedral = L.marker([9.9326673, -84.0787633]);
catedral
  .bindPopup(
    '<a href="https://es.wikipedia.org/wiki/Catedral_metropolitana_de_San_Jos%C3%A9">Catedral Metropolitana de San José</a>.<br>Catedral de estilo clásico y barroco. Templo principal de la arquidiócesis católica de San José.<br>Construída entre 1825 y 1827 y reconstruída en 1878.<br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Metropolitan_Cathedral_in_San_Jose%2C_Costa_Rica.jpg/256px-Metropolitan_Cathedral_in_San_Jose%2C_Costa_Rica.jpg">'
  )
  .openPopup();
catedral.bindTooltip("Catedral Metropolitana de San José").openTooltip();
catedral.addTo(mapa);

// Objeto de capas base
var mapasbase = {
  OpenStreetMap: osm,
  OpenTopoMao: opentopomap,
  Ciclismo: ciclismo,
};

// Control de capas
L.control.layers(mapasbase).addTo(mapa);

// Control de escala
L.control
  .scale({ maxWidth: 100, imperial: false, position: "topright" })
  .addTo(mapa);
