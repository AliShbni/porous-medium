<template>
  <div v-if="material" class="q-pa-md">
        <!-- Header -->
        <div class="text-subtitle1 text-center"> 
          Material setting
        </div>
        <q-separator></q-separator>
        <!-- wireframe -->
        <q-checkbox
            v-model="material.wireframe"
            label="Wire frame"
            class="q-my-md"
            left-label
            dense>
        </q-checkbox>
        <!-- Roughness -->
        <div>Roughness ({{ material.roughness }})</div>
        <q-slider v-model="material.roughness"
                  :step="0.1"
                  :min="0"
                  :max="1"/>
        <!-- Metalness -->
        <div>Metalness ({{ material.metalness }})</div>
        <q-slider v-model="material.metalness"
                  :step="0.1"
                  :min="0"
                  :max="1"/>
  </div>
</template>

<script>
import functions from 'src/modules/functions'
export default {
  data () {
    return {
      material: functions.material
    }
  },
  methods: {
  }
}
</script>
