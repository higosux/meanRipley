export class Destinatario {
    _id?: number;
    nombre: string;
    rut: string;
    correo: string;
    telefono: number;
    banco: string;
    tipoCuenta: string;
    numeroCuenta: number;

    constructor(nombre: string, rut: string, correo: string, telefono: number, banco: string, tipoCuenta: string,
        numeroCuenta: number
        ){
        this.nombre = nombre;
        this.rut = rut;
        this.correo = correo;
        this.telefono = telefono;
        this.banco = banco;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
}