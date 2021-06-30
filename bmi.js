function bmiCalculator(weight, height) {
    var bmi = weight/Math.pow(height,2);
    // console.log(Math.pow(height,2));

    return Math.round(bmi);
}

var bodyMass = bmiCalculator(40.25,1.5);
console.log(bodyMass);