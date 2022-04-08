// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue (
    {
        el: '#root',

        data: {

            // creo un array vuoto da riempire con le mail
            emailListArray: []          
                        
        },

        created(){
            // applico il ciclo for, per pushare 10 volte le mail generate
            for ( let i = 0; i < 10; i++){
                // riporto il link del api da cui attingere le mail
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                // imposto la funzione con arrow function cosi da riferirmi direttamente a vue
                .then( (response) => {

                    // faccio il console log per vedere se il percorso è giusto
                    console.log(response.data.response);

                    // pusho gli elementi mail dentro all array vuoto
                    this.emailListArray.push(response.data.response);

                });
            }

        },

        methods: {           

        }

    }

);