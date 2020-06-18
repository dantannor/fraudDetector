const Service = require('./service')

try {
    const service = new Service()

    console.log('**** Starting Fraud Detector ****')

    service.run()
} catch (e) {
    console.log(e)  
}