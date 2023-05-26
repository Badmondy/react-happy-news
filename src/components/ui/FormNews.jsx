import './FormNewsModule.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';





const FormNews = () => {

    // eslint-disable-next-line
    const [id, idChange] = useState(uuidv4);
    const [title, titelChange] = useState('');
    const [text, textChange] = useState('');
    const [pictureLink, pictureLinkChange] = useState('');
    const [time, timeChange] = useState('');
    const [source, sourceChange] = useState('');
    const [category, categoryChange] = useState('');
    const [sendError,showError] = useState(false);


    const base_url = 'http://localhost:5024/api/v1/';

    const navigate = useNavigate();
    const onAddNewsHandler = async (e) => {
        e.preventDefault();
        const id = uuidv4()
        const addedNews = { id, title, text, pictureLink, time, source, category };





       const response = await axios.post(`${base_url}news`, addedNews);

       console.log(response)
       if(response.status === 201){
        navigate('/')
        window.location.reload(false);
       }else{
        showError(true,{errorMsg:'Det gick inte att skapa obejektet'})
       }



    }





    return (
        <section className='flex-center-container'>
            <form onSubmit={onAddNewsHandler}>

                <input value={id} type="text" name='id' placeholder='Auto' disabled={true} />


                <input value={title} onChange={e => titelChange(e.target.value)} type="text" name='title' placeholder='TITLE' required />
                {title === '' || title.length < 4 ? <span className='error-msg'>Please enter Title</span> : null}


                <input value={text} onChange={e => textChange(e.target.value)} type="text" name='text' placeholder='TEXT' required />
                {text === '' ? <span className='error-msg'>Please enter some Text</span> : null}

                <input value={pictureLink} onChange={e => pictureLinkChange(e.target.value)} type="text" name='picture' placeholder='PICTURE-LINK' required />
                {pictureLink === '' ? <span className='error-msg'>Please enter picturelink</span> : null}
                <input value={time} onChange={e => timeChange(e.target.value)} type="date" name='time' required />
                {time === '' && <span className='error-msg'>Please enter Date</span>}
                <input value={source} onChange={e => sourceChange(e.target.value)} type="text" name='source' placeholder='SOURCE' required />
                {source === '' ? <span className='error-msg'>Please enter Source</span> : null}
                <select value={category} name="category" onChange={e => categoryChange(e.target.value)} >
                    <option value="">Välj Kategori</option>
                    <option value="frontnews">frontnews</option>
                    <option value="technews">technews</option>
                    <option value="culturenews">culturenews</option>
                    <option value="economynews">economynews</option>
                </select>

                <button type="submit">Sänd nyhet</button>

                {sendError === true && <span className='error-msg-obj'>Något gick fel när obejektet skulle sparas!</span>}
            </form>
        </section>
    )
}

export default FormNews;