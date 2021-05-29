import React, { Component } from "react";
import "../styles.css";

class Websites extends Component {
  constructor() {
    super();
    this.state = {
      websites: [
        {
          name: "Seytech Portal",
          url: "https://learn.seytech.co/",
          description: "Our interactive learning and tracking platform."
        },
        {
          name: "FreeCodecamp",
          url: "https://www.freecodecamp.org/",
          description:
            "Online interactive platform that offers free coding classes."
        },
        {
          name: "Codecademy",
          url: "https://www.codecademy.com/catalog",
          description:
            "	Online interactive platform that offers free coding classes in 12 different programming languages."
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com/",
          description:
            "Stack Overflow is a question and answer site for professional and enthusiast programmers."
        },
        {
          name: "Medium",
          url: "https://betterprogramming.pub/",
          description: "	A website to read blogs about programming."
        },
        {
          name: "Quora",
          url: "https://www.quora.com/",
          description: "A website to read blogs about almost anything."
        },
        {
          name: "Youtube",
          url:
            "https://www.youtube.com/results?search_query=html+learning+projects",
          description: "Tutorial to follow and practice."
        }
      ]
    };
  }

  render() {
    //console.log(this.state.tools)

    return (
      <div>
        <h1>Websites to follow:</h1>
        <ul className="tool">
          <li>
            <h3 className="name title">Tools</h3>
            <h3 className="p title">Description</h3>
          </li>

          {this.state.websites.map((site) => {
            return (
              <li>
                <div className="name">
                  <h4>
                    <a href={site.url} target="_blank">
                      {site.name}
                    </a>
                  </h4>
                </div>

                <div className="p">
                  <p>{site.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Websites;
