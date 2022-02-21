import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header>The Pizza Place</header>

      <main>
        <div classNameName="todos-list">
          <div className="todo-card">
            <div className="todo-img"></div>
            <div className="todo-details">
              <div className="todo-title">Do the pizza job!</div>
              <div className="todo-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium, porro?
              </div>
              <div className="todo-status">Open / Closed</div>
            </div>
          </div>

          <div className="todo-card">
            <div className="todo-img"></div>
            <div className="todo-details">
              <div className="todo-title">Do the pizza job!</div>
              <div className="todo-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium, porro?
              </div>
              <div className="todo-status">Open / Closed</div>
            </div>
          </div>
        </div>
      </main>
      <footer>Food Footers</footer>
    </div>
  )
}

export default App
