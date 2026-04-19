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
const selfAdjectives = ['Digital Marketing & Operations Specialist', 'technical problem solver', 'creative systems thinker']
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
    "tc":'Technical Considerations: ',
    "cons": 'Semantic HTML structure, meta tags, and keyword-focused page organization to support basic SEO.',
    "conss": 'Integrated MailerLite API for email capture and automated onboarding workflows.',
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
    "ExChal": "A lack of structured application tracking leads to inconsistent user engagement, missed follow-ups, and limited visibility into the job search journey.",
    "Approach": "Approach:",
    "ExApp": "I designed a system to track application status, habits, and key actions. I also integrated AI-driven suggestions to support decision-making and structured the interface for clarity and ease of use. Lastly, I implemented email signup functionality with MailerLite to automate user onboarding and segment users into a subscriber group for follow-up messaging.",
    "Outcome": "Outcome",
    "ExOut": "I was able to create a more structured and user-friendly workflow. Utilizing MailerLite, I enabled automated user onboarding through email capture and lifecycle messaging. If a user signs up, they will also be sent follow-up email marketing campaigns based on segmentation.",
  }, {
    "Project": "KickBack — Interactive E-commerce Sneaker Platform",
    "url": "",
    "tc": '',
    "cons": ' ',
    "conss": '',
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
    "ExChal": "Online resale sneaker platforms often lack a smooth and intuitive experience for browsing, purchasing, and managing product listings.",
    "Approach": "Approach:",
    "ExApp": "I developed an E-commerce platform for lightly used shoes featuring product listings, shopping cart functionality, and checkout flow. I then added admin capabilities for managing products and marketing materials. The primary focus of this project was to create a clear and intuitive user journey from browsing to purchase.",
    "Outcome": "Outcome",
    "ExOut": "By creating a fully functional E-commerce website, I improved my understanding of user flow in online purchasing systems. "
  },
  
   
]




document.getElementById('projectCard').innerHTML = projects.map((item) => 


  `   <h2 class="projectName">${item.Project}<a target="_blank" rel="noopener noreferrer" href='${item.url}'><img class='openInNewWindow' src='assets/images/open.png'></img></a></h2>
    <strong> <h3>${item.tc}</h3></strong><h3 class='fontWhite'>${item.cons}</h3><h3 class='fontWhite'>${item.conss}</h3>

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



document.querySelector('.projectName').append(linkElement);



const projectNames = document.querySelectorAll('.projectName');

if (projectNames.length > 1) {
  const second = projectNames[1];
  const cloned = linkElement.cloneNode(true); 
  cloned.setAttribute('href', 'https://github.com/quette111/KickBack');
  second.appendChild(cloned);
}

