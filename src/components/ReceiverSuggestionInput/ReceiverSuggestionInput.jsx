import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import renderSuggestion from "./renderSuggestion";
import ExpandableTextInput from "./../ExpandableTextInput";

function ReceiverSuggestionInput({ receivers, onSuggetionSelect }) {

    const [receiversugestions, setreciversugestions] = useState([]);
    const [value, setvalue] = useState("");
  
    const getSuggestions = value => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      const results =
        inputLength === 0
          ? []
          : receivers.filter(receiver => {
              return receiver.email.toLowerCase().includes(inputValue);
            });
      return results;
    };
  
    const getSuggestionValue =  suggestion => {
      onSuggetionSelect(suggestion);
      const email = suggestion.email
      return email;
    };
  
    const onChange = (event, { newValue }) => {
      setvalue(newValue);
    };
  
    const onSuggestionsFetchRequested = ({ value }) => {
      setreciversugestions(getSuggestions(value));
    };
  
    const onSuggestionsClearRequested = () => {
      setreciversugestions([]);
    };
  
    const inputProps = {
      placeholder: "Reciever's Email ",
      value,
      className:"form-control",
      label:"Search Receiver",
      id:'package-receiver',
      onChange
    };
  
    return (
        <Autosuggest
        suggestions={receiversugestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(e, data) => getSuggestionValue(e, data)}
        renderSuggestion={renderSuggestion}
        renderInputComponent={ExpandableTextInput}
        inputProps={inputProps}
      />
    )
}

export default ReceiverSuggestionInput
