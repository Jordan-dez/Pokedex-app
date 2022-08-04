/**
 * cette function décompose une url passée en parametre et returne un id qui s'y trouve
 */

export function getPokemonIdFromUrl(pokemonUrl) {
    let id = Number(pokemonUrl.split('/').reverse()[1])
    return id
}