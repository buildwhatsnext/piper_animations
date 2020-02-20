window.addEventListener('load', handleStateChanges);

function handleStateChanges(event) {
    const interval = 2000;
    setInterval(changeColor, interval);
    setInterval(changeZIndex, interval);
}

function changeColor() {    

    // every 2 seconds,
    console.log('Color changed!');
}

function changeZIndex() {
    // change the color of ALL objects at once

    // change Zindex

    // every 2 seconds

    // change the zIndex
    console.log('Changed ZIndex!');
}


// var clicks = 0;
// function onClick() {
//     clicks += 1;
//     // document.getElementById("feet").innerHTML = clicks;
//     var magicNumber = 3;
//     var numberofClicks = clicks
//     var iterations = numberofClicks % magicNumber;
//     console.log (iterations);

//     switch (iterations) {
//         case 1:
//             console.log ("wave_stage_1");
//             var transition = document.getElementById("waves");
//             transition.setAttribute("style", "transform: translateY(-150px); transition-duration: 3s");
//             var colorchange = document.getElementById("feet");
//             colorchange.setAttribute("style", "stroke: #5784FB; transition-duration: 3s");
//             break;
//         case 2:
//             console.log ("wave_state_2");
//             var transition = document.getElementById("waves");
//             transition.setAttribute("style", "transform: translateY(-300px); transition-duration: 3s");
//             var colorchange = document.getElementById("feet");
//             colorchange.setAttribute("style", "stroke: white; transition-duration: 3s");
//             break;
//         case 0:
//             console.log ("write_stage_0");
//             var transition = document.getElementById("waves");
//             transition.setAttribute("style", "transform: translateY(0px); transition-duration: 3s");
//             var colorchange = document.getElementById("feet");
//             colorchange.setAttribute("style", "stroke: #8B67FB; transition-duration: 3s");
//             break;
//         }

//     }
