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
        top: 750,
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











window.addEventListener('scroll', function(){
    if(window.scrollY > 245) {
        skillsArea.innerHTML = `
            <div id='languageDiv'>

               
                <h2 id="pLan">Programming Languages</h2>
                <img onclick='turnRight1()' id='arrowRight' src='assets/images/arrowR.png'>
                <img onclick='turnLeft1()' id='arrowLeft' src='assets/images/arrowLeft.png'>

                    <figure id="jsFig">
                    <img id='imgJ' src="assets/images/js.png">
                    <figcaption id='figCaptionJ'>Javascript</figcaption>
                        
                    </figure>
                    
                 </div>   
                <div id='frameworks'>
                
                    <h2 id="pLan">Frameworks & Libraries</h2>
                    <img onclick='turnRight2()' id='arrowRight' src='assets/images/arrowR.png'>
                <img onclick='turnLeft2()' id='arrowLeft' src='assets/images/arrowLeft.png'>
                        <figure id="jsFig">
                            <img id="scriptImg" src="assets/images/react.png" type="video/mp4">
                            <figcaption id='reactCaption'>React</figcaption>
                        </figure>
                </div>
                <div id='tools'>
               
                    <h2 id="pLan">Tools</h2>
                     <img onclick='turnRight3()' id='arrowRight' src='assets/images/arrowR.png'>
                <img onclick='turnLeft3()' id='arrowLeft' src='assets/images/arrowLeft.png'>
                        <figure id="jsFig">
                            <img id="jsImg" src="assets/images/vscode.png" type="video/mp4">
                            <figcaption id='toolCaption'>VSCode</figcaption>
                        </figure>
                </div>
        
        `
    }else{
        skillsArea.innerHTML = `
        `
    }
    
})



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


