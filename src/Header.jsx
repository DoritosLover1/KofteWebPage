import './Header.css';
import { useEffect } from 'react';
import 'animate.css';
import {CurvedTextNavButtonV2, CurvedTextNavButtonV1, CurvedTextNavButtonV3, CurvedTextNavButtonV4} from './CurvedTextNavButton';
import confetti from 'canvas-confetti';

function HeaderBody({onScrollToAboutMeSection}) {

    useEffect(() => {
        const tooltip = document.getElementById("site-tooltip");
        const iframe = document.getElementById("site-preview");
        const button = document.querySelector(".ReferenceButtons");
    
        if (button && tooltip && iframe) {
          let timeoutId = null;

          const showTooltip = (e) => {
            e.stopPropagation();
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            
            iframe.src = button.getAttribute("data-url");
            const rect = e.target.getBoundingClientRect();

            let top = rect.bottom + window.scrollY + 5;
            let left = rect.left + window.scrollX;
            
            const tooltipWidth = 400;
            const windowWidth = window.innerWidth;
            
            if (left + tooltipWidth > windowWidth) {
              left = windowWidth - tooltipWidth - 20; 
            }

            if (left < 20) {
              left = 20; 
            }

            const tooltipHeight = 300;
            const windowHeight = window.innerHeight;
            
            if (top + tooltipHeight > window.scrollY + windowHeight) {
              top = rect.top + window.scrollY - tooltipHeight - 5;
            }
            
            tooltip.style.top = top + "px";
            tooltip.style.left = left + "px";
            tooltip.classList.remove("hidden");
          };

          const hideTooltip = (e) => {
            e.stopPropagation();
            timeoutId = setTimeout(() => {
              tooltip.classList.add("hidden");
              iframe.src = "";
            }, 300);
          };

          const keepTooltip = (e) => {
            e.stopPropagation();
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
          };

          const hideTooltipImmediately = (e) => {
            e.stopPropagation();
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            tooltip.classList.add("hidden");
            iframe.src = "";
          };
    
          button.addEventListener("mouseenter", showTooltip);
          button.addEventListener("mouseleave", hideTooltip);
          tooltip.addEventListener("mouseenter", keepTooltip);
          tooltip.addEventListener("mouseleave", hideTooltipImmediately);

          return () => {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            button.removeEventListener("mouseenter", showTooltip);
            button.removeEventListener("mouseleave", hideTooltip);
            tooltip.removeEventListener("mouseenter", keepTooltip);
            tooltip.removeEventListener("mouseleave", hideTooltipImmediately);
          };
        }
      }, []);

  return (
    <div className="flex justify-center">
      <div className="header">
        <div data-url="https://en.wikipedia.org/wiki/Poodle" className="ReferenceButtons top-left-container animate__animated animate__fadeInUp">
          <CurvedTextNavButtonV3 text="Wikipedia" urls="https://en.wikipedia.org/wiki/Poodle" how="_blank" />
        </div>
        
        <div id="site-tooltip"
          className="hidden absolute w-[400px] h-[300px] border border-gray-300 bg-white shadow-lg z-50 rounded-lg overflow-hidden"
          style={{ maxWidth: 'calc(100vw - 40px)' }} // Maksimum genişlik sınırı
        >
          <iframe id="site-preview" src="" className="w-full h-full" frameBorder="0"></iframe>
        </div>

        <div className="nav-container flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
          <div data-url="https://www.instagram.com/ihsandmrc_?igsh=MXRzY2w3YWh3eXZxYg==" onClick={() => window.open("https://www.instagram.com/ihsandmrc_?igsh=MXRzY2w3YWh3eXZxYg==", "_blank")} className="animate__animated animate__fadeInUp">
            <CurvedTextNavButtonV1 text="Photos" />
          </div>
          <div onClick={onScrollToAboutMeSection} className="animate__animated animate__fadeInUp">
            <CurvedTextNavButtonV2 text="About me" />
          </div>
          <div id="hs-run-on-click-run-confetti" className="animate__animated animate__fadeInUp" onClick={() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          }}>
            <CurvedTextNavButtonV4 text="High Paw" onClick=""/>
          </div>
        </div>

        <div className="spacer"/>
      </div>
    </div>
  );
}

export default HeaderBody;