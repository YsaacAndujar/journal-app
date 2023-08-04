import React from 'react'
import moment from 'moment'
export const JournalEntry = ({id,body, date:dateParam, title, url}) => {
    const date = moment(dateParam)
  return (
    <div className='journal__entry pointer'>
        {
            url && 
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:`url(${url})`
                    
                }}
            >
            </div>
        }
        
        <div className="journal__entry-body">
            <p className='journal__entry-title'>
                {title}
            </p>
            <p className='journal__entry-content'>
                {body}
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>{date.format('dddd')}</span>
            <h4>{date.format('Do')}</h4>
        </div>
    </div>
  )
}
