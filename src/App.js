import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Tools from "./components/Tools";
import Mychoices from "./components/Mychoices";
import Websites from "./components/Websites";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/my-choices">My choices</Link>
            </li>
            <li>
              <Link to="/websites-to-follow">Websites to follow</Link>
            </li>
            <li>
              <a href="https://learn.seytech.co" target="_blank">
                Seytech
              </a>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <img
                src="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg"
                alt="img"
              />
              <h1>Marat Gaipov</h1>
              <p>
                Seytech student, web developer -{" "}
                <span> software engineer </span> Thanks for visiting my site.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                in amet officia molestias id, omnis earum culpa eius neque sit.
                Sed vero, id quidem tenetur nesciunt quod nobis consectetur
                fugit? List of things i'm learning:{" "}
                <span> HTML, CSS, Javascript, React </span>
              </p>
              <h3>About Me</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos in aliquam eaque. Aspernatur vitae doloribus
                ducimus repellendus quisquam, cupiditate nesciunt minima sunt,
                sit, quia cum. Ducimus neque porro reiciendis. Lorem ipsum
                dolor, large sit amet consectetur adipisicing elit. Deleniti
                quae, officia rerum nulla, consequuntur odit nobis neque
                repellat illum eius ipsam distinctio qui amet quisquam? Et
                inventore sunt modi repellendus.
              </p>
              <h3>My Goals</h3>
              <ol>
                <li>Learning HTML/CSS</li>
                <li>Learning Javascript</li>
                <li>Learning React</li>
                <li>Finding a Software engineering job</li>
              </ol>
            </Route>
            <Route path="/tools">
              <Tools />
            </Route>
            <Route path="/my-choices">
              <Mychoices />
            </Route>
            <Route path="/websites-to-follow">
              <Websites />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
