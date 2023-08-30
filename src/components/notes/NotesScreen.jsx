import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import { useSelector } from 'react-redux'
import {store} from 'store/store'
import { useForm } from 'hooks/useForm'
import { activeNote, startDeleting } from 'actions/notes'
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
    const handleDelete = ()=>{
        dispatch(startDeleting(note.id))
    }
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
                            src={note.url}
                            alt="Imagen"
                        />
                    </div>
                )
            }
        </div>
        <button 
            className='btn btn-danger'
            onClick={handleDelete}
        >
            Delete
        </button>
    </div>
  )
}
