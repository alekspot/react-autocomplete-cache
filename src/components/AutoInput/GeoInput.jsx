import React, {useCallback} from 'react';
import {useQuery} from 'react-query';
import useDebounce from '../../hooks/use-debounce';
import AutoInput from './AutoInput';

export const GeoInput = ({value, onChange, onSelect, type, labelKey}) => {
   
    const [valueExtended, setValue] = React.useState({value, type: ''});

    const handleChange = useCallback((e)=> {
        onChange(e);
        setValue({
            value: e.target.value,
            type: 'INPUT'
        });
    },[]);

    const handleSelect = useCallback((value) => {
        onChange({target: {value: value.name}});
        if (onSelect) onSelect(value);

        setValue({
            value: value.name,
            type: 'SELECT'
        });
    },[]);

    const debounceValue = useDebounce(valueExtended, 1000);
    const {data} = useQuery([type, {name: debounceValue.value, type}],
        
        (type, params) => {
            const options = type || 'countries';
            const apiSource = 'http://geohelper.info/api/v1';
            const apiKey = 'G0Zs1Tlo4fQX3OqYT1N6zlGo1gMXCkMC';

            return fetch(
                `${apiSource}/${options}?apiKey=${apiKey}&filter[countryIso]=RU&order[by]=name&locale[lang]=ru&filter[name]=${params.name}`
            ).then((res) => {
                return res.json();
            });
        },
        {   
            enabled: debounceValue.type === 'INPUT',
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        }
    );

    const [items, setList] = React.useState(data ? data.result : []);

    React.useEffect(() => {
        if (data) {
            setList(data.result);
        }
    },[data]);

    const formatDataResult = useCallback((result) => {
        return result.map(item => {
            const names = result.filter(i => item.name === i.name);
            if (names.length > 1) {
                return {...item, name: `${item.name}${item.area ? `(${item.area})` : ''}`};
            }
    
            return item;
        });
    },[]);

    return (
        <AutoInput
            keyName={'id'}
            labelKey={labelKey || 'name'}
            value={value}
            onChange={handleChange}
            onSelect={handleSelect}
            list={formatDataResult(items)}
        /> 
    );
};
