/***
 * Fonction permetant d'aller écrire dans les données dans le localstorage
 */
export function setLocalStorage(data){
    localStorage.setItem("pokedex",JSON.stringify(data))
}