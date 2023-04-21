import * as express from 'express'; 
import * as bodyParser  from 'body-parser';
import todosRoutes from './routes/todos';

const app = express();

app.use(todosRoutes);
app.use(bodyParser.json());

app.listen(3000);
