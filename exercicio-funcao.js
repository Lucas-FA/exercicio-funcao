//Fazer um menu de exercícios utilizando o exemplo dado em aula
//Criar um menu onde é possível executar 6 dos exercícios anteriores.
//Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções
//O usuário poderá escolher qual exercício ele quer visualizar.
//O usuário deverá digitar 0 para sair no menu.

function exercicioDecisao2() {
    let diaSemana = parseInt(prompt("Digite um número de 1 a 7: "));

    switch(diaSemana) {
        case 1:
            console.log("O número digitado corresponde a: Segunda-feira");
            break;
        case 2:
            console.log("O número digitado corresponde a: Terça-feira");
            break;
        case 3:
            console.log("O número digitado corresponde a: Quarta-feira");
            break;
        case 4:
            console.log("O número digitado corresponde a: Quinta-feira");
            break;
        case 5:
            console.log("O número digitado corresponde a: Sexta-feira");
            break;
        case 6:
            console.log("O número digitado corresponde a: Sábado");
            break;
        case 7:
            console.log("O número digitado corresponde a: Domingo");
            break;
        default:
            console.log("O número digitado não corresponde a nenhum dos dias da semana.");
    }

    console.log("\n\n\n");
}

function exercicioDecisao3() {
    let num = parseInt(prompt("Digite um número: "));

    if(num % 2 == 0) {
        console.log("O número " + num + " é par");
    }
    else {
        console.log("O número " + num + " é ímpar");
    }

    console.log("\n\n\n");
}

function exercicioDecisao8() {
    let peso = parseFloat(prompt("Digite o seu peso (em quilogramas): "));
    let altura = parseFloat(prompt("Digite a sua altura (em metros): "));
    let imc = peso / (altura * altura);
    let faixaPeso = "";

    if(imc < 18.5) {
        faixaPeso = "Abaixo do peso";
    }
    else if(imc >= 18.5 && imc < 25) {
        faixaPeso = "Peso normal";
    }
    else if(imc >= 25 && imc < 30) {
        faixaPeso = "Sobrepeso";
    }
    else if(imc >= 30 && imc < 35) {
        faixaPeso = "Obesidade grau 1";
    }
    else if(imc >= 35 && imc < 40) {
        faixaPeso = "Obesidade grau 2";
    }
    else {
        faixaPeso = "Obesidade grau 3";
    }

    console.log("IMC = " + imc);
    console.log("A sua faixa de peso é: " + faixaPeso);

    console.log("\n\n\n");
}

function exercicioRepeticao4() {
    let num = parseInt(prompt("Digite um número para a tabuada: "));
    let res = 0;

    for(let i = 1; i <= 10; i++) {
        res = num * i;
        console.log(num + " * " + i + " = " + res);
    }

    console.log("\n\n\n");
}

function exercicioRepeticao6() {
    let i = 0;

    while(i <= 20) {
        if(i % 2 == 0) {
            console.log(i);
        }
        i++;
    }

    console.log("\n\n\n");
}

function exercicioRepeticao9() {
    let num = parseInt(prompt("Digite um número para iniciar a contagem: "));

    while(num >= 0) {
        console.log(num);
        num--;
    }

    console.log("\n\n\n");
}

let opcao;

do {
    opcao = prompt("Digite uma opção:\n\n1 - Exercício dias da semana\n2 - Exercício par ou ímpar\n3 - Exercício IMC\n4 - Exercício tabuada\n5 - Exercício pares entre 0 e 20\n6 - Exercício contagem\n0 - Sair");

    switch (opcao) {
        case "1":
            exercicioDecisao2();
            break;
        case "2":
            exercicioDecisao3();
            break;
        case "3":
            exercicioDecisao8();
            break;
        case "4":
            exercicioRepeticao4();
            break;
        case "5":
            exercicioRepeticao6();
            break;
        case "6":
            exercicioRepeticao9()
            break;
        default:
            console.log("Exercício Inválido");
            break;
    }

}while(opcao != "0");

alert("Você escolheu sair");