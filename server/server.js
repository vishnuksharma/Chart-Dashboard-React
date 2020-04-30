const jsonServer = require('json-server');
const server = jsonServer.create();
const chartController = require('./controllers/chartController');

// const router = jsonServer.router('./database/db.json');
const db = require('./database/db.json')

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/getChartType', chartController.getChartType );
server.get('/api/getChartData', chartController.getChartData );
server.get('/api/getChartData/:dataset', chartController.getChartData );


// console.log('API Server Running:', `http://localhost:${port}`)

server.listen(port, 
    () => {
        console.log('JSON Server is running', `http://localhost:${port}`)
    });