<template>
  <div style="position:absolute; right: 7px; bottom: 7px;">
    <q-btn-group push>
      
      <!-- Autorotate -->
      <q-btn  icon="360"
              size="sm"
              color="white"
              class="text-green-8">
              <q-menu anchor="top middle" self="bottom middle"
                      transition-hide="jump-down"
                      transition-show="jump-up">
                      <q-item v-for="(rotate, index) in rotationSpeeds"
                              v-bind:key="index"
                              clickable
                              dense
                              :active="speed == rotate.speed"
                              active-class="bg-primary text-white">
                              <q-item-section 
                                @click="speed = rotate.speed; setRotationSpeed(speed)"
                                class="text-caption">
                                {{ rotate.title }}
                              </q-item-section>
                      </q-item>
              </q-menu>
              <q-tooltip anchor="top middle" self="center middle">
                Auto rotate
              </q-tooltip>
      </q-btn>

      <!-- Full screen -->
      <q-btn  v-if="!($q.platform.is.ios)"
              @click="toggle()"
              :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
              size="sm"
              color="white"
              class="text-green-8">
              <q-tooltip anchor="top middle" self="center middle">
                Fullscreen
              </q-tooltip>
      </q-btn>      

    </q-btn-group>
  </div>
</template>

<script>
import functions from '../modules/functions.js'
export default {
  name: 'options',
  data () {
    return {
      selectedModel: functions.selectedModel,
      speed: 0,
      rotationSpeeds:[
        {
          title: '4 X',
          speed: 4
        },
        {
          title: '2 X',
          speed: 2
        },
        {
          title: '1 X',
          speed: 1
        },
        {
          title: '0.5 X',
          speed: .5
        },
        {
          title: '0.25 X',
          speed: .25
        },
        {
          title: 'Stop',
          speed: 0
        }
      ]
    }
  },
  methods: {

    toggle (e) {

      const target = document.getElementById("parentContainer")
      this.$q.fullscreen.toggle(target)
        .then(() => {
          // success!
          console.error('success')
          setTimeout(()=>{
            functions.onWindowResize()
          }, 250)
        })
        .catch((err) => {
          alert(err)
          console.error(err)
        })

    },

    setRotationSpeed(value){
      if(value > 0){
        functions.controls.autoRotateSpeed = value
        functions.controls.autoRotate = true
      }else{
        functions.controls.autoRotate = false
      }
    }

  }

}
</script>
