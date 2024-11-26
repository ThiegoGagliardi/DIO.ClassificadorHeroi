import Heroi from "./heroi.mjs";
import ClassificadorHeroi from "./classificadorHeroi.mjs";

const state = {
    values :{

       nomeHeroi : document.getElementById('nome__heroi'),
       xpHeroi  : document.getElementById('xp__heroi')
    },

    views :{
        nivelHeroi    : document.getElementById('nivel__heroi'),
        classificarHeroi : document.getElementById('classificar__heroi')
    }
}

function addListenerClassificarHeroi(){

    state.views.classificarHeroi.addEventListener("click",               
        () => {
            
            const heroi = new Heroi(state.values.nomeHeroi.value, parseInt(state.values.xpHeroi.value));
            
            const classificadorHeroi = new ClassificadorHeroi();
            let nivel = classificadorHeroi.classificarHeroi(heroi);

            state.views.nivelHeroi.textContent = `Herói ${heroi.name()} está no nível ${nivel}`;
        }
    );

}


function main(){

    addListenerClassificarHeroi();   
}

main();