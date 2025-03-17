import { useEffect, useState } from 'react'
import { getMovieVideos } from '../../services/getData'
import { Container, Background, ButtonClose} from './styles'

function Modal ({ movieId, setShowModal}) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMoviesVideos() {
            setMovie(await getMovieVideos(movieId))
        }

        getMoviesVideos() 
    }, [])

    return (
        <Background onClick={() => setShowModal(false) }>
           {movie && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie[0].key}`}
                        title='Youtube Video Player'
                        height="500px"
                        width="100%"
                        
                    ></iframe>
                     <ButtonClose onClick={() => setShowModal(false)}>X</ButtonClose>


                </Container>
            )}
        </Background>
    )
}

export default Modal
