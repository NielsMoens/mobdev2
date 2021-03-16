const ClientController = require("../controllers/ClientController");
const NotFoundError = require("../errors/NotFoundError");
const ProjectController = require("../controllers/ProjectController");
const UserController = require("../controllers/Usercontroller");
const {authLocal} = require("../Services/auth.services");

const clientController = new ClientController();
const projectController = new ProjectController();
const userController = new UserController();

const registerRoutes = (app) => {
    // user
    app.post('/register', userController.register);
    app.post('/login', authLocal, userController.login)

    //clients
    app.get('/clients', clientController.getClients);
    app.get('/clients/:id', clientController.getClientById);

    app.patch('/clients/:id', clientController.updateClientById);
    app.post('/clients', clientController.createClients);

    app.delete('/clients/:id', clientController.deleteClientById);

    // projects
    app.get('/projects', projectController.getProjects);
    app.get('/projects/:id', projectController.getProjectById);

    app.post('/projects', projectController.createProject);
    app.patch('/projects/:id', projectController.updateProjectById);

    app.delete('/projects/:id', projectController.deleteProjectById);


    // default 404
    app.use((req, res, next) => {
        next(new NotFoundError());
    });

    // error handler
    app.use(function (err, req, res, next){
        res.status(err.statusCode || 500);
        res.json(err);
    });
};

module.exports = {
    registerRoutes
};