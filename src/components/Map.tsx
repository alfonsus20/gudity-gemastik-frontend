import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

interface DefaultCenter {
  lat: number;
  lng: number;
}

interface Location {
  lat: number;
  lng: number;
}

const Map = withGoogleMap<{
  defaultCenter: DefaultCenter;
  locations: Location[];
}>((props) => (
  <GoogleMap defaultZoom={12} defaultCenter={props.defaultCenter}>
    {props.locations.map((location) => (
      <Marker position={{ ...location }} />
    ))}
  </GoogleMap>
));

export default Map;
