<script>

export default {
  methods:{
    downPage(){
      this.$router.push({ name: 'home' });
    },
  }
}

</script>


<template>
  <transition name="fade" appear>
    <div>

      <div v-cloak v-shortkey="['arrowdown']" @shortkey="downPage">
      </div>

      <div class="wrapper">
        <div class="bg"> Articles </div>
        <div class="fg"> Articles </div>
      </div>

      <vue-particles
          color="#dedede"
          :particleOpacity="0.2"
          :particlesNumber="70"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.1"
          :linesDistance="150"
          :moveSpeed="2"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
      >
      </vue-particles>

      <div>
        <nav>
          <router-link to="/"><h1 id="bottomButtonMain" class="button">Home</h1></router-link>
        </nav>
      </div>

    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.wrapper {
  padding: 15px;
  display: grid;
  grid-template-areas: 'overlap';
  place-content: center;
  position: absolute;
  left: 1vh;
  text-transform: uppercase;
}
.wrapper > div {
  background-clip: text;
  -webkit-background-clip: text;
  color: #363833;
  font-family: 'Wrangell', sans-serif;
  font-weight: 900;
  font-size: 48px;
  grid-area: overlap;
  letter-spacing: 1px;
  -webkit-text-stroke: 4px transparent;
}
div.bg {
  background-image: repeating-linear-gradient( 105deg,
  #ffb338 0% ,
  #3e2904 5%,
  #ffb338 12%);
  color: transparent;
  filter: drop-shadow(5px 15px 15px black);
  transform: scaleY(1.05);
  transform-origin: top;
}
div.fg{
  background-image: repeating-linear-gradient( 5deg,
  #ffb338 0% ,
  #77571d 23%,
  #ffb338 31%);
  color: #1e2127;
  transform: scale(1);
}

h1 {
  color: #42b983;
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

#bottomButtonMain {
  padding: 5px;
  position: absolute;
  bottom: 0px;
  margin-bottom: auto;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>

