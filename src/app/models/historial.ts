export class Historial {
    _id?: number;
    nombre: string;
    rut: string;
    correo: string;
    telefono: number;
    banco: string;
    tipoCuenta: string;
    numeroCuenta: number;
    monto: number;

    constructor(nombre: string, rut: string, correo: string, telefono: number, banco: string, tipoCuenta: string,
        numeroCuenta: number, monto: number
        ){
        this.nombre = nombre;
        this.rut = rut;
        this.correo = correo;
        this.telefono = telefono;
        this.banco = banco;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
        this.monto = monto;
    }
}