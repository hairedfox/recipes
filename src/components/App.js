import React from 'react';
import Header from './Header'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'

fetch(`${API_URL}/v1/recipes`)
.then(res => res.json())
.then(json => console.log(json))

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(recipes => {
      this.setState({ recipes })
    })
  }

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <Header />
        <main style={{display: 'flex'}}>
          <RecipeList recipes={recipes} style={{ flex: 3 }}/>
          <RecipeDetail style={{ flex: 5 }} />
        </main>
      </div>
    )
  }
}

export default App;
