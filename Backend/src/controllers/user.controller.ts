import User from '../models/User';
import {Request, Response} from 'express'; 

export async function register(req: Request, res: Response){
    //Introducimos un usuario en la BBDD
    //nombre, apellidos, fecha de nacimiento, profesión, vacuna aplicada
    const {nombre, apellidos, fechanacimiento, profesion, vacuna} = req.body;
    console.log("Se quiere añadir a ", nombre);
    console.log("searching...");
    //comprobar que el usuario exista
    const usr_compare = await User.findOne({'nombre': nombre});
    //si no existe
    if(!usr_compare){
        const new_user = new User({
            nombre: nombre,
            apellidos: apellidos,
            fechanacimiento: fechanacimiento,
            profesion: profesion,
            vacuna: vacuna
        });
        await new_user.save();
        res.status(201);
        return res.json(new_user.toJSON());
    }else{
        return res.status(400);
    }
}

export async function getUsers(req: Request, res: Response) {
    //Hacemos una lista de los usuarios
    let users = await User.find();
    res.status(201).json(users);
}

export async function editUsers(req: Request, res: Response) {
    //Editamos un usuario
    const {nombre, apellidos, fechanacimiento, profesion, vacuna} = req.body;
    console.log("Se quiere modificar a ", nombre);
    //Vemos que el usuario existe
    const usr_compare = await User.findOne({'nombre': nombre});
    console.log(usr_compare);

    await User.findOneAndUpdate(
        { nombre: nombre },
        {
            nombre: nombre,
            apellidos: apellidos,
            fechanacimiento: fechanacimiento,
            profesion: profesion,
            vacuna: vacuna 
        },
        { new: true }
    )

    const updatedUser = new User({
        nombre: nombre,
        apellidos: apellidos,
        fechanacimiento: fechanacimiento,
        profesion: profesion,
        vacuna: vacuna
    });

    res.status(201);
    return res.json(updatedUser.toJSON());




    
}