import React from 'react';

export const useInput = (initial) => {
    const [value, setValue] = React.useState(initial);

    const onChange = (e) => setValue(e.target.value); 

    return [value, onChange];
};