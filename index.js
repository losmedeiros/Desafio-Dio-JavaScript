const prompt = require ('prompt-sync') ({sigint: true});


let nome = "HeroiDoGelo";
let xp = 1000;
let nivelExperiencia;
let opcao="3";
while (opcao !=="2") {
    opcao = prompt('Digite sua opção: 1) Ver o nivel do Heroi 2) Sair ');
   

    if (opcao === "1") {
        if (xp < 1000) {
            nivelExperiencia = "Ferro";

        } else if (xp >= 1000 && xp <= 2000) {
            nivelExperiencia = "Bronze";

        } else if (xp > 2000 && xp <= 6000) {
            nivelExperiencia = "Prata";

        } else if (xp > 6000 && xp <= 7000) {
            nivelExperiencia = "Ouro";

        } else if (xp > 7000 && xp <= 8000) {
            nivelExperiencia = "Platina";

        } else if (xp > 8000 && xp <= 9000) {
            nivelExperiencia = "Ascendente";

        } else if (xp > 9000 && xp <= 10000) {
            nivelExperiencia = "Imortal";

        } else if (xp > 10000) {
            nivelExperiencia = "Radiante";

        }
    console.log("O Herói de nome ", nome, " está no nível ", nivelExperiencia);
    } else if (opcao !== "2"){
        console.log("Opção invalida");
    }

}console.log("obrigado por usar o programa");

    


