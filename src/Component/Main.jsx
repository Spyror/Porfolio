import "../App.css";
const Main=()=>{
  return (<>
  <section id="latest-work">
    <div className="main">
      <h1 className="heading">Latest Work</h1>
      <div className="container-fluid outer mt-5">
        <div className="row mb-5 task">
          <div className="col-6 imgBox">
            <div className="inImg">
              <img src="/images/focus on today.svg"/>
            </div>
          </div>
          <div className="col-6 descBox">
            <h1 className="text-danger">Focus On Today</h1>
            <h3 className="text-danger">(To-do List)</h3>
            <p>This To-Do List project is a task management application that allows <br />users to add, edit, delete, and mark tasks as completed to <br /> stay organized and productive.</p>
            <ul className="techUse">
              <li>#html</li>
              <li>#css</li>
              <li>#javascript</li>
            </ul>
            <div className="btn btn-danger"><a href="https://inspiring-beijinho-ec070c.netlify.app/">See More</a></div>
          </div>
        </div>
        <div className="row mb-5 task2">
          <div className="col-6 descBox">
            <h1 className="text-success">Where in the World?</h1>
            <h3 className="text-success">(Learn about Country)</h3>
            <p>"Where in the World" is an informative website where you can explore detailed facts about every country, including their flag, population, borders, currency, and more—all in one place.</p>
            <ul className="techUse">
              <li>#html</li>
              <li>#css</li>
              <li>#javascript</li>
            </ul>
            <div className="btn btn-success"><a href="https://taupe-brioche-b01367.netlify.app/">See More</a></div>
          </div>
          <div className="col-6 imgBox">
            <div className="inImg2">
              <img src="/images/country.svg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>)
}
export default Main;