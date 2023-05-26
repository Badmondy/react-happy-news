
import axios from "axios";
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewsDetailsModule.css';

const NewsDetails = () => {

    const [objData, setData] = useState(null);

    const query = window.location.search;

    const queryArr = query.split('=',)

    const id = queryArr[1];

    const placeholderImage = 'https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

    const url = "http://localhost:5024/api/v1/getById/";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}${id}`);
                setData(response.data);
                console.log(objData)
            } catch (error) {
                console.log(error);
            }

        };

        fetchData();
    }, [id, objData]);



    if (objData === null) {
        return <div>Loading....</div>
    }
    return (

        <section className="flex-center-container">
            <article>
                <Link to='/'> <FontAwesomeIcon icon={faLeftLong} size='2xl' color='blue' /> </Link>
                <span >Under uppbyggnad </span>
                <span>ID: {objData.id}</span>
                <img src={objData.pictureLink ? objData.pictureLink : placeholderImage} alt=''
                    onError={(e) => {
                        e.target.onError = null;
                        e.target.src = placeholderImage;
                    }} />
                <h3>{objData.title}</h3>
                <p>{objData.text}</p>
                <p className="source-link"> Källa: {objData.source}</p>
                <span>Hämtad: {objData.time}</span>
                <span>Kategori: {objData.category}</span>
            </article>

        </section>
    )

}


export default NewsDetails