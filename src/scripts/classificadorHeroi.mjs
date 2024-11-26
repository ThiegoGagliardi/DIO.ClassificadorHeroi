import * as NIVEIS from "./NiveisXp.mjs";

export class ClassificadorHeroi{

    classificarHeroi(heroi){

        const xp  = heroi.xp();
        
        let classificacao = "";  

        if (xp <= NIVEIS.MAX_XP_FERRO) {
            classificacao = "Ferro";
        } else if (xp > NIVEIS.MAX_XP_FERRO && xp <= NIVEIS.MAX_XP_BRONZE) {
            classificacao = "Bronze";
        } else if (xp > NIVEIS.MAX_XP_BRONZE && xp <= NIVEIS.MAX_XP_PRATA) {
            classificacao = "Prata";
        } else if (xp > NIVEIS.MAX_XP_PRATA && xp <= NIVEIS.MAX_XP_OURO) {
            classificacao = "Ouro";
        } else if (xp > NIVEIS.MAX_XP_OURO && xp <= NIVEIS.MAX_XP_PLATINA) {
            classificacao = "Platina";
        } else if (xp > NIVEIS.MAX_XP_PLATINA && xp <=  NIVEIS.MAX_XP_ASCENDENTE) {
            classificacao = "Ascendente";
        } else if (xp >= NIVEIS.MAX_XP_ASCENDENTE && xp <= NIVEIS.MAX_XP_IMORTAL) {
            classificacao = "Imortal";
        } else {
            classificacao = "Radiante";
        }
        
        return classificacao;
    }
}

export default ClassificadorHeroi;