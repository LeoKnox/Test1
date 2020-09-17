import React, { Component } from 'react';

let charList = [
    {"name":"Aelien","skill":"Magic","weapon":"Archmage Staff"},
    {"name":"Eveehi","skill":"Swordmanship","weapon":"Katana"}
]

const CharClass = ({ name, skill, weapon, IsCharacter }) => {
    return (
        <section>
            <h2>{name}</h2>
            <p>skilled in {skill}</p>
            <p>wielding {weapon}</p>
            <p>Is Character: {IsCharacter}</p>
            </section>
        )
}

// Same as const charclass w/o return statement
const Recruit = () => 
    <div>
        <p>Character available to recruit</p>
    </div>

const NotRecruit = () => 
    <div>
        <p>Character not available to recruit</p>
    </div>

const Library = ({ chars }) => {
    return (
        <div>
            {chars.map(
                (cha, i) =>
                    <CharClass
                        key={i}
                        name={cha.name}
                        skill={cha.skill}
                        IsCharacter={cha.IsCharacter}
                        weapon={cha.weapon} />
               )}
                </div>
    )
}

export class Test extends Component {
    static displayName = Test.name;
    state = {
        available: false,
        IsCharacter: true,
        recruit: false
    }
/* state = { available: true } takes place of constructor
    constructor(props) {
        super(props)
        this.state = {
            available: true
        }
        this.toggleAvailable = this.toggleAvailable.bind(this)
    }
    */

    toggleAvailable = () => {
        this.setState(prevState => ({
            available: !prevState.available
        }))
    }

    render() {
    return (
      <div>
            <h1>Characters are {this.state.available ? 'available' : 'all dead'}</h1>
            {this.state.recruit ? <Recruit /> : <NotRecruit />}
            <button onClick={this.toggleAvailable}>Kill/rez all</button>
            <Library chars={charList} />
        </div>
    );
  }
}
