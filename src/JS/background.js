new Vue({
    el: "#app",
    created() {
        window.addEventListener("resize", this.handleResize);
        document
            .getElementsByTagName("body")[0]
            .addEventListener("mousemove", this.updateMouseLocation);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    data: {
        title: "Vue.js Hover Color Background",
        clientX: 0,
        clientY: 0,
        windowWidth: 0,
        windowHeight: 0,
        colorLightness: 35,
        colorAlpha: 1,
        hoverActive: true
    },
    computed: {
        colorHue() {
            const hue = (360 / this.windowWidth) * this.clientX;
            return parseInt(hue, 10);
        },
        colorSaturation() {
            const saturation = (100 / this.windowHeight) * this.clientY;
            return parseInt(saturation, 10);
        },
        dynamicColor() {
            return {
                backgroundColor: `hsla(${this.colorHue},
          ${this.colorSaturation}%,
          ${this.colorLightness}%,
          ${this.colorAlpha})`
            };
        }
    },
    methods: {
        toggleHoverEffect() {
            this.hoverActive = !this.hoverActive;
        },
        updateMouseLocation(e) {
            let { clientX, clientY } = e;

            if (this.hoverActive) {
                this.clientX = clientX;
                this.clientY = clientY;
            }
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        }
    }
});
