import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';



interface FetchResponse<T> {
    count: number;
    results: T[];
}


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController
        setIsLoading(true)
        console.log(isLoading)
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                console.log(`Fetched ${endpoint}:`, res.data.results); // Add logging
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                console.error(`Error Fetching ${endpoint}:`, err); // Add logging
                setIsLoading(false)
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);
    console.log(isLoading)
    return { data, error, isLoading };
}

export default useData;