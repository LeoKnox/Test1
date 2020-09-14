import React, { Component } from 'react';

    let charData = {
        atk: 40,
        ac: 20,
        str: 15,
        mana: 18
}

    const getPercent = decimal => {
        return decimal * 100 + '%'
    }
    const calcDamage = (atk, str) => {
        return getPercent((str+atk)/97)
    }
    const TestData = () => {
        return (
            <section>
                <p>Attack: {charData.atk}</p>
                <p>Damage: {calcDamage(charData.atk, charData.str)}</p>
                </section>)
    }

export class Test extends Component {
  static displayName = Test.name;

    render() {
    return (
      <div>
        <h1>Test Character</h1>
            <TestData />

      </div>
    );
  }
}
