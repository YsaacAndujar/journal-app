import { startSaveNote, startUploading } from 'actions/notes'
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
  const handlePictureUpload = () =>{
    // eslint-disable-next-line no-unused-expressions
    document.getElementById('fileSelector').click()
  }
  const handleFileChange = ({target}) =>{
    const file = target.files[0]
    if(file){
      dispatch(startUploading(file))
    }
    
  }
  return (
    <div className='notes__appbar'>
        <span>28 ads 123</span>
        <input
          id="fileSelector"
          type="file"
          name='file'
          style={{display:'none'}}
          onChange={handleFileChange}
        />
        <div>
            <button className='btn' onClick={handlePictureUpload}>
                Picture
            </button>
            <button className='btn' onClick={handleSave}>
                Save
            </button>
        </div>
    </div>
  )
}
