import React from 'react'
import Article from './Article'
import articles from '../fixture'

function App() {
    return (
        <div>
            <h1>App Name</h1>
            <Article article={articles[0]}/>
        </div>
    )
}


export default App;