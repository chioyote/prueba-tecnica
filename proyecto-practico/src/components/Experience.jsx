import React, { useEffect, useState } from 'react'
import { getExperience } from '../helpers';
import { Job } from './Job';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import '~/components/experience.scss'

const fileToDOwnload = '/assets/files/cv_rocio_ortiz_es.pdf';

export const Experience = () => {
    const [experience, setExperience] = useState([])
    
    useEffect(() => {
        const experienceList = getExperience();
        setExperience(experienceList)
        
        return () => {
            setExperience([])
        }
    }, [])
    
    const downloadCv = () => {
        window.open(fileToDOwnload)
    }

    return (
        <section className='experience'>
            <div className="container">
                <h2>Experiencia</h2>
                <ul>
                    {
                        experience.map((item,index) => <Job key={index} data={item}/> )
                    }
                </ul>
                <button onClick={() => downloadCv()}>
                    <span>Descargar Cv</span>
                    <i>
                        <FontAwesomeIcon icon={faFileDownload} size='lg'/>
                    </i>
                </button>
            </div>
        </section>
    )
}
