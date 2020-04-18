import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import Marker from './Marker';

const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmXRHlCydyksPOhmWTUdJLg0SXXA06l4I&callback=initMap';

const exampleMapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#000000' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#000000' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: 'transparent' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#2b2b2b' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#fbbc0c' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#2b2b2b' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: 'transparent' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: 'transparent' }],
  },
];

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 50.263497, lng: 19.024357 }}
      defaultOptions={{ styles: exampleMapStyles }}
      options={{ styles: exampleMapStyles }}
    >
      {props.isMarkerShown && <Marker color="red" position={{ lat: 50.263497, lng: 19.024357 }} />}
    </GoogleMap>
  )),
);
// 50.263497, 19.024357 Katowice
// 51.107230, 17.036494 Wrocław
// eslint-disable-next-line
const GMap = () => (
  <MyMapComponent
    isMarkerShown
    googleMapURL={googleMapURL}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);

export default GMap;
