import React, { useRef } from 'react';
import HeaderBody from './Header.jsx';
import FirstBody from './FirstBody.jsx';
import 'animate.css';

function App() {

    const sectionAboutMe = useRef(null);
    const scrollToSection = (sectionRef) => {
        sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return(
        <div className="mainframe overflow-x-hidden min-h-screen font-[Calibri]">
            <HeaderBody onScrollToAboutMeSection={() => scrollToSection(sectionAboutMe)}/>
            <FirstBody sectionAboutMeRef={sectionAboutMe}/>
        </div>
    );
}

export default App;