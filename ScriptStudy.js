function activeFunction(name) {
    resetActiveFunction()
    document.getElementById(name).classList.remove("hidden");
}

function resetActiveFunction() {
    document.getElementById('grade').classList.add("hidden");
}

function calculateGrade() {
    // let score = parseInt(document.getElementById('score').value);
    let score = parseInt(document.getElementById('score').value);
    if (score >= 80) {
        console.log("A");
        document.getElementById("result").innerHTML = "ยินดีด้วย"
        document.getElementById("result1").innerHTML = "คุณได้เกรด A"
    }
    else if (score >= 70) {
        document.getElementById("result").innerHTML = "ยินดีด้วย"
        document.getElementById("result1").innerHTML = "คุณได้เกรด B"
    }
    else if (score >= 60) {
        document.getElementById("result").innerHTML = "ยินดีด้วย"
        document.getElementById("result1").innerHTML = "คุณได้เกรด C"
    }
    else if (score >= 50) {
        document.getElementById("result").innerHTML = "ยินดีด้วย"
        document.getElementById("result1").innerHTML = "คุณได้เกรด D"
    }
    else if (score < 50) {
        document.getElementById("result").innerHTML = "ยินดีด้วย"
        document.getElementById("result1").innerHTML = "คุณได้เกรด F"
    }
}