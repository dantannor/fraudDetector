const Db = require('./db')

module.exports = class RuleEng {
    constructor(){
        const db = new Db()
        this.db = db
    }

    evaluate(data){
        console.log('Evaluating data')

        let validCount = 0
        let invalidCount = 0

        const rules = this.db.getRules()

        for (const t of data) {
            let valid = true
            for (const r of rules) {
                if (r(t)) {
                    console.log(`${t.id}: INVALID`)
                    invalidCount++

                    valid = false
                    break
                }
            }  

            if(valid){
                console.log(`${t.id}: VALID`)
                validCount++
            }
        }

        console.log(`***** *****`)
        console.log(`Valid Count: ${validCount}`)
        console.log(`Invalid Count: ${invalidCount}`)
        console.log(`***** *****`)
    }
}