import {Document, Schema, model} from 'mongoose';

//nombre, apellidos, fecha de nacimiento, profesión, vacuna aplicada
const schema = new Schema({
    nombre: String,
    apellidos: String,
    fechanacimiento: String,
    profesion: String,
    vacuna: String
});

interface IUser extends Document{
    nombre: String;
    apellidos: String;
    fechanacimiento: String;
    profesion: String;
    vacuna: String;
}

export default model<IUser>('User', schema);
