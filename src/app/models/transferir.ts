export class Transferir {
    _id?: number;
    destinatario: string;
    monto: number;

    constructor(destinatario: string, monto: number){
        this.destinatario = destinatario;
        this.monto = monto;
    }
}