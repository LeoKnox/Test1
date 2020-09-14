import React, { Component } from 'react';

    let charData = {
        atk: 40,
        ac: 20,
        str: 15,
        mana: 18
}

export class Test extends Component {
  static displayName = Test.name;


    render() {
    return (
      <div>
        <h1>Test Character</h1>
            <p>Attack: {charData.atk}</p>
            <p>AC: {charData.ac}</p>
            <p>Strength: {charData.str}</p>
            <p>Mana: {charData.mana}</p>

      </div>
    );
  }
}
