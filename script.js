// store project information as an array of objects
const projects = [
  {
    name: "Calorie Tracking App",
    technology: "Python",
    description: "A program that tracks daily calories and protein intake."
  },
  {
    name: "Small Office Network",
    technology: "Cisco Packet Tracer",
    description: "A simulated office network using VLANs, IP addressing and network connectivity."
  },
  {
    name: "Community Clean-Up App",
    technology: "Jira, Confluence, Figma",
    description: "A group project designing an application for organising community clean-up events."
  },
  {
    name: "Terminal Portfolio",
    technology: "HTML, CSS, JavaScript",
    description: "An interactive command-line portfolio website."
  }
];

// get html elements, store them as variables
const commandForm = document.body.querySelector("#command-form");
const terminalOutput = document.body.querySelector("#terminal-output")
const commandInput = document.querySelector("#command-input");

// makes sure that command input is already selected
commandInput.focus()

// event listner for #command-form, event will be "submit"
commandForm.addEventListener("submit", (event) => {
  // prevent browser behaviour from refreshing page
  event.preventDefault()
  // create <p> element as a variable
  const commandLine = document.createElement("p") 
  // collect form data
  const formData = new FormData(event.target)
  // get form data through input element by field name which is "command"
  const userCommand = formData.get("command").trim().toLowerCase()
  
  // check validation, nothing happens if the command is empty
  if (userCommand === "") {
    return;
  }
  // change command line text to "> " plus whatever the user types
  commandLine.textContent = "> " + userCommand
  // make it so the element is being attached to its parent in order
  terminalOutput.appendChild(commandLine)

  switch (userCommand) {
    case "help": {
      // create new p element to append to terminal output
      const responseLine = document.createElement("p")
      // `` backticks used to initiate template literals, which allows the text to have line breaks just like in ms word 
      responseLine.textContent = `[AVAILABLE COMMANDS]
      --------------------------------

      help - Show available commands
      about - Learn about me
      skills - View my skills
      projects - View my projects
      contact - Contact information
      portfolio - View my web portfolio
      theme - Toggle light/dark mode
      clear - Clear the terminal`
      terminalOutput.appendChild(responseLine)
      // exit the switch
      break;
    }
    case "about": {
      const responseLine = document.createElement("p")
      responseLine.textContent = ` [ABOUT ME]
      --------------------------------

      Hey, I'm Chase!

      I'm currently studying a Diploma of Cyber Security at SAE, with an interest in programming, networking and web development.
      
      I've previously studied full-stack web development and enjoy building projects that challenge my technical skills and help me understand how technology works.
      
      Right now, I'm developing my skills in Python, JavaScript, networking and cybersecurity.
      
      This portfolio is one of my projects, please feel free to explore using the available commands!
      `
      terminalOutput.appendChild(responseLine)
      break;
    }
    case "skills": {
      const responseLine = document.createElement("p")
      responseLine.textContent = `[TECHNICAL SKILLS]
      --------------------------------

      [PROGRAMMING & WEB DEVELOPMENT]
      ------------------------------
      • Python
      • JavaScript
      • TypeScript
      • HTML & CSS
      • Responsive Web Design
      • DOM Manipulation
      • Form Validation
      • Git & GitHub

      [NETWORKING]
      ------------------------------
      • IP Addressing
      • Subnetting
      • VLAN Configuration
      • Network Troubleshooting
      • Router & Switch Configuration
      • NAT
      • Cisco Packet Tracer

      [CYBERSECURITY]
      ------------------------------
      • Cybersecurity Fundamentals
      • Network Security
      • Access Control
      • Firewalls & Traffic Filtering
      • Network Segmentation
      • Security Best Practices
      
      [TOOLS & PLATFORMS]
      ------------------------------
      • Visual Studio Code
      • GitHub
      • Cisco Packet Tracer
      • Figma
      • Jira
      • Confluence`
      terminalOutput.appendChild(responseLine)
      break;
    }
    case "projects": {
      // create a separate heading variable for the terminal output. 
      const heading = document.createElement("p")
      heading.textContent = `[PROJECT DIRECTORY]
      ------------------------------
      Explore some of the projects I've worked on:`
      terminalOutput.appendChild(heading)
      
      // use map to iterate through projects array then return strings with name, technology and description
      const projectsList = projects.map((project) => {
        return `${project.name}
        Technology: ${project.technology}
        ${project.description}` 
      })
      // combine all strings using join() with a blank line between each project object
      const projectsText = projectsList.join("\n\n");
      const responseLine = document.createElement("p");
      responseLine.textContent = projectsText;
      // show in termional output
      terminalOutput.appendChild(responseLine);
      break;
    }
    case "contact": {
      const responseLine = document.createElement("p")
      const githubLink = document.createElement("a")
      const linkedinLink = document.createElement("a")
      const endingLine = document.createElement("p")
      responseLine.textContent = `[CONTACT INFORMATION]

      Interested in getting in touch?

      Email: chasebarrettbrown@hotmail.com

      Find me on:`

      // github link
      githubLink.textContent = "GitHub";
      githubLink.href = "https://github.com/Mrgnoblennon";
      githubLink.target = "_blank";
      githubLink.rel = "noopener noreferrer";

      // linkedIn link
      linkedinLink.textContent = "LinkedIn";
      // change href attribute value
      linkedinLink.href = "https://www.linkedin.com/in/chase-barrett-brown-b23775309/";
      // allows link to open in a new tab
      linkedinLink.target = "_blank";
      // security for opening links
      linkedinLink.rel = "noopener noreferrer";

      // closing message
      endingLine.textContent = "Feel free to reach out!";

      // display all in the terminal
      terminalOutput.appendChild(responseLine);
      terminalOutput.appendChild(githubLink);
      terminalOutput.appendChild(linkedinLink);
      terminalOutput.appendChild(endingLine);
      break;
    }
    case "portfolio": {
      // Create a clickable link
      const portfolioLink = document.createElement("a");
    
      // Set the link text and destination
      portfolioLink.textContent = "View my Web Development Portfolio"
      portfolioLink.href = "https://chase-portfolio-next.vercel.app/"
      portfolioLink.target = "_blank";
      portfolioLink.rel = "noopener noreferrer";
      terminalOutput.appendChild(portfolioLink);
      break;
    }
    case "theme": {
      const responseLine = document.createElement("p");
      // check if the current theme is light
      if (document.body.dataset.theme === "light") {
        // if yes then change theme to dark
        document.body.dataset.theme = "dark";
        responseLine.textContent = "Theme changed to dark mode.";
      } else {
        document.body.dataset.theme = "light";
        responseLine.textContent = "Theme changed to light mode.";
      }
      terminalOutput.appendChild(responseLine);
      break;
    }
    case "clear": {
      // remove all children from terminal output
      terminalOutput.replaceChildren()
      break;
    }
      default:
        const errorLine = document.createElement("p")
        errorLine.textContent = "Unknown command. Type 'help' for available commands."
        // display error when entering unknown command
        terminalOutput.appendChild(errorLine)
  }
  // allows terminal output container to auto scroll to bottom with each new command
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
  // input reset
  event.target.reset();
  // refocus command line
  commandInput.focus();
})