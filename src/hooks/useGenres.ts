import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';



interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface FetchGenres {
    count: number;
    results: Genre[];
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController
        setIsLoading(true)
        console.log(isLoading)
        apiClient
            .get<FetchGenres>('/genres', { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                console.log('Fetched Genre:', res.data.results); // Add logging
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                console.error('Error fetching Genres:', err); // Add logging
                setIsLoading(false)
            });

        return () => controller.abort();
    }, []);
    console.log(isLoading)
    return { genres, error, isLoading };
}

export default useGenres;