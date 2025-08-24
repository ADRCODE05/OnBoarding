import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import useRouter from './src/routes/routes.js'

const app = express()


// LEER ARCHIVO .JSON   
const swaggerDocument = JSON.parse(fs.readFileSync('./src/swagger/swagger.json', 'utf-8'))

// SWAGGER DOCS
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


// MIDDLEWARE
app.use(cors());
app.use(express.json())




// MIS RUTAS
app.use('/api/v1/', useRouter)


export default app;