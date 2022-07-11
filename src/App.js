import React from 'react'


function Sample(){
  return <div>hello Arun
    <h1>how are you</h1>
    <div style={{
      color:"gray"
    }}>
        <h1>The local time</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  </div>
}

function App() {
  return (
    <div>
      <h1>Hi</h1>
      <h2>Arunkumar</h2>
      <Sample/>
    </div>
  )
}

export default App
