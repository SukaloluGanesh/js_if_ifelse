// question 1 

// let a = prompt("enter the Amount : ");

// if(a<=250000){
//     console.log("no tax");
// }else if (a>250000 && a<=500000){
//    let b  = (15/100)*a;
//    console.log(`15% tax amount to be paid ${b}`)
// }else if(a>500000 && a<=1000000){
//     let c = (20/100)*a+12500;
//     console.log(`20% tax amount to be paid ${c}`)
// }else if (a>1000000){
//     let d = (30/100)*a + 112500;
//     console.log(`30% tax amount to be paid ${d} `)
// }else{
//     console.log("Enter the correct details!")
// }


// question 2 


// let weight = +prompt("Enter the weight : ");
// let destination;
// if(weight <= 0 ){
// console.log("Enter the valid value  ")
// }else{
//     destination = prompt("Enter the destination : ").toLowerCase();
// }

// if (weight && destination){
//     if (weight <= 1){
//         if (destination == "local"){
//             console.log(`shipping charges $5`)
//         }else if(destination == "national"){
//             console.log(`shipping charges $8`)
//         }else if (destination == "international"){
//             console.log(`shipping charges $15`)
//         }else{
//             console.log (`enter a valid destination`)
//         }
//     }
// }

// if (weight > 1 && weight <= 5 &&destination){
//     if (weight > 1 && weight<= 5){
//         if (destination == "local"){
//             console.log(`shipping charges $10`)
//         }else if(destination == "national"){
//             console.log(`shipping charges $15`)
//         }else if (destination == "international"){
//             console.log(`shipping charges $30`)
//         }else{
//             console.log (`enter a valid destination`)
//         }
//     }
// }

// if (weight > 5 && weight <= 10 && destination){
//     if (weight > 5 && weight<= 10){
//         if (destination == "local"){
//             console.log(`shipping charges $20`)
//         }else if(destination == "national"){
//             console.log(`shipping charges $25`)
//         }else if (destination == "international"){
//             console.log(`shipping charges $50`)
//         }else{
//             console.log (`enter a valid destination`)
//         }
//     }
// }

// if (weight > 10 && destination){
//     if (weight > 10){
//         if (destination == "local"){
//             console.log(`shipping charges $30`)
//         }else if(destination == "national"){
//             console.log(`shipping charges $35`)
//         }else if (destination == "international"){
//             console.log(`shipping charges $70`)
//         }else{
//             console.log (`enter a valid destination`)
//         }
//     }
// }



//  question 3 

// let units  =  +prompt("Enter the number of units consumed : ");
 
// let moreUnits;
// let extra;
// let totalBill;
// let extra1;
// if (units <= 100 &&  units > 0){
//     units  = units * 1 ;
//     console.log (`Total electricity bill amount : ${units}`);
// }else if(units > 100 && units <= 300){
//     moreUnits = units - 100;
//     moreUnits  = moreUnits * 1.5;
//      totalBill = moreUnits + units
//      console.log(`Total electricity bill amount : ${totalBill}`)
//     } else if(units > 300){
//            moreUnits = 100;
//            extra = 200;
//            extra1 = 200*1.5;
//          totalBill = units - moreUnits - extra;
//          console.log(`Total electricity bill amount : ${(totalBill * 2 + extra1 + moreUnits)}`); 
//     }else{
//         console.log("enter a valid units");
//     }





