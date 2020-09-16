import React, { Component } from 'react';

let charList = [
    {"name":"Aelien","skill":"Magic","weapon":"Archmage Staff"},
    {"name":"Eveehi","skill":"Swordmanship","weapon":"Katana"}
]

const CharClass = ({ name, skill, weapon }) => {
    return (
        <section>
            <h2>{name}</h2>
            <p>skilled in {skill}</p>
            <p>wielding {weapon}</p>
            </section>
        )
}

const Library = ({ chars }) => {
    return (
        <div>
            {chars.map(
                (cha, i) => <CharClass key={i} name={cha.name} skill={cha.skill} weapon={cha.weapon} />
               )}
                </div>
    )
}

export class Test extends Component {
    static displayName = Test.name;
    state = { available: false }
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
            <button onClick={this.toggleAvailable}>Kill/rez all</button>
            <Library chars={charList} />
        </div>
    );
  }
}
