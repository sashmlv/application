import 'dotenv/config';
import * as express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';

const HOST = process.env.HOST;
const PORT = + process.env.PORT;
const app  = express();
const data = {
};

app.use('/users', jsonGraphqlExpress(data));
app.listen(PORT, HOST, () => console.log(`users-service listen at: http://${HOST}:${PORT}`));
