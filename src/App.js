import arrowD from './images/icon-arrow-down.svg';
import logo from './images/logo.svg';
import menubar from './images/icon-hamburger.svg';

import emily from './images/image-emily.jpg';
import thomas from './images/image-thomas.jpg';
import jennie from './images/image-jennie.jpg';

import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pintrest from './images/icon-pinterest.svg';
import insta from './images/icon-instagram.svg';

import './App.scss';
import { useState } from 'react';

function App() {
  const [dp, setDp] = useState(false);
  const onClickHandle = ()=>{
    let clicked = !dp;
    setDp(clicked);
  }

  return (
    <article className='sunnyside'>
    
      <section className='banner'>
        <section className='header'>
          <img id='logo' src={logo} alt=''/>
          <img id='menub' src={menubar} alt='' onClick={onClickHandle}/>
          <nav className={`navbar ${dp ? "active": ""}`}>
            <ul>
              <li> <a href='/'>About</a> </li>
              <li> <a href='/'>Services</a> </li>
              <li> <a href='/'>Projects</a> </li>
              <li> <button>Create</button> </li>
            </ul>
          </nav>
        </section>
        <div className='bannertitle'>
            <strong>We are creatives</strong>
            <img src={arrowD} alt=''/>
        </div>
      </section>

      <section className='brandsec1'>
        <div className='bs1img'>

        </div>
        <div className='bs1info'>
          <strong>Transform your brand</strong>
          <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <a href='/'>Learn more</a>
        </div>
      </section>
      <section className='brandsec2'>
        <div className='bs2img'>

        </div>
        <div className='bs2info'>
          <strong>Stand out to the right audience</strong>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
          <a href='/'>Learn more</a>
        </div>
      </section>

      <section className='brandsec3'>
        <div className='bs3 bs3a'>
          <strong>Graphic design</strong>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
        <div className='bs3 bs3b'>
          <strong>Photography</strong>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </section>

      <section className='clients'>
        <strong>Client testimonials</strong>
          <div className='cli'>
            <div className='client'>
                <img src={emily} alt=''/>
                <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <strong>Emily R.</strong>
                <span>Marketing Director</span>
            </div>
            <div className='client'>
                <img src={thomas} alt=''/>
                <p> Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
                <strong>Thomas S.</strong>
                <span>Chief Operating Officer</span>
            </div>
            <div className='client'>
                <img src={jennie} alt=''/>
                <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <strong>Jennie F.</strong>
                <span>Business Owner</span>
            </div>
          </div>
      </section>

      <section className='gallery'>
        <div className='g1'></div>
        <div className='g2'></div>
        <div className='g3'></div>
        <div className='g4'></div>
      </section>

      <section className='footer'>
        <img src={logo} alt=''/>
        <nav className='footernav'>
          <ul>
              <li> <a className='a' href='/'>About</a> </li>
              <li> <a className='a' href='/'>Services</a> </li>
              <li> <a className='a' href='/'>Projects</a> </li>
          </ul>
        </nav>
        <div className='socialmedia'>
            <img className='a' src={facebook} alt=''/>
            <img className='a' src={insta} alt=''/>
            <img className='a' src={twitter} alt=''/>
            <img className='a' src={pintrest} alt=''/>
        </div>
      </section>

    </article>
  );
}

export default App;
