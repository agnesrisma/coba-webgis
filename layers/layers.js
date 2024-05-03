ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([111.467699, -7.671098, 111.635646, -7.593159]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_1 = format_ADMINISTRASIKECAMATAN_1.readFeatures(json_ADMINISTRASIKECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIKECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_1.addFeatures(features_ADMINISTRASIKECAMATAN_1);
var lyr_ADMINISTRASIKECAMATAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_1, 
                style: style_ADMINISTRASIKECAMATAN_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_1.png" /> ADMINISTRASI KECAMATAN'
            });
var format_TEMPATIBADAH_2 = new ol.format.GeoJSON();
var features_TEMPATIBADAH_2 = format_TEMPATIBADAH_2.readFeatures(json_TEMPATIBADAH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TEMPATIBADAH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPATIBADAH_2.addFeatures(features_TEMPATIBADAH_2);
var lyr_TEMPATIBADAH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TEMPATIBADAH_2, 
                style: style_TEMPATIBADAH_2,
                interactive: true,
                title: '<img src="styles/legend/TEMPATIBADAH_2.png" /> TEMPAT IBADAH'
            });
var format_RUMAHSAKIT_3 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_3 = format_RUMAHSAKIT_3.readFeatures(json_RUMAHSAKIT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RUMAHSAKIT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_3.addFeatures(features_RUMAHSAKIT_3);
var lyr_RUMAHSAKIT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_3, 
                style: style_RUMAHSAKIT_3,
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_3.png" /> RUMAH SAKIT'
            });
var format_PENDIDIKAN_4 = new ol.format.GeoJSON();
var features_PENDIDIKAN_4 = format_PENDIDIKAN_4.readFeatures(json_PENDIDIKAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PENDIDIKAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_4.addFeatures(features_PENDIDIKAN_4);
var lyr_PENDIDIKAN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_4, 
                style: style_PENDIDIKAN_4,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_4.png" /> PENDIDIKAN'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_1.setVisible(true);lyr_TEMPATIBADAH_2.setVisible(true);lyr_RUMAHSAKIT_3.setVisible(true);lyr_PENDIDIKAN_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIKECAMATAN_1,lyr_TEMPATIBADAH_2,lyr_RUMAHSAKIT_3,lyr_PENDIDIKAN_4];
lyr_ADMINISTRASIKECAMATAN_1.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TEMPATIBADAH_2.set('fieldAliases', {'fid': 'fid', 'NAMA OBJEK': 'NAMA OBJEK', 'KOORDINAT': 'KOORDINAT', 'KOORDINA_1': 'KOORDINA_1', 'ALAMAT': 'ALAMAT', 'TELP': 'TELP', 'BUKA': 'BUKA', });
lyr_RUMAHSAKIT_3.set('fieldAliases', {'fid': 'fid', 'NAMA': 'NAMA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ALAMAT': 'ALAMAT', 'KECAMATAN': 'KECAMATAN', 'WEBSITE': 'WEBSITE', 'NO.TELPON': 'NO.TELPON', 'LOK_FOTO': 'LOK_FOTO', });
lyr_PENDIDIKAN_4.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'Nama': 'Nama', 'Alamat': 'Alamat', 'Koordinat': 'Koordinat', 'field_5': 'field_5', });
lyr_ADMINISTRASIKECAMATAN_1.set('fieldImages', {'fid': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_TEMPATIBADAH_2.set('fieldImages', {'fid': '', 'NAMA OBJEK': '', 'KOORDINAT': '', 'KOORDINA_1': '', 'ALAMAT': '', 'TELP': '', 'BUKA': '', });
lyr_RUMAHSAKIT_3.set('fieldImages', {'fid': '', 'NAMA': '', 'LATITUDE': '', 'LONGITUDE': '', 'ALAMAT': '', 'KECAMATAN': '', 'WEBSITE': '', 'NO.TELPON': '', 'LOK_FOTO': '', });
lyr_PENDIDIKAN_4.set('fieldImages', {'fid': '', 'No': '', 'Nama': '', 'Alamat': '', 'Koordinat': '', 'field_5': '', });
lyr_ADMINISTRASIKECAMATAN_1.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TEMPATIBADAH_2.set('fieldLabels', {'fid': 'no label', 'NAMA OBJEK': 'no label', 'KOORDINAT': 'no label', 'KOORDINA_1': 'no label', 'ALAMAT': 'no label', 'TELP': 'no label', 'BUKA': 'no label', });
lyr_RUMAHSAKIT_3.set('fieldLabels', {'fid': 'no label', 'NAMA': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ALAMAT': 'no label', 'KECAMATAN': 'no label', 'WEBSITE': 'no label', 'NO.TELPON': 'no label', 'LOK_FOTO': 'no label', });
lyr_PENDIDIKAN_4.set('fieldLabels', {'fid': 'no label', 'No': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'Koordinat': 'no label', 'field_5': 'no label', });
lyr_PENDIDIKAN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});