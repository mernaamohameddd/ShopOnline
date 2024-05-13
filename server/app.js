const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
const cors=require('cors');

app.use(cors({
    origin: '*'
}));

const dotenv = require('dotenv');
dotenv.config(
    {
        path: './config/.env'
    }
);

const PORT_NUMBER = process.env.PORT_NUMBER ||3000;
const initiateDBConnection = require('./config/db');

const registerRouter = require('./routers/productRouter');
app.use('/product', registerRouter);


const authRouter = require('./routers/auth');
app.use('/auth', authRouter);



app.listen(PORT_NUMBER, async () => {
    console.log(`Server started and listening to port ${PORT_NUMBER}.`);
    await initiateDBConnection();
});



