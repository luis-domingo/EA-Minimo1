//MAIN - Hacer la conexion
import { startConnection } from './database';
import app from './app';

async function main(){
    //BBDD conexion
    startConnection();
    //configurar la app
    const PORT = app.get('PORT');
    await app.listen(PORT);

    //run la app
    console.log('LISTENING @ ', PORT);

    
}

main();