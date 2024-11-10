import React from 'react';
import './App.css';
import Hotel from './Hotel';
import HotelData from './HotelData';




const App = () => {
  return (
    <>
    <div className="container">
      <h1 className="heading">Hotels Room</h1>
      {HotelData.map((values)=>{
        return(
          <>
      <Hotel imgsrc={values.imgsrc}
      title={values.title}
      text={values.text}
      button={values.button}
      />
          </>
        )
      })

      }
      
    </div>
    </>
  );
}

export default App;
