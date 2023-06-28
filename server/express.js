import compression from 'compression';
import helmet from 'helmet';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.cookieParser());
app.use(helmet());
app.use(compression());
app.use(cors());
export default app;

