import { db } from "../firebase/firebaseConfig"
import { types } from 'types/types'
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { loadNotes } from "helpers/loadNotes";
import Swal from "sweetalert2";
import { fileUpload } from "helpers/fileUpload";
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            url: null
        }
        const docRef = await addDoc(collection(db, uid, "journal", 'notes'), newNote);
        dispatch(activeNote({ id: docRef.id, ...newNote }))

    }
}

export const activeNote = (note) => (
    {
        type: types.notesActive,
        payload: note
    }
)

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const startLoadingNodes = (uid) => {
    return async (dispatch) => {
        dispatch(setNotes(await loadNotes(uid)))
    }
}

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth
        await setDoc(doc(db, uid, "journal", 'notes', note.id), note)
        dispatch(refreshNote(note))
        Swal.fire('Saved', note.title, 'success')
    }
}

export const refreshNote = (note) => (
    {
        type: types.notesUpdated,
        payload: note
    }
)

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        Swal.fire({
            title:'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: ()=>{
                Swal.showLoading()
            }
        })
        let { active: note } = getState().notes
        const fileUrl = await fileUpload(file)
        note.url = 's'
        note = {...note, url:fileUrl}
        dispatch(startSaveNote(note))
        dispatch(activeNote(note))
        Swal.close()
    }
}