
let map;

function initMap() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'YOUR_BING_MAPS_API_KEY',
        zoom: 12
    });
    const userLocation = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(userLatitude, userLongitude), {
        color: 'blue'
    });
    map.entities.push(userLocation);

    // Add points of interest markers
    pointsOfInterest.forEach(point => {
        const poiLocation = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(point.latitude, point.longitude), {
            color: 'red'
        });
        map.entities.push(poiLocation);

        // Add info box to display point name
        const infobox = new Microsoft.Maps.Infobox(poiLocation.getLocation(), {
            title: point.name,
            visible: false
        });
        map.entities.push(infobox);

        // Show infobox on mouseover
        Microsoft.Maps.Events.addHandler(poiLocation, 'mouseover', () => {
            infobox.setOptions({ visible: true });
        });

        // Hide infobox on mouseout
        Microsoft.Maps.Events.addHandler(poiLocation, 'mouseout', () => {
            infobox.setOptions({ visible: false });
        });
    });
}