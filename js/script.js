/* raccourcis de fonctionnement généraux au site */

/* attendre le chargement de la page */
function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

/* querySelector */
function qS(selector){
    return document.querySelector(selector);
}

/* querySelectorAll */
function qSAll(selector){
    return document.querySelectorAll(selector);
}