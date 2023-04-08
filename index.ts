#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

let operaterSelection  = await inquirer.prompt([

    {
        name:"operation",
        type:"list",
        message:"which operation uh want to perform?",
        choices:["+" , "-" , "*" , "/"]
    }
])
if(operaterSelection.operation == "+"){
    let num = await inquirer.prompt([
        {
            name:"num1",
            type:"number",
            message:"Enter your first number"
        },
        {
            name:"num2",
            type:"number",
            message:"Enter your second number"
        }
    ])
    let add = num.num1 + num.num2
    console.log(add);
}else if(operaterSelection.operation == "-"){
    let num = await inquirer.prompt([
        {
            name:"num1",
            type:"number",
            message:"Enter your first number"
        },
        {
            name:"num2",
            type:"number",
            message:"Enter your second number"
        }
    ])
    let sub = num.num1 - num.num2
    console.log(sub);
}
else if(operaterSelection.operation == "/"){
    let num = await inquirer.prompt([
        {
            name:"num1",
            type:"number",
            message:"Enter your first number"
        },
        {
            name:"num2",
            type:"number",
            message:"Enter your second number"
        }
    ])
    let divide = num.num1 / num.num2
    console.log(divide);
}else if(operaterSelection.operation == "*"){
    let num = await inquirer.prompt([
        {
            name:"num1",
            type:"number",
            message:"Enter your first number"
        },
        {
            name:"num2",
            type:"number",
            message:"Enter your second number"
        }
    ])
    let multiply = num.num1 * num.num2
    console.log(multiply);
}