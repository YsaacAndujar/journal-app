import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
  return (
    <div className="notes__main-content">
        <NotesAppBar />
        <div className="notes__content">
            <input 
                type="text"
                placeholder='Title'
                className='notes__title-input'
                autoComplete='off'
            />
            <textarea
                className="notes__textarea"
                placeholder='What happened today'
            ></textarea>

            <div className="notes__image">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png?w=826&t=st=1689692716~exp=1689693316~hmac=55f9a66894fa8b94daadf5c645b71d69bbac6c84fc9cb0ec48a6efe6a5b1bf9b"
                    alt="Imagen"
                />
            </div>
        </div>
    </div>
  )
}
