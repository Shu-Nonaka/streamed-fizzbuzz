const FizzBuzzStream = require("./fizzbuzz")

process.stdin.pipe(FizzBuzzStream).pipe(process.stdout)
