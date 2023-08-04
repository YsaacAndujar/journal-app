import React from 'react'
import { JournalEntry } from './JournalEntry'
import { useSelector } from 'react-redux'

export const JournalEntries = () => {

    // @ts-ignore
    const { notes } = useSelector(state => state.notes)
    return (
        <div className="journal__entries">
            {
                notes.map(note =>(
                    <JournalEntry
                        key={note.id}
                        {...note}
                    />
                ))
            }
        </div>
    )
}