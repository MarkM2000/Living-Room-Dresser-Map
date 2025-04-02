// Dressing
var bureau = L.geoJson(bureau, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#5a5247',
            fillOpacity: .8,
            radius: 5
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Dresser type: ${props.Dresser}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
    }
})

var chest_of_drawers = L.geoJson(chest_of_drawers, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#5a5247',
            fillOpacity: .8,
            radius: 5
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Dresser type: ${props.Dresser}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
    }
})

var chest = L.geoJson(chest, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#5a5247',
            fillOpacity: .8,
            radius: 5
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Dresser type: ${props.Dresser}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
    }
})

var dresser = L.geoJson(dresser, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#5a5247',
            fillOpacity: .8,
            radius: 5
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Dresser type: ${props.Dresser}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
    }
})
// Living room
var best_room = L.geoJson(best_room, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#5a5247',
            fillOpacity: .8,
            radius: 5
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Dresser type: ${props.Response}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
    }
})

var front_room = L.geoJson(front_room, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#5a5247',
            fillOpacity: .8,
            radius: 5
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Dresser type: ${props.Response}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
    }
})