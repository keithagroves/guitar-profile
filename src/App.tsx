import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Modal from 'react-modal';
import Chord from '@tombatossals/react-chords/lib/Chord';
import Accordion from './Accordion';
import TunerButton from './TunerButton';
import './styles.css';

// Define the interface first
interface FretFingerChord {
  frets: number[];
  fingers: number[];
  barres?: number[];
  capo?: boolean;
}

// Define the chords as constants with explicit types
const E_CHORD: FretFingerChord = {
  frets: [0, 2, 2, 1, 0, 0],
  fingers: [0, 2, 3, 1, 0, 0],
  barres: [],
  capo: false
};

const G_CHORD: FretFingerChord = {
  frets: [3, 2, 0, 0, 0, 1],
  fingers: [3, 2, 0, 0, 0, 1],
  barres: [],
  capo: false
};

const C_CHORD: FretFingerChord = {
  frets: [0, 3, 2, 0, 1, 0],
  fingers: [0, 3, 2, 0, 1, 0],
  barres: [],
  capo: false
};

const F_CHORD: FretFingerChord = {
  frets: [1, 3, 3, 2, 1, 1],
  fingers: [1, 3, 4, 2, 1, 1],
  barres: [1],
  capo: false
};

const D_CHORD: FretFingerChord = {
  frets: [0, 0, 0, 2, 3, 1],
  fingers: [0, 0, 0, 2, 3, 1],
  barres: [],
  capo: false
};

interface MyChordProps {
  chordArr: FretFingerChord;
}

// Fixed the return type issue by explicitly returning JSX.Element
const MyChord: React.FC<MyChordProps> = ({ chordArr }): JSX.Element => {
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
      standard: ['E', 'A', 'D', 'G', 'B', 'E'],
    },
  };
  
  try {
    return <Chord chord={chordArr} instrument={instrument} lite={false} />;
  } catch (e) {
    return <Chord chord={E_CHORD} instrument={instrument} lite={false} />;
  }
};

function calculateData(number: number): FretFingerChord {
  const chords = [E_CHORD, G_CHORD, C_CHORD, F_CHORD, D_CHORD];
  return chords[number] || D_CHORD;
}

function App() {
  const [chordState, setChordState] = useState<FretFingerChord>(E_CHORD);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Modal.setAppElement('#root');
    
    const timer = setInterval(() => {
      setChordState(calculateData(Math.floor(Math.random() * 5)));
    }, 1500);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">JW</div>
        <div className="nav-links">
          {/* Navigation links can be added here */}
        </div>
      </nav>

      <main className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="chord-diagram">
            <MyChord chordArr={chordState} />
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            John Williams
          </motion.h1>
          
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Private Guitar Teacher in San Diego
          </motion.p>

          <div className="cta-container">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cta-button secondary-cta"
            >
              <i className="fas fa-info-circle"></i>
              Learn More
            </button>

            <a 
              href="https://0kgjda4nd6j.typeform.com/to/xAozLYBb"
              className="cta-button primary-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-calendar-alt"></i>
              Book your <span className="font-bold">FREE</span> Lesson
            </a>

            <TunerButton 
              href="YOUR_GITHUB_REPO_URL_HERE"
              onClick={() => {
                console.log('Tuner button clicked');
              }} 
            />
          </div>

          <div className="social-links">
            <SocialIcon url="mailto:jaydubthedub@gmail.com" />
            <SocialIcon url="https://www.linkedin.com/in/john-williams-672301235/" target="_blank" />
            <SocialIcon url="https://www.youtube.com/watch?v=FMP-0Nfe-9k" target="_blank" />
            <SocialIcon url="https://www.instagram.com/guitarlessons.fun" target="_blank" />
            <SocialIcon url="https://www.yelp.com/biz/john-williams-san-diego" target="_blank" />
          </div>
        </motion.div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <Accordion />
        </Modal>

        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </main>
    </div>
  );
}

export default App;