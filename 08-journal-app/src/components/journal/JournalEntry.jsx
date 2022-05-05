import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

const JournalEntry = ({ id, title, body, createdAt, url }) => {
  const noteDate = moment(createdAt);

  const dispatch = useDispatch();

  const handleActiveNote = () => {
    dispatch(activeNote(id, { title, body, createdAt, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={handleActiveNote}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover'
          }}></div>
      )}

      <div className="journal__entry-body">
        <div className="journal__entry-title">{title}</div>
        <div className="journal__entry-content">{body}</div>

        <div className="journal__entry-date">
          <span>{noteDate.format('dddd')}</span> <h4>{noteDate.format('Do')}</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
