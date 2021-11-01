const stream = require("stream")

class FizzBuzz extends stream.Transform {
    constructor() {
        super();

        this.count = 0;
    }

    _transform(chunk, encoding, done) {
        chunk.toString()
            .split("\n")
            .forEach(line => {
                this.count++

                if (this.count === 0) {
                    this.push(line)
                } else if (this.count % 15 === 0) {
                    this.push("FizzBuzz")
                } else if (this.count % 3 === 0) {
                    this.push("Fizz")
                } else if (this.count % 5 === 0) {
                    this.push("Buzz")
                } else {
                    this.push(line)
                }

                this.push("\n")
            })

        done()
    }
}

module.exports = new FizzBuzz()