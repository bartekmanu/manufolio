import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// import CustomMarker from '../assets/images/CustomMarker.png';
import wro from '../assets/images/Wro.png';
import kato from '../assets/images/Kato.png';

const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmXRHlCydyksPOhmWTUdJLg0SXXA06l4I&callback=initMap';

const exampleMapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#000000' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#000000' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: 'transparent' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#ffffff', visibility: 'off' }],
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
    stylers: [{ visibility: 'off' }],
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
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#8c6800' }],
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
    featureType: 'poi.business',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
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
  {
    featureType: 'administrative.locality',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }],
  },
];

const markerList = [
  { lat: 50.263497, lng: 19.024357, icon: kato, slug: 'Katowice' },
  { lat: 51.107517, lng: 17.038629, icon: wro, slug: 'Wrocław' },
];

const MyMapComponent = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 50.682586, lng: 17.971387 }}
      defaultOptions={{ styles: exampleMapStyles }}
      options={{ styles: exampleMapStyles }}
    >
      {markerList.map((mark) => (
        <Marker key={mark.slug} position={mark} icon={mark.icon} />
      ))}
    </GoogleMap>
  )),
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
