var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_RuteTrayek_1 = new ol.format.GeoJSON();
var features_RuteTrayek_1 = format_RuteTrayek_1.readFeatures(json_RuteTrayek_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteTrayek_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteTrayek_1.addFeatures(features_RuteTrayek_1);
var lyr_RuteTrayek_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RuteTrayek_1, 
                style: style_RuteTrayek_1,
                interactive: true,
                title: '<img src="styles/legend/RuteTrayek_1.png" /> Rute Trayek'
            });
var format_KonektivitasAngkutan_2 = new ol.format.GeoJSON();
var features_KonektivitasAngkutan_2 = format_KonektivitasAngkutan_2.readFeatures(json_KonektivitasAngkutan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KonektivitasAngkutan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KonektivitasAngkutan_2.addFeatures(features_KonektivitasAngkutan_2);
var lyr_KonektivitasAngkutan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KonektivitasAngkutan_2, 
                style: style_KonektivitasAngkutan_2,
                interactive: true,
                title: 'Konektivitas Angkutan'
            });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_RuteTrayek_1.setVisible(true);lyr_KonektivitasAngkutan_2.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_RuteTrayek_1,lyr_KonektivitasAngkutan_2];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'DS_KNKSI': 'DS_KNKSI', });
lyr_RuteTrayek_1.set('fieldAliases', {'Id': 'Id', 'Kode_Traye': 'Kode_Traye', 'Rute': 'Rute', 'Panjang': 'Panjang', });
lyr_KonektivitasAngkutan_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'DS_KNKSI': 'TextEdit', });
lyr_RuteTrayek_1.set('fieldImages', {'Id': '', 'Kode_Traye': '', 'Rute': '', 'Panjang': '', });
lyr_KonektivitasAngkutan_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'DS_KNKSI': 'no label', });
lyr_RuteTrayek_1.set('fieldLabels', {'Id': 'no label', 'Kode_Traye': 'no label', 'Rute': 'no label', 'Panjang': 'no label', });
lyr_KonektivitasAngkutan_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KonektivitasAngkutan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

