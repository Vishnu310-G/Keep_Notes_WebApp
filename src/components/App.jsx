import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const [notes,setNotes]=React.useState([]);



function addNote(note){
console.log(note);

setNotes(preValue=>{
    return([...preValue,note]);
})
}


function deleteNote(id){

    setNotes(preValue=>{
       return(
        preValue.filter((noteItem,index)=>{
            return index!==id
        })
       )
    })
}

    return ( <div> 
        <Header/> 
        <CreateArea
            onAdd={addNote}
        />
     {notes.map((singleNote,index)=>(
         <Note
             key={index}
             id={index}
             title={singleNote.title}
             content={singleNote.content}
             onDelete={deleteNote}
         />
     ))}
        <Footer/>
        </div>)
    }


    export default App;