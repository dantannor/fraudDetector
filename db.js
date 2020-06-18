module.exports = class Db{
    constructor(){
        this.db = [(t)=>{
            return t.total_price > 100 
            && t.email.indexOf('@gmail.com') > -1
        }]
    }

    getRules(){
        console.log('Getting rules')

        return this.db
    }
}