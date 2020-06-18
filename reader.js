const data = require('./riskified_orders (1).json')

module.exports = class Reader {
    read(){
        console.log('Reading data')
        
        return data;
    }
}