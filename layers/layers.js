var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_NewplanUg_QGIS_1 = new ol.format.GeoJSON();
var features_NewplanUg_QGIS_1 = format_NewplanUg_QGIS_1.readFeatures(json_NewplanUg_QGIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewplanUg_QGIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewplanUg_QGIS_1.addFeatures(features_NewplanUg_QGIS_1);
var lyr_NewplanUg_QGIS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewplanUg_QGIS_1, 
                style: style_NewplanUg_QGIS_1,
                popuplayertitle: 'New plan Ug_QGIS',
                interactive: true,
                title: '<img src="styles/legend/NewplanUg_QGIS_1.png" /> New plan Ug_QGIS'
            });
var format_UgandaStations_2 = new ol.format.GeoJSON();
var features_UgandaStations_2 = format_UgandaStations_2.readFeatures(json_UgandaStations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UgandaStations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UgandaStations_2.addFeatures(features_UgandaStations_2);
var lyr_UgandaStations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UgandaStations_2, 
                style: style_UgandaStations_2,
                popuplayertitle: 'Uganda Stations',
                interactive: false,
    title: 'Uganda Stations<br />\
    <img src="styles/legend/UgandaStations_2_0.png" /> 24 Racks<br />\
    <img src="styles/legend/UgandaStations_2_1.png" /> 48 Racks<br />\
    <img src="styles/legend/UgandaStations_2_2.png" /> Active 6Racks<br />\
    <img src="styles/legend/UgandaStations_2_3.png" /> COU-1<br />\
    <img src="styles/legend/UgandaStations_2_4.png" /> COU-fast charger<br />\
    <img src="styles/legend/UgandaStations_2_5.png" /> Fast charger<br />\
    <img src="styles/legend/UgandaStations_2_6.png" /> FOFO<br />\
    <img src="styles/legend/UgandaStations_2_7.png" /> Petrol station<br />\
    <img src="styles/legend/UgandaStations_2_8.png" /> <br />' });
var format_UgandaPoints_3 = new ol.format.GeoJSON();
var features_UgandaPoints_3 = format_UgandaPoints_3.readFeatures(json_UgandaPoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UgandaPoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UgandaPoints_3.addFeatures(features_UgandaPoints_3);
var lyr_UgandaPoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UgandaPoints_3, 
                style: style_UgandaPoints_3,
                popuplayertitle: 'Uganda Points',
                interactive: false,
    title: 'Uganda Points<br />\
    <img src="styles/legend/UgandaPoints_3_0.png" /> 24 Racks<br />\
    <img src="styles/legend/UgandaPoints_3_1.png" /> 48 Racks<br />\
    <img src="styles/legend/UgandaPoints_3_2.png" /> Active 6Racks<br />\
    <img src="styles/legend/UgandaPoints_3_3.png" /> COU-1<br />\
    <img src="styles/legend/UgandaPoints_3_4.png" /> COU-fast charger<br />\
    <img src="styles/legend/UgandaPoints_3_5.png" /> Fast charger<br />\
    <img src="styles/legend/UgandaPoints_3_6.png" /> FOFO<br />\
    <img src="styles/legend/UgandaPoints_3_7.png" /> Petrol station<br />' });
var format_PetroStations_4 = new ol.format.GeoJSON();
var features_PetroStations_4 = format_PetroStations_4.readFeatures(json_PetroStations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetroStations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetroStations_4.addFeatures(features_PetroStations_4);
var lyr_PetroStations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetroStations_4, 
                style: style_PetroStations_4,
                popuplayertitle: 'Petro Stations',
                interactive: true,
                title: '<img src="styles/legend/PetroStations_4.png" /> Petro Stations'
            });
var format_FOFO_5 = new ol.format.GeoJSON();
var features_FOFO_5 = format_FOFO_5.readFeatures(json_FOFO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOFO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOFO_5.addFeatures(features_FOFO_5);
var lyr_FOFO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOFO_5, 
                style: style_FOFO_5,
                popuplayertitle: 'FOFO',
                interactive: true,
                title: '<img src="styles/legend/FOFO_5.png" /> FOFO'
            });
var format_FastCharger_6 = new ol.format.GeoJSON();
var features_FastCharger_6 = format_FastCharger_6.readFeatures(json_FastCharger_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastCharger_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastCharger_6.addFeatures(features_FastCharger_6);
var lyr_FastCharger_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastCharger_6, 
                style: style_FastCharger_6,
                popuplayertitle: 'Fast Charger',
                interactive: true,
                title: '<img src="styles/legend/FastCharger_6.png" /> Fast Charger'
            });
var format_COUFastChargers_7 = new ol.format.GeoJSON();
var features_COUFastChargers_7 = format_COUFastChargers_7.readFeatures(json_COUFastChargers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COUFastChargers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COUFastChargers_7.addFeatures(features_COUFastChargers_7);
var lyr_COUFastChargers_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COUFastChargers_7, 
                style: style_COUFastChargers_7,
                popuplayertitle: 'COU - Fast Chargers',
                interactive: true,
                title: '<img src="styles/legend/COUFastChargers_7.png" /> COU - Fast Chargers'
            });
var format_COU6Racks_8 = new ol.format.GeoJSON();
var features_COU6Racks_8 = format_COU6Racks_8.readFeatures(json_COU6Racks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COU6Racks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COU6Racks_8.addFeatures(features_COU6Racks_8);
var lyr_COU6Racks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COU6Racks_8, 
                style: style_COU6Racks_8,
                popuplayertitle: 'COU - 6 Racks',
                interactive: true,
                title: '<img src="styles/legend/COU6Racks_8.png" /> COU - 6 Racks'
            });
var format_Active6Racks_9 = new ol.format.GeoJSON();
var features_Active6Racks_9 = format_Active6Racks_9.readFeatures(json_Active6Racks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Active6Racks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Active6Racks_9.addFeatures(features_Active6Racks_9);
var lyr_Active6Racks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Active6Racks_9, 
                style: style_Active6Racks_9,
                popuplayertitle: 'Active 6 Racks',
                interactive: true,
                title: '<img src="styles/legend/Active6Racks_9.png" /> Active 6 Racks'
            });
var format_48Racks_10 = new ol.format.GeoJSON();
var features_48Racks_10 = format_48Racks_10.readFeatures(json_48Racks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_48Racks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_48Racks_10.addFeatures(features_48Racks_10);
var lyr_48Racks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_48Racks_10, 
                style: style_48Racks_10,
                popuplayertitle: '48 Racks',
                interactive: true,
                title: '<img src="styles/legend/48Racks_10.png" /> 48 Racks'
            });
var format_24Racks_11 = new ol.format.GeoJSON();
var features_24Racks_11 = format_24Racks_11.readFeatures(json_24Racks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24Racks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24Racks_11.addFeatures(features_24Racks_11);
var lyr_24Racks_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24Racks_11, 
                style: style_24Racks_11,
                popuplayertitle: '24 Racks',
                interactive: true,
                title: '<img src="styles/legend/24Racks_11.png" /> 24 Racks'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_NewplanUg_QGIS_1.setVisible(true);lyr_UgandaStations_2.setVisible(true);lyr_UgandaPoints_3.setVisible(true);lyr_PetroStations_4.setVisible(true);lyr_FOFO_5.setVisible(true);lyr_FastCharger_6.setVisible(true);lyr_COUFastChargers_7.setVisible(true);lyr_COU6Racks_8.setVisible(true);lyr_Active6Racks_9.setVisible(true);lyr_48Racks_10.setVisible(true);lyr_24Racks_11.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_NewplanUg_QGIS_1,lyr_UgandaStations_2,lyr_UgandaPoints_3,lyr_PetroStations_4,lyr_FOFO_5,lyr_FastCharger_6,lyr_COUFastChargers_7,lyr_COU6Racks_8,lyr_Active6Racks_9,lyr_48Racks_10,lyr_24Racks_11];
lyr_NewplanUg_QGIS_1.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_UgandaStations_2.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_UgandaPoints_3.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_PetroStations_4.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_FOFO_5.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_FastCharger_6.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_COUFastChargers_7.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_COU6Racks_8.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_Active6Racks_9.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_48Racks_10.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_24Racks_11.set('fieldAliases', {'fid': 'fid', 'SSID': 'SSID', 'Name': 'Name', 'Station Capacity': 'Station Capacity', 'Racks': 'Racks', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'District': 'District', 'Region': 'Region', 'Priority': 'Priority', 'Installed Capacity': 'Installed Capacity', '45%': '45%', 'Active Riders': 'Active Riders', 'Deployment': 'Deployment', 'unnamed (1)': 'unnamed (1)', 'unnamed (2)': 'unnamed (2)', });
lyr_NewplanUg_QGIS_1.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_UgandaStations_2.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_UgandaPoints_3.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_PetroStations_4.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_FOFO_5.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_FastCharger_6.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_COUFastChargers_7.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_COU6Racks_8.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_Active6Racks_9.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_48Racks_10.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_24Racks_11.set('fieldImages', {'fid': '', 'SSID': '', 'Name': '', 'Station Capacity': '', 'Racks': '', 'LATITUDE': '', 'LONGITUDE': '', 'District': '', 'Region': '', 'Priority': '', 'Installed Capacity': '', '45%': '', 'Active Riders': '', 'Deployment': '', 'unnamed (1)': '', 'unnamed (2)': '', });
lyr_NewplanUg_QGIS_1.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'no label', 'Station Capacity': 'no label', 'Racks': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_UgandaStations_2.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'no label', 'Station Capacity': 'no label', 'Racks': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_UgandaPoints_3.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'no label', 'Station Capacity': 'no label', 'Racks': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_PetroStations_4.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_FOFO_5.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_FastCharger_6.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_COUFastChargers_7.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_COU6Racks_8.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_Active6Racks_9.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_48Racks_10.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_24Racks_11.set('fieldLabels', {'fid': 'no label', 'SSID': 'no label', 'Name': 'inline label - visible with data', 'Station Capacity': 'inline label - visible with data', 'Racks': 'inline label - visible with data', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'District': 'no label', 'Region': 'no label', 'Priority': 'no label', 'Installed Capacity': 'no label', '45%': 'no label', 'Active Riders': 'no label', 'Deployment': 'no label', 'unnamed (1)': 'no label', 'unnamed (2)': 'no label', });
lyr_24Racks_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});