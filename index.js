import chalk from "chalk";
const name1="Willy"
const name2="Dwayne"
const name3= "Remi"
const name4= "John"
console.log(chalk.blue("Voici mes collègues : " + 
    chalk.red(name1) + " " + 
    chalk.green(name2) + " " + 
    chalk.magenta(name3) + " " + 
    chalk.grey(name4)
));