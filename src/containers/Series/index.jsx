import React, { useEffect, useState } from 'react'
import { getTopSeries, getPopularSeries } from '../../services/getData'
import Slider from '../../components/Slider'
import { Container } from './styles'

const Series = () => {
    const [topSeries, setTopSeries] = useState([])
    const [popularSeries, setPopularSeries] = useState([])

    useEffect(() => {
        async function fetchSeries() {
            const topRatedSeries = await getTopSeries()
            const popularSeriesData = await getPopularSeries()
            setTopSeries(topRatedSeries)
            setPopularSeries(popularSeriesData)
        }
        fetchSeries();
    }, [])

    return (
        <Container>
            <Slider info={topSeries} title="Top Séries" />
            <Slider info={popularSeries} title="Séries Populares" />
        </Container>
    )
}

export default Series
