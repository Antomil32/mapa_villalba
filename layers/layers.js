var wms_layers = [];


        var lyr_carto1_0 = new ol.layer.Tile({
            'title': 'carto1',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_LimiteCollado_1 = new ol.format.GeoJSON();
var features_LimiteCollado_1 = format_LimiteCollado_1.readFeatures(json_LimiteCollado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteCollado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteCollado_1.addFeatures(features_LimiteCollado_1);
var lyr_LimiteCollado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteCollado_1, 
                style: style_LimiteCollado_1,
                popuplayertitle: 'LimiteCollado',
                interactive: false,
                title: '<img src="styles/legend/LimiteCollado_1.png" /> LimiteCollado'
            });
var format_ZMB_2 = new ol.format.GeoJSON();
var features_ZMB_2 = format_ZMB_2.readFeatures(json_ZMB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZMB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZMB_2.addFeatures(features_ZMB_2);
var lyr_ZMB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZMB_2, 
                style: style_ZMB_2,
                popuplayertitle: 'ZMB',
                interactive: false,
                title: '<img src="styles/legend/ZMB_2.png" /> ZMB'
            });
var format_ZDS_3 = new ol.format.GeoJSON();
var features_ZDS_3 = format_ZDS_3.readFeatures(json_ZDS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZDS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZDS_3.addFeatures(features_ZDS_3);
var lyr_ZDS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZDS_3, 
                style: style_ZDS_3,
                popuplayertitle: 'ZDS',
                interactive: false,
                title: '<img src="styles/legend/ZDS_3.png" /> ZDS'
            });
var format_ZA_4 = new ol.format.GeoJSON();
var features_ZA_4 = format_ZA_4.readFeatures(json_ZA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZA_4.addFeatures(features_ZA_4);
var lyr_ZA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZA_4, 
                style: style_ZA_4,
                popuplayertitle: 'ZA',
                interactive: false,
                title: '<img src="styles/legend/ZA_4.png" /> ZA'
            });
var format_Arbolado_total_5 = new ol.format.GeoJSON();
var features_Arbolado_total_5 = format_Arbolado_total_5.readFeatures(json_Arbolado_total_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbolado_total_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbolado_total_5.addFeatures(features_Arbolado_total_5);
var lyr_Arbolado_total_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbolado_total_5, 
                style: style_Arbolado_total_5,
                popuplayertitle: 'Arbolado_total',
                interactive: true,
                title: 'Arbolado_total'
            });
var group_Elementos = new ol.layer.Group({
                                layers: [lyr_Arbolado_total_5,],
                                fold: "open",
                                title: 'Elementos'});
var group_Superficies = new ol.layer.Group({
                                layers: [lyr_ZMB_2,lyr_ZDS_3,lyr_ZA_4,],
                                fold: "open",
                                title: 'Superficies'});

lyr_carto1_0.setVisible(true);lyr_LimiteCollado_1.setVisible(true);lyr_ZMB_2.setVisible(true);lyr_ZDS_3.setVisible(true);lyr_ZA_4.setVisible(true);lyr_Arbolado_total_5.setVisible(true);
var layersList = [lyr_carto1_0,lyr_LimiteCollado_1,group_Superficies,group_Elementos];
lyr_LimiteCollado_1.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', });
lyr_ZMB_2.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'DENOM': 'DENOM', 'UND G': 'UND G', 'SUPERFICIE': 'SUPERFICIE', });
lyr_ZDS_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'UND G': 'UND G', 'denom': 'denom', 'Superficie': 'Superficie', 'Desbroce': 'Desbroce', });
lyr_ZA_4.set('fieldAliases', {'fid': 'fid', 'UND G': 'UND G', 'DENOM': 'DENOM', 'AREA': 'AREA', 'X': 'X', 'Y': 'Y', });
lyr_Arbolado_total_5.set('fieldAliases', {'fid': 'fid', 'Cod Interno': 'Cod Interno', 'lat': 'lat', 'lon': 'lon', 'Ubicacion': 'Ubicacion', 'especie': 'especie', 'vitalidad': 'vitalidad', 'Diana': 'Diana', 'Propuesta inicial': 'Propuesta inicial', 'Observaciones': 'Observaciones', 'cespecie': 'cespecie', 'situacion': 'situacion', 'etapa desarrollo': 'etapa desarrollo', 'Fecha de tala': 'Fecha de tala', 'pos_conden': 'pos_conden', 'borrado': 'borrado', 'Fecha revisión': 'Fecha revisión', 'alcorque': 'alcorque', 'tam': 'tam', 'Diametro NS': 'Diametro NS', 'Diametro EW': 'Diametro EW', 'porte': 'porte', 'Clase diametrica': 'Clase diametrica', 'Riesgo': 'Riesgo', 'Entorno': 'Entorno', 'cubre alcorque': 'cubre alcorque', 'ancho acera': 'ancho acera', 'Porc pavimento': 'Porc pavimento', 'Tipo riego': 'Tipo riego', 'artopodros patogenos': 'artopodros patogenos', 'Hongos patogenos': 'Hongos patogenos', 'daños abioticos': 'daños abioticos', 'Tipo revision': 'Tipo revision', 'Revision inspector 1': 'Revision inspector 1', 'Revision inspector 2': 'Revision inspector 2', 'daños en raices': 'daños en raices', 'daños en fuste': 'daños en fuste', 'daños en copa': 'daños en copa', 'levantamiento acera': 'levantamiento acera', 'Bolardo': 'Bolardo', 'galibo peatonal ': 'galibo peatonal ', 'galibo vehiculo': 'galibo vehiculo', 'conflicto con fachada': 'conflicto con fachada', 'conflicto con mobiliario urbano': 'conflicto con mobiliario urbano', 'conflicto con señalizacion': 'conflicto con señalizacion', 'conflicto con cableador aereo': 'conflicto con cableador aereo', 'conflicto con arbolado particular': 'conflicto con arbolado particular', 'conflicto con vuelo particular': 'conflicto con vuelo particular', 'Tocón': 'Tocón', 'Campaña poda': 'Campaña poda', 'Tratamiento': 'Tratamiento', 'Fecha Tratm': 'Fecha Tratm', 'Altura total': 'Altura total', 'Campaña plantacion': 'Campaña plantacion', 'Historico TTO FS': 'Historico TTO FS', 'Prob fallo mecanico': 'Prob fallo mecanico', 'Tamaño elemento fallo': 'Tamaño elemento fallo', 'Otros factores': 'Otros factores', 'Valor riesgo': 'Valor riesgo', });
lyr_LimiteCollado_1.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', });
lyr_ZMB_2.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DENOM': 'TextEdit', 'UND G': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_ZDS_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'UND G': 'TextEdit', 'denom': 'TextEdit', 'Superficie': 'Range', 'Desbroce': 'TextEdit', });
lyr_ZA_4.set('fieldImages', {'fid': 'TextEdit', 'UND G': 'TextEdit', 'DENOM': 'TextEdit', 'AREA': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_Arbolado_total_5.set('fieldImages', {'fid': 'TextEdit', 'Cod Interno': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'Ubicacion': 'TextEdit', 'especie': 'ValueMap', 'vitalidad': 'ValueMap', 'Diana': 'ValueMap', 'Propuesta inicial': 'ValueMap', 'Observaciones': 'TextEdit', 'cespecie': 'ValueMap', 'situacion': 'ValueMap', 'etapa desarrollo': 'ValueMap', 'Fecha de tala': 'DateTime', 'pos_conden': 'ValueMap', 'borrado': 'ValueMap', 'Fecha revisión': 'DateTime', 'alcorque': 'ValueMap', 'tam': 'TextEdit', 'Diametro NS': 'TextEdit', 'Diametro EW': 'TextEdit', 'porte': 'ValueMap', 'Clase diametrica': 'ValueMap', 'Riesgo': 'ValueMap', 'Entorno': 'ValueMap', 'cubre alcorque': 'ValueMap', 'ancho acera': 'ValueMap', 'Porc pavimento': 'ValueMap', 'Tipo riego': 'ValueMap', 'artopodros patogenos': 'ValueMap', 'Hongos patogenos': 'ValueMap', 'daños abioticos': 'ValueMap', 'Tipo revision': 'ValueMap', 'Revision inspector 1': 'ValueMap', 'Revision inspector 2': 'ValueMap', 'daños en raices': 'CheckBox', 'daños en fuste': 'CheckBox', 'daños en copa': 'CheckBox', 'levantamiento acera': 'CheckBox', 'Bolardo': 'CheckBox', 'galibo peatonal ': 'CheckBox', 'galibo vehiculo': 'CheckBox', 'conflicto con fachada': 'CheckBox', 'conflicto con mobiliario urbano': 'CheckBox', 'conflicto con señalizacion': 'CheckBox', 'conflicto con cableador aereo': 'CheckBox', 'conflicto con arbolado particular': 'CheckBox', 'conflicto con vuelo particular': 'CheckBox', 'Tocón': 'ValueMap', 'Campaña poda': 'TextEdit', 'Tratamiento': 'TextEdit', 'Fecha Tratm': 'DateTime', 'Altura total': 'ValueMap', 'Campaña plantacion': 'DateTime', 'Historico TTO FS': 'TextEdit', 'Prob fallo mecanico': 'ValueMap', 'Tamaño elemento fallo': 'ValueMap', 'Otros factores': 'ValueMap', 'Valor riesgo': 'TextEdit', });
lyr_LimiteCollado_1.set('fieldLabels', {'fid': 'no label', 'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', });
lyr_ZMB_2.set('fieldLabels', {'fid': 'no label', 'X': 'no label', 'Y': 'no label', 'DENOM': 'no label', 'UND G': 'no label', 'SUPERFICIE': 'no label', });
lyr_ZDS_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'UND G': 'no label', 'denom': 'no label', 'Superficie': 'no label', 'Desbroce': 'no label', });
lyr_ZA_4.set('fieldLabels', {'fid': 'no label', 'UND G': 'no label', 'DENOM': 'no label', 'AREA': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Arbolado_total_5.set('fieldLabels', {'fid': 'hidden field', 'Cod Interno': 'header label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'Ubicacion': 'header label - always visible', 'especie': 'header label - always visible', 'vitalidad': 'hidden field', 'Diana': 'hidden field', 'Propuesta inicial': 'hidden field', 'Observaciones': 'header label - always visible', 'cespecie': 'header label - always visible', 'situacion': 'hidden field', 'etapa desarrollo': 'hidden field', 'Fecha de tala': 'hidden field', 'pos_conden': 'hidden field', 'borrado': 'hidden field', 'Fecha revisión': 'hidden field', 'alcorque': 'hidden field', 'tam': 'hidden field', 'Diametro NS': 'hidden field', 'Diametro EW': 'hidden field', 'porte': 'hidden field', 'Clase diametrica': 'hidden field', 'Riesgo': 'hidden field', 'Entorno': 'hidden field', 'cubre alcorque': 'hidden field', 'ancho acera': 'hidden field', 'Porc pavimento': 'hidden field', 'Tipo riego': 'hidden field', 'artopodros patogenos': 'hidden field', 'Hongos patogenos': 'hidden field', 'daños abioticos': 'hidden field', 'Tipo revision': 'hidden field', 'Revision inspector 1': 'hidden field', 'Revision inspector 2': 'hidden field', 'daños en raices': 'hidden field', 'daños en fuste': 'hidden field', 'daños en copa': 'hidden field', 'levantamiento acera': 'hidden field', 'Bolardo': 'hidden field', 'galibo peatonal ': 'hidden field', 'galibo vehiculo': 'hidden field', 'conflicto con fachada': 'hidden field', 'conflicto con mobiliario urbano': 'hidden field', 'conflicto con señalizacion': 'hidden field', 'conflicto con cableador aereo': 'hidden field', 'conflicto con arbolado particular': 'hidden field', 'conflicto con vuelo particular': 'hidden field', 'Tocón': 'hidden field', 'Campaña poda': 'hidden field', 'Tratamiento': 'hidden field', 'Fecha Tratm': 'hidden field', 'Altura total': 'hidden field', 'Campaña plantacion': 'hidden field', 'Historico TTO FS': 'hidden field', 'Prob fallo mecanico': 'hidden field', 'Tamaño elemento fallo': 'hidden field', 'Otros factores': 'hidden field', 'Valor riesgo': 'hidden field', });
lyr_Arbolado_total_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});