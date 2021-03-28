import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "@reach/combobox/styles.css";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import MapStyles from "./mapStyles";
import SearchStyles from "./searchStyles.css";
import Markers from "./Markers";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const libraries = ["places"];
const mapContainerStyle = {
  height: "70vh",
  width: "90vw",
};

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 47.64602949823728,
  lng: -122.33554871127474
};

const searchOptions = {
  styles: SearchStyles,
};

// MapEmbed full component
const MapEmbed = () => {

    const [showInfo, setShowInfo] = useState(false);

    const openInfo = (event) => {
        setShowInfo(true)
    }

    const closeInfo = (event) => {
        setShowInfo(false)
    }

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

            <Grid>
                <Search 
                panTo={panTo}
                searchOptions={searchOptions}
                />
                <Locate panTo={panTo} />
            </Grid>

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
                        onClick={() => openInfo(marker.id)}
                        >
                          {showInfo && (
                            <InfoWindow onCloseClick={() => closeInfo()}>
                              <h4>{marker.provider}</h4>
                            </InfoWindow>
                          )}
                        </Marker>
                    )
                })}

            </GoogleMap>
        </div>
    );
}

// Near me functionality
function Locate({ panTo }) {
  return (
    <Button
      className='locate'
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      Or Search Near Me 📍
    </Button>
  );
}

// Search functionality
function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 47.6062, lng: () => -122.3321 },
      radius: 200 * 1000,
    },
  });

  return (
    <div className='search'>
      <Combobox
        onSelect={async (address) => {
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
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder='Type a city'
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default MapEmbed;