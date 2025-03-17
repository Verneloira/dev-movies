import React, { useEffect, useState } from 'react';
import { getTopMovies } from '../../services/getData';
import Slider from '../../components/Slider';
import { Container } from './styles';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const topMovies = await getTopMovies();
            setMovies(topMovies);
        }
        fetchMovies();
    }, []);

    return (
        <Container>
         <Slider info={movies} title="Top Filmes" />
        </Container>
    );
};

export default Movies;
