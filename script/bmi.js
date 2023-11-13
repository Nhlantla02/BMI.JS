//result = 'overweight';{

//}else if (30<=bmi&&bmi<=34.9){
   // result = 'obese';
//}else if(35<=bmi){
    //result = 'extremely obese'
//

//let h2 = document.createElement("h2");
//
//let t = document.createTextNode(result);
//let b = document.createTextNode('BMI');
//
//let r = document.createTextNode(parseFloat(bmi).toFixed(2));
//
//h2.appendChild(t);
//h2.appendChild(b);
//h2.appendChild(r);
//
//document.body.apppendChild(h2);
//document.body.appendChild(h2);
//document.getElementById("submit").removeEventListener("click" countBmi);
//document.getElementById("submit").removeEventListener("click" validateForm);//

let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');
    let message = document.querySelector('#message');

    if ((height === '') || (height < 0) || (isNaN(height))) {
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please provide a valid weight";
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Display the results
        results.innerHTML = `<span>${bmi}</span>`

        // Display End Message
        if (bmi < 18.5) {
            message.innerHTML = "You are underweight";
        } else if (bmi > 18.5 && bmi < 24.9) {
            message.innerHTML = "You are health"
        } else if (bmi > 24.9) {
            message.innerHTML = "You are Overweight"
        }else if (bmi >30 && bmi <39.9) {
            message.innerHTML = "You are obesity"
        }
    }
});
