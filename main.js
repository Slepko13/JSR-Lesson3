// let str1, str2;

// str1.toLowerCase() === str2.toLowerCase();
// let str3 = "Морква, картопля, буряк";
// str3.split(",");

// confirm();
// let number1 = +(Math.ceil(Math.random() * 6) + 0.0001).toFixed();
// let number2 = +(Math.ceil(Math.random() * 6) + 0.0001).toFixed();
// if (number1 == 6 && number2 == 6) {
//     alert(`Це джекпот`);
// }

// let num1 = +prompt(`Num 1`);
// let num2 = +prompt(`Num 2`);
// let a, b;
// if (num1 < num2) {
//     a = num1; b = num2;
// } else {
//     a = num2; b = num1;
// }

// let random = a + Math.round(Math.random() * (b - a));

// let array = [
//     {
//         age, name, hobby: []
//     },
//     {
//         age, name, hobby: []
//     }, {
//         age, name, hobby: []
//     }
// ]

//Homework

function convert() {
    let dollar = 27.5;
    let euro = 29.5;
    let oil = 28.5 * dollar;
    let gold = 1575.8;
    let money = prompt(`Input the amount of funds `);


    while (money === null || money === undefined || money == false) {
        alert(`Wrong value: ${money}. Input correct value`);
        money = +prompt(`Input the amount of funds `);
    }

    let moneyInDollars = +(money / dollar).toFixed(2);
    let moneyInEuro = +(money / euro).toFixed(2);
    let moneyInOil = +(money / oil).toFixed(3);
    let moneyInGold = +(money / gold).toFixed(3);

    alert(`You can get:   ${moneyInDollars} dollars 
                     or ${moneyInEuro} euro 
                     or ${moneyInOil} barrels of oil
                     or ${moneyInGold} grams of gold`)
}

const order = function () {
    let money = +prompt(`Input the order value.`);
    if (money < 500) {
        money *= 0.99;
        alert(`You will pay ${money}.`);
    } else if (money > 1000) {
        money *= 0.9;
        gift = 200;
        alert(`You will pay ${money} and you will get gift ${gift} grn for your next visit.`);
    } else {
        money *= 0.95;
        alert(`You will pay ${money}.`);
    }


}

let test = () => {
    let result = +confirm(`London is a capital?`);
    result += +!confirm(`Geneva is a capital?`);
    result += +!confirm(`New York is a capital?`);
    result += +!confirm(`Sydney is a capital?`);
    result += +confirm(`Paris is a capital?`);
    if (result === 5) {
        result++;
    }
    if (result == 1) {
        alert(`You get ${result} point.`);
    } else {
        alert(`You get ${result} points`);
    }

}

function number() {
    let number = (+prompt(`Input you number`)).toString();
    let same = 0;
    for (let i = 0; i < number.length - 1; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] == number[j]) {
                same++;
            }
        }
    }

    if (same) {
        alert(`You have the same  digits`);
    } else {
        alert(`You have not the same  digits`);
    }

}

const keyboard = () => {
    let chooseKey = prompt(`Press any key from "1" to "=" on your keyboard`);
    let result;
    // switch (chooseKey) {
    //     case "1":
    //         result = "!";
    //         break;
    //     case "2":
    //         result = "@";
    //         break;
    //     case "3":
    //         result = "$";
    //         break;
    //     case "5":
    //         result = "%";
    //     case "6":
    //         result = "^";
    //         break;
    //     case "7":
    //         result = "&";
    //         break;
    //     case "8":
    //         result = "*";
    //         break;
    //     case "9":
    //         result = "(";
    //         break;
    //     case "0":
    //         result = ")";
    //         break;
    //     case "-":
    //         result = "_";
    //         break;
    //     case "=":
    //         result = "+";
    //         break;
    //     default:
    //         result = "wrong value";
    // }
    // alert(`You get : ${result}.`);

    let str1 = "1234567890-=";
    let str2 = "!@#$%^&*()_+";
    for (let i = 0; i < str1.length; i++) {
        if (chooseKey == str1[i]) {
            result = str2[i];
        } else {
            result = "wrong value";
        }
    }
    alert(`You get : ${result}.`);
}