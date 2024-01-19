import { faBriefcase, faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format, isSameMonth } from 'date-fns';
import React from 'react'

export const Job = ( { data } ) => {
    const { company, description, end_date, start_date, position } = data;
    const startDate = format(new Date(start_date), 'MM/yyyy')
    const endDate = format(new Date(end_date), 'MM/yyyy')
    const isCurrentMonth = isSameMonth(new Date(end_date), new Date())
    return (
        <li>
            <div className='experience__data'>
                <i>
                    <FontAwesomeIcon icon={faLaptopFile}/>
                </i>
                <h3>{position}</h3>
                <strong>{company}</strong>
            </div>
            
            <span className='experience__date'>{`${startDate} - ${ isCurrentMonth ? 'actual' : endDate}`}</span>
            <p className='experience__description'>{description}</p>
        </li>
    )
}
