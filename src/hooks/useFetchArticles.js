import { useState, useEffect } from 'react';
import { getNewsAPIArticles, getGuardianArticles, getNYTArticles } from '../services/apiService';

const useFetchArticles = (query, page, preferences) => {
    const [articles, setArticles] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);
    const articlesPerPage = 10;

    const fetchArticles = async () => {
        const sources = [
            { name: 'NewsAPI', fetcher: getNewsAPIArticles },
            { name: 'Guardian', fetcher: getGuardianArticles },
            { name: 'NYT', fetcher: getNYTArticles }
        ];

        const results = await Promise.allSettled(
            sources.map(source => source.fetcher(query, page))
        );

        const successfulResults = results
            .filter(result => result.status === 'fulfilled')
            .map(result => result.value);

        if (successfulResults.length === 0) {
            setError('Failed to fetch articles from all sources.');
            return;
        }

        const allArticles = successfulResults.flatMap(response => {
            if (response.data) return response.data.articles || response.data.response.results || response.data.response.docs;
            return [];
        });

        setArticles(allArticles);
        setTotalPages(Math.ceil(allArticles.length / articlesPerPage));
    };

    useEffect(() => {
        fetchArticles();
    }, [query, page]);

    return { articles, totalPages, error };
};

export default useFetchArticles;