import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chord from '@tombatossals/react-chords/lib/Chord'

const MyChord = ( {chordArr}: {chordArr:FretFingerChord}) => {

  const chord = {
      frets: chordArr.frets,
      fingers: chordArr.fingers,
      barres: [1],
      capo: false,
  }
  const instrument = {
      strings: 6,
      fretsOnChord: 4,
      name: 'Guitar',
      keys: [
      ],
      tunings: {
          standard: ['E', 'A', 'D', 'G', 'B', 'E']
      }
  }
  const lite = false // defaults to false if omitted
  try{ 
  return (
      <Chord
          chord={chord}
          instrument={instrument}
          lite={lite}
      />
  )
  }catch(e){
    const chord = {
      frets: [1,2,3,4,5,1],
      fingers: [1, 3, 4, 2, 1, 1],
      barres: [1],
      capo: false,
  }
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
        standard: ['E', 'A', 'D', 'G', 'B', 'E']
    }
}
const lite = false // defaults to false if omitted

    return  <Chord
    chord={chord}
    instrument={instrument}
    lite={lite}
/> 
  }
}
const C:FretFingerChord = {

  frets: [0,3,2,0,1,0],
      fingers: [0,3,2,0,1,0]
}
const E:FretFingerChord = {

  frets: [0,2,2,1,0,0],
      fingers: [0,2,3,1,0,0]
}
const F: FretFingerChord = {
  frets: [3,3,2,0,1,0],
  fingers: [3,4,2,0,1,0]
}
const G: FretFingerChord = {
  frets:  [3,2,0,0,0,1],
  fingers:[2,1,0,0,0,3]
}

const D: FretFingerChord = {
  frets: [0,0,0,2,3,1],
  fingers: [0,0,0, 1,2,3]
}
interface FretFingerChord {
  frets: number[]
  fingers: number[]
}
function calculateData (number: number): FretFingerChord{
  switch(number){
    case 0: return E;
    case 1: return G;
    case 2: return C;
    case 3: return F;
    default: 
    return D
  }
}

function App() {
  const [chordState, setChordState] =useState(E)


  function chordChange(){
      setChordState( calculateData(Math.floor(Math.random()*5)));
  }
  useEffect(() => {
    const timer = setInterval(() => {
      chordChange()
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  
  return (<>
    <div className="App">
      {/* <Guitar strings={[0, 1, 2, 2, 0, -1]} />, */}
      <header className="App-header">

      <div className="chords">
      
      <MyChord chordArr={chordState}></MyChord>

      </div>
      <h1 className='title'>John Williams</h1>
        <p>Private Guitar Teacher in San Diego</p>
    <button onClick={(e: React.MouseEvent<HTMLElement>)=>{
        e.preventDefault();
        window.location.href="https://0kgjda4nd6j.typeform.com/to/xAozLYBb"}} className='actionButton'>Contact</button>
      </header>
    </div>
    {/* <div>
      <h1>Content</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_NOYQBn9VRY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div> */}
  </>
  );
}

export default App;
