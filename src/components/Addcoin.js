import React, { Component } from 'react'
import '../styles/App.css'

import Background from './Background'
import Moon from './Moon'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>ADDA MASSA COINS FFS</h1>
        </header>
        <Moon
          animated
          size={550}
          position={{
            top: 100,
            left: `${window.innerWidth - 975}px`
          }}
        />
        <Background />
      </div>
    )
  }
}

export default App