import React from 'react';
import Autocomplete from 'react-autocomplete';

const AutoInput = ({
    value,
    onChange, 
    onSelect, 
    list,  
    keyName, 
    labelKey,
    formatLabel
}) => {
  
    const isMatch = (item) => item[labelKey].toLowerCase().includes(value.toLowerCase());
    const match = !!list.filter(isMatch).length;

    const handeleChange = (event, value) => {
        setDisplay(true);
        onChange(event);
    };

    const handeleSelect = (value, item) => {
        setDisplay(false);
        if (!onSelect) {
            onChange({target: {value}});
        } else {
            onSelect(item);
        }
    };

    const [display, setDisplay] = React.useState(true);
    

    return (
       
        <Autocomplete
            open={!!value && display && match}
            value={value}
            getItemValue={(item) => item[labelKey]}
            items={list}
            onChange={handeleChange}
            onSelect={handeleSelect}
            shouldItemRender={isMatch}
            wrapperStyle={{display: 'block', position: 'relative'}}
            renderInput={(props) => {
                return <input style={{width: '100%'}} {...props} autoComplete="off"/>;
            }}
            inputProps={{
                onBlur: () => {
                    setDisplay(false);
                },
                onFocus: () => {
                    if (value) {
                        setDisplay(true);
                    }
                }
            }}            
            renderMenu={(items) => {
                return <ul style={{position: 'absolute', top: '100%', zIndex: 1000}} className="input-list">{items}</ul>;
            }}
            renderItem={(item, isHighlighted) =>
                <li key={item[keyName]} className="input-item" style={{background: isHighlighted ? 'lightgray' : 'white'}}>
                    {formatLabel ? formatLabel(item) : item[labelKey]}
                </li>
            }
        />
       
    );
};

export default AutoInput;