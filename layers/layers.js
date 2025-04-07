var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_municipios_1 = new ol.format.GeoJSON();
var features_municipios_1 = format_municipios_1.readFeatures(json_municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_1.addFeatures(features_municipios_1);
var lyr_municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_1, 
                style: style_municipios_1,
                popuplayertitle: 'municipios',
                interactive: false,
                title: '<img src="styles/legend/municipios_1.png" /> municipios'
            });
var format_ca_perimetros_aba_2 = new ol.format.GeoJSON();
var features_ca_perimetros_aba_2 = format_ca_perimetros_aba_2.readFeatures(json_ca_perimetros_aba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ca_perimetros_aba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ca_perimetros_aba_2.addFeatures(features_ca_perimetros_aba_2);
var lyr_ca_perimetros_aba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ca_perimetros_aba_2, 
                style: style_ca_perimetros_aba_2,
                popuplayertitle: 'ca_perimetros_aba',
                interactive: false,
                title: '<img src="styles/legend/ca_perimetros_aba_2.png" /> ca_perimetros_aba'
            });
var format_ca_puntos_upas_3 = new ol.format.GeoJSON();
var features_ca_puntos_upas_3 = format_ca_puntos_upas_3.readFeatures(json_ca_puntos_upas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ca_puntos_upas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ca_puntos_upas_3.addFeatures(features_ca_puntos_upas_3);
var lyr_ca_puntos_upas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ca_puntos_upas_3,
maxResolution:8.401339845678589,
 
                style: style_ca_puntos_upas_3,
                popuplayertitle: 'ca_puntos_upas',
                interactive: false,
    title: 'ca_puntos_upas<br />\
    <img src="styles/legend/ca_puntos_upas_3_0.png" /> ESTABLECIMIENTO<br />\
    <img src="styles/legend/ca_puntos_upas_3_1.png" /> PRODUCTOR<br />\
    <img src="styles/legend/ca_puntos_upas_3_2.png" /> VIVIENDA<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_municipios_1.setVisible(true);lyr_ca_perimetros_aba_2.setVisible(true);lyr_ca_puntos_upas_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_municipios_1,lyr_ca_perimetros_aba_2,lyr_ca_puntos_upas_3];
lyr_municipios_1.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'c_ut': 'c_ut', 'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'n°_ley': 'n°_ley', 'fecha_ley': 'fecha_ley', 'zona': 'zona', 'id_ut': 'id_ut', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'c_siot': 'c_siot', 'tioc_aioc': 'tioc_aioc', });
lyr_ca_perimetros_aba_2.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'id_ciu_com': 'id_ciu_com', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'upa_13': 'upa_13', 'sup13ha': 'sup13ha', 'n_pre_ace': 'n_pre_ace', 'id_com_cpv': 'id_com_cpv', 'id_com_cna': 'id_com_cna', 'id_com_ace': 'id_com_ace', 'reg_censos': 'reg_censos', 'id_com_ca': 'id_com_ca', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'tot_pob_ac': 'tot_pob_ac', 'tot_pob_12': 'tot_pob_12', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'd_co_comk': 'd_co_comk', 'observ': 'observ', });
lyr_ca_puntos_upas_3.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'id_correl': 'id_correl', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'ord_mun': 'ord_mun', 'n_completo': 'n_completo', 'nombre': 'nombre', 'paterno': 'paterno', 'materno': 'materno', 'nomb_org': 'nomb_org', 'nomb_estab': 'nomb_estab', 'ci': 'ci', 'telf': 'telf', 'instit_und': 'instit_und', 'prog_proy': 'prog_proy', 'x': 'x', 'y': 'y', 'lat': 'lat', 'lon': 'lon', 'nom_predio': 'nom_predio', 'rubro': 'rubro', 'sub_rubro': 'sub_rubro', 'runsa': 'runsa', 'runpa': 'runpa', 'reg_sanit': 'reg_sanit', 'certf_inra': 'certf_inra', 'clasf_inra': 'clasf_inra', 'matr_comer': 'matr_comer', 'superficie': 'superficie', 's_activos': 's_activos', 's_pasivos': 's_pasivos', 's_activo_t': 's_activo_t', 's_pasivo_t': 's_pasivo_t', 'id_ra': 'id_ra', 'nro': 'nro', 'fuente': 'fuente', 'cab_sector': 'cab_sector', 'comunidad': 'comunidad', 'porcentaje': 'porcentaje', 'zona': 'zona', 'valido': 'valido', 'latitud': 'latitud', 'longitud': 'longitud', 'clatitinra': 'clatitinra', 'nomb_pj': 'nomb_pj', 'clapersona': 'clapersona', 'cod_ag': 'cod_ag', 'cod_ae': 'cod_ae', 'cod_aba': 'cod_aba', 'ag_unico': 'ag_unico', 'ae_unico': 'ae_unico', 'aba_unico': 'aba_unico', 'grupo_pto': 'grupo_pto', 'tipo_pto': 'tipo_pto', 'obs_reg': 'obs_reg', 'nc_aux': 'nc_aux', 'nro_corr': 'nro_corr', 'corr_ae': 'corr_ae', 'id_prod': 'id_prod', 'empad': 'empad', 'orden_prod': 'orden_prod', 'ubic_ini': 'ubic_ini', 'ncomp_ini': 'ncomp_ini', 'ubic_cmpo': 'ubic_cmpo', 'ncomp_cmpo': 'ncomp_cmpo', 'viv_upa': 'viv_upa', 'est_sispro': 'est_sispro', 'descargado': 'descargado', 'lat_sispro': 'lat_sispro', 'lon_sispro': 'lon_sispro', 'dato_princ': 'dato_princ', 'ubic_princ': 'ubic_princ', 'genero': 'genero', 'id_ubicac': 'id_ubicac', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'idprod_sis': 'idprod_sis', 'nro_upas': 'nro_upas', 'prod_estab': 'prod_estab', 'nom_estab': 'nom_estab', 'desc_rubro': 'desc_rubro', 'bck_codigo': 'bck_codigo', });
lyr_municipios_1.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'c_ut': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'n°_ley': 'TextEdit', 'fecha_ley': 'DateTime', 'zona': 'TextEdit', 'id_ut': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'c_siot': 'TextEdit', 'tioc_aioc': 'TextEdit', });
lyr_ca_perimetros_aba_2.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'id_ciu_com': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'upa_13': 'TextEdit', 'sup13ha': 'TextEdit', 'n_pre_ace': 'TextEdit', 'id_com_cpv': 'TextEdit', 'id_com_cna': 'TextEdit', 'id_com_ace': 'TextEdit', 'reg_censos': 'TextEdit', 'id_com_ca': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'tot_pob_ac': 'TextEdit', 'tot_pob_12': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'd_co_comk': 'TextEdit', 'observ': 'TextEdit', });
lyr_ca_puntos_upas_3.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'id_correl': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'ord_mun': 'TextEdit', 'n_completo': 'TextEdit', 'nombre': 'TextEdit', 'paterno': 'TextEdit', 'materno': 'TextEdit', 'nomb_org': 'TextEdit', 'nomb_estab': 'TextEdit', 'ci': 'TextEdit', 'telf': 'TextEdit', 'instit_und': 'TextEdit', 'prog_proy': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'nom_predio': 'TextEdit', 'rubro': 'TextEdit', 'sub_rubro': 'TextEdit', 'runsa': 'TextEdit', 'runpa': 'TextEdit', 'reg_sanit': 'TextEdit', 'certf_inra': 'TextEdit', 'clasf_inra': 'TextEdit', 'matr_comer': 'TextEdit', 'superficie': 'TextEdit', 's_activos': 'TextEdit', 's_pasivos': 'TextEdit', 's_activo_t': 'TextEdit', 's_pasivo_t': 'TextEdit', 'id_ra': 'TextEdit', 'nro': 'TextEdit', 'fuente': 'TextEdit', 'cab_sector': 'TextEdit', 'comunidad': 'TextEdit', 'porcentaje': 'TextEdit', 'zona': 'TextEdit', 'valido': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'clatitinra': 'TextEdit', 'nomb_pj': 'TextEdit', 'clapersona': 'TextEdit', 'cod_ag': 'TextEdit', 'cod_ae': 'TextEdit', 'cod_aba': 'TextEdit', 'ag_unico': 'TextEdit', 'ae_unico': 'TextEdit', 'aba_unico': 'TextEdit', 'grupo_pto': 'TextEdit', 'tipo_pto': 'TextEdit', 'obs_reg': 'TextEdit', 'nc_aux': 'TextEdit', 'nro_corr': 'TextEdit', 'corr_ae': 'TextEdit', 'id_prod': 'TextEdit', 'empad': 'TextEdit', 'orden_prod': 'TextEdit', 'ubic_ini': 'TextEdit', 'ncomp_ini': 'TextEdit', 'ubic_cmpo': 'TextEdit', 'ncomp_cmpo': 'TextEdit', 'viv_upa': 'TextEdit', 'est_sispro': 'TextEdit', 'descargado': 'TextEdit', 'lat_sispro': 'TextEdit', 'lon_sispro': 'TextEdit', 'dato_princ': 'TextEdit', 'ubic_princ': 'TextEdit', 'genero': 'TextEdit', 'id_ubicac': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'idprod_sis': 'TextEdit', 'nro_upas': 'TextEdit', 'prod_estab': 'TextEdit', 'nom_estab': 'TextEdit', 'desc_rubro': 'TextEdit', 'bck_codigo': 'TextEdit', });
lyr_municipios_1.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'c_ut': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'n°_ley': 'no label', 'fecha_ley': 'no label', 'zona': 'no label', 'id_ut': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'c_siot': 'no label', 'tioc_aioc': 'no label', });
lyr_ca_perimetros_aba_2.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'id_ciu_com': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'upa_13': 'no label', 'sup13ha': 'no label', 'n_pre_ace': 'no label', 'id_com_cpv': 'no label', 'id_com_cna': 'no label', 'id_com_ace': 'no label', 'reg_censos': 'no label', 'id_com_ca': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'tot_pob_ac': 'no label', 'tot_pob_12': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'd_co_comk': 'no label', 'observ': 'no label', });
lyr_ca_puntos_upas_3.set('fieldLabels', {'id': 'no label', 'gid': 'inline label - always visible', 'id_correl': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'ord_mun': 'no label', 'n_completo': 'no label', 'nombre': 'no label', 'paterno': 'no label', 'materno': 'no label', 'nomb_org': 'no label', 'nomb_estab': 'no label', 'ci': 'no label', 'telf': 'no label', 'instit_und': 'no label', 'prog_proy': 'no label', 'x': 'no label', 'y': 'no label', 'lat': 'no label', 'lon': 'no label', 'nom_predio': 'no label', 'rubro': 'no label', 'sub_rubro': 'no label', 'runsa': 'no label', 'runpa': 'no label', 'reg_sanit': 'no label', 'certf_inra': 'no label', 'clasf_inra': 'no label', 'matr_comer': 'no label', 'superficie': 'no label', 's_activos': 'no label', 's_pasivos': 'no label', 's_activo_t': 'no label', 's_pasivo_t': 'no label', 'id_ra': 'no label', 'nro': 'no label', 'fuente': 'no label', 'cab_sector': 'no label', 'comunidad': 'no label', 'porcentaje': 'no label', 'zona': 'no label', 'valido': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'clatitinra': 'no label', 'nomb_pj': 'no label', 'clapersona': 'no label', 'cod_ag': 'no label', 'cod_ae': 'no label', 'cod_aba': 'no label', 'ag_unico': 'no label', 'ae_unico': 'no label', 'aba_unico': 'no label', 'grupo_pto': 'no label', 'tipo_pto': 'no label', 'obs_reg': 'no label', 'nc_aux': 'no label', 'nro_corr': 'no label', 'corr_ae': 'no label', 'id_prod': 'no label', 'empad': 'no label', 'orden_prod': 'no label', 'ubic_ini': 'no label', 'ncomp_ini': 'no label', 'ubic_cmpo': 'no label', 'ncomp_cmpo': 'no label', 'viv_upa': 'no label', 'est_sispro': 'no label', 'descargado': 'no label', 'lat_sispro': 'no label', 'lon_sispro': 'no label', 'dato_princ': 'no label', 'ubic_princ': 'no label', 'genero': 'no label', 'id_ubicac': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'idprod_sis': 'no label', 'nro_upas': 'no label', 'prod_estab': 'no label', 'nom_estab': 'no label', 'desc_rubro': 'no label', 'bck_codigo': 'no label', });
lyr_ca_puntos_upas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});