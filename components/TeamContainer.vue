<template>

  <!-- Team Container -->

  <div class="w3-container w3-padding-64 w3-center" id="work">

    <h2>Jak pracujemy</h2>

    <div class="w3-row">

      <br />

      <div class="w3-third">

        <a href="#szkolenia">

          <img
            src="~/assets/images/online.png"
            alt="online"
            style="width: 60%"
            class="w3-circle w3-hover-opacity"
          />

        </a>

        <h3>{{ content.type1}}</h3>

      </div>

      <div class="w3-third">

        <a href="#szkolenia">

          <img
            src="~/assets/images/uklienta.png"
            alt="uklienta"
            style="width: 60%"
            class="w3-circle w3-hover-opacity"
          />

        </a>

        <h3>{{content.type2}}</h3>

      </div>

      <div class="w3-third">

        <a href="#szkolenia">

          <img
            src="~/assets/images/unas.png"
            alt="unas"
            style="width: 60%"
            class="w3-circle w3-hover-opacity"
          />

        </a>

        <h3>{{content.type3}}</h3>

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

