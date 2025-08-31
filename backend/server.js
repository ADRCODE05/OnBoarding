import app from './app.js'
import dotenv from 'dotenv'

dotenv.config();

const API = process.env.PORT || 4000;


app.listen(API, () => {
    console.log(`🚀 backend on http://localhost:${API}/api/v1`);
    console.log(`🚀 Swagger Api corriendo en http://localhost:${API}/api/docs`);
    console.log(`🚀 Aplicacion web corriendo en http://localhost:${API}/index.html`);
})

