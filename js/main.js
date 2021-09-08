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
                this.counter++;
                if (this.counter == this.photos.length) this.counter = 0;
            },
            decreaseCounter () {
                this.counter--;
                if (this.counter < 0) this.counter = (this.photos.length - 1);
            }
        }
    }
)