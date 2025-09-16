import React, { useState } from 'react';
import 'animate.css'

//Diff text-size of the V1
export function CurvedTextNavButtonV2({ text = ""}){

  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  return (
          <svg viewBox="10 0 120 20" className="w-20 h-7 sm:w-24 sm:h-8 md:w-28 md:h-9 lg:w-32 lg:h-9 xl:w-34 xl:h-11 cursor-pointer transition-transform duration-300 hover:scale-105 select-none"
          onMouseEnter={() => setHoveredButton('true')}
          onMouseLeave={() => setHoveredButton(null)}
          onMouseDown={() => setActiveButton('true')}
          onMouseUp={() => setActiveButton(null)}>
            <defs>
              <path id="Button2-curve" d="M 10 20 Q 70 5 130 20" />
              <linearGradient id="Button2-gradient" x1="0%" y1="0%" x2="100%" y2="30%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>

              <linearGradient id="Button2-hover">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="80%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              
              <linearGradient id="Button2-active">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="80%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
              <filter id="Button2-shadow">
                <feDropShadow dx="-1" dy="1" stdDeviation="1" floodColor="#92400e" />
              </filter>
            </defs>
            <text className="text-2xl font-bold tracking-wide select-none" fill={`url(#Button2-${
                activeButton === 'true' ? 'active' : 
                hoveredButton === 'true' ? 'hover' : 
                'gradient'})`
              } filter="url(#Button2-shadow)">
              <textPath href="#Button2-curve" startOffset="50%" textAnchor="middle">
               {text}
              </textPath>
            </text>
          </svg>
  );
}

//Main Version - Orange
export function CurvedTextNavButtonV1({ text = ""}){

  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  return (
          <svg viewBox="20 0 100 20" className="w-20 h-7 sm:w-24 sm:h-8 md:w-28 md:h-9 lg:w-32 lg:h-9 xl:w-34 xl:h-11 cursor-pointer transition-transform duration-300 hover:scale-105 select-none"
          onMouseEnter={() => setHoveredButton('true')}
          onMouseLeave={() => setHoveredButton(null)}
          onMouseDown={() => setActiveButton('true')}
          onMouseUp={() => setActiveButton(null)}
          >
            <defs>
              <path id="Button1-curve" d="M 10 20 Q 70 5 130 20" />
              <linearGradient id="Button1-gradient" x1="0%" y1="0%" x2="100%" y2="30%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>

              <linearGradient id="Button1-hover">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="80%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>

              <linearGradient id="Button1-active">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="80%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#92400e" />
              </linearGradient>
            
              <filter id="Button1-shadow">
                <feDropShadow dx="-1" dy="1" stdDeviation="1" floodColor="#92400e" />
              </filter>
            </defs>
            <text className="font-bold tracking-wide text-2xl select-none" fill={`url(#Button1-${
                activeButton === 'true' ? 'active' : 
                hoveredButton === 'true' ? 'hover' : 
                'gradient'})`
              }   filter="url(#Button1-shadow)">
              <textPath href="#Button1-curve" startOffset="50%" textAnchor="middle">
                {text}
              </textPath>
            </text>
          </svg>
  );
}

//Main Version - Gray Link
export function CurvedTextNavButtonV3({ text = "", urls = "", how=""}){
  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  return(
  <svg viewBox="10 0 120 20" 
                className="w-20 h-7 sm:w-24 sm:h-8 md:w-28 md:h-9 lg:w-32 lg:h-9 xl:w-40 xl:h-11 cursor-pointer transition-transform duration-300 hover:scale-105 select-none"
                onMouseEnter={() => setHoveredButton('true')}
                onMouseLeave={() => setHoveredButton(null)}
                onMouseDown={() => setActiveButton('true')}
                onMouseUp={() => setActiveButton(null)}
                onClick={() => window.open(urls, how)}>
            <defs>  
              <path id="Button3-curve" d="M 10 20 Q 70 5 130 20" />
              <linearGradient id="Button3-gradient" x1="0%" y1="0%" x2="100%" y2="30%">
                <stop offset="0%" stopColor="#78716c" />
                <stop offset="80%" stopColor="#57534e" />
                <stop offset="100%" stopColor="#44403c" />
              </linearGradient>

               <linearGradient id="Button3-hover">
                <stop offset="0%" stopColor="#a8a29e" />
                <stop offset="80%" stopColor="#78716c" />
                <stop offset="100%" stopColor="#57534e" />
              </linearGradient>

              <linearGradient id="Button3-active">
                <stop offset="0%" stopColor="#44403c" />
                <stop offset="80%" stopColor="#292524" />
                <stop offset="100%" stopColor="#1c1917" />
              </linearGradient>

              <filter id="Button3-shadow">
                <feDropShadow dx="-1" dy="1" stdDeviation="1" floodColor="#292524" />
              </filter>
            </defs>
            <text className="text-xl font-bold tracking-wide select-none" 
              fill={`url(#Button3-${
                activeButton === 'true' ? 'active' : 
                hoveredButton === 'true' ? 'hover' : 
                'gradient'})`
              }  
              filter="url(#Button3-shadow)">
              <textPath href="#Button3-curve" startOffset="50%" textAnchor="middle">
                  {text}
              </textPath>
            </text>
          </svg>
  );   
}

//Main Version - Gray
export function CurvedTextNavButtonV4({ text = ""}){
  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeButton, setActiveButton]  = useState(null);


  return(
          <svg viewBox="10 0 120 20" className="w-20 h-7 sm:w-24 sm:h-8 md:w-28 md:h-9 lg:w-32 lg:h-9 xl:w-34 xl:h-11 cursor-pointer transition-transform duration-300 hover:scale-105 select-none"
          onMouseEnter={() => setHoveredButton('true')}
          onMouseLeave={() => setHoveredButton(null)}
          onMouseDown={() => setActiveButton('true')}
          onMouseUp={() => setActiveButton(null)}>
            <defs>
              <path id="Button4-curve" d="M 10 20 Q 70 5 130 20" />
              <linearGradient id="Button4-gradient" x1="0%" y1="0%" x2="100%" y2="30%">
                <stop offset="0%" stopColor="#78716c" />
                <stop offset="80%" stopColor="#57534e" />
                <stop offset="100%" stopColor="#44403c" />
              </linearGradient>

              <linearGradient id="Button4-hover">
                <stop offset="0%" stopColor="#a8a29e" />
                <stop offset="80%" stopColor="#78716c" />
                <stop offset="100%" stopColor="#57534e" />
              </linearGradient>

              <linearGradient id="Button4-active">
                <stop offset="0%" stopColor="#44403c" />
                <stop offset="80%" stopColor="#292524" />
                <stop offset="100%" stopColor="#1c1917" />
              </linearGradient>

              <filter id="Button4-shadow">
                <feDropShadow dx="-1" dy="1" stdDeviation="1" floodColor="#292524" />
              </filter>
            </defs>
            <text className="text-2xl font-bold tracking-wide select-none" fill={`url(#Button4-${
                activeButton === 'true' ? 'active' : 
                hoveredButton === 'true' ? 'hover' : 
                'gradient'})`} filter="url(#Button4-shadow)">
              <textPath href="#Button4-curve" startOffset="50%" textAnchor="middle">
                {text}
              </textPath>
            </text>
          </svg>
          );
}