import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUpload } from '../../actions/notes';

const NotesAppBar = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePictureUpload = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch(startUpload(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>28 de junio de 2020</span>

      <div>
        <input
          type="file"
          name="file"
          id="fileSelector"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
