import React, { Component } from 'react';
import logo from './logo.svg';
import cat1 from './cat1.jpg';
import cat2 from './cat2.jpg';
import './App.css';
import withImageSwap from './withImageSwap';


class App extends Component {

    render() {

        const CatPic = ({innerWidth}) => {
            console.log(innerWidth)
            const cat = innerWidth > 1000? cat1:cat2
            return (
                <img src={cat}></img>
            )
        }

        /*
        We start with a plain cat pic and pass it to withImageSwap() function. WithImageSwap()
        returns the cat pic but with the pic swap behaviour.
         */
        const CatPicWithImageSwap = withImageSwap(CatPic)

        return (
            <div className="App">
                <CatPicWithImageSwap/>
            </div>
        );
    }
}

export default App;
