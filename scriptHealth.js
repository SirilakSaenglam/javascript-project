function activeFunction(name) {
    resetActiveFunction()
    document.getElementById(name).classList.remove("hidden");
}

function resetActiveFunction() {
    document.getElementById('bmi').classList.add("hidden");
    document.getElementById('bmr').classList.add("hidden");
    // document.getElementById('fat').classList.add("hidden");
}


function calculateBMI() {
    // console.log(document.getElementById('weight'))
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100;
    let bmi = weight / (height * height);
    document.getElementById('result').innerHTML = "BMI " + bmi.toFixed(2);
    if (bmi <= 18.5) {
        console.log("ผอมเกินไป");
        document.getElementById('result1').innerHTML = "คุณมี น้ำหนักน้อยกว่าปกติ (น้อยกว่า 18.5)"
    }
    else if (bmi <= 24) {
        console.log("เหมาะสม");
        document.getElementById('result1').innerHTML = "คุณมี น้ำหนักปกติ (ระหว่าง 18.6 - 24)"
    }
    else if (bmi <= 29.9) {
        console.log("อ้วน");
        document.getElementById('result1').innerHTML = "คุณมี น้ำหนักเกินปกติ (ระหว่าง 25 - 29.9)"
    }
    else {
        console.log("อ้วนมาก");
        document.getElementById('result1').innerHTML = "คุณมี น้ำหนักเกินปกติมาก (30.0 ขึ้นไป)"
    }
}

function calculateBMR() {
    let activity = parseFloat(document.getElementById('activity').value)
    let sex = document.getElementById('sex').value
    let age = document.getElementById('age').value
    let weight = document.getElementById('weightBMR').value;
    let height = document.getElementById('heightBMR').value;
    var REE = ""
    if (sex == "female") {
        REE = (10 * weight) + (6.25 * height) - (5 * age) - 161
    }
    else {
        REE = (10 * weight) + (6.25 * height) - (5 * age) + 5
    }

    let TDEE = activity * REE

    document.getElementById('result2').innerHTML = "BMR พลังงานที่จำเป็นพื้นฐานในการมีชีวิต" + " " + REE + " " + "Kilocalories"
    document.getElementById('result3').innerHTML = "TDEE พลังงานที่คุณใช้ในแต่ละวัน" + " " + TDEE + " " + "Kilocalories"
}