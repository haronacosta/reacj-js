import { useDispatch, useSelector } from 'react-redux';
import JournalEntries from './JournalEntries';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

const Sidebar = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="fa-regular fa-moon"></i>
          <span> {name ?? 'No disponible'}</span>
        </h3>

        <div className="journal__sidebar-logout">
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="fa-regular fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
