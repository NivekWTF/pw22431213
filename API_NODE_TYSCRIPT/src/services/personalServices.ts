import { Personal,PersonalNuevo } from '../typesPersonal';
import mysql from 'mysql2/promise';
import { personaSchema } from '../schema/personal.schema';


const conexion = mysql.createPool({
    host: "localhost",
    user: "pw",
    password: "1234",
    database: "pw2024",
    multipleStatements: false
});

export const obtienePersonal = async () => {
    try{
        const [results] = await conexion.query('SELECT * FROM personal');
        return results;
    }
    catch(error){
        return {error: "No se pudo obtener el personal"};
    }
}

export const encuentraPersonal = async (id: number) => {
    try{
        const identificador = {id: id}
        const validacion = personaSchema.safeParse(identificador);

        if (!validacion.success) {
            return {error: validacion.error};
        }

        const [results] = await conexion.query('SELECT * FROM personal WHERE id = ? LIMIT 1', id);
        return results;
    }
    catch(error){
        return {error: "No se pudo obtener el personal"};
    }    
}

export const encuentraPersonalTelefono = async (telefono: string) => {
    try{
        // const consulta = `SELECT * FROM personal WHERE telefono = ${telefono} AND estatus = 1`;
        // const [results] = await conexion.query(consulta);
        const tel = {telefono: telefono}
        const validacion = personaSchema.safeParse(tel);
        
        if (!validacion.success) {
            return {error: validacion.error};
        }
        const [results] = await conexion.query('SELECT * FROM personal WHERE telefono = ? AND estatus = 1', telefono);
        return results;
    }
    catch(error){
        return {error: "No se pudo obtener el personal"};
    }    
}

export const agregarPersonal = async (nuevo: PersonalNuevo) => {
    try {
        const validacion = personaSchema.safeParse(nuevo);
        if (!validacion.success) {
            return {error: validacion.error};
        }
        const [results] = await conexion.query('INSERT INTO personal (nombre, direccion, telefono, estatus) VALUES (?, ?, ?, ?)', 
            [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]);

        return results;
    } catch (error) {
        return {error: "No se pudo insertar el personal"};
    }
}

export const modificarPersonal = async (modificado: Personal) => {
    try {
        const [results] = await conexion.query('UPDATE personal SET nombre = ?, direccion = ?, telefono = ?, estatus = ? WHERE id = ?', 
            [modificado.nombre, modificado.direccion, modificado.telefono, modificado.estatus, modificado.id]);

        return results;
    } catch (error) {
        return {error: "No se pudo actualizar el personal"};
    }
}

export const borrarPersonal = async (id: number) => {
    try {
        const [results] = await conexion.query('DELETE FROM personal WHERE id = ?', id);

        return results;
    } catch (error) {
        return {error: "No se pudo eliminar el personal"};
    }
}
