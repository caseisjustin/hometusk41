import express from 'express'
import phonesRouter from './routes/phones.router.js'
import customersRouter from './routes/customer.router.js'
import salesRouter from './routes/sales.router.js'
import employeesRouter from './routes/employees.router.js'




const app = express();

app.use(express.json());

app.use('/phones', phonesRouter);
app.use('/customers', customersRouter);
app.use('/sales', salesRouter);
app.use('/employees', employeesRouter);
export {app};