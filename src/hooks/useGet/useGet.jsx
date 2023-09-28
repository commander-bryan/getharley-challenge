import { useEffect, useState} from 'react';
import axios from 'axios';

const useGet = (url) => {  
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
  
        axios({
            method: 'get',
            url,
            })
        .then((response) => {
            setData(response.data);
            setLoading(false);
            setError(null);
        }).catch((e) => {
            setLoading(false);
            setError(`Error fetching ${url}: ${e}`);
        });
      };

      fetchData();
    }, [url]);
    return { data, loading, error };

}

export { useGet };