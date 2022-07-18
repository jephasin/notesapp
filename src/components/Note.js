import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, title, date, handleDeleteNote }) => {
    return (
        <div className="note">
             <h4>{title}</h4><hr />
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='del-icon' size='1.4em' onClick={() => handleDeleteNote(id)} />
            </div>
        </div>
    )
};

export default Note;