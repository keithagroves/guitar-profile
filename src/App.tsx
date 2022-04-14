import React, { useEffect, useState } from 'react'

import logo from './logo.svg'

import './App.css'
import Modal from 'react-modal'
import { SocialIcon } from 'react-social-icons'

import Chord from '@tombatossals/react-chords/lib/Chord'

import Accordion from './Accordion'
import Testimonial from './Testimonial'

const MyChord = ({ chordArr }: { chordArr: FretFingerChord }) => {
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
    keys: [],
    tunings: {
      standard: ['E', 'A', 'D', 'G', 'B', 'E'],
    },
  }
  const lite = false // defaults to false if omitted
  try {
    return <Chord chord={chord} instrument={instrument} lite={lite} />
  } catch (e) {
    const chord = {
      frets: [1, 2, 3, 4, 5, 1],
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
        standard: ['E', 'A', 'D', 'G', 'B', 'E'],
      },
    }
    const lite = false // defaults to false if omitted

    return <Chord chord={chord} instrument={instrument} lite={lite} />
  }
}
const C: FretFingerChord = {
  frets: [0, 3, 2, 0, 1, 0],
  fingers: [0, 3, 2, 0, 1, 0],
}
const E: FretFingerChord = {
  frets: [0, 2, 2, 1, 0, 0],
  fingers: [0, 2, 3, 1, 0, 0],
}
const F: FretFingerChord = {
  frets: [1, 3, 3, 2, 1, 1],
  fingers: [1, 3, 4, 2, 1, 1],
}
const G: FretFingerChord = {
  frets: [3, 2, 0, 0, 0, 1],
  fingers: [3, 2, 0, 0, 0, 1],
}

const D: FretFingerChord = {
  frets: [0, 0, 0, 2, 3, 1],
  fingers: [0, 0, 0, 2, 3, 1],
}
interface FretFingerChord {
  frets: number[]
  fingers: number[]
}
function calculateData(number: number): FretFingerChord {
  switch (number) {
    case 0:
      return E
    case 1:
      return G
    case 2:
      return C
    case 3:
      return F
    default:
      return D
  }
}

function App() {
  const [chordState, setChordState] = useState(E)
  const [modalState, setModalState] = useState(false)

  function chordChange() {
    setChordState(calculateData(Math.floor(Math.random() * 5)))
  }
  useEffect(() => {
    const timer = setInterval(() => {
      chordChange()
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="App">
        {/* <Guitar strings={[0, 1, 2, 2, 0, -1]} />, */}
        <header className="App-header">
          {/* <Testimonial /> */}

          <div className="chords">
            <MyChord chordArr={chordState} />
          </div>
          <h1 className="title">John Williams</h1>
          <p>Private Guitar Teacher in San Diego</p>
          <div>
            <button
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                setModalState(true)
              }}
              className="actionButton learn"
            >
              Learn More
            </button>
            <button
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault()
                window.location.href =
                  'https://0kgjda4nd6j.typeform.com/to/xAozLYBb'
              }}
              className="actionButton"
            >
              Contact{' '}
            </button>
          </div>
          <div className="social">
            <SocialIcon url="mailto:jaydubthedub@gmail.com" />
            <SocialIcon url="https://www.linkedin.com/in/john-williams-672301235/" />
            <SocialIcon url="https://www.youtube.com/watch?v=FMP-0Nfe-9k" />
            {modalState && (
              <Modal
                isOpen={modalState}
                className="modal"
                onRequestClose={() => setModalState(false)}
              >
                <Accordion />
              </Modal>
            )}
          </div>
        </header>
      </div>
    </>
  )
}

export default App
