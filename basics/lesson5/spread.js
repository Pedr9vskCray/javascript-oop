import { validate, typedef } from "bycontract";



function abrirConta(nome, id_conta){
    validate(arguments, ["String", "Number"]);
    let default_var = {
        "saldo_inicial": 0.00,
        "limite_cheque_especial": 0.00,
        "taxa_remuneração_saldo": 0.01
    }

    let conta = {
        "numero": id_conta,
        "nome": nome,
        ...default_var
    }

    return conta
}

console.log(abrirConta("pedro josé", 143547));

