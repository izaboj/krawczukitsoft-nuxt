<template>

  <!-- Work Row -->

  <div class="w3-row-padding w3-padding-64 w3-theme-l1" id="team">

    <div class="w3-quarter w3-padding">

      <h2 class="w3-padding">O nas</h2>

      <p class="w3-padding"> {{ content.desc }} </p>

    </div>

    <div class="w3-threequarter">

      <div class="w3-card w3-white image-container">

        <img
          class="w3-padding-16"
          src="~/assets/images/html.png"
          alt="html"
          style="width: 20%"
        />

        <img
          class="w3-padding-16"
          src="~/assets/images/css.png"
          alt="css"
          style="width: 20%"
        />

        <img
          class="w3-padding-16"
          src="~/assets/images/js.png"
          alt="js"
          style="width: 20%"
        />

        <img
          class="w3-padding-16"
          src="~/assets/images/wordpress.png"
          alt="wordpress"
          style="width: 20%"
        />

      </div>

    </div>

  </div>

</template>

<script>
export default {
  props: ["content"]
};
</script>

<style>

</style>

