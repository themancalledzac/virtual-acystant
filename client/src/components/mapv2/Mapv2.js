import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "100vw"
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

const center = {
    lat: 47.6062,
    lng: -122.3321
}

const Mapv2 = () => {

    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        libraries,
    })

    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading map";


    return(
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={8} 
                center={center}
                options={options}
            ></GoogleMap>
        </div>
    )
}

export default Mapv2;
