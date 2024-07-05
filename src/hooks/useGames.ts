import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform {
    id: number;
    name: string;
    slug: string;

}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGames {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController
        setIsLoading(true)
        console.log(isLoading)
        apiClient
            .get<FetchGames>('/games', { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                console.log('Fetched games:', res.data.results); // Add logging
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                console.error('Error fetching games:', err); // Add logging
                setIsLoading(false)
            });

        return () => controller.abort();
    }, []);
    console.log(isLoading)
    return { games, error, isLoading };
}

export default useGames;
