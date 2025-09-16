import background_Kofte from "/assets/kofte-cutout2.png";
import insta_qr from "/assets/instagram_profile_QR_w_bg.png";

function FirstBody({sectionAboutMeRef}) {
 return (
   <div className="w-full">
     <div className="relative w-full flex justify-center 
                     mb-32 sm:mb-40 md:mb-48 lg:mb-56 xl:mb-64 2xl:mb-72
                     pb-24 sm:pb-28 md:pb-32 lg:pb-40 xl:pb-48 2xl:pb-56">
       <img
         className="absolute top-10 sm:top-12 md:top-16 lg:top-20 xl:top-24 2xl:top-28 z-2
                    w-[70vw] xs:w-[65vw] sm:w-[55vw] md:w-[45vw] lg:w-[40vw] xl:w-[35vw] 2xl:w-[30vw] 
                    max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] 
                    h-auto animate__animated animate__fadeInUp animate__delay-1.5s select-none"
         src={background_Kofte}
         alt="Köfte"
       />
       <svg
         className="relative h-auto w-full select-none z-10 animate__animated animate__fadeInUp animate__delay-0.5s"
         viewBox="0 0 400 120"
         preserveAspectRatio="xMidYMid meet"
       >
         <defs>
           <path id="main-curve" d="M 50 80 Q 200 30 350 80" />
           <linearGradient id="main-gradient" x1="65%" y1="0%" x2="100%" y2="30%">
             <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
             <stop offset="80%" stopColor="#f59e0b" stopOpacity="1" />
             <stop offset="100%" stopColor="#d97706" stopOpacity="1" />
           </linearGradient>
           <filter id="main-shadow" x="-50%" y="-50%" width="200%" height="200%">
             <feDropShadow dx="-1" dy="2" stdDeviation="1" floodColor="#92400e" />
             <feDropShadow dx="-2" dy="3" stdDeviation="2" floodColor="rgba(0,0,0,0.5)" />
             <feDropShadow dx="1" dy="-2" stdDeviation="3" floodColor="rgba(0,0,0,0.5)" />
             <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#92400e" />
           </filter>
         </defs>
         <text className="curved-text-svg select-none" fill="url(#main-gradient)" filter="url(#main-shadow)">
           <textPath href="#main-curve" startOffset="50%" textAnchor="middle">
             HI, I'M KÖFTE
           </textPath>
         </text>
       </svg>
     </div>

     <div ref={sectionAboutMeRef} className="w-full bg-gray-700 min-h-screen 
                     py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 
                     px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12
                     animate__animated animate__fadeInUp animate__delay-1.5s">
       <div className="flex justify-center select-none">
         <div className="flex flex-col items-center 
                         gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 
                         w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl
                         2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-12">
           <div className="w-full lg:flex md:flex lg:justify-center md:justify-center">
             <div className="w-full bg-gradient-to-br rounded-2xl sm:rounded-3xl md:rounded-4xl 
                             from-amber-400 via-amber-500 to-amber-600 
                             min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] xl:min-h-[260px] 
                             py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 
                             px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
               
               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
                              font-bold text-white 
                              mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
                 KÖFTE'S STORY
               </h1>

               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                              font-semibold text-gray-100 
                              mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7">
                 About Our Little Friend
               </h3>

               <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 
                             text-gray-50 leading-relaxed
                             mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7">
                 Köfte is one of the most adorable members of our family. His cheerful attitude and 
                 playful personality makes everyone happy.
               </p>

               <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 
                             text-gray-50 leading-relaxed
                             mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
                 Ready for new adventures every day, Köfte brings color to our lives.
               </p>

               <div className="border-t border-white/30 
                              pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8">
                 <div className="grid grid-cols-2 
                                gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 
                                text-center">
                   <div>
                     <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                                   font-bold text-white">2</p>
                     <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 
                                   text-gray-100">Age</p>
                   </div>
                   <div>
                     <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                                   font-bold text-white">∞</p>
                     <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 
                                   text-gray-100">Charm</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="flex justify-center select-none 2xl:ml-12 xl:ml-12 lg:ml-8 md:ml-8">
              <div className="flex flex-col items-center 
                  gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 
                  w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-12">
    
                <div className="w-full lg:flex md:flex lg:justify-center md:justify-center">
                  <div className="w-full bg-gradient-to-br rounded-2xl sm:rounded-3xl md:rounded-4xl 
                      from-amber-400 via-amber-500 to-amber-600 
                      min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] xl:min-h-[260px] 
                      py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 
                      px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                  <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <img className="rounded-3xl w-24 h-24 sm:w-auto sm:h-auto" 
                        src={insta_qr} 
                        alt="Instagram QR" />
                    </div>
                  <div className="flex-1 sm:w-full text-left sm:text-center">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
                           font-bold text-white 
                           mb-2 sm:mb-3 md:mb-4 lg:mb-5">
                        My Instagram QR
                    </h1>
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 
                          text-gray-50 leading-relaxed">
                    You can view my photographs on this Instagram page. Additionally, you can also find my owner's page there.
                  </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default FirstBody;