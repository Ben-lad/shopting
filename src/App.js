import logo from "./images/logo.jpg";
import "./App.css";
import ComingSoon from "./coming";
import About from './about'
import Talk from './talk'

const App = () => {

  return (
    <div className="App">
      <nav id="head">
        <img src={logo} alt="logo" />
      </nav>
      <div className="parallax">
        <h3>
          The online <span>shopping</span> <br /> you've been waiting for.
        </h3>
        <p>Buy, sell and pay with crypto</p>
        <b>Join our wait-list</b>
        <form action="https://submit-form.com/dLvdYgH1">
          <div className="input-group">
            <input
              type="email"
              className="input"
              id="Email"
              name="Email"
              placeholder="uiverse@gmail.com"
              autoComplete="off"
            />
            <input className="button--submit" value="Join" type="submit" />
          </div>
        </form>
      </div>
<ComingSoon  launchDate="2023-4-31"/>
<About />
<Talk />
    </div>
  );
};

export default App;
