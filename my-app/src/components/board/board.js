import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in.js';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Patrick Kane',
        img: 'images/pics/kane2.jpg',
        clicked: false
    },
    {
        name: 'Alex Ovechkin',
        img: 'images/pics/ovechkin2.jpg',
        clicked: false
    },
    {
        name: 'Evgeny Kuznetsov',
        img: 'images/pics/evgeny2.jpeg',
        clicked: false
    },
    {
        name: 'Nathan MacKinnon',
        img: 'images/pics/nathan2.jpg',
        clicked: false
    },
    {
        name: 'Sidney Crosby',
        img: 'images/pics/sidney2.jpg',
        clicked: false
    },
    {
        name: 'Jonathan Toews',
        img: 'images/pics/toews2.jpg',
        clicked: false
    },
    {
        name: 'Erik Karlsson',
        img: 'images/pics/erik2.jpg',
        clicked: false
    },
    {
        name: 'Braden Holtby',
        img: 'images/pics/braden2.jpg',
        clicked: false
    },
    {
        name: 'Jonathan Quick',
        img: 'images/pics/quick2.jpeg',
        clicked: false
    },
    {
        name: 'Marc-Andre Fluery',
        img: 'images/pics/marc2.jpg',
        clicked: false
    },
    {
        name: 'Pekke Rinne',
        img: 'images/pics/pekka2.jpg',
        clicked: false
    },
    {
        name: 'Connor Mcdavid',
        img: 'images/pics/connor2.jpg',
        clicked: false
    },
    {
        name: 'Evgeni Malkin',
        img: 'images/pics/malkin2.jpg',
        clicked: false
    },
    {
        name: 'Anze Kopitar',
        img: 'images/pics/anze2.jpg',
        clicked: false
    },
    {
        name: 'Brent Burns',
        img: 'images/pics/burns2.jpg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every NHL super-Star once. Once you click a player the grid will shuffle.<br/>Try not to click the same super-star twice or you'll be sent to the penalty box!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}