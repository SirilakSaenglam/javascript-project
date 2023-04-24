function activeFunction(name) {
    resetActiveFunction()
    document.getElementById(name).classList.remove("hidden");
}

function resetActiveFunction() {
    document.getElementById('degreeCF').classList.add("hidden");
    document.getElementById('degreeCK').classList.add("hidden");
    document.getElementById('degreeFC').classList.add("hidden");
    document.getElementById('degreeKC').classList.add("hidden");
}

function calculatedegreeCF(){
    let degreesCelsius = parseInt(document.getElementById('degreeCtoF').value);
    let value = ((degreesCelsius  * 1.8) + 32)

    document.getElementById('result').innerHTML = "ผลลัพธ์การแปลงอุณหภูมิ";
    document.getElementById('result1').innerHTML = degreesCelsius+ " °C" + " = " + value.toFixed(2) +" °F";
}

function calculatedegreeCK(){
    let degreesCelsius = parseInt(document.getElementById('degreeCtoK').value);
    let value = degreesCelsius + 273.15;

    document.getElementById('result3').innerHTML = "ผลลัพธ์การแปลงอุณหภูมิ";
    document.getElementById('result4').innerHTML = degreesCelsius+ " °C" + " = " + value.toFixed(2) +" K";
}

function calculatedegreeFC(){
    let degreeFahrenheit = parseInt(document.getElementById('degreeFtoC').value);
    let value = ((degreeFahrenheit - 32 ) / 1.8)

    document.getElementById('result5').innerHTML = "ผลลัพธ์การแปลงอุณหภูมิ";
    document.getElementById('result6').innerHTML = degreeFahrenheit+ " °F" + " = " + value.toFixed(2) +" °C";
}

function calculatedegreeKC(){
    let degreeKelvin = parseInt(document.getElementById('degreeKtoC').value);
    let value = degreeKelvin - 273.15;

    document.getElementById('result7').innerHTML = "ผลลัพธ์การแปลงอุณหภูมิ";
    document.getElementById('result8').innerHTML = degreeKelvin+ " K" + " = " + value.toFixed(2)+" °C";
}

