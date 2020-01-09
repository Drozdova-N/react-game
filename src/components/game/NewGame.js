import React from "react";
import './css/game.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



export default function NewGame(props){
    return(
            <ButtonGroup color="primary" size="small" aria-label="small outlined button group">
                <Button onClick={()=>props.onClick()}>  <h5 className="neon">new</h5> </Button>
                <Button onClick={()=>props.onClick()}>  <h5 className="neon">output</h5></Button>
            </ButtonGroup>
    )
}