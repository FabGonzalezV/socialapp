import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Template from '../template.mjs'
import {default as  userRoutes} from './routes/user.routes.mjs'
import {default as authRoutes} from './routes/auth.routes.mjs'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(cors());

// app.get('/', (req, res) => {
//     res.status(200).send(Template())
// })
app.use('/', userRoutes)
app.use('/', authRoutes)

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})
export default app;

