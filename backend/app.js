import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
import useRouter from './src/routes/routes.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()

// MIDDLEWARE
app.use(cors());
app.use(express.json())

// Servir frontend (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../frontend')))


// LEER ARCHIVO SWAGERR .JSON   
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'swagger', 'swagger.json'), 'utf-8'))


// SWAGGER DOCS
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) 


// MIS RUTAS
app.use('/api/v1', useRouter)


app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'))
})


export default app;

