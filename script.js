var john = {
    name: 'John',
    billValues: [124, 48, 268, 180, 42],
    tipValues: [],
    finalValues: [],
    tipCalculator: function() {
        for (var i = 0; i <= this.billValues.length - 1; i++) { // Loop over the billValues array
            if (this.billValues[i] >= 0 && this.billValues[i] < 100) {
                this.tipValues.push(this.billValues[i] * 0.2); // Calculate the tip value and push it to the tipValues array
                this.finalValues.push(this.billValues[i] + this.tipValues[(this.tipValues.length - 1)]); // Push the total amount to the finalValues array
            } else if (this.billValues[i] >= 100 && this.billValues[i] < 300) {
                this.tipValues.push(this.billValues[i] * 0.10);
                this.finalValues.push(this.billValues[i] + this.tipValues[(this.tipValues.length - 1)]);
            } else {
                this.tipValues.push(this.billValues[i] * 0.25);
                this.finalValues.push(this.billValues[i] + this.tipValues[(this.tipValues.length - 1)]);
        }
        }
        console.log(this.tipValues, this.finalValues);
    }
}

var mark = {
    name: 'Mark',
    billValues: [77, 375, 110, 45],
    tipValues: [],
    finalValues: [],
    tipCalculator: function() {
        for (var i = 0; i <= this.billValues.length - 1; i++) {
            if (this.billValues[i] >= 0 && this.billValues[i] < 50) {
                this.tipValues.push(this.billValues[i] * 0.2);
                this.finalValues.push(this.billValues[i] + this.tipValues[(this.tipValues.length - 1)]);
            } else if (this.billValues[i] >= 50 && this.billValues[i] < 200) {
                this.tipValues.push(this.billValues[i] * 0.15);
                this.finalValues.push(this.billValues[i] + this.tipValues[(this.tipValues.length - 1)]);
            } else {
                this.tipValues.push(this.billValues[i] * 0.10);
                this.finalValues.push(this.billValues[i] + this.tipValues[(this.tipValues.length - 1)]);
        }
        }
        console.log(this.tipValues, this.finalValues);
    }
}

john.tipCalculator(); // Run the calculator so the tipValues and finalValues are populated with actual amounts
mark.tipCalculator();

var tipArray1Sum = 0; // To find the sum, we start at 0 and increase this using the averageTips function
var tipArray2Sum = 0;

function averageTips(tipArray1, tipArray2) {
    for (var i = 0; i <= tipArray1.length - 1; i++) { // Loop over the first array given, sum all the amounts within the array and push it to tipArray1Sum
        tipArray1Sum += tipArray1[i];
    }
    for (var i = 0; i <= tipArray2.length - 1; i++) {
        tipArray2Sum += tipArray2[i];
    }
    if (tipArray1Sum / tipArray1.length > tipArray2Sum / tipArray2.length) { // Calculate the average and log to the console who paid more in tips on average
        console.log(john.name + ' and his family\'s tips were higher!');
    } else if (tipArray1Sum / tipArray1.length < tipArray2Sum / tipArray2.length) {
        console.log(mark.name + ' and his family\'s average tips were higher!'); 
    } else {
        console.log('Their average tips were the same!')
    }
}

averageTips(john.tipValues, mark.tipValues); // Run the calculator
