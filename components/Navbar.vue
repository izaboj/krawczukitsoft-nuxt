<template>
  <!-- Navbar -->
  <div class="w3-top">
    <div class="w3-bar w3-theme-d2 w3-left-align">
      <div
        @click="openNav"
        class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"
      >
        <i class="fa fa-bars"></i>
      </div>
      <a href="#myPage" class="w3-bar-item w3-button w3-teal"
        ><i class="fa fa-home w3-margin-right"></i>Krawczuk IT Soft</a
      >
      <a href="#team" class="w3-bar-item w3-button w3-hide-small w3-hover-white"
        >O nas</a
      >
      <a href="#work" class="w3-bar-item w3-button w3-hide-small w3-hover-white"
        >Jak pracujemy</a
      >
      <div class="w3-dropdown-hover w3-hide-small">
        <a href="#szkolenia"
          ><button class="w3-button">
            Szkolenia <i class="fa fa-caret-down"></i></button
        ></a>
        <div class="w3-dropdown-content w3-card-4 w3-bar-block">
          <a href="#html" class="w3-bar-item w3-button">HTML + CSS</a>
          <a href="#js" class="w3-bar-item w3-button">JavaScript ES6</a>
          <a href="#wp" class="w3-bar-item w3-button">WordPress</a>
        </div>
      </div>
      <a
        href="#contact"
        class="w3-bar-item w3-button w3-hide-small w3-hover-white"
        >Kontakt</a
      >
    </div>

    <!-- Navbar on small screens -->
    <div
      id="navDemo"
      class="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium"
    >
      <a href="#team" @click="closeNav" class="w3-bar-item w3-button">O nas</a>
      <a href="#work" @click="closeNav" class="w3-bar-item w3-button"
        >Jak pracujemy</a
      >
      <a href="#szkolenia" @click="closeNav" class="w3-bar-item w3-button"
        >Szkolenia</a
      >
      <a href="#contact" @click="closeNav" class="w3-bar-item w3-button"
        >Kontakt</a
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$hello("mounted");
    // will console.log 'Hello mounted!'
  },
  methods: {
    openNav() {
      this.$openNav();
    },
    closeNav() {
      this.$closeNav();
    },
  },
};
</script>
<style></style>
