import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NotesAppBar from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeletingNote } from '../../actions/notes';

const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);

  const [formValues, handleInputChange, reset] = useForm(note);

  const { title, body } = formValues;

  const activeID = useRef(note.id);

  const handleDelete = () => {
    dispatch(startDeletingNote(note.id));
  };

  useEffect(() => {
    if (note.id !== activeID.current) {
      reset(note);
      activeID.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title?"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          className="notes__textarea"
          name="body"
          placeholder="What happened today?"
          value={body}
          onChange={handleInputChange}></textarea>

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="Image" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
