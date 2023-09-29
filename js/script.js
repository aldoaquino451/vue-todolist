/*
  - salvo un array di oggetti già compilato
  - nell'html inserisco un ciclo for per ciclare gli elementi dell'array 
  - al click del paragrafo isdone verrà modificato e una classe done verrà attivata/disattivata (il testo sbarratp)
  - al click del button removetask verrà rimosso l'oggetto dell'array in base alla posizione che occupa (che possiamo verificare con index del ciclo v-for)

  DOPO
  - salvo un array di oggetti costituiti da un testo con stringa vuota (da riempire) e dalla variabile isdone (che è false di default)
  - nell'html nell'input inserisco v-model con il nome della variabile newtask, che salverò in js
  - con una funzione pusho nell'array tutti gli elementi che stampo nell'input

*/


const { createApp } = Vue;

createApp({

  data() {
    return {
      saluto: 'ciao'
    }
  },

  methods: {

  },

  mounted() {
    console.log(this.saluto)
  }

}).mount('#app');