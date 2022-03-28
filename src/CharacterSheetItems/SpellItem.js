
import "./SpellItem.css";
import React, { useState } from 'react';
import PropTypes from 'prop-types';


//collection of rows takes 
export function Spells(props) {
    const spells = props.Spells.map(name =><SpellItem id={name} name={name}/>);

    return (
        <div >
            <ul>{spells}</ul>
        </div>
    );
}


//spell item row
function SpellItem(props) {
    
    const [editing, setEdit] = useState(false);
    const [name, setName] = useState(props.name);

    function onNameInputChanged(event) {
        setName(event.target.value);
    }

        
    if(editing){

    return (
      
        <div id={props.id} className="spell-item" onClick={() => setEdit(!editing)}>{name}</div>
    );
    }else{
        return (
            <div className="Spell-Item-Editor-Row">
                <input className="Spell-Item-Editor" onChange={onNameInputChanged} value={name}></input>
                <button onClick={()=> setEdit(!editing)}>Save</button>
                <button>Whoops</button>
            </div>
           
        );
    }
}


//returns spells header
function SpellHeader(){

    return (
        <div className="spell-header">
            <h1>Spells</h1>
        </div>
    );

}