import {useState, useCallback} from 'react';

function useHttp(){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (httpConfig, manageData) => {
        setIsLoading(true);
        setError(null);
        try {

            const response = await fetch(httpConfig.url, 
                {
                    method: httpConfig.method ? httpConfig.method : 'GET',
                    headers:httpConfig.headers ? httpConfig.headers : {},
                    body : httpConfig.body ? JSON.stringify(httpConfig.body) : null
                }
            );

            if (!response.ok) {
              throw new Error('Request failed!');
            }
            const data = await response.json();
            console.log(data);
            manageData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
      setIsLoading(false);
    }, []
    )

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;