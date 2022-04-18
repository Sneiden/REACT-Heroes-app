import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    console.log(name)

    if( name.length === 0 ){
        return [];
    }else{
        name = name.toLocaleLowerCase();
        return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
    }

}