import Notes from "./components/Notes";
import { nanoid } from 'nanoid';
import './App.css';
import { useEffect, useState } from "react";
import SearchItem from "./searchItem";
import AppHeader from "./components/AppHeader";

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    title: 'My note',
    text: 'first note',
    date: '7/04/2022'
  },
  {
    id: nanoid(),
    title: 'ffsg',
    text: 'second note',
    date: '7/04/2022'
  },
  {
    id: nanoid(),
    title: 'sdfsdf',
    text: 'third note',
    date: '7/04/2022'
  },
]);

const [searchInput, setSearchInput] = useState('');
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('react-notes-data'));

  if(saved) {
    setNotes(saved);
  }
}, []);

useEffect(() => {
  localStorage.setItem('react-notes-data', JSON.stringify(notes));
}, [notes]);

const AddNewNote = (text, title) => {
  const date = new Date();
  const newNote = {
    title: title,
    text: text,
    date: date.toLocaleDateString(),
    id: nanoid()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const delNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

  return (
    <div className={`${darkMode && 'dark'}`} >
    <div className="container">
      <AppHeader handleToggleDark={setDarkMode} />
      <SearchItem handleSearchNote={setSearchInput}></SearchItem>
      <Notes notes={notes.filter((note)=>note.text.toLowerCase().includes(searchInput))} handleAddNewNote={AddNewNote} handleDeleteNote={delNote}/>
    </div>
    </div>
  );
}

export default App;
