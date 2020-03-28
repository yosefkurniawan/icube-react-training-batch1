import React from 'react';

function sortByPower(a, b) {
  return b.power - a.power;
}

function List({people}) {
  return(
    <ul>
      {people.sort(sortByPower).map((person, index) => (
        <li key={index}>
          <div>Name: {person.name}</div>
          <div>Image: <img src={person.thumbnail} /></div>
          <div>Power: {person.power}</div>
        </li>
      ))}
    </ul>
  );
}

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      human : [
        {
          name: 'Kuririn',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',
          power: 10
        },
        {
          name: 'Bulma',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
          power: 3
        },
        {
          name: 'Chi-chi',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',
          power: 30
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>React People</h1>
        <List people={this.state.human} />
      </div>
    );
  }
}

export default App;
