import React, { Component } from 'react';

const CharClass = ({ name, skill, weapon }) => {
    return (
        <section>
            <h2>{name}</h2>
            <p>skilled in {skill}</p>
            <p>wielding {weapon}</p>
            </section>
        )
}

const Library = () => {
    return (
        <div>
            <CharClass name="Elric" skill="Magic" weapon="Strombringer" />
            <CharClass name="Conan" skill="Barbrian" weapon="Steel" />
        </div>
    )
}

export class Test extends Component {
  static displayName = Test.name;

    render() {
    return (
      <div>
            <Library />
      </div>
    );
  }
}
