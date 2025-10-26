import React, { useEffect, useState } from 'react';
import './App.css'


function ImagePopIn() {

  return (
    <>
      <div className="flex justify-center items-center w-full bg-gray-100 p-4">
        <img
          src={"/src/assets/images/20230807_220514.jpg"}
          alt={"Horizontally Centered Image"}

          className="rounded-lg shadow-xl mx-auto w-200 h-auto
                   animate-pop-in"
          style={{ transform: 'scale(0)' }}
        />
      </div>
    </>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div>
        < ImagePopIn />
        {isVisible && (
          <div className='p-4 shadow-md transition-all duration-900 transform translate-y-0 opacity-500 animate-fade-in'>
            <h1 className='text-4xl text-center text-red-700 font-bold m-4'>PLEASE SAY</h1>
          </div>
        )}
        {isVisible && (
          <div className='w-full xl:h-25 sm:h-45 bg-blue-300 shadow-md transition-all duration-900 transform translate-y-0 opacity-100 animate-fade-down'>
            <h3 className='text-6xl text-center  '>HAPPY BIRTHDAY ARMAN !</h3>
          </div>
        )}
        {isVisible && (
          <div className='p-4 shadow-md transition-all duration-900 transform translate-y-0 opacity-500 animate-fade-in'>
            <h1 className='text-4xl text-center text-red-700 font-bold m-4'>СКАЖИТЕ</h1>
          </div>
        )}
        {isVisible && (
          <div className='w-full xl:h-25 sm:h-45 bg-blue-300 shadow-md transition-all duration-900 transform translate-y-0 opacity-100 animate-fade-down'>
            <h3 className='text-6xl text-center  '>ПОЗДРАВЛЯЕМ С ДНЕМ РОЖДЕНИЯ АРМАН ДЖАН</h3>
          </div>
        )}
      </div>

    </>
  )
}

export default App

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { AnimatedMessage } from './component/AnimatedMessage';
// import { AnimatedBanner } from './component/AnimatedBanner';

// function ImagePopIn() {
//   return (
//     <div className="flex justify-center items-center w-full bg-gray-100 p-4">
//       <img
//         src="/src/assets/images/20230807_220514.jpg"
//         alt="Horizontally Centered Image"
//         className="rounded-lg shadow-xl mx-auto w-200 h-auto animate-pop-in"
//       />
//     </div>
//   );
// }

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <>
//       <ImagePopIn />
//       {isVisible && (
//         <>
//           <AnimatedMessage text="PLEASE SAY" animation="animate-fade-in" />
//           <AnimatedBanner text="HAPPY BIRTHDAY ARMAN !" animation="animate-fade-down" />
//           <AnimatedMessage text="СКАЖИТЕ" animation="animate-fade-in" />
//           <AnimatedBanner text="ПОЗДРАВЛЯЕМ С ДНЕМ РОЖДЕНИЯ АРМАН ДЖАН" animation="animate-fade-down" />
//         </>
//       )}
//     </>
//   );
// }

// export default App;
