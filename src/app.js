/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Creamos Script que genere todas las combinaciones posibles de nombres de dominio
//de una lista de pronombres, adjetivos, sustantivos, y ademas empelando varios dominios

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".es", ".net", ".us", "org", ".io"];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in domain) {
          console.log(`${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}`);
        }
      }
    }
  }

  //Ulilizando el principio de Responsabilidad Única

  pronoun.forEach(i =>
    adj.forEach(j =>
      noun.forEach(k => domain.forEach(l => console.log(`${i}${j}${k}${l}`)))));
};
