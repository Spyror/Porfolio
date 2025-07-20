import '../App.css'

const About =()=>{
  return(<>
    <section id="about">
      <div  className="about container-fluid">
    <div className="row">
      <div className="col-6 abt-text">
        <h1>ABOUT ME</h1>
        <div className="para">
          <p>I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.</p>
        </div>
        <div className='abtTech'>
          <ul className='techList'>
            <li>#javscript</li>
            <li>#react.js</li>
            <li>#node.js</li>
            <li>#express.js</li>
            <li>#mongoDB</li>
            <li>#html</li>
            <li>#css</li>
            <li>#bootstrap</li>
            <li>#figma</li>
          </ul>
        </div>
        <div className='mern'>
          <h1>MERN STACK</h1>
          <div className="mernIcon">
            <img src="/icons/mongodb.svg"/>
            <img src="/icons/express.svg"/>
            <img src="/icons/react.svg"/>
            <img src="/icons/node.svg"/>
            <div className="iconName">
              <h1 id='mongo'>M</h1>
              <h1 id='express'>E</h1>
              <h1 id='react'>R</h1>
              <h1 id='node'>N</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 abt-img">
        <img src="/images/coder.svg"/>
      </div>
    </div>
    </div>
    </section>
  </>)
}



export default About;