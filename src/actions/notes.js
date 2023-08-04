import { db } from "../firebase/firebaseConfig"
import {types } from 'types/types'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { loadNotes } from "helpers/loadNotes";
export const startNewNote = () =>{
    return async (dispatch, getState) =>{
        const  {uid}  = getState().auth
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const docRef = await addDoc(collection(db, uid, "journal",'notes'), newNote);
        dispatch(activeNote({id: docRef.id, ...newNote}))
        
    }
}

export const activeNote = (note) => (
    {
        type: types.notesActive,
        payload: note
    }
)

export const setNotes = (notes) =>({
    type: types.notesLoad,
    payload: notes
})

export const startLoadingNodes = (uid) =>{
    return async (dispatch) =>{
        dispatch(setNotes(await loadNotes(uid)))
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        const noteToFirestore = {...note}
        delete noteToFirestore.id
        await setDoc(doc(db, uid, "journal",'notes', note.id), noteToFirestore)
    }
}