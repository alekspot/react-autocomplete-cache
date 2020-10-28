import {useQuery} from 'react-query';

export const useGeo = (options, selector) => {
    const apiKey = 'G0Zs1Tlo4fQX3OqYT1N6zlGo1gMXCkMC';
    const {isLoading, error, data} = useQuery('repoData', () =>
        
        fetch(
            `http://geohelper.info/api/v1/${options}?apiKey=${apiKey}&locale[lang]=ru`
        ).then((res) => res.json()), {refetchOnWindowFocus: false}
    );

    
    const selectedData = selector && data ? selector(data.result) : [];

    return selectedData;
};