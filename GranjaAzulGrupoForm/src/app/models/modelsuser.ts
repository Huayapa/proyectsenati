/*
Tipar que el genero solo admita H/M
*/
export type Igenero = "hombre" | "mujer";
/*
Crear un modelo de datos para el usuario
*/
export interface Iuser {
    username: string;
    password: string;
    dateNac: Date;
    genero: Igenero;
}
/*
Crear un modelo de datos para inicio sesion
*/
export interface IloginUser {
    username: string;
    password: string;
}
/*
Crear un modelo de datos rcuperar y mostrar contraseña
*/
export interface Irecover {
    username: string;
    dateNac: Date;
    genero: Igenero;
}