import { startSaveNote } from 'actions/notes'
import React from 'react'
import { useSelector } from 'react-redux'
import {store} from 'store/store'

export const NotesAppBar = () => {
  const { dispatch } = store
  // @ts-ignore
  const { active } = useSelector(state=> state.notes)
  const handleSave = () => {
    dispatch(startSaveNote(active))
  }
  return (
    <div className='notes__appbar'>
        <span>28 ads 123</span>
        <div>
            <button className='btn'>
                Picture
            </button>
            <button className='btn' onClick={handleSave}>
                Save
            </button>
        </div>
    </div>
  )
}
