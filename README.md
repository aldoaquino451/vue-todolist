Vue To Do List
===

## Esercizio 

Rifare l’esercizio della to do list fatto in classe.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1   
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2   
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3   
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

Bonus:
1. se il todo ha meno di 5 caratteri esporre un messaggio di errore
2. cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3. eliminare il todo solo se è stato svolto, altrimenti esporre un messaggio di errore
Buon lavoro e buon weekend!

## HTML

- crea la stuttura in html con: un logo e un wrapper #app
- nel wrapper inseriamo: un tag input text con un button a fianco; un paragrafo che descrive il tipo di errore; un container dove inserisco la lista di task del todo
- la lista sarà formata da un paragrafo/span che verrà sbarrato se la task è completa e un button per la rimozione della task
- ogni task avrà un effetto hover e un border come separatore

## JAVASCRIPT
- salvo un array di oggetti già compilato
- nell'html inserisco un ciclo for per ciclare gli elementi dell'array 
- al click del paragrafo isdone verrà modificato e una classe done verrà attivata/disattivata (il testo sbarratp)
- al click del button removetask verrà rimosso l'oggetto dell'array in base alla posizione che occupa (che possiamo verificare con index del ciclo v-for)

DOPO
- salvo un array di oggetti costituiti da un testo con stringa vuota (da riempire) e dalla variabile isdone (che è false di default)
- nell'html nell'input inserisco v-model con il nome della variabile newtask, che salverò in js
- con una funzione pusho nell'array tutti gli elementi che stampo nell'input

BONUS

