//Modelo de datos bd de la persona
export interface Ipersona {
    id: number,
    name: string,
    apellidos: string
}

//Modelo de datos para enviarlo a la bd (el id se autoincrementara)
export interface IaddPersona {
    name: string,
    apellidos: string
}