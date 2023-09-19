import './App.css'

function App() {

  return (
    <>
      <div className={"text-title"}>Luna Null</div>
      <div className={"text-body"}>
        <div>
          <a className="text-link" href={"https://maps.app.goo.gl/Dy7tJmj3duqEWUXR7"} target={"_blank"}>
            Lilac Grove, Shipley, West Yorkshire BD18 2HZ
          </a>
        </div>
        <div>
          <a className="text-link" href="mailto:luna@folf.io">luna@folf.io</a>
        </div>
        <div>
          <a className="text-link" href="tel:+447473839831">+447 473 839 831</a>
        </div>
      </div>
      <div>
        <hr/>
        <div className={"text-title-1"}>About Me</div>
        <hr/>
        <div className={"space-me-please"}>
          <p>I began learning basic programming skills such as HTML from very early years during my secondary school education, which I developed by studying Computer Science and IT courses during my GCSEs.</p>
          <p>began examining AS Level Computer Science before leaving to progress via a development apprenticeship in 2017.</p>
          <p>I’ve led multiple development projects, both backend and frontend, within companies, and I’m currently developing a CRM to manage my discord gaming community.</p>
          <p>I currently spend most of my focus on Frontend development and UI/UX Design, and using NodeJS as a main alternative for backend applications instead of PHP and other languages.</p>
        </div>
      </div>
      <div>
        <hr/>
        <div className={"text-title-1"}>Experience</div>
        <hr/>
        <div className={"space-me-please"}>
          <div className={"text-headline"}>Fullstack Web Developer</div>
          <div className={"text-subhead"}>FOD Mobility Group (Mobilleo Team) - Saltaire [March 2019 - Present]</div>
          <ul>
            <li>Using Javascript and front-end frameworks such as Vue.js and Quasar, to maintain and develop Mobilleo, a "mobility-as-a-service" application.</li>
            <li>Created designs that would later be used in a complete redesign across all platforms to realign them, and create a more unified feeling.</li>
            <li>Solo developed several complex features that required thorough understanding of business-logic, and communication with client(s) to understand needs, wants and later on, feedback.</li>
            <li>Assisted with Backend API development in PHP with Laravel frameworks, including several solo integrations and upgrades such as integrating 3D Secure and new payment flows/methods.</li>
            <li>Worked with other teams using different technologies, primarily a mix of php, pure javascript, jQuery, some React and more.</li>
          </ul>
          <div className={"text-headline"}>Fullstack Web Developer</div>
          <div className={"text-subhead"}>Europlus Direct - Yeadon [July 2017 - February 2019]</div>
          <ul>
            <li>Using PHP frameworks such as Laravel and Lumen to develop and maintain the backend for an in-house CRM system(s) and Developing tools to assist during Data processing and reporting, before and after entering the before mentioned CRM system(s).</li>
            <li>Using Javascript and front-end frameworks such as Vue.js and Angular, to maintain and develop the interface for the company's CRM System and client portal.</li>
            <li>Originally started as a junior apprentice in July 2017, by November 2017 I was involved in the addition of multiple new features and processes on the Backend, working with experienced contract PHP and Vue.js Developers. As of February 2018, I have been the goto front-end developer, as well as working on the backend at the same time.</li>
            <li>Taken lead in the development of projects within the company, such as an "Operations Dashboard" mid-July 2018, both compromising of backend and frontend work, which is used by members of the company's operations team to manage and record times of processing specific operations related tasks. </li>
          </ul>
          <div className={"text-headline"}>Architect's Assistant</div>
          <div className={"text-subhead"}>One Design Architectural Services - Baildon [June 2015 - 1 week]</div>
          <ul>
            <li>Using Photoshop for building layouts.</li>
            <li>Using 3D programs to make models of homes/buildings.</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <div className={"text-title-1"}>Skills</div>
        <hr/>
        <div className={"space-me-please"}>
          <div className={"text-title-2"}>~8-10 years experience in:</div>
          <ul>
            <li>HTML5, CSS3 and JavaScript web development</li>
            <li>Adobe Photoshop</li>
          </ul>
          <div className={"text-title-2"}>~6 years experience in:</div>
          <ul>
            <li>Advanced JavaScript development for web and standalone apps</li>
            <li>Vue.js Frontend Framework</li>
            <li>📈 GIT version control</li>
            <li>PHP (not touched in a long time however 😬)</li>
          </ul>
          <div className={"text-title-2"}>~4 years experience in:</div>
          <ul>
            <li>📦 Node.js runtime environments ranging from standalone applications to REST APIs.</li>
            <li>❤️ TypeScript development (I love Types)</li>
            <li>🐳 Docker (I won't pretend to understand it, but I can make it work 😎)</li>
            <li>⚡ AWS (Gonna check out google soon as well, they already own 90% of my life)</li>
          </ul>
          <div className={"text-title-2"}>~2 years experience in:</div>
          <ul>
            <li>🎨 UI/UX Design (self-taught)</li>
            <li>🔧 TDD (Done a little over the past 6-10 years, but finally focusing more on it now)</li>
          </ul>
          <div className={"text-title-2"}>~1 years experience in:</div>
          <ul>
            <li>🧁 <a href={"https://bun.sh"}>bun.sh</a></li>
            <li>⚛️ React (yes, I know I'm way behind... blame Vue.js ok??)</li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
        <div className={"text-title-1"}>Projects</div>
        <hr/>
        <div className={"space-me-please"}>
          <div className={"text-title"}>JaxBot</div>
          <p>JaxBot was a CRM application, that also integrated with discord via their bot API. I custom built it for a gaming community I originally ran, and it had the ability to record users, issue warnings to users by staff, and manage forms/applications.</p>
          <p>It was created using Node.js, and used AWS RDS for database management/storage. Jax also allowed for our game servers to integrate with our discord. For example, in some games if a player was killed they would be muted in Discord until the next round.</p>
          <p>Jax was eventually shutdown when ownership of the community was passed on, and the new owner had different plans for managing it.</p>
        </div>
      </div>
    </>
  )
}

export default App
