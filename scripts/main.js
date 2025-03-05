window.addEventListener("DOMContentLoaded", function () {
    const startTime = Date.now(); // Record the start time
    const minLoadingTime = 2000; // Minimum loading time in milliseconds (2 seconds)
  
    let i = 0;
    const totalIterations = 1000000; // Reduced iterations for faster completion
    const chunkSize = 100000; // Process 100,000 iterations per chunk
  
    function processChunk() {
      const end = Math.min(i + chunkSize, totalIterations);
      for (; i < end; ++i) {
        var x = i / 3.14;
      }
      if (i < totalIterations) {
        requestAnimationFrame(processChunk); // Use requestAnimationFrame for smoother updates
      } else {
        const elapsedTime = Date.now() - startTime; // Calculate elapsed time
        const remainingTime = minLoadingTime - elapsedTime; // Calculate remaining time
  
        if (remainingTime > 0) {
          // If the loop finished too quickly, wait for the remaining time
          setTimeout(() => {
            console.log("Loop finished");
            document.getElementById("progress").classList.add("hide"); // Hide the progress bar
            document.getElementById("wrapper").style.display = "block"; // Show the wrapper
            console.log("Loading hidden, wrapper displayed");
          }, remainingTime);
        } else {
          // If the loop took longer than the minimum loading time, proceed immediately
          console.log("Loop finished");
          document.getElementById("progress").classList.add("hide"); // Hide the progress bar
          document.getElementById("wrapper").style.display = "block"; // Show the wrapper
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
        top: 730,
        behavior: 'smooth',
    });
}

function scrollToEducation(){
    window.scroll({
        top: 1600,
        behavior: 'smooth',
    });
}
function scrollToProjects(){
    window.scroll({
        top: 2400,
        behavior: 'smooth',
    });
}

const techArray = [
    {name: 'Javascript', image: "assets/images/js.png"},
    {name: 'HTML', image: 'assets/images/htmll.png'},
    {name: 'CSS', image: 'assets/images/css.png'}
];

const frameArray = [
    {name: 'React', image: 'assets/images/react.png'},
    {name: 'Bootstrap', image: 'assets/images/bootstrap.png'},
];

const toolArray = [
    {name: 'Visual Studio Code', image: 'assets/images/vscode.png'},
    {name: 'Git', image: 'assets/images/git.png'},
    {name: 'GitHub', image: 'assets/images/github.png'}
];



const skillsArea = document.getElementById('skillsArea');






window.addEventListener('scroll', function(){  //works as intended but needs to be changed for sure haha
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

document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("imgJ");
    const title = document.getElementById("figCaptionJ");
    const img2 = document.getElementById('scriptImg')
const title2 = document.getElementById('reactCaption')
const img3 = document.getElementById('jsImg')
    const title3 = document.getElementById('toolCaption')

    // Optional: Initialize with first image
    img.src = techArray[i].image;
    title.innerHTML = techArray[i].name;
    img2.src = frameArray[i].image;
    title2.innerHTML = frameArray[i].name;
    img3.src = toolArray[i].image;
    title3.innerHTML = toolArray[i].name;

    document.getElementById("arrowRight").addEventListener("click", turnRight1);
    document.getElementById("arrowLeft").addEventListener("click", turnLeft1);
    document.getElementById("arrowRight").addEventListener("click", turnRight2);
    document.getElementById("arrowLeft").addEventListener("click", turnLeft2);
    document.getElementById("arrowRight").addEventListener("click", turnRight3);
    document.getElementById("arrowLeft").addEventListener("click", turnLeft3);
    

});

function turnRight1() {
    if (i < techArray.length - 1) { // Prevent going out of bounds
        i++;
    } else {
        i = 0; // Loop back to the start if at the end
    }

    const img = document.getElementById("imgJ");
    const title = document.getElementById("figCaptionJ");

    img.src = techArray[i].image;
    title.innerHTML = techArray[i].name;
}



function turnLeft1(){
    if ( i > techArray.length - techArray.length) {
        i--
    } else {
        i = 2
    }
const img = document.getElementById('imgJ')
const title = document.getElementById('figCaptionJ')
        img.src = techArray[i].image;
        title.innerHTML = techArray[i].name;
}  



function turnRight2(){
    if (i < frameArray.length - 1){
        i++;
    } else {
        i = 0
    }
const img2 = document.getElementById('scriptImg')
const title2 = document.getElementById('reactCaption')
    img2.src = frameArray[i].image;
    title2.innerHTML = frameArray[i].name;
    

}

function turnLeft2(){
    if (i > frameArray.length - frameArray.length){
        i--
    } else{
        i = 1
    }


const img2 = document.getElementById('scriptImg')
const title2 = document.getElementById('reactCaption')
        img2.src = frameArray[i].image;
        title2.innerHTML = frameArray[i].name;
}  

function turnRight3(){
    if (i < toolArray.length - 1){
        i++
    } else{
        i = 0
    }

    const img3 = document.getElementById('jsImg')
    const title3 = document.getElementById('toolCaption')
        img3.src = toolArray[i].image;
        title3.innerHTML = toolArray[i].name;
        
    
}

function turnLeft3(){
    if (i > toolArray.length - toolArray.length){
        i--
    } else{
        i = 2
    }

    const img3 = document.getElementById('jsImg')
    const title3 = document.getElementById('toolCaption')
        img3.src = toolArray[i].image;
        title3.innerHTML = toolArray[i].name;
}  


function openCodeTheDream(){
    window.open('https://codethedream.org/');
}

const selfAdjectives = ['Software Developer','Analytical thinker','Tech enthusiast','Computer programmer']

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
        "Project": "Astro Dodge",
        "Image1": "assets/images/rrLanding.png",
        "Image2": "assets/images/rrOver.png",
        "Image3": "assets/images/rrPlay.png",
        "Image4": "assets/images/htmll.png",
        "Image5": "assets/images/css.png",
        "Image6": "assets/images/js.png"
    },
    {
        "Project": "Lift Logic",
        "Image1": "assets/images/exLanding.png",
        "Image2": "assets/images/exCalc.png",
        "Image3": "assets/images/exDB.png",
        "Image4": "assets/images/htmll.png",
        "Image5": "assets/images/css.png",
        "Image6": "assets/images/js.png"
    }  
]





document.getElementById('projectCard').innerHTML = projects.map((item) => 

  ` <h2 id="projectName">${item.Project}</h2>

<div id="scroll-container">

    <img id='projPhoto' src="${item.Image1}"> 
    <img id='projPhoto' src="${item.Image2}">
    <img id='projPhoto' src="${item.Image3}">
</div>
    <div id='techContain'>
    <h3>Technology used:</h3>
        <img id='techPhoto' src="${item.Image4}">
        <img id='techPhoto' src="${item.Image5}">
        <img id='techPhoto' src="${item.Image6}">
    </div>`).join("");



    window.addEventListener('scroll', function(){  
        if(window.scrollY > 1450) {
            document.getElementById('projectCard').style.cssText = "animation-name: slide;animation-duration: 3s;"
    
    }})

    

    window.addEventListener('scroll', function(){  
        if(window.scrollY > 500) {
            document.getElementById('schoolsContainer').style.cssText = "animation-name: slide;animation-duration: 3s;"
    
    }})