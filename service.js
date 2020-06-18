const RuleEng = require('./ruleEng')
const Reader = require('./reader')

module.exports = class Service {
    constructor(){
        this.ruleEng = new RuleEng()
        this.reader = new Reader()
    }

    run(){
        console.log('Running service')
        
        const data = this.reader.read()
        this.ruleEng.evaluate(data)
    }
}