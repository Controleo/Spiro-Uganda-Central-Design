var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Gridscores_Uganda_1 = new ol.format.GeoJSON();
var features_Gridscores_Uganda_1 = format_Gridscores_Uganda_1.readFeatures(json_Gridscores_Uganda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gridscores_Uganda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gridscores_Uganda_1.addFeatures(features_Gridscores_Uganda_1);
var lyr_Gridscores_Uganda_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gridscores_Uganda_1, 
                style: style_Gridscores_Uganda_1,
                popuplayertitle: 'Grid scores_Uganda',
                interactive: false,
    title: 'Grid scores_Uganda<br />\
    <img src="styles/legend/Gridscores_Uganda_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Gridscores_Uganda_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Gridscores_Uganda_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/Gridscores_Uganda_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/Gridscores_Uganda_1_4.png" /> 4 - 5<br />' });
var format_UgandaStations15kmGrid_2 = new ol.format.GeoJSON();
var features_UgandaStations15kmGrid_2 = format_UgandaStations15kmGrid_2.readFeatures(json_UgandaStations15kmGrid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UgandaStations15kmGrid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UgandaStations15kmGrid_2.addFeatures(features_UgandaStations15kmGrid_2);
var lyr_UgandaStations15kmGrid_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UgandaStations15kmGrid_2, 
                style: style_UgandaStations15kmGrid_2,
                popuplayertitle: 'Uganda Stations — 15km Grid',
                interactive: false,
                title: '<img src="styles/legend/UgandaStations15kmGrid_2.png" /> Uganda Stations — 15km Grid'
            });
var format_PetroStations_3 = new ol.format.GeoJSON();
var features_PetroStations_3 = format_PetroStations_3.readFeatures(json_PetroStations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetroStations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetroStations_3.addFeatures(features_PetroStations_3);
var lyr_PetroStations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetroStations_3, 
                style: style_PetroStations_3,
                popuplayertitle: 'Petro Stations',
                interactive: true,
                title: '<img src="styles/legend/PetroStations_3.png" /> Petro Stations'
            });
var format_FOFO_4 = new ol.format.GeoJSON();
var features_FOFO_4 = format_FOFO_4.readFeatures(json_FOFO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOFO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFO_4.addFeatures(features_FOFO_4);
var lyr_FOFO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFO_4, 
                style: style_FOFO_4,
                popuplayertitle: 'FOFO',
                interactive: true,
                title: '<img src="styles/legend/FOFO_4.png" /> FOFO'
            });
var format_FastCharger_5 = new ol.format.GeoJSON();
var features_FastCharger_5 = format_FastCharger_5.readFeatures(json_FastCharger_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastCharger_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastCharger_5.addFeatures(features_FastCharger_5);
var lyr_FastCharger_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastCharger_5, 
                style: style_FastCharger_5,
                popuplayertitle: 'Fast Charger',
                interactive: true,
                title: '<img src="styles/legend/FastCharger_5.png" /> Fast Charger'
            });
var format_COUFastChargers_6 = new ol.format.GeoJSON();
var features_COUFastChargers_6 = format_COUFastChargers_6.readFeatures(json_COUFastChargers_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COUFastChargers_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COUFastChargers_6.addFeatures(features_COUFastChargers_6);
var lyr_COUFastChargers_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COUFastChargers_6, 
                style: style_COUFastChargers_6,
                popuplayertitle: 'COU - Fast Chargers',
                interactive: true,
                title: '<img src="styles/legend/COUFastChargers_6.png" /> COU - Fast Chargers'
            });
var format_COU6Racks_7 = new ol.format.GeoJSON();
var features_COU6Racks_7 = format_COU6Racks_7.readFeatures(json_COU6Racks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COU6Racks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COU6Racks_7.addFeatures(features_COU6Racks_7);
var lyr_COU6Racks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COU6Racks_7, 
                style: style_COU6Racks_7,
                popuplayertitle: 'COU - 6 Racks',
                interactive: true,
                title: '<img src="styles/legend/COU6Racks_7.png" /> COU - 6 Racks'
            });
var format_Active6Racks_8 = new ol.format.GeoJSON();
var features_Active6Racks_8 = format_Active6Racks_8.readFeatures(json_Active6Racks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Active6Racks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Active6Racks_8.addFeatures(features_Active6Racks_8);
var lyr_Active6Racks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Active6Racks_8, 
                style: style_Active6Racks_8,
                popuplayertitle: 'Active 6 Racks',
                interactive: true,
                title: '<img src="styles/legend/Active6Racks_8.png" /> Active 6 Racks'
            });
var format_48Racks_9 = new ol.format.GeoJSON();
var features_48Racks_9 = format_48Racks_9.readFeatures(json_48Racks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_48Racks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_48Racks_9.addFeatures(features_48Racks_9);
var lyr_48Racks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_48Racks_9, 
                style: style_48Racks_9,
                popuplayertitle: '48 Racks',
                interactive: true,
                title: '<img src="styles/legend/48Racks_9.png" /> 48 Racks'
            });
var format_24Racks_10 = new ol.format.GeoJSON();
var features_24Racks_10 = format_24Racks_10.readFeatures(json_24Racks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24Racks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24Racks_10.addFeatures(features_24Racks_10);
var lyr_24Racks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24Racks_10, 
                style: style_24Racks_10,
                popuplayertitle: '24 Racks',
                interactive: true,
                title: '<img src="styles/legend/24Racks_10.png" /> 24 Racks'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Gridscores_Uganda_1.setVisible(true);lyr_UgandaStations15kmGrid_2.setVisible(true);lyr_PetroStations_3.setVisible(true);lyr_FOFO_4.setVisible(true);lyr_FastCharger_5.setVisible(true);lyr_COUFastChargers_6.setVisible(true);lyr_COU6Racks_7.setVisible(true);lyr_Active6Racks_8.setVisible(true);lyr_48Racks_9.setVisible(true);lyr_24Racks_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Gridscores_Uganda_1,lyr_UgandaStations15kmGrid_2,lyr_PetroStations_3,lyr_FOFO_4,lyr_FastCharger_5,lyr_COUFastChargers_6,lyr_COU6Racks_7,lyr_Active6Racks_8,lyr_48Racks_9,lyr_24Racks_10];
lyr_Gridscores_Uganda_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_UgandaStations15kmGrid_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', });
lyr_PetroStations_3.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_FOFO_4.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_FastCharger_5.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_COUFastChargers_6.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_COU6Racks_7.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_Active6Racks_8.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_48Racks_9.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_24Racks_10.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_Gridscores_Uganda_1.set('fieldImages', {'fid': '', 'id': '', 'score': '', });
lyr_UgandaStations15kmGrid_2.set('fieldImages', {'fid': '', 'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'row_index': '', 'col_index': '', });
lyr_PetroStations_3.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_FOFO_4.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_FastCharger_5.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_COUFastChargers_6.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_COU6Racks_7.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_Active6Racks_8.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_48Racks_9.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_24Racks_10.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_Gridscores_Uganda_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_UgandaStations15kmGrid_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', });
lyr_PetroStations_3.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_FOFO_4.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_FastCharger_5.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_COUFastChargers_6.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_COU6Racks_7.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_Active6Racks_8.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_48Racks_9.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_24Racks_10.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_24Racks_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});