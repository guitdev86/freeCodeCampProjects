import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import './App.css';


export default function App() {
  const { address, setAddress } = React.useState("");

  const handleSelect = async (value) => { };

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (<div>
            <input {...getInputProps({ placeholder: "Type in the address" })} />
            <div>
              {loading && <div>...loading</div>}
              {suggestions.map(suggestion => {
                return <div>{suggestion.description}</div>
              })}
            </div>
          </div>);
        }}
      </PlacesAutocomplete>
    </div >
  );
}
