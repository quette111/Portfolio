document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
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
  


const techArray = [
    {name: 'Javascript', image: "assets/images/js.png"},
    {name: 'HTML', image: 'assets/images/htmll.png'},
    {name: 'CSS', image: 'assets/images/css.png'},
    {name: 'Blank', image: 'assets/images/block2.png'}
];

const frameArray = [
    {name: 'Express', image: 'assets/images/express2.png'},
    {name: 'Node.js', image: 'assets/images/node2.png'},
    {name: 'Mongoose', image: 'assets/images/mongo.png'},
    {name: 'Chart.js', image: 'assets/images/chart.svg'},
];

const toolArray = [
    {name: 'Visual Studio Code', image: 'assets/images/vscode.png'},
    {name: 'Git', image: 'assets/images/git.png'},
    {name: 'GitHub', image: 'assets/images/github.png'}, 
    {name: 'Webpack', image: 'assets/images/webpack.png'}, 
    {name: 'Postman', image: 'assets/images/postman.png'}
];



const skillsArea = document.getElementById('skillsArea');

console.log(techArray[0].image)
document.getElementById('languageDiv').innerHTML = techArray.map((entry) => 


  `


  
  <img class='imgJ' src='${entry.image}'></img>
 
  `).join("");

document.getElementById('languageDiv').innerHTML +=` <h2 class="pLan">Programming Languages</h2>`




document.getElementById('frameworks').innerHTML = frameArray.map((entry) => 


  `


  
  <img class='imgJ' src='${entry.image}'></img>
 
  `).join("");

document.getElementById('frameworks').innerHTML +=` <h2 class="pLan">Frameworks & Libraries</h2>`


document.getElementById('tools').innerHTML = toolArray.map((entry) => 


  `


  
  <img class='imgJ' src='${entry.image}'></img>
 
  `).join("");

document.getElementById('tools').innerHTML +=`<h2 class="pLan">Dev Tools & Platforms</h2>`




let i = 0; 
const selfAdjectives = ['web developer','problem solver','tech enthusiast']
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
        "Project": "jobLog",
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
        "Description":"jobLog is a job tracker with Chart.js visualizations and AI-powered resume tips to boost your job search"
    },{
        "Project": "Astro Dodge",
        "url": "",
        "Image1": "assets/images/astro1.png",
        "Image2": "assets/images/astro2.png",
        "Image3": "assets/images/astro3.png",
        "Image4": "assets/images/htmll.png",
        "Image5": "assets/images/css.png",
        "Image6": "assets/images/js.png",
        "Image7": "assets/images/block.png",
        "Image8": "assets/images/block.png",
        "Image9": "assets/images/block.png",
        "Description":"Interactive point based game vs CPU currently in development"
    },{
        "Project": "Christiansen & Associates LLC",
        "url": "https://christiansenandassociates.com/",
        "Image1": "assets/images/CANDL.png",
        "Image2": "assets/images/CL2.png",
        "Image3": "assets/images/CL3.png",
        "Image4": "assets/images/wp.png",
        "Image5": "assets/images/block.png",
        "Image6": "assets/images/block.png",
        "Image7": "assets/images/block.png",
        "Image8": "assets/images/block.png",
        "Image9": "assets/images/block.png",
        "Description":" Customized a WordPress site using block editor and theme settings. Added content sections, forms, and responsive styling"
    }  
]




document.getElementById('projectCard').innerHTML = projects.map((item) => 

  ` <h2 class="projectName">${item.Project}<a target="_blank" rel="noopener noreferrer" href='${item.url}'><img class='openInNewWindow' src='assets/images/open.png'></img></a></h2>
 <h2 class='projectDescription'>${item.Description}</h2>
<div id="scroll-container">

    <img class='projPhoto' src="${item.Image1}"> 
    <img class='projPhoto' src="${item.Image2}">
    <img class='projPhoto' src="${item.Image3}">
</div>
    <div id='techContain'>
    <h3>Technology used:</h3>
        <img id='techPhoto' src="${item.Image4}">
        <img id='techPhoto' src="${item.Image5}">
        <img id='techPhoto' src="${item.Image6}"><br>
        <img id='techPhoto' src="${item.Image7}">
        <img id='techPhoto' src="${item.Image8}">
        <img id='techPhoto' src="${item.Image9}">
        
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







