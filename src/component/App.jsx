import React from "react";
import Keeper from "./Keeper";
import Header from "./Header";
import Note from "./Note";
import Notes from "../Notes"
import Footer from "./Footer";



function App(){
    return (
        <div>
        <Header />
        {Notes.map(noteItem => (
            <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
            />
        ))}
       
        <Footer />
        </div>
        );
}

export default App;