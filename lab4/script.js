mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuamFtaW5lbHZpbmEiLCJhIjoiY2t6eTZ0NmVnMDhhNTJ1bzNlMnJ3Ym1wYiJ9.bb8gX7H7csQMvxoxhTFLdA';
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/benjaminelvina/cl0hzsdqf002614nwnpu4nwf8' // replace this with your style URL
});
map.on('load', () => {const layers = [
  '<10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '90'
];
const colors = [
  '#FFEDA0',
  '#FED976',
  '#FEB24C',
  '#FD8D3C',
  '#FC4E2A',
  '#E31A1C',
  '#BD0026',
  '#800026'
];
    
map.on('mousemove', (event) => {
  const Datazone = map.queryRenderedFeatures(event.point, {
    layers: ['North-ayshire']
  });
  document.getElementById('pd').innerHTML = Datazone.length
    ? `<h3>${Datazone[0].properties.DZName}</h3><p>Rank: <strong>${Datazone[0].properties.Percentv2}</strong>  % people per square mile</em></p>`
    : `<p>Hover over a data zone!</p>`;
});
 map.getCanvas().style.cursor = 'default';
    // the rest of the code will go in here
 });
map.addControl(new mapboxgl.NavigationControl(), "top-left");