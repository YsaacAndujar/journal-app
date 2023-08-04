import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector } from 'react-redux'
import {store} from 'store/store'
import { useForm } from 'hooks/useForm'
import { activeNote } from 'actions/notes'
export const NotesScreen = () => {
    // @ts-ignore
    const {active:note} = useSelector(state=> state.notes)
    const { dispatch } = store
    const {values, handleInputChange, reset} = useForm(note)
    const {body, title} = values
    const activeId = useRef(note.id)
    useEffect(() =>{
        if(note.id !== activeId.current){
            reset(note)
            activeId.current = note.id
        }
    }, [reset, note])
    useEffect(() =>{
        dispatch(activeNote(values))
    }, [values, dispatch])
  return (
    <div className="notes__main-content">
        <NotesAppBar />
        <div className="notes__content">
            <input
                onChange={handleInputChange}
                type="text"
                placeholder='Title'
                className='notes__title-input'
                autoComplete='off'
                name='title'
                value={title}
            />
            <textarea
                onChange={handleInputChange}
                className="notes__textarea"
                placeholder='What happened today'
                name='body'
                value={body}
            ></textarea>
            {
                (note.url) 
                && (
                    <div className="notes__image">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/1088/1088537.png?w=826&t=st=1689692716~exp=1689693316~hmac=55f9a66894fa8b94daadf5c645b71d69bbac6c84fc9cb0ec48a6efe6a5b1bf9b"
                            alt="Imagen"
                        />
                    </div>
                )
            }
        </div>
    </div>
  )
}
