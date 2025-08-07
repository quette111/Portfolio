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
  
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function letsConnect(){
    window.open('https://www.linkedin.com/in/marquettehanson')
}

function scrollToSkills(){
    window.scroll({
        top: 630,
        behavior: 'smooth',
    });
}


function scrollToProjects(){
    window.scroll({
        top: 1500,
        behavior: 'smooth',
    });
}

function scrollToFooter(){
    window.scroll({
        top: 9000,
        behavior: 'smooth',
    });
}

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


window.addEventListener('scroll', function(){  //works as intended but needs to be changed 
    if(window.scrollY > 300) {
        skillsArea.style.cssText = "animation-name: slide;animation-duration: 2s;"

}else if(window.scrollY < 300){
    window.addEventListener('scroll', function(){
        if(window.scrollY > 300) {
            skillsArea.style.cssText = "animation-name: slide;animation-duration: 2s;"
        }else{}
    }) 
}
})



const schoolsContainer = document.getElementById('schoolsContainer')
window.addEventListener('scroll', function(){
    if(window.scrollY > 500) {
        schoolsContainer.style.animation = 'smoothAppearance 1s ease-out forwards';
}})


let i = 0; // Declare i globally so it retains its value
/*
document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("imgJ");
    const title = document.getElementById("figCaptionJ");
    const img2 = document.getElementById('scriptImg')
const title2 = document.getElementsByClassName('reactCaption')
const img3 = document.getElementById('jsImg')
    const title3 = document.getElementById('toolCaption')


    img.src = techArray[i].image;
    title.innerHTML = techArray[i].name;
    img2.src = frameArray[i].image;
    title2.innerHTML = frameArray[i].name;
    img3.src = toolArray[i].image;
    title3.innerHTML = toolArray[i].name;

    document.getElementById("right1").addEventListener("click", turnRight1);
    document.getElementById("left1").addEventListener("click", turnLeft1);
    document.getElementById("right2").addEventListener("click", turnRight2);
    document.getElementById("left2").addEventListener("click", turnLeft2);
    document.getElementById("right3").addEventListener("click", turnRight3);
    document.getElementById("left3").addEventListener("click", turnLeft3);
    

});


/*document.getElementById(arrowRight).addEventListener((e)=>{
    e.stopPropagation()
    turnRight1()
})



let langIndex  = 0;



function turnRight1() {

    if (langIndex < techArray.length - 1) { // Prevent going out of bounds
        langIndex++;
    } else {
        langIndex = 0; // Loop back to the start if at the end
    }

    const img = document.getElementById("imgJ");
    const title = document.getElementById("figCaptionJ");

    img.src = techArray[langIndex].image;
    title.innerHTML = techArray[langIndex].name;
}



function turnLeft1(){
    if ( langIndex > techArray.length - techArray.length) {
        langIndex--
    } else {
        langIndex = 2
    }
const img = document.getElementById('imgJ')
const title = document.getElementById('figCaptionJ')
        img.src = techArray[langIndex].image;
        title.innerHTML = techArray[langIndex].name;
}  

let frameIndex = 0;

function turnRight2(){
    if (frameIndex < frameArray.length - 1){
        frameIndex++;
    } else {
        frameIndex = 0
    }
const img2 = document.getElementById('scriptImg')
const title2 = document.getElementById('reactCaption')
    img2.src = frameArray[frameIndex].image;
    title2.innerHTML = frameArray[frameIndex].name;
    

}

function turnLeft2(){
    if (frameIndex > frameArray.length - frameArray.length){
        frameIndex--
    } else{
        frameIndex = 1
    }


const img2 = document.getElementById('scriptImg')
const title2 = document.getElementById('reactCaption')
        img2.src = frameArray[frameIndex].image;
        title2.innerHTML = frameArray[frameIndex].name;
}  


let toolIndex  = 0;

function turnRight3(){
    if (toolIndex < toolArray.length - 1){
        toolIndex++
    } else{
        toolIndex = 0
    }

    const img3 = document.getElementById('jsImg')
    const title3 = document.getElementById('toolCaption')
        img3.src = toolArray[toolIndex].image;
        title3.innerHTML = toolArray[toolIndex].name;
        
    
}

function turnLeft3(){
    
    if (toolIndex > toolArray.length - toolArray.length){
        toolIndex--
    } else{
        toolIndex = 2
    }

    const img3 = document.getElementById('jsImg')
    const title3 = document.getElementById('toolCaption')
        img3.src = toolArray[toolIndex].image;
        title3.innerHTML = toolArray[toolIndex].name;
}  
*/

function openCodeTheDream(){
    window.open('https://codethedream.org/');
}

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




document.getElementById('likedPage').innerHTML =  localStorage.clickCount

function addLike(){

if (localStorage.clickCount){
    localStorage.clickCount = Number(localStorage.clickCount)+1;
} else {
    localStorage.clickCount = 1
}


document.getElementById('likedPage').innerHTML =  localStorage.clickCount


}

let projects = [
    
    {
        "Project": "Job Log",
        "url": "https://job-log.onrender.com/",
        "Image1": "assets/images/jlLanding.png",
        "Image2": "assets/images/jobLog11.png",
        "Image3": "assets/images/jobLog22.png",
        "Image4": "assets/images/htmll.png",
        "Image5": "assets/images/css.png",
        "Image6": "assets/images/js.png",
        "Image7": "assets/images/express.png",
        "Image8": "assets/images/mongo.png",
        "Image9": "assets/images/webpack.png",
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
        "Image9": "assets/images/block.png"

    }  
]





document.getElementById('projectCard').innerHTML = projects.map((item) => 

  ` <h2 id="projectName">${item.Project}<a target="_blank" rel="noopener noreferrer" href='${item.url}'><img class='openInNewWindow' src='assets/images/open.png'></img></a></h2>

<div id="scroll-container">

    <img id='projPhoto' src="${item.Image1}"> 
    <img id='projPhoto' src="${item.Image2}">
    <img id='projPhoto' src="${item.Image3}">
</div>
    <div id='techContain'>
    <h3>Technology used:</h3>
        <img id='techPhoto' src="${item.Image4}">
        <img id='techPhoto' src="${item.Image5}">
        <img id='techPhoto' src="${item.Image6}"><br>
        <img id='techPhoto' src="${item.Image7}">
        <img id='techPhoto' src="${item.Image8}">
        <img id='techPhoto' src="${item.Image9}">
    </div>`).join("");




    window.addEventListener('scroll', function(e){  
        if(window.scrollY > 1450) {
            e.preventDefault()
            document.getElementById('projectCard').style.cssText = "animation-name: slide;animation-duration: 3s;"
              document.getElementsByClassName('.cube').style.display="none";
    
    }})

    

    window.addEventListener('scroll', function(e){  
        if(window.scrollY > 500) {
            e.preventDefault()
            console.log('hello')
            document.getElementById('schoolsContainer').style.cssText = "animation-name: slide;animation-duration: 3s;"
    
    }})


  
  window.addEventListener('scroll', function(e){  


            //document.getElementsByClassName('.cube').style.cssText = "animation-name: fadeOut;animation-duration: 3s;"
            //document.getElementsByClassName('.cube-wrap').style.cssText = "animation-name: fadeOut;animation-duration: 3s;"
        document.querySelector('.cube-wrap').style.display="none";
    })


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
    console.log('Button clicked');
    scrollToEducation();
  });
});


function scrollToSkills() {
  document
    .getElementById('skillsHeader')
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



    function exitMenu(){
        document.getElementById('sideBar').style.cssText = 'display:none';
        console.log('clicked')
    }

    function displayMenu(){
        document.getElementById('sideBar').style.cssText = 'display:flex';

    }


