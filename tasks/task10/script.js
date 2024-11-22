    let P = 1000;
    let r = 5;
    let n = 4;
    let t = 3;

    r = r / 100;

    // formula
    let A = P * Math.pow((1 + r / n), n * t);
    // let A = P * (1 + r / n)**(n*t);
    console.log(A);

    // Calculate compound interest (CI)
    let compoundInterest = A - P;


    //display
    console.log(`The compound interest after ${t} years is: ${compoundInterest}`);