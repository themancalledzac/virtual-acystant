import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import MapStyles from "./mapStyles";
import Markers from "./Markers";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "75vw"
};

const options = {
    styles: MapStyles,
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
    });

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    
    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading map";

    return(
        <div>
            <h1 className="mapHeader">Providers <span role="img" aria-label="stethoscope">🩺 </span></h1>

            <Locate panTo={panTo} />
            <Search panTo={panTo} />

            <GoogleMap 
                id="map"
                mapContainerStyle={mapContainerStyle} 
                zoom={13} 
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
                {Markers.map(marker => {
                    return (
                        <Marker
                        key={marker.id}
                        position={{lat: marker.latitude, lng: marker.longitude}}
                        />
                    )
                })}

            </GoogleMap>
        </div>
    );
}

function Locate({ panTo }) {
    return (
        <button className="locate" onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
                panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            }, () => null);
        }}>
            Near Me
        </button>
    )
}

function Search({ panTo }) {
    const { ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 47.6062, lng: () => -122.3321 },
            radius: 200  * 1000,
        }
    });

    return (
        <div className="search">
            <Combobox onSelect={async (address) => {

                setValue(address, false);
                clearSuggestions();

                try {
                    const results = await getGeocode({ address });
                    const { lat, lng } = await getLatLng(results[0]);
                    panTo({ lat, lng });
                } catch (error) {
                    console.log("Error");
                }
            }}
            >
                <ComboboxInput value={value} onChange={(e) => {
                    setValue(e.target.value);
                    }}
                    disabled={!ready}
                    placeholder="Type a city"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}

export default Mapv2;