var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PetroStations_1 = new ol.format.GeoJSON();
var features_PetroStations_1 = format_PetroStations_1.readFeatures(json_PetroStations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetroStations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetroStations_1.addFeatures(features_PetroStations_1);
var lyr_PetroStations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetroStations_1, 
                style: style_PetroStations_1,
                popuplayertitle: 'Petro Stations',
                interactive: true,
                title: '<img src="styles/legend/PetroStations_1.png" /> Petro Stations'
            });
var format_FOFO_2 = new ol.format.GeoJSON();
var features_FOFO_2 = format_FOFO_2.readFeatures(json_FOFO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOFO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFO_2.addFeatures(features_FOFO_2);
var lyr_FOFO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFO_2, 
                style: style_FOFO_2,
                popuplayertitle: 'FOFO',
                interactive: true,
                title: '<img src="styles/legend/FOFO_2.png" /> FOFO'
            });
var format_FastCharger_3 = new ol.format.GeoJSON();
var features_FastCharger_3 = format_FastCharger_3.readFeatures(json_FastCharger_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastCharger_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastCharger_3.addFeatures(features_FastCharger_3);
var lyr_FastCharger_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastCharger_3, 
                style: style_FastCharger_3,
                popuplayertitle: 'Fast Charger',
                interactive: true,
                title: '<img src="styles/legend/FastCharger_3.png" /> Fast Charger'
            });
var format_COUFastChargers_4 = new ol.format.GeoJSON();
var features_COUFastChargers_4 = format_COUFastChargers_4.readFeatures(json_COUFastChargers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COUFastChargers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COUFastChargers_4.addFeatures(features_COUFastChargers_4);
var lyr_COUFastChargers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COUFastChargers_4, 
                style: style_COUFastChargers_4,
                popuplayertitle: 'COU - Fast Chargers',
                interactive: true,
                title: '<img src="styles/legend/COUFastChargers_4.png" /> COU - Fast Chargers'
            });
var format_COU6Racks_5 = new ol.format.GeoJSON();
var features_COU6Racks_5 = format_COU6Racks_5.readFeatures(json_COU6Racks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COU6Racks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COU6Racks_5.addFeatures(features_COU6Racks_5);
var lyr_COU6Racks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COU6Racks_5, 
                style: style_COU6Racks_5,
                popuplayertitle: 'COU - 6 Racks',
                interactive: true,
                title: '<img src="styles/legend/COU6Racks_5.png" /> COU - 6 Racks'
            });
var format_Active6Racks_6 = new ol.format.GeoJSON();
var features_Active6Racks_6 = format_Active6Racks_6.readFeatures(json_Active6Racks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Active6Racks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Active6Racks_6.addFeatures(features_Active6Racks_6);
var lyr_Active6Racks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Active6Racks_6, 
                style: style_Active6Racks_6,
                popuplayertitle: 'Active 6 Racks',
                interactive: true,
                title: '<img src="styles/legend/Active6Racks_6.png" /> Active 6 Racks'
            });
var format_48Racks_7 = new ol.format.GeoJSON();
var features_48Racks_7 = format_48Racks_7.readFeatures(json_48Racks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_48Racks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_48Racks_7.addFeatures(features_48Racks_7);
var lyr_48Racks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_48Racks_7, 
                style: style_48Racks_7,
                popuplayertitle: '48 Racks',
                interactive: true,
                title: '<img src="styles/legend/48Racks_7.png" /> 48 Racks'
            });
var format_24Racks_8 = new ol.format.GeoJSON();
var features_24Racks_8 = format_24Racks_8.readFeatures(json_24Racks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24Racks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24Racks_8.addFeatures(features_24Racks_8);
var lyr_24Racks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24Racks_8, 
                style: style_24Racks_8,
                popuplayertitle: '24 Racks',
                interactive: true,
                title: '<img src="styles/legend/24Racks_8.png" /> 24 Racks'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_PetroStations_1.setVisible(true);lyr_FOFO_2.setVisible(true);lyr_FastCharger_3.setVisible(true);lyr_COUFastChargers_4.setVisible(true);lyr_COU6Racks_5.setVisible(true);lyr_Active6Racks_6.setVisible(true);lyr_48Racks_7.setVisible(true);lyr_24Racks_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_PetroStations_1,lyr_FOFO_2,lyr_FastCharger_3,lyr_COUFastChargers_4,lyr_COU6Racks_5,lyr_Active6Racks_6,lyr_48Racks_7,lyr_24Racks_8];
lyr_PetroStations_1.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_FOFO_2.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_FastCharger_3.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_COUFastChargers_4.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_COU6Racks_5.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_Active6Racks_6.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_48Racks_7.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_24Racks_8.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_PetroStations_1.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_FOFO_2.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_FastCharger_3.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_COUFastChargers_4.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_COU6Racks_5.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_Active6Racks_6.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_48Racks_7.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_24Racks_8.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_PetroStations_1.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_FOFO_2.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_FastCharger_3.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_COUFastChargers_4.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_COU6Racks_5.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_Active6Racks_6.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_48Racks_7.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_24Racks_8.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_24Racks_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});