function activeFunction(name) {
    resetActiveFunction()
    document.getElementById(name).classList.remove("hidden");
}

function resetActiveFunction() {
    document.getElementById('credit').classList.add("hidden");
}

function loanCalcuretor(){
    // รับข้อมูลเริ่มต้น
    let loanAmount = parseInt(document.getElementById('loanAmount').value);
    let loanPeriod = parseInt(document.getElementById('loanPeriod').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100; // อัตราดอกเบี้ยตามเงื่อนไขของธนาคารธอส
    
    // คำนวณจำนวนงวดผ่อนชำระ
    let totalPayments = loanPeriod * 12;
    let monthlyInterestRate = interestRate / 12;
    let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - (1 + monthlyInterestRate) ** (-totalPayments));
    
    // คำนวณค่าใช้จ่ายทั้งหมด
    let totalCost = monthlyPayment * totalPayments;
    let totalInterest = totalCost - loanAmount;
    
    // แสดงผลลัพธ์
    // console.log("งวดผ่อนชำระทั้งหมด:", totalPayments);
    // console.log("ค่างวดผ่อนชำระทุกงวด:", monthlyPayment.toFixed(2));
    // console.log("ค่าใช้จ่ายทั้งหมด:", totalCost.toFixed(2));
    // console.log("ดอกเบี้ยทั้งหมด:", totalInterest.toFixed(2));
    document.getElementById('result').innerHTML = "ผลลัพธ์การคำนวณ";
    document.getElementById('result1').innerHTML = "งวดผ่อนชำระทั้งหมด" + " : " + totalPayments + " เดือน";
    document.getElementById('result2').innerHTML = "ค่างวดผ่อนชำระทุกงวด"  + " : " + monthlyPayment.toFixed(2) + " บาท";
    document.getElementById('result3').innerHTML = "ค่าใช้จ่ายทั้งหมด" + " : " + totalCost.toFixed(2)+ " บาท";
    document.getElementById('result4').innerHTML = "ดอกเบี้ยทั้งหมด" + " : " + totalInterest.toFixed(2)+ " บาท";
}

