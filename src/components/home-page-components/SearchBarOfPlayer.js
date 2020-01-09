import React from "react";
import Button from '@material-ui/core/Button';
import Loader from "./Loader";
import './css/head.css'
export default function SearchBarOfPlayer(props) {


    const [state, setState] = React.useState(props.isSearchPlayer);

    React.useEffect( () => {
        setState(props.isSearchPlayer);
    }, [props]);

    return(
        <div className="container-search">
            {!state?<Button className="btn"
                    variant="outlined" color="primary"
                            onClick={props.searchPlayer.bind(null)}>
                <h5 className="neon">search for  opponent
                </h5></Button>
                : <Loader/>
            }
        </div>
    )

}