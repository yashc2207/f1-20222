import './App.css';
import Topbar from './components/Topbar';
import { useState } from 'react'
import DataBox from './components/DataBox';
import "bootstrap/dist/css/bootstrap.min.css";
import Metriccard from './components/Metriccard';
import enginePic from './components/f1_engine.jpg'
import moneyPic from './components/f1_money.jpg'
import aeroPic from './components/f1_aero.jpg'
import Quote from './components/Quote';
import Subdivision from './components/Subdivision';
import Team from './components/Team';
import MercedesImage from './components/mercedes.png'
import RedBullImage from './components/redbull.jpg'
import FerrariImage from './components/ferrari.jpg'
import McLarenImage from './components/mclaren.png'
import Footer from './components/Footer';

function App() {
  const engineText = (<>
                        <h3>THE ENGINE</h3>
                          <p>The engine is the source of the car's power. A powerful engine can be all conquering, but it has to be reliable as well. To finish first, you have to finish.</p>
                      </>)
  const moneyText = (<>
    <h3>MONEY</h3>
      <p>Money is what allows the car maker to upgrade their car throughout the season and gives the drivers more wiggle room to take risks since they can crash more cars.</p>
  </>)
  const aeroText = (<>
    <h3>AERODYNAMICS</h3>
      <p>A good car package can make up for lower engine power by reducing the drag on the car or providing more downforce for the car to be stable when turning in the corners.</p>
  </>)

  const mercedesText = (<>
    <h3>
      MERCEDES AMG
    </h3>
    <br></br>
    <p>
      LAST YEAR : <br></br> First
    </p>
    <p>
      STRENGTHS : <br></br> They have the greatest driver of all time in Lewis Hamilton and a team that has won the Championship for the past 8 years.
    </p>
    <p>
      WEAKNESSES : <br></br> It is a new era of regulations and they have been struggling with the car bouncing for the first few races.
    </p>
    <p>
      PREDICTED FINISH : <br></br> Third
    </p>
  </>
  )

  const redbullText = (<>
    <h3>
      REDBULL RACING
    </h3>
    <br></br>
    <p>
      LAST YEAR : <br></br> Second
    </p>
    <p>
      STRENGTHS : <br></br> They have last year's best driver, Max Verstappen, and they have the most powerful engine this year.
    </p>
    <p>
      WEAKNESSES : <br></br> Their engine is not reliable - it bursts into flames and ends the driver's race from time to time.
    </p>
    <p>
      PREDICTED FINISH : <br></br> Second
    </p>
  </>
  )

  const ferrariText = (<>
    <h3>
      SCUDERIA FERRARI
    </h3>
    <br></br>
    <p>
      LAST YEAR : <br></br> Third
    </p>
    <p>
      STRENGTHS : <br></br> They have the car with the best package - it gives the drivers good downforce around the corners. They have the most reliable engine.
    </p>
    <p>
      WEAKNESSES : <br></br> Their engine is behind the others in terms of power. The drivers that they have are the least experienced.
    </p>
    <p>
      PREDICTED FINISH : <br></br> First
    </p>
  </>
  )

  const mclarenText = (<>
    <h3>
      MCLAREN MERCEDES
    </h3>
    <br></br>
    <p>
      LAST YEAR : <br></br> Fourth
    </p>
    <p>
      STRENGTHS : <br></br> They have the same engine as Mercedes (their supplier) without bouncing issues - which should make them faster.
    </p>
    <p>
      WEAKNESSES : <br></br> They lack funds compared to the others due to the Covid recession. Their senior driver has struggled since coming into the team.
    </p>
    <p>
      PREDICTED FINISH : <br></br> Fourth
    </p>
  </>
  )


  return ( 
    <div>
    <Topbar />
    <DataBox />
    <Quote />
    <div className='container'>
    <div className='row'>
      <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
        <Metriccard cardNo = {`one`} imgsrc={enginePic} alt={`Picture of F1 car engine`} cardText={engineText}/>
        </div>
      <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
        <Metriccard cardNo = {`two`} imgsrc={moneyPic} alt={`A picture with money`} cardText={moneyText}/>
      </div>
      <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
        <Metriccard cardNo = {`three`} imgsrc={aeroPic} alt={`Air flowing over car`} cardText={aeroText}/>
      </div>
    </div>
    </div>
    <Subdivision />
    <Team imgsrc = {RedBullImage} text={redbullText} imgalt = {`RedBull logo`}/>
    <Team imgsrc = {MercedesImage} text={mercedesText} imgalt = {`Mercedes logo`}/>
    <Team imgsrc = {McLarenImage} text={mclarenText} imgalt = {`McLaren logo`}/>
    <Team imgsrc = {FerrariImage} text={ferrariText} imgalt = {`Ferrari logo`} id = {`winner`}/>
    <Footer />
    </div>
  )
}

export default App;
