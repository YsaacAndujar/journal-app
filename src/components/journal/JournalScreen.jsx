import React from 'react'
import Sidebar from './Sidebar'
import { NothingSelected } from './NothingSelected'
import { NotesScreen } from 'components/notes/NotesScreen'
import { useSelector } from 'react-redux';

export const JournalScreen = () => {
  // @ts-ignore
  const { active } = useSelector( state => state.notes)
  return (
    <div className='journal__main-content'>
      <Sidebar />
      <main>
        {
          active ? <NotesScreen/> : <NothingSelected/>
        }
      </main>
    </div>
  )
}
