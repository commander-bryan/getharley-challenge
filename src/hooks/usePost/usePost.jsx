import { useState} from 'react';
import axios from 'axios';

const usePost = () => {  
    const [posting, setPosting] = useState(false);
    const [error, setError] = useState(null);

    const dispatchPost = (url, payload, successCallback) =>{
        setPosting(true);
        setError(null);

        axios({
            method: 'post',
            url,
            data: payload,
            })
        .then((result) => {
            successCallback(result);
        }).catch((e) => {
            setPosting(false);
            setError(e);
        });
    } 

    return { dispatchPost, posting, error };

}

export { usePost };