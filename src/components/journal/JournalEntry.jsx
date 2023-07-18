import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/1088/1088537.png?w=826&t=st=1689692716~exp=1689693316~hmac=55f9a66894fa8b94daadf5c645b71d69bbac6c84fc9cb0ec48a6efe6a5b1bf9b)'
                
            }}
        >
        </div>
        <div className="journal__entry-body">
            <p className='journal__entry-title'>
                Un nusadadasd
            </p>
            <p className='journal__entry-content'>
                sgfdddddddddddddd  sgfddddddddddd sgfdddddddddddsgfdddddddddd
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
