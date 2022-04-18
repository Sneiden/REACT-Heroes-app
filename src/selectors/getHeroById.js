import { heroes } from "../data/heroes"

export const getHeroesById = ( id = '' ) => {
    console.log('getHeroById called')
    return heroes.find( hero => hero.id === id );
}