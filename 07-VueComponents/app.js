class ComputedCurrency {
    constructor(currency, code, bid, ask) {
        this.currency = currency;
        this.code = code;
        this.bid = bid;
        this.ask = ask;
    }
}

Vue.component('university', {
    template: '#university-template',
    data() {
        return {
            name: 'Cracow University of Economics',
            address: '31-510 Kraków, Rakowicka 27, POLAND'
        }
    }
})

Vue.component('first-favourite-film', {
    template: '#favourite-film-template',
    data() {
        return {
            title: 'Prestiż',
            director: 'Christopher Nolan',
            year: 2006
        }
    }
})

Vue.component('second-favourite-film', {
    template: '#favourite-film-template',
    data() {
        return {
            title: 'Troja',
            director: 'Wolfgang Petersen',
            year: 2004
        }
    }
})

Vue.component('third-favourite-film', {
    template: '#favourite-film-template',
    data() {
        return {
            title: 'Bękarty wojny',
            director: 'Quentin Tarantino',
            year: 2009
        }
    }
})

Vue.component('von-neumann-architecture', {
    template: '#von-neumann-architecture-template',
    data() {
        return {
            title: 'Architektura von Neumanna',
            architectureComponents: [
                'Jednostka przetwarzania, która zawiera jednostkę arytmetyczno-logiczną oraz rejestry procesor',
                'Jednostka sterująca, która zawiera rejestr instrukcji i licznik programu',
                'Pamięć, która przechowuje dane i instrukcje',
                'Zewnętrzna pamięć masowa',
                'Mechanizm wejścia/wyjścia'
            ]
        }
    }
})

Vue.component('decimal-to-binary', {
    template: '#decimal-to-binary-template',
    props: {
        decimal: Number
    },
    computed: {
        binary: function () {
            return this.decimal.toString(2);
        }
    }
})

Vue.component('chart-component', {
    template: '#chart-template',
    props: ['numbers'],
    computed: {
        languageNames() {
          return this.numbers;;
        },
        languagePopularity() {
          return this.numbers;
        }
      },
      methods: {
        createChart: (languageNames, languagePopularity) => {
          let ctx = document.getElementById('numbers-chart').getContext('2d');

          let config = {
            type: 'bar',
            data: {
              labels: languageNames,
              datasets: [{
                data: languagePopularity
              }]
            },
            options: {
              legend: false,
              elements: {
                rectangle: {
                  backgroundColor: 'rgb(0,175,255)',
                  borderColor: 'rgb(0,0,0)',
                  borderWidth: 1
                }
              }
            }
          }

          new Chart(ctx, config);
        },
      },
      mounted() {
        this.createChart(this.languageNames, this.languagePopularity);
      }
})

Vue.component('counter-add-subtract', {
    template: '#counter-add-subtract-template',
    data () {
      return {
        count: 0
      }
    }
  })
  
Vue.component('currency-api', {
    template: '#currency-api-template',
    props: ['code'],
    data() {
        return {
            currency: null
        }
    },
    mounted() {
        const url = `http://api.nbp.pl/api/exchangerates/rates/C/${this.code}/`;

        axios
            .get(url)
            .then(response => {
                console.log(JSON.stringify(response.data));
                let currencyData = response.data;
                let currencyValues = currencyData.rates[0];
                this.currency = new ComputedCurrency(currencyData.currency, currencyData.code, currencyValues.bid, currencyValues.ask);
            });
    }
})


new Vue({
    el: '#app'
})