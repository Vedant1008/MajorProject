// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     center: [79.0889, 21.1466], // starting position [lng, lat]. Note that lat must be set between -90 and 90
//     zoom: 9 // starting zoom
// });

// console.log(coordinates);

// const marker = new mapboxgl.Marker()
// .setLngLat(coordinates)
// .addTo(map);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates, // Dynamically centers on the listing's exact location
    zoom: 9
});

// Add the custom popup
const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`);

// Draw the red marker and attach the popup
const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);