
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "MapboxStreetsv10_0": {
            "type": "raster",
            "tiles": ["https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"],
            "tileSize": 256
        },
        "BusStops_1": {
            "type": "geojson",
            "data": json_BusStops_1
        }
                    ,
        "Athens_draft_bike_routes_2": {
            "type": "geojson",
            "data": json_Athens_draft_bike_routes_2
        }
                    ,
        "_2020_GNP_3": {
            "type": "geojson",
            "data": json__2020_GNP_3
        }
                    ,
        "POI_WebMapPOI_WebMap1_4": {
            "type": "geojson",
            "data": json_POI_WebMapPOI_WebMap1_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_MapboxStreetsv10_0_0",
            "type": "raster",
            "source": "MapboxStreetsv10_0"
        },
        {
            "id": "lyr_BusStops_1_0",
            "type": "circle",
            "source": "BusStops_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#fadd2d', 'circle-opacity': 0.85, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#f7e137'}
        }
,
        {
            "id": "lyr_Athens_draft_bike_routes_2_0",
            "type": "line",
            "source": "Athens_draft_bike_routes_2",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'road_class'], 'Preferred'], 2.6785714285714284, ['==', ['get', 'road_class'], 'Strongly preferred'], 2.6785714285714284, ['==', ['get', 'road_class'], 'Use only when necessary'], 2.6785714285714284, ['==', ['get', 'road_class'], 'Use with caution'], 2.6785714285714284, 2.6785714285714284], 'line-opacity': ['case', ['==', ['get', 'road_class'], 'Preferred'], 1.0, ['==', ['get', 'road_class'], 'Strongly preferred'], 1.0, ['==', ['get', 'road_class'], 'Use only when necessary'], 1.0, ['==', ['get', 'road_class'], 'Use with caution'], 1.0, 1.0], 'line-color': ['case', ['==', ['get', 'road_class'], 'Preferred'], '#a6d96a', ['==', ['get', 'road_class'], 'Strongly preferred'], '#1a9641', ['==', ['get', 'road_class'], 'Use only when necessary'], '#d7191c', ['==', ['get', 'road_class'], 'Use with caution'], '#fdae61', '#8e18d7']}
        }
,
        {
            "id": "lyr__2020_GNP_3_0",
            "type": "line",
            "source": "_2020_GNP_3",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'Network'], 'North Oconee River Greenway'], 1.8910714285714283, ['==', ['get', 'Network'], 'Firefly Trail'], 1.8910714285714283, ['==', ['get', 'Network'], 'Athens Line'], 1.8910714285714283, ['==', ['get', 'Network'], 'Partnership Networks'], 1.8910714285714283, ['==', ['get', 'Network'], 'Urban Trails'], 1.8910714285714283, 0], 'line-opacity': ['case', ['==', ['get', 'Network'], 'North Oconee River Greenway'], 1.0, ['==', ['get', 'Network'], 'Firefly Trail'], 1.0, ['==', ['get', 'Network'], 'Athens Line'], 1.0, ['==', ['get', 'Network'], 'Partnership Networks'], 1.0, ['==', ['get', 'Network'], 'Urban Trails'], 1.0, 0], 'line-color': ['case', ['==', ['get', 'Network'], 'North Oconee River Greenway'], '#267300', ['==', ['get', 'Network'], 'Firefly Trail'], '#1a9641', ['==', ['get', 'Network'], 'Athens Line'], '#1a9641', ['==', ['get', 'Network'], 'Partnership Networks'], '#e60000', ['==', ['get', 'Network'], 'Urban Trails'], '#a87000', '#ffffff']}
        }
,
        {
            "id": "lyr_POI_WebMapPOI_WebMap1_4_0",
            "type": "circle",
            "source": "POI_WebMapPOI_WebMap1_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#f3a6b2', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}