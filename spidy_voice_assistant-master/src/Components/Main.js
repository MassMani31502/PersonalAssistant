import React from 'react';
import Bot from './Bot';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Main = () => {

  const commands =[
    {
      command: 'clear',
      callback:({resetTranscript}) => resetTranscript()
    },
    {
      command: 'open *',
      callback:(site) =>{
        window.open('https://'+site+'.com')
      }
    },
      {
        command: 'go to college website',
        callback:() =>{
          window.open('https://mtec.ac.in')
        }
    },
    {
      command: 'search *',
      callback: (q) =>{
        window.open('http://google.com/search?q='+q)
      }
    },
    {
      command: 'play song',
      callback: () =>{
      var audio = new Audio('music/song.mp3');
        audio.play();
      }
    },
    {
      command: 'hi',
      callback: ()=>{
        document.getElementById("talkbubble").innerHTML = "Welcome, back!";
      }
    },
    {
      command: 'hello',
      callback: ()=>{
        document.getElementById("talkbubble").innerHTML = "Hi";
      }
    },
    {
      command: 'What is your name',
      callback: ()=>{
        document.getElementById("talkbubble").innerHTML = "Spidy";
      }
    },
    {
      command: 'love you',
      callback: ()=>{
        document.getElementById("talkbubble").innerHTML = "Love u 2";
      }
    },
    {
      command: 'who is your *',
      callback: (owner)=>{
        document.getElementById("talkbubble").innerHTML = 'My '+owner+' name is Dickson';
      }
    },
    {
      command: 'refresh',
      callback: ()=>{
        window.location.reload();
      }
    },
    {
      command: 'you are',
      callback: ()=>{
        document.getElementById("talkbubble").innerHTML = 'Thank u :)';
      }
    },
    {
      command: 'How are you',
      callback: ()=>{
        document.getElementById("talkbubble").innerHTML = 'Fine, what about you?';
      }
    },
    {
      command: 'fine',
      callback: ()=>{
        document.getElementById("talkbubble").innerHTML = 'Nice to hear it';
      }
    },
    {
      command: 'camera',
      callback: ()=>{
        window.open('/camera')
      }
    }

  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='container'>
      <span className={listening ? 'on' : 'off'}></span>
      <div className="buttons">
      <button onClick={SpeechRecognition.startListening({continuous: true})}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      </div>
      <Bot />
      <div className="bubblecontainer">
      <div id="talkbubble">
      </div>
      </div>
      <div className="subtitle">
      <p>{transcript}</p>
      </div>
      </div>
  );
};
export default Main;