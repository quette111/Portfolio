document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  document.getElementById('resumeBtn').addEventListener('click', ()=> {
    alert('My apologies, my resume is currently unavailable while I make a few revisions! :-)')
  })
});



window.addEventListener("DOMContentLoaded", function () {
    const startTime = Date.now(); 
    const minLoadingTime = 2000; 
  
    let i = 0;
    const totalIterations = 1000000; 
    const chunkSize = 100000; 
  
    function processChunk() {
      const end = Math.min(i + chunkSize, totalIterations);
      for (; i < end; ++i) {
        var x = i / 3.14;
      }
      if (i < totalIterations) {
        requestAnimationFrame(processChunk); 
      } else {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = minLoadingTime - elapsedTime; 
  
        if (remainingTime > 0) {
         
          setTimeout(() => {
            console.log("Loop finished");
            document.getElementById("progress").classList.add("hide"); 
            document.getElementById("wrapper").style.display = "block"; 
             document.querySelector('.cube-wrap').style.display="none";
            console.log("Loading hidden, wrapper displayed");
          }, remainingTime);
        } else {
      
          console.log("Loop finished");
          document.getElementById("progress").classList.add("hide"); 
          document.getElementById("wrapper").style.display = "block"; 
          console.log("Loading hidden, wrapper displayed");
        }
      }
    }
  
    processChunk(); // Start processing
  });
  
/*

const techArray = [
  { name: 'Campaign coordination & promotional support', image: "assets/images/js.png"},
    {name: 'HTML', image: 'assets/images/htmll.png'},
    {name: 'CSS', image: 'assets/images/css.png'},
    {name: 'Blank', image: 'assets/images/block2.png'}
];

const frameArray = [
    {name: 'Express', image: 'assets/images/express2.png'},
    {name: 'Node.js', image: 'assets/images/node2.png'},
  { name: 'React.js', image: 'assets/images/react.png' },
    {name: 'Mongoose', image: 'assets/images/mongo.png'},
    {name: 'Chart.js', image: 'assets/images/chart.svg'},
];





const skillsArea = document.getElementById('skillsArea');

console.log(techArray[0].image)
document.getElementById('languageDiv').innerHTML = techArray.map((entry) => 


  `


  
  <h4 class='imgJ'>${techArray[0].name}</h4>
 
  `).join("");

document.getElementById('languageDiv').innerHTML +=` <h2 class="pLan">Marketing & Digital Skills</h2>`




document.getElementById('frameworks').innerHTML = frameArray.map((entry) => 


  `


  
  <h4 class='imgJ'>${frameArray[0].name}</h4>
 
  `).join("");

document.getElementById('frameworks').innerHTML +=` <h2 class="pLan">Tools & Technical Skills</h2>`




*/


let i = 0; 
const selfAdjectives = ['digital operations specialist', 'technical problem solver','tech enthusiast']
const description = document.getElementById('description');

function changeDescription(){
    if(i < selfAdjectives.length - 1){
        i++
    }else{
        i = 0
    }
    description.innerHTML = `${selfAdjectives[i]}`

    setTimeout(changeDescription, 2000);
}
changeDescription()




let projects = [
    
    {
    "Project": "jobLog - AI-Powered Application Tracker",
        "url": "https://job-log.onrender.com/",
        "Image1": "assets/images/jlLanding.png",
        "Image2": "assets/images/jobLog11.png",
        "Image3": "assets/images/joblog22.png",
        "Image4": "assets/images/htmll.png",
        "Image5": "assets/images/css.png",
        "Image6": "assets/images/js.png",
        "Image7": "assets/images/express.png",
        "Image8": "assets/images/mongo.png",
        "Image9": "assets/images/webpack.png",
    "Challenge": "The Challenge:",
    "ExChal": "Managing multiple job applications can quickly become disorganized, making it difficult to track progress, stay consistent, and identify next steps",
    "Approach": "Approach:",
    "ExApp": "Designed a system to track application status, habits, and key actions. Integrated AI- driven suggestions to support decision - making Structured the interface to prioritize clarity and ease of use",
    "Outcome": "Outcome",
    "ExOut":"Created a more structured and user - friendly workflow Reduced friction in managing multiple applications Improved overall visibility into the job search process",
  }, {
    "Project": "KickBack — Interactive Ecommerce Sneaker Platform",
    "url": "",
    "Image1": "assets/images/kb1.png",
    "Image2": "assets/images/kb3.png",
    "Image3": "assets/images/kbu.png",
    "Image4": "assets/images/htmll.png",
    "Image5": "assets/images/css.png",
    "Image6": "assets/images/js.png",
    "Image7": "assets/images/react.png",
    "Image8": "assets/images/express.png",
    "Image9": "assets/images/mongo.png",
    "Challenge": "The Challenge:",
    "ExChal": "Online resale sneaker platforms often lack a smooth and intuitive experience for browsing, purchasing, and managing product listings",
    "Approach": "Approach:",
    "ExApp": "Designed and developed an ecommerce platform for lightly used shoes featuring product listings, shopping cart functionality, and checkout flow. Implemented admin capabilities for adding and managing products. Focused on creating a clear and intuitive user journey from browsing to purchase",
    "Outcome": "Outcome",
    "ExOut": "Built a functional ecommerce experience supporting product browsing, cart management, and checkout processes. Improved understanding of user flow in online purchasing systems. Currently expanding features and refining admin product management tools"
  },
  {
    "Project": "MycelFlow — Event Management & Team Workflow",
    "url": "https://github.com/Code-the-Dream-School/jj-practicum-team-5-frontmy",
    "Image1": "assets/images/my1.png",
    "Image2": "assets/images/my2.png",
    "Image3": "assets/images/my3.png",
    "Image4": "assets/images/htmll.png",
    "Image5": "assets/images/css.png",
    "Image6": "assets/images/js.png",
    "Image7": "assets/images/react.png",
    "Image8": "assets/images/express.png",
    "Image9": "assets/images/mongo.png",
    "Challenge": "The Challenge:",
    "ExChal": "Teams working on software projects often struggle with organizing tasks, tracking progress, and maintaining clear communication across multiple contributors",
    "Approach": "Approach:",
    "ExApp": " Collaborated with a team of 4 developers using Agile methodology and Jira to plan and execute development over a 10-week sprint cycle. Contributed to building a system for task tracking, team collaboration, and progress monitoring. Focused on improving workflow clarity and usability within the application",
    "Outcome": "Outcome",
    "ExOut": "Improved team coordination and project visibility throughout development. Delivered a structured workflow system that supported task management and progress tracking. Gained experience working in a real Agile development environment with cross-functional collaboration"
  },
   
]




document.getElementById('projectCard').innerHTML = projects.map((item) => 


  `   <h2 class="projectName">${item.Project}<a target="_blank" rel="noopener noreferrer" href='${item.url}'><img class='openInNewWindow' src='assets/images/open.png'></img></a></h2>
  <div id="scroll-container">

    <img class='projPhoto' src="${item.Image1}"> 
    <img class='projPhoto' src="${item.Image2}">
    <img class='projPhoto' src="${item.Image3}">
</div>

<div class="project-grid">
  <div class="project-card">
    <h2 class="subheaderproj">${item.Challenge}</h2>
    <h2 class="projectDescription">${item.ExChal}</h2>
  </div>

  <div class="project-card">
    <h2 class="subheaderproj">${item.Approach}</h2>
    <h2 class="projectDescription">${item.ExApp}</h2>
  </div>

  <div class="project-card outcome">
    <h2 class="subheaderproj">${item.Outcome}</h2>
    <h2 class="projectDescription">${item.ExOut}</h2>
  </div>
</div>

 
   

    
    `).join("");










function scrollToEducation() {
  document
    .getElementById('educationArea')
    .scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
  const btn = document.querySelector('.educationButton');
  console.log('Found button:', btn);
  btn.addEventListener('click', () => {

    scrollToEducation();
  });
});


function scrollToResume() {
  document
    .getElementById('foot')
    .scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
  const btn = document.querySelector('.footer-actions');
  console.log('Found button:', btn);
  btn.addEventListener('click', () => {
    
    scrollToResume();
    btn.classList.add('glow')
  });
});


function scrollToRes() {
  document
    .getElementById('foot')
    .scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
  const btn = document.querySelector('.resumeButton');
  console.log('Found button:', btn);
  btn.addEventListener('click', () => {

    scrollToRes();
    document.querySelector('.footer-actions').classList.add('glow')
  });
});





function scrollToSkills() {
  document
    .getElementById('skillScroll')
    .scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
  const btn = document.querySelector('.skillsButton');
  console.log('Found button:', btn);
  btn.addEventListener('click', () => {
 
    scrollToSkills();
  });
});

function scrollToProjects() {
  document
    .querySelector('.projectArea')
    .scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
  const btn = document.querySelector('.projectsButton');
  console.log('Found button:', btn);
  btn.addEventListener('click', () => {
 
    scrollToProjects();
  });
});

function scrollToFooter() {
  document
    .getElementById('foot')
    .scrollIntoView({ behavior: 'smooth' });
}

function removeGlow(){

    document.querySelectorAll('.img').forEach(img => {
  img.classList.remove('glow');
});
}

function emphasizeContactInfo() {

document.querySelectorAll('.img').forEach(img => {
  img.classList.add('glow');
});

setTimeout(removeGlow, 4000)

}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
  const btn = document.querySelector('.footerButton');
  console.log('Found button:', btn);
  btn.addEventListener('click', () => {
 
    scrollToFooter();
    emphasizeContactInfo()
  });
});


const linkElement = document.createElement('a');
linkElement.setAttribute('target', '_blank');
linkElement.setAttribute('href', 'https://github.com/quette111/Job_Log');
let githubImg = document.createElement('img');
githubImg.src = 'assets/images/gitIcon.png';
githubImg.alt = 'Github Icon';
githubImg.classList.add('githubImg');

linkElement.append(githubImg);
document.querySelector('.projectName').append(linkElement);



const projectNames = document.querySelectorAll('.projectName');

if (projectNames.length > 1) {
  const second = projectNames[1];
  const cloned = linkElement.cloneNode(true); 
  cloned.setAttribute('href', 'https://github.com/quette111/KickBack');
  second.appendChild(cloned);
}

