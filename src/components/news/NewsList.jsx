import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NewsList = ({ news }) => {

    const placeholderImage = 'https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'


    const [voteCount, updateVote] = useState(0);

    const [voteCountDown, updateDown] = useState(0);

    const navigate = useNavigate();

    const fetchId = async (e) => {
        navigate(`/q?=${e.target.value}`)
    }

    const handleVote = () => {

        updateVote((previousCount) => previousCount + 1)
    }

    const handleVoteDown = () => {
        updateDown(previousCount => previousCount + 1)
    }



    return (


        <section className="flex-center-container">
            {news.map((article) => (

                <article key={article.id}>

                    <img src={article.pictureLink ? article.pictureLink : placeholderImage} alt=''
                        onError={(e) => {
                            e.target.onError = null;
                            e.target.src = placeholderImage;
                        }} />
                    <h3>{article.title}</h3>
                    <p>{article.text}</p>

                    <footer>
                        <Link to={article.source} target="_blank" rel="noopener noreferrer"> Källa </Link>
                    </footer>
                    <section className="vote">
                        <button onClick={handleVote}> {voteCount} <FontAwesomeIcon icon={faThumbsUp} color='#2edc39' size='xl' /></button>
                        <button onClick={handleVoteDown}>{voteCountDown} <FontAwesomeIcon icon={faThumbsDown} color='#ec0909' size='xl' /></button>


                    </section>
                    <button onClick={fetchId} value={article.id} className='info-btn'>INFORMATION</button>
                </article>



            ))}
        </section>



    )

}



export default NewsList;