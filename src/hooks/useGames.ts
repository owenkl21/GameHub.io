import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Image } from '@chakra-ui/react';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGames {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController

        apiClient
            .get<FetchGames>('/games', { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                console.log('Fetched games:', res.data.results); // Add logging
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                console.error('Error fetching games:', err); // Add logging
            });

        return () => controller.abort();
    }, []);

    return { games, error };
}

export default useGames;