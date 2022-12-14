<script>

import VueWriter from 'vue-writer'

export default {
  components: {VueWriter},
  data() {
    return {
      title: "MOSTAFA FAZLI",
    };
  }

}
</script>


<template>
  <div>
    <transition name="fade" appear>
      <div>
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
              <h1 id="nameCard">{{ title }}</h1>
              <VueWriter id="descriptionCard" :typeSpeed="120" :iterations='1' :start="1000" :eraseSpeed="35" :array="['Hi 👋', 'Welcome to my Website 😉', 'I am a Frontend Feveloper 👨🏻‍💻', 'I love programming 🧡']" />
            </div>
          </div>
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
            <a id="siteStamp" href="https://github.com/mosfazli" target="_blank">@ Designed By MosFazli - December 2022</a>
        </div>

      </div>
    </transition>
  </div>
</template>


<style>

html,
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#nameCard {
  background-clip: text;
  font-family: 'Wrangell';
  font-size: 42px;
  background-image: linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2, #fed90f);
  color: #000119;
  font-weight: 700;
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: calc(1em / 16);
}

#descriptionCard{
  font-family: 'Wrangell';
  font-size: 28px;
  font-weight: 400;
  color: #e1e1e1;
  margin-bottom: 10px;

}

#profileCard {
  background-image: radial-gradient(circle farthest-corner at center center, #3f3f3f, #1f1f1f);
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

#siteStamp{
  color: rgb(217, 217, 217);
  text-decoration: none;
  font-family: 'Anisa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

#siteStamp:link{
  text-decoration: none;
  font-family: 'Anisa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

#siteStamp:visited{
  text-decoration: none;
  color: rgb(215, 133, 23);
  font-family: 'Anisa Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

#siteStamp:hover{
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
