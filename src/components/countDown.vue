<template>
  <!-- <div class="d-flex justify-space-around">
      <p>{{ years }}</p>
      <p>{{ days % 365 }}</p>
      <p>{{ hours % 24 }}</p>
      <p>{{ minutes % 60 }}</p>
      <p>{{ seconds % 60 }}</p>
  </div> -->
  <div class="grid grid-cols-3 content-center text-white font-mono text-xl mt-8  pt-15">

    <div class="col-span-1 flex justify-end  mr-8 text-2xl">
      <span>
        Faltan
      </span>
    </div>

    <div class="flex  text-white font-mono col-span-1  flex justify-center">
      <!--  <v-card class="opacitybg mx-auto" width="150px" weight="120px" href="https://www.yusufonaran.me" target="_blank">
          <v-card>
              <p class="text-h2 text--primary text-center font-weight-regular">
                  {{ years }}
              </p>
          </v-card>
          <v-card-actions>
              <v-btn block text color="deep-purple accent-4">
                  YEARS
              </v-btn>
          </v-card-actions>
      </v-card> -->
      <!-- ---------------- -->
      <div class="flex ">
        <div class="mr-2">
          <p class="text-2xl">
            {{ days % 365 }}
          </p>
        </div>
        <div>
          <div>
            Dias
          </div>
        </div>
      </div>
      <!-- ---------------- -->
      <div class="flex">
        <div class="mr-2 ml-8">
          <p class="text-2xl">
            {{ hours % 24 }}
          </p>
        </div>
        <div>
          <div>
            Horas
          </div>
        </div>
      </div>
      <!-- ---------------- -->
      <div class="flex">
        <div class="mr-2 ml-8">
          <p class="text-2xl">
            {{ minutes % 60 }}
          </p>
        </div>
        <div>
          <div>
            Minutos
          </div>
        </div>
      </div>
      <!-- ---------------- -->
      <div class="flex">
        <div class="ml-8 mr-2 ">
          <p class="text-2xl">
            {{ seconds % 60 }}
          </p>
        </div>
        <div>
          <div>
            Segundos
          </div>
        </div>
      </div>

    </div>
    <div class="col-span-1 text-2xl flex justify-start">
      para Navidad
    </div>

  </div>
</template>


<script>
import { ref } from '@vue/reactivity';

export default {
  name: "CounterCards",
  setup() {
    /* const years = ref(0); */
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const lunchDate = new Date('25 December 2022');


    setInterval(() => {
      const currentDate = new Date();
      const lunchTime = lunchDate - currentDate;

      seconds.value = parseInt(lunchTime / 1000);
      minutes.value = parseInt(seconds.value / 60);
      hours.value = parseInt(minutes.value / 60);
      days.value = parseInt(hours.value / 24);
      //years.value = parseInt(days.value / 365);

    }, 1000);

    return { days, hours, minutes, seconds }
  },

};
</script>