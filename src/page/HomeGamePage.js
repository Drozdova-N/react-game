import React from "react";
import Game from "../components/game/Game";
import Head from "../components/home-page-components/Head";
import Sidebar from "../components/home-page-components/Sidebar";
import SearchBarOfPlayer from "../components/home-page-components/SearchBarOfPlayer";
import "./css/home.css"



class HomeGamePage extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            gameStart: false,
            isSearchPlayer: false,
        } ;
    }


    searchPlayer = ()=>{
        this.setState({
            isSearchPlayer:true
            });
    }
    render() {
        return(
            <div style={{width: '100%'}}>
                        <Head/>
                       <div className="container">
                           <Sidebar/>
                           {
                               this.state.gameStart?<Game/>
                                :<SearchBarOfPlayer
                                   searchPlayer={this.searchPlayer}
                                   isSearchPlayer={this.state.isSearchPlayer}
                               />
                           }

                       </div>
            </div>
        )
    }
}


export default HomeGamePage;