import Heroi from "./heroi.mjs";
import ClassificadorHeroi from "./classificadorHeroi.mjs";
import prompt from 'prompt-sync';

function main(){
    
    const input = prompt();

    const nomeHeroi = input("Informe o nome do herói.");
    
    const xp = parseInt(input("Informe a experiência do herói."));

    const heroi = new Heroi(nomeHeroi,xp);

    const classificadorHeroi = new ClassificadorHeroi();

    console.log(`Herói ${heroi.name()} está no nível ${classificadorHeroi.classificarHeroi(heroi)}`);    
}

main();