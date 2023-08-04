import React from 'react'
import moment from 'moment'
import { store } from 'store/store'
import { activeNote } from 'actions/notes';

export const JournalEntry = (note) => {
    const { dispatch } = store;
    const {body, date:dateParam, title, url} = note
    const date = moment(dateParam)
    const handleNoteClick = () =>{
        dispatch(activeNote(note))
    }
  return (
    <div className='journal__entry pointer' onClick={handleNoteClick}>
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
