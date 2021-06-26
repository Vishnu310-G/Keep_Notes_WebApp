import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded,setExpanded]=React.useState(false);

    const [note,setNote]=React.useState({title:"",content:""});

    function handleChange(event){

        const {name,value}=event.target;

        setNote(prevNote=>{
            return( {
                ...prevNote,
                [name]:value
            });
        })
    }

    function sumitNote(event){
       
        props.onAdd(note);

        
        event.preventDefault();

        setNote({
            title:"",
            content:""
        })

    }


    function expand(){
        setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
       {isExpanded?<input name="title" value={note.title} placeholder="Title" onChange={handleChange}/>:null}
        <textarea name="content" value={note.content} placeholder="Take a note..." rows={isExpanded?3:1} onChange={handleChange} onClick={expand}/>
        <Zoom in={isExpanded}> 
        <Fab onClick={sumitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
