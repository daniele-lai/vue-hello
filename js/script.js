// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue({
  el: '#root',
  data: {
    message: "Hello Boolean Teachers!",
    img: "img/memevue.jpg",
    mieClassi: "hide"
  },
  methods: {
    funzioneImg: function () {
      this.mieClassi = "show";
    }
  }
}
);
