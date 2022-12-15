<script>

import VueWriter from 'vue-writer'

export default {
  props: {
    show: Boolean
  },
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
  components: {VueWriter},
  data() {
    return {
      title: "MOSTAFA FAZLI",
      clientX: 0,
      clientY: 0,
      windowWidth: 0,
      windowHeight: 0,
      colorLightness: 8,
      colorAlpha: 1,
      hoverActive: true,
      keypressed: ""
    };
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
    leftPage() {
      this.$router.push({name: 'about'});
    },
    rightPage() {
      this.$router.push({name: 'projects'});
    },
    upPage() {
      this.$router.push({name: 'articles'});
    },
    downPage() {
      this.$router.push({name: 'contact'});
    },
    toggleHoverEffect() {
      this.hoverActive = !this.hoverActive;
    },
    updateMouseLocation(e) {
      let {clientX, clientY} = e;
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
}
</script>


<template>
  <div>
    <transition name="fade" appear>
      <div>
        <vue-particles
            color="#dedede"
            :particleOpacity="0.6"
            :particlesNumber="70"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
        <div v-cloak v-shortkey="['arrowleft']" @shortkey="leftPage">
          </div>
          <div v-cloak v-shortkey="['arrowup']" @shortkey="upPage">
          </div>
          <div v-cloak v-shortkey="['arrowdown']" @shortkey="downPage">
          </div>
          <div v-cloak v-shortkey="['arrowright']" @shortkey="rightPage">
          </div>

          <div id="profileCard">
            <div id="imageCardDiv">
              <img src="../assets/media/MostafaFazli_Full.jpg" id="imageCard"
                   srcset="
             ../assets/media/MostafaFazli_Low.jpg  300w,
              ../assets/media/MostafaFazli_Medium.jpg  600w,
              ../assets/media/MostafaFazli_Full.jpg  1200w,
            ">
            </div>
            <div>
              <div>
                <h1 id="nameCard" :style="dynamicColor">{{ title }}</h1>
                <VueWriter id="descriptionCard" :typeSpeed="120" :iterations='1' :start="1000" :eraseSpeed="35"
                           :array="['Hi 👋', 'Welcome to my Website 😉', 'I am a Frontend Feveloper 👨🏻‍💻', 'I love programming 🧡']"/>
              </div>
            </div>
          </div>

          <div>
            <img src="../assets/media/keys/keyButtons.png" id="keysImage">
            <h2 id="keysGuide">You can move between page with Keys !</h2>
          </div>

          <div>
            <nav>
              <router-link to="/articles"><h1 id="topButtonMain" class="button">Articles</h1></router-link>
            </nav>
          </div>

          <div>
            <nav>
              <router-link to="/contact"><h1 id="bottomButtonMain" class="button">Contact</h1></router-link>
            </nav>
          </div>

          <div id="rightDivMain">
            <nav>
              <router-link to="/projects"><h1 id="rightButtonMain" class="button">Projects</h1></router-link>
            </nav>
          </div>

          <div id="leftDivMain">
            <nav>
              <router-link to="/about"><h1 id="leftButtonMain" class="button">About</h1></router-link>
            </nav>
          </div>


          <div id="siteStampDiv">
            <a id="siteStamp" href="https://github.com/mosfazli" target="_blank">@ Designed By MosFazli - December
              2022</a>
          </div>
      </div>
    </transition>
  </div>
</template>


<style>

html,
body{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden
}

#backgroundParticles{
}

#nameCard {
  background-clip: text;
  filter: drop-shadow(0.2px 0.4px 0.8px #5e5e5e);
  font-family: 'Wrangell';
  font-size: 42px;
  color: #8a8a8a;
  font-weight: 700;
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: calc(1em / 16);
}

#descriptionCard {
  font-family: 'Wrangell';
  font-size: 28px;
  font-weight: 400;
  color: #e1e1e1;
  margin-bottom: 10px;
}

#profileCard {
  background-image: radial-gradient(circle farthest-corner at center center, #232323, #0a0a0a);
  width: fit-content;
  border-radius: 50px;
  align-items: center;
  text-align: center;
  border: 2px solid #e0e0e0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  padding: 10px 10px;
  gap: 1px;
  box-shadow: 1px 2px 4px #f3f3f3;
}

#profileCard:hover {
  background-image: radial-gradient(circle farthest-corner at center center, #181818, #181818);
  box-shadow: 2px 4px 8px #f3f3f3;
}

#imageCardDiv {
  width: 30vw;
  padding-top: 10px;
  margin: auto;
}

#imageCard {
  border-radius: 100%;
  filter: drop-shadow(1px 2px 4px #d9d9d9);
  width: 55%;
  margin: auto;
  display: block;
}

.button {
  font-family: 'Wrangell';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: rgb(217, 217, 217);
  text-align: center;
  text-decoration: none;
  padding: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  transition: 0.4s;
}

.button:hover {
  font-family: 'Wrangell';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  color: rgb(194, 111, 0);
  text-align: center;
  padding: 5px;
  border: 1px solid #c26f00;
  border-radius: 10px;
  background: #010E1B;
}

#topButtonMain {
  margin-top: 30px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
}

#leftDivMain {
  transform: rotate(-90deg);
  position: absolute;
  bottom: 50%;
  left: 0px;
  margin: 0px;
  padding: 0px;
  vertical-align: middle;
}

#leftButtonMain {
  text-align: center;
  margin: 0px;
  padding: 5px;
  border-radius: 10px;
}

#rightDivMain {
  transform: rotate(90deg);
  position: absolute;
  bottom: 50%;
  right: 0px;
  margin: 0px;
  padding: 0px;
  vertical-align: middle;
}

#rightButtonMain {
  margin: 0px;
  padding: 5px;
}

#bottomButtonMain {
  padding: 5px;
  position: absolute;
  bottom: 0px;
  margin-bottom: auto;
  left: 50%;
  transform: translate(-50%, -50%);
}

#keysImage {
  position: fixed;
  bottom: 35px;
  left: 4%;
  transform: translate(-4%, -4%);
  height: 93px;
}

#keysGuide {
  position: absolute;
  bottom: 0;
  left: 1%;
  color: rgb(217, 217, 217);
  text-decoration: none;
  font-family: 'Anisa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}


#siteStampDiv {
  position: absolute;
  bottom: 10px;
  right: 20px;
  height: fit-content;
  width: fit-content;
  margin: 0px;
  padding: 0px;
  vertical-align: middle;

}

#siteStamp {
  color: rgb(217, 217, 217);
  text-decoration: none;
  font-family: 'Anisa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

#siteStamp:link {
  text-decoration: none;
  font-family: 'Anisa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

#siteStamp:visited {
  text-decoration: none;
  color: rgb(215, 133, 23);
  font-family: 'Anisa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

#siteStamp:hover {
  color: rgb(189, 110, 4);
  text-decoration: none;
  font-family: 'Anisa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
