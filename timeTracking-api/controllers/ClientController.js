const {
    Client
} = require('../modles/Client')

class ClientController {
    getClients(req, res, next) {

    }
    createClients(req, res, next) {
        console.log(req.body);
        return req.json(req.body)
    }
}
module.exports = ClientController;