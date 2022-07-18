import React from 'react';

const AppHeader = ({ handleToggleDark }) => {
    return (
        <div className='app-header'>
            <h1>NotesApp</h1> 
            <button className='save' onClick={() => handleToggleDark((PrevDark) => !PrevDark)}>toggle</button>
        </div>
    );
};

export default AppHeader;