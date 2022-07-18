import NewNote from './NewNote';
import Note from './Note';

const Notes = ({ notes, handleAddNewNote, handleDeleteNote }) => {
    return (
        <div className="note-list">
            { notes.map((note) =>
                <Note id={note.id} text={note.text} date={note.date} title={note.title} handleAddNewNote={handleAddNewNote} handleDeleteNote={handleDeleteNote}/>
            ) }
            <NewNote handleAddNewNote={handleAddNewNote} />
        </div>
    );
};

export default Notes;