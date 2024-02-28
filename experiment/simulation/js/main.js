//Your JavaScript goes in here
var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg=document.getElementById("Layer_1");
var valvePositioningText = document.getElementById("valve-positioning-text");
var manometerText = document.getElementById("manometer-text")
var count=0
window.appData = window.appData || {};
window.appData.powerFlag = false;
var w2 = document.getElementById("Water_3")
var w3 = document.getElementById("Water_4")
var w4 = document.getElementById("Water_5")
var w8 = document.getElementById("Water_6")
var w9 = document.getElementById("Water_7")
var w10 = document.getElementById("Water_8")
var w11 = document.getElementById("Water_9")
var m_r = document.getElementById("manometer-right")
var m_l = document.getElementById("manometer-left")
var m_m = document.getElementById("manometer-middle")
var wM1 = document.getElementById("WaterM_1")
var wM2 = document.getElementById("WaterM_2")
var wM3 = document.getElementById("WaterM_3")
var wM4 = document.getElementById("WaterM_4")
var wM5 = document.getElementById("WaterM_5")
var wM6 = document.getElementById("WaterM_6")
var wM7 = document.getElementById("WaterM_7")

var waterTankFront = document.getElementById("Tank_Water_Front")
var waterTankBase = document.getElementById("Water_Tank_Base")
var waterTankBack = document.getElementById("Tank_Water_Back");
var waterTankLeft = document.getElementById("Tank_Water_Left");

var h1Text = document.getElementById("h1-text")
var h2Text = document.getElementById("h2-text")
var h3Text = document.getElementById("h3-text")
var h4Text = document.getElementById("h4-text")
var h5Text = document.getElementById("h5-text")
var h6Text = document.getElementById("h6-text")
var h7Text = document.getElementById("h7-text")

var timerSec = document.getElementById("timer-sec")
var timerMS = document.getElementById("timer-ms")
var heightText = document.getElementById("height-text")

var arrowRect = document.getElementById("arrow-rect")
var arrowPol = document.getElementById("arrow-pol")

var svgContainer1 = document.getElementById("svg-container-1");
var svgElements1 = document.querySelectorAll(".arrow-1");

let shouldStop=false;

function displayArrows() {
    svgElements1.forEach(function (element) {
        element.style.animation = "arrowAnimation 1s infinite";       
    });
}

function stopAnimation() {
    svgElements1.forEach(function (element) {
        element.setAttribute("opacity","0")
        element.style.animation = "none";
    });
}

function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1

        waterFlow3()
    }else{
        if(!window.appData.powerFlag){
            alert("Please complete the experiment to turn power off!");
            count=1
        }else{
            location.reload()
        }
    }
}


function waterFlow3(){
    w2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "340");
    animateElement.setAttribute("dur", "5s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    animateElement.setAttribute("values", "0;340");
    animateElement.setAttribute("keyTimes", "0;1");
    animateElement.setAttribute("calcMode", "spline");
    animateElement.setAttribute("keySplines", "0.42 0 0.58 1");

    w2.appendChild(animateElement)

    animateElement.beginElement();

    setTimeout(function(){
        waterFlow4()
    },5000);
}

function waterFlow4(){


    w3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "77.5");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    w3.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "1013.5");
    animateX.setAttribute("to", "936");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w3.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Choose a value on the valve positioning slider to regulate the water flow."
        valvePositioning.disabled = false
      }, 1500);
    
}


function waterFlow5(){
    w4.setAttribute("opacity","1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "93.8");
    animateElement.setAttribute("dur", "2.5s");
    animateElement.setAttribute("fill","freeze");

    w4.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "923.8");
    animateX.setAttribute("to", "830.1");
    animateX.setAttribute("dur", "2.5s");
    animateX.setAttribute("fill","freeze");

    w4.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        
        m_r.setAttribute("opacity","1")

        waterFlowM1()
        waterFlowM2()
        waterFlowM3()

        waterFlow6()


      }, 2500);
    
}

function waterFlow6(){
    m_m.setAttribute("opacity","1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "50.9");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("fill","freeze");

    m_m.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "665.6");
    animateX.setAttribute("to", "614.7");
    animateX.setAttribute("dur", "1s");
    animateX.setAttribute("fill","freeze");

    m_m.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();


    setTimeout(function() {
        waterFlowM4()
      }, 500);

    setTimeout(function() {
        m_l.setAttribute("opacity","1")
        waterFlowM5()
        waterFlowM6()
        waterFlowM7()

        waterFlow8()

      }, 1000);
    
}




function waterFlowM1(){
    wM1.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "85.5");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM1.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM2(){
    wM2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "77.6");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM2.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM3(){
    wM3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "60.7");
    animateElement.setAttribute("dur", "1");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM3.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM4(){
    wM4.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "37.7");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM4.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM5(){
    wM5.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "44.6");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM5.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM6(){
    wM6.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "52.9");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM6.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlowM7(){
    wM7.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "56.6");
    animateElement.setAttribute("dur", "1s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    wM7.appendChild(animateElement)

    animateElement.beginElement();
}

function waterFlow8(){
    w8.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "170.8");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("fill","freeze");

    w8.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "454.8");
    animateX.setAttribute("to", "284");
    animateX.setAttribute("dur", "2s");
    animateX.setAttribute("fill","freeze");

    w8.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlow9()
      }, 2000);

}

function waterFlow9(){
    var currentHeight = parseFloat(w9.getAttribute("height"))
    
    if (currentHeight < 297.1) {
        currentHeight += 3;
        w9.setAttribute("height", currentHeight);
        setTimeout(waterFlow9, 10); 
    }
    setTimeout(function() {
        waterTankBase.setAttribute("opacity","1")
        waterFlow10()
      }, 2000);
}

function waterFlow10(){
    w10.setAttribute("opacity","1")
    var currentwidth = parseFloat(w10.getAttribute("width"))
    if(shouldStop){
        return;
    }else{
        if (currentwidth < 87.2) {
            currentwidth += 3;
            w10.setAttribute("width", currentwidth);
            setTimeout(waterFlow10, 100); 
        }
        setTimeout(function() {
            waterFlow11()
          }, 500);
    }
}

function waterFlow11(){
    w11.setAttribute("opacity","1")
    var currentHeight = parseFloat(w11.getAttribute("height"))
    if(shouldStop){
        return;
    }else{
        if (currentHeight < 56.9) {
            currentHeight += 3;
            w11.setAttribute("height", currentHeight);
            setTimeout(waterFlow11, 100); 
        }
        setTimeout(function() {

            if(valvePositioning.value==1){
                h1Text.textContent = "21.5"
                h2Text.textContent = "21.0"
                h3Text.textContent = "18.0"
                h4Text.textContent = "10.0"
                h5Text.textContent = "13.0"
                h6Text.textContent = "17.0"
                h7Text.textContent = "18.0"

            }
            if(valvePositioning.value==2){
                h1Text.textContent = "21.6"
                h2Text.textContent = "21.0"
                h3Text.textContent = "18.2"
                h4Text.textContent = "10.1"
                h5Text.textContent = "12.8"
                h6Text.textContent = "17.2"
                h7Text.textContent = "17.9"
            }
            document.getElementById("steps").innerHTML = "Take note of the manometer readings, and then close the gate valve using the close gate valve button."
            purzeButton.disabled = false;
        }, 1000);
    }
    
}

function fillTankFront(h){
    // purzeButton.disabled = true;

    waterTankFront.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", h);
    animateElement.setAttribute("dur","4s")

    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    waterTankFront.appendChild(animateElement)

    animateElement.beginElement();


    setTimeout(function() {

        document.getElementById("steps").innerHTML = "Take note of the current time and current height, and then readjust the value of valve positioning to get further readings"
        valvePositioning.disabled=false;
        if(valvePositioning.value==2){
            document.getElementById("steps").innerHTML = "Take note of the current time on the timer."
        }
        // purzeButton.disabled = false;
      }, 4000);

}   

function waterTankBackFlow(y,h){
    if (y > h) {
        y -= 1;
        waterTankBack.setAttribute("points", `245.1,${y} 587.9,${y} 587.9,551.2 245.1,551.2`);
        if(valvePositioning.value==1){
            setTimeout(() => waterTankBackFlow(y,h), 25.5);
        }
        if(valvePositioning.value==2){
            setTimeout(() => waterTankBackFlow(y,h), 27.5);
        }   
    }
}

function waterTankSideFlow(y1,y2,h){
    if (y1 > h) {
        y1 -= 1;
        y2-=1;
        waterTankLeft.setAttribute("points", `245.2,550 187.2,620.6 187.2,${y1} 244.8,${y2}`);
        if(valvePositioning.value==1){
            setTimeout(() => waterTankSideFlow(y1, y2,h), 25.5);
        }
        if(valvePositioning.value==2){
            setTimeout(() => waterTankSideFlow(y1, y2,h), 27.5);
        }  
    }else{
        if(valvePositioning.value==1){
            heightText.textContent = "14.5";
        }
        if(valvePositioning.value==2){
            heightText.textContent = "14.0";
        }   
    }
}

function purzeAction(){
    purzeButton.disabled = true;

    shouldStop=true
    w10.setAttribute("width","0")
    w11.setAttribute("height","0")
   
    // console.log("Value:", valvePositioning.value);

    if(valvePositioning.value==1){
        timer(53,60)
        fillTankFront(110)
        waterTankBackFlow(551.2,441.2)
        waterTankSideFlow(620.6,550,510.6)
        arrowMovement(510.1)
        arrowMovement2(615.7,621.7,627.7, 505.7 )
    }
    if(valvePositioning.value==2){
        timer(52,"50")
        fillTankFront(105)
        waterTankBackFlow(551.2,446.2)
        waterTankSideFlow(620.6,550,515.6)
        arrowMovement(515.1)
        arrowMovement2(615.7,621.7,627.7, 510.7 )
    } 
}

let [milliseconds,seconds] = [0,0];
let int = null;
let timerRunning = true;

function timer(targetsec,targetms){

    if(int!==null){
        clearInterval(int);
    }
    console.log("Timer started with targetsec:", targetsec, "and targetms:", targetms); // Add this line for debugging

    int = setInterval(function() {
        displayTimer(targetsec, targetms); 
    }, 10);
}


function displayTimer(targetsec,targetms){


    if(valvePositioning.value==1){
        if(timerRunning){
            milliseconds+=(310*(5/53));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        // ms=int(ms*10)
        timerSec.textContent = s;
        timerMS.textContent = parseInt(ms);
    }

    if(valvePositioning.value==2){
        if(timerRunning){
            milliseconds+=(300*(5/52));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec.textContent = s;
        timerMS.textContent = ms;
    }

    if(seconds==targetsec ){
        timerRunning = false;
        clearInterval(int);
        timerMS.textContent = targetms;
    }

    
}

function resetTimer() {
    clearInterval(int); 
    [milliseconds, seconds] = [0, 0]; 
    timerRunning = true; 
    timerSec.textContent = "00"; 
    timerMS.textContent = "00";
}

function updateValvePositioning()  {
    shouldStop=false
    displayArrows()
    reset()
    resetTimer()
    var selectedValue = valvePositioning.value;
    valvePositioningText.textContent = selectedValue;

    if(selectedValue == 0){
        document.getElementById("steps").innerHTML = "Select the value of Valve Positioning greater than 0!"
        w4.setAttribute("opacity","0")
    }else{
        waterFlow5() 
        valvePositioning.disabled = true;
    }
}

function reset(){
    m_r.setAttribute("opacity","0")
    m_l.setAttribute("opacity","0")
    m_m.setAttribute("opacity","0")

    wM1.setAttribute("opacity","0")
    wM2.setAttribute("opacity","0")
    wM3.setAttribute("opacity","0")
    wM4.setAttribute("opacity","0")
    wM5.setAttribute("opacity","0")
    wM6.setAttribute("opacity","0")
    wM7.setAttribute("opacity","0")


    // w5.setAttribute("opacity","0")
    w9.setAttribute("height","0")
    w8.setAttribute("opacity","0")
    // w6.setAttribute("height","0")
    // w7.setAttribute("height","0")
    
    arrowRect.setAttribute("y","620.1")
    arrowPol.setAttribute("points","136.4,615.7 144.5,621.7 136.4,627.7 ")
    waterTankBack.setAttribute("points","245.1,551.2 587.9,551.2 587.9,551.2 245.1,551.2")
    waterTankFront.setAttribute("opacity","0")
    waterTankLeft.setAttribute("points","245.2,550 187.2,620.6 187.2,620.6 244.8,550")
    waterTankBase.setAttribute("opacity","0")

    h1Text.textContent = "0.0"
    h2Text.textContent = "0.0"
    h3Text.textContent = "0.0"
    h4Text.textContent = "0.0"
    h5Text.textContent = "0.0"
    h6Text.textContent = "0.0"
    h7Text.textContent = "0.0"

    heightText.textContent = "0.0";

}



function arrowMovement(h){
    var currentY = parseFloat(arrowRect.getAttribute("y"))
    if (currentY > h) {
        currentY -= 1;
        arrowRect.setAttribute("y", currentY);
        if(valvePositioning.value==1){
            setTimeout(() => arrowMovement(h), 25.5); 
        }
        if(valvePositioning.value==2){
            setTimeout(() => arrowMovement(h), 27.5); 
        }  
    }
}

function arrowMovement2(y1,y2,y3,h){

    if (y1 > h) {
        y1 -= 1;
        y2-=1;
        y3-=1;
        arrowPol.setAttribute("points", `136.4,${y1} 144.5,${y2} 136.4,${y3} `);
        if(valvePositioning.value==1){
            setTimeout(() => arrowMovement2(y1,y2,y3,h), 25.5);
        }
        if(valvePositioning.value==2){
            setTimeout(() => arrowMovement2(y1,y2,y3,h), 27.5);
        }  
    }

}