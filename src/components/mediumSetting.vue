<template>
  <div class="q-pa-md">
        <!-- Header -->
        <div class="text-subtitle1 text-center"> 
          Medium setting
        </div>
        <q-separator class="q-mb-md"></q-separator>
        <!-- Porous setting -->
        <div>Number of bubbles ({{ effectController.numBlobs }})</div>
        <q-slider v-model="effectController.numBlobs"
                  @input="updateCubes()"
                  :step="1"
                  :min="0"
                  :max="1000"/>
        <div>Isolation ({{ effectController.isolation }})</div>
        <q-slider v-model="effectController.isolation"
                  @input="updateCubes()"
                  :step="1"
                  :min="5"
                  :max="1000"/>
        <div>Resolution ({{ effectController.resolution }})</div>
        <q-slider v-model="effectController.resolution"
                  @input="updateCubes()"
                  :step="1"
                  :min="10"
                  :max="80"/>
        <div>T ({{ effectController.time }})</div>
        <q-slider v-model="effectController.time"
                  @input="updateCubes()"
                  :step="0.1"
                  :min="1"
                  :max="10"/>
  </div>
</template>

<script>
import functions from 'src/modules/functions'
export default {
  data () {
    return {
      effectController: functions.effectController
    }
  },
  methods: {
    updateCubes(){
      functions.updateCubes()
    }
  }
}
</script>
