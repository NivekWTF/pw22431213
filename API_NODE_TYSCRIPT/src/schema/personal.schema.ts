import {z} from 'zod';

// Validaciones con Zod - construir schema
export const personaSchema = z.object({
    nombre: z.string().min(2, "Mínimo 10 caracteres").max(200, "Maximo 200 caracteres"),
    direccion: z.string().min(2).max(300),
    telefono: z.string().min(10).max(15),
    estatus: z.number().int().positive()
    // estatus: z.number().int().positive().min(1).max(2, "Los valores correctos son 1 y 2")
}).refine(data => data.direccion == "TEC DE CULIACAN", {
    message: "La dirección debe ser del TEC DE CULIACAN",
    path: ["direccion"]
}).refine(data => data.estatus <=2, {
    message: "Los valores correctos son 1(vigente) y 2(baja)",
    path: ["estatus"]
})