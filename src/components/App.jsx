import React from 'react';
import AutoInput from './AutoInput/AutoInput';
import {GeoInput} from './AutoInput/GeoInput';
import {useInput} from '../hooks/use-input';
import {names} from './names';

const App = () => {
   
    const [country, onChangeCountry] = useInput(''); 
    const [city, onChangeCity] = useInput(''); 
    const [value, onChange] = useInput(''); 
    const nameList = names.map((name, i) =>({
        id: i,
        name
    }));

    return (
        <div className="center">
            <div className="w-50">
                <span>Страна</span>
                <GeoInput type={'countries'} value={country} onChange={onChangeCountry}/>
                <span>Город</span>
                <GeoInput type={'cities'} value={city} onChange={onChangeCity}/>
                <span>Имя на букву A</span>
                <AutoInput 
                    value={value} 
                    onChange={onChange} 
                    list={nameList}
                    keyName={'id'}
                    labelKey={'name'}
                />
            </div>
        </div>
    );
};

//export default hot(App);
export default App;