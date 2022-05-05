import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      createdAt: new Date().getTime()
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

    dispatch(activeNote(doc.id, newNote));

    dispatch(addNewNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note
    }
  };
};

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note
  }
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };

    delete noteToFirestore.id;

    await db
      .doc(`${uid}/journal/notes/${note.id}`)
      .update(noteToFirestore)
      .then(() => {
        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire('Saved', 'Your note has been saved', 'success');
      })
      .catch((err) => {
        Swal.fire('Error', 'Try again later', 'error');
      });
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    ...note
  }
});

export const startUpload = (file) => {
  return async (dispatch, getState) => {
    const activeNote = getState().notes.active;

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait',
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoaderOnConfirm();
      }
    });

    const fileUrl = await fileUpload(file);

    Swal.close();

    activeNote.url = fileUrl;

    dispatch(startSaveNote(activeNote));
  };
};

export const startDeletingNote = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        await db
          .doc(`${uid}/journal/notes/${id}`)
          .delete()
          .then(() => {
            dispatch(deleteNote(id));
            Swal.fire('Deleted!', 'Your note has been deleted.', 'success');
          })
          .catch((err) => {
            Swal.fire('Error', 'Try again later', 'error');
            console.log(err);
          });
      }
    });
  };
};

export const deleteNote = (id) => ({
  type: types.notesDeleted,
  payload: id
});

export const deleteNotes = () => ({
  type: types.notesLogoutCleaneState
});
