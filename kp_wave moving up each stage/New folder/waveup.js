var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("feet").innerHTML = clicks;
    var magicNumber = 3;
    var numberofClicks = clicks
    var iterations = numberofClicks % magicNumber;
    console.log (iterations);

    switch (iterations) {
        case 1:
            console.log ("wave_stage_1");
            var transition = document.getElementById("waves");
            transition.setAttribute("style", "transform: translateY(-200px); transition-duration: 3s");
            break;
        case 2:
            console.log ("wave_state_2");
            var transition = document.getElementById("waves");
            transition.setAttribute("style", "transform: translateY(-300px); transition-duration: 3s");
            break;
        case 0:
            console.log ("write_stage_0");
            var transition = document.getElementById("waves");
            transition.setAttribute("style", "transform: translateY(0px); transition-duration: 3s");
            break;
        }

    }

