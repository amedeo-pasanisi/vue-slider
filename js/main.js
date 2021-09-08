Vue.config.devtools = true;

const app = new Vue (
    {
        el: "#root",
        data: {
            counter: 0,
            photos: [
                "img/copertina1.jpg",
                "img/hero-saline.jpg",
                "img/ponza-i-panorami.jpg"
            ]
        },
        methods: {
            increaseCounter () {
                this.counter++
            },
            decreaseCounter () {
                this.counter--
            }
        }
    }
)