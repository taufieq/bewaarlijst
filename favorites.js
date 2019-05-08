/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


/* bron --> sanne */

var favorites = JSON.parse(localStorage.getItem("favorites"));

for (var i = 0; i < favorites.length; i++) {

    var newPlaatje = document.createElement("img");
    newPlaatje.setAttribute('src', favorites[i]);

    var newItem = document.createElement("li");
    newItem.appendChild(newPlaatje);

    var deLijst = document.querySelector("ol");
    deLijst.appendChild(newItem);

}
