import { useState } from "react";


const NewNote = ({ handleAddNewNote }) => {
    const [noteText, setNoteText] = useState('');
    const [textTitle, setTitle] = useState('');
    const [charLimit, setCharLimit] = useState(500);
    const handleChange = (event) => {
        if(charLimit - event.target.value.length >=0) {
            setNoteText(event.target.value);
        }
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSaveNoteClick = () => {
        if(noteText.trim().length > 0 && textTitle.trim().length > 0) {
            handleAddNewNote(noteText, textTitle);
            setNoteText('');
            setTitle('');
        } else {
            alert('Cannot be empty, Input valid text')
        }
    };

    return (
        <div className="note new">
            <h4>Title: <textarea placeholder="type title here..." value={textTitle} onChange={handleTitleChange}></textarea></h4>
            <textarea rows="10" cols="12" placeholder="Type new note here..." onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>Characters left {charLimit - noteText.length}</small>
                <button className="save" onClick={handleSaveNoteClick}>Save</button>
            </div>
        </div>
    );
};

export default NewNote;