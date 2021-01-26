import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import renderSuggestion from "./renderSuggestion";

function SupplierSuggestionsInput({ suppliers, onSuggetionSelect }) {
    const [suppliersugestions, setreciversugestions] = useState([]);
    const [value, setvalue] = useState("");
  
    const getSuggestions = value => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      const results =
        inputLength === 0
          ? []
          : suppliers.filter(supplier => {
              return supplier.company_name.toLowerCase().includes(inputValue);
            });
      return results;
    };
  
    const getSuggestionValue =  suggestion => {
      onSuggetionSelect(suggestion);
      const company_name = suggestion.company_name
      return company_name;
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
      placeholder: "Supplier",
      value,
      onChange
    };
  
    return (
        <Autosuggest
        suggestions={suppliersugestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(e, data) => getSuggestionValue(e, data)}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    )
}

export default SupplierSuggestionsInput
