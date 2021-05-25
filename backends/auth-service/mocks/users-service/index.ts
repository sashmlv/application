import * as dotenv from 'dotenv'
import * as express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';

const env  = dotenv.config({path: `${__dirname}/.env`}).parsed;
const HOST = env.HOST;
const PORT = Number(env.PORT);
const app  = express();
const data = {
};

app.use('/users', jsonGraphqlExpress(data));
app.listen(
   PORT,
   HOST,
   () => console.log(`users-service listen at: http://${HOST}:${PORT}`)
);
