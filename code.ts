#! /usr/bin/env node
import inquirer from "inquirer"
 import chalk from "chalk"
 

let convertion = {
    "PKR": {
    "USD": 0.0036101083032491,
    "GBP": 0.0037,
    "PKR": 1
    },
    "GBP": {
    "USD": 1.21,
    "PKR": 271.79,
    "GBP": 1
    },
    "USD": {
    "PKR": 277,
    "GBD": 0.83,
    "USD": 1
    }
}
  const answer: {
  from: "PKR"| "USD" | "GBP" ,
  to:  "PKR"| "USD" | "GBP" ,
  amount: any
  } = await inquirer.prompt([
    {
        type: "list" ,
        name: "from" ,
        choices: ["PKR", "USD", "GBP"],
        message: "select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "select your coverter currency: " 
    },
    {
        type: "number",
        name: "amount",
        message: "enter your convertion amount: "

        }
      ]);
      const {from, to, amount}= answer
       if(from && to && amount){
        let result = convertion [from][to]* amount
        console.log(`Your result from ${from} to ${to} is ${result}`)
       }else{
        console.log("Invalid input")
       }