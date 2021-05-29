import React, { Component } from "react";
import "../styles.css";

class Tools extends Component {
  constructor() {
    super();
    this.state = {
      tools: [
        {
          name: "Code Editors",
          description:
            "As a developer, you spend most of your day in your code editor because itâ€™s the place you actually write the code for your sites. All editors provide the plain text format needed for your code to be interpreted as a website.",
          p2:
            "Our favorite editor, VS Code, streamlines your work by letting you customize it with thousands of add-on features, functions, and themes so the tool you use most looks and works exactly the way you want. Atom was built by Microsoft."
        },

        {
          name: "Version Control Systems",
          description:
            "Even if youâ€™re freelancing, but especially if youâ€™re part of a team, you need a reliable version control system to keep track of all the changes you make to your code over time. Trust us, at some point youâ€™ll need to check or even revert to an earlier version of your code base!",
          p2:
            "Git is a decentralized version control system which allows everyone on your team to work with the same files in the same project simultaneously without worrying that you might be overwriting someoneâ€™s work. It gives developers more freedom to work whenever and wherever since everyone has a local copy of the code."
        },
        {
          name: "Front end assets",
          description:
            "Once youâ€™ve made a solid start setting up the code for your site, youâ€™ll want to be sure itâ€™s savvy-looking too. By selecting some stunning front-end assets like fonts, icons, photos, and graphics, you can transform any site from boring to beautiful.",
          p2:
            "Google Fonts is our favorite front-end asset for the incredible selection it provides for your site typography. And Font Awesome is, well, awesome for the vast array of icons it offers (1,000+ for free and 7,000+ on the paid plan). Similarly, Unsplash boasts more than 800,000 high-resolution stock photos you can use, all at no charge and with no copyright hassles."
        },
        {
          name: "Front End Frameworks",
          description:
            "Speaking of looking good, front-end frameworks are another must-have for front-end developers! Front-end frameworks are packages of files for styling and laying out your websites. Frameworks are made up of ready-made navigation menus, buttons, forms, typography, and other assets so you donâ€™t have to write all that code yourself."
        },
        {
          name: "CSS preprocessor",
          description:
            "CSS is a style sheet language used for styling your web pages. And you can make creating a beautiful site with CSS even simpler with preprocessors. A CSS preprocessor is basically a language that, after itâ€™s processed, gives you even more CSS features. A preprocessor also lets you write code thatâ€™s easier to read, maintain, and shareâ€”all vital for working on a developer team or even on your own."
        },
        {
          name: "Javascript Frameworks / Libraries",
          description:
            "JavaScript libraries are collections of code that make your sites interactive, provide better browser support, and add effects like animations, blog post tags, and auto-completing form fields.",
          p2:
            "Like libraries, JavaScript frameworks can simplify your front-end development workflow. But frameworks differ from libraries in that frameworks provide the overall structure (or framework) for sites using JavaScript, while libraries focus on one or more specific aspects of a site."
        },
        {
          name: "Developer Tools",
          description:
            "As you build your sites, often youâ€™ll want to make modifications and test how they look â€œliveâ€ in your browser before committing the changes. You can do all this with developer tools, often called dev tools for short.",
          p2:
            "Dev tools are a function built into modern web browsers that let you see the code behind each section of a site right in the browser with just a few clicks. (Hint: dev tools also let you peek at the code behind any website so theyâ€™re also a great way to learn a thing or two from other developers.)"
        },
        {
          name: "Online Coding Environments",
          description:
            "Coding environments are sites that allow you to write code in an online editor and see the results immediately right next to your code. These platforms are a fast and useful way for developers to experiment and learn from other developers in the same environment.",
          p2:
            "CodePen is the most diverse online coding environment in that you can write HTML, CSS, and JavaScript, and even try out those libraries and frameworks you were just reading about."
        }
      ]
    };
  }

  render() {
    //console.log(this.state.tools)

    return (
      <div>
        <h1>Essential Front End web development tools</h1>
        <ul className="tool">
          <li>
            <h3 className="name title">Tools</h3>
            <h4 className="p title">Description</h4>
          </li>

          {this.state.tools.map((tool) => {
            return (
              <li>
                <div className="name">
                  <h3>{tool.name}</h3>
                </div>

                <div className="p">
                  <p>{tool.description}</p>
                  <p>{tool.p2}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Tools;
