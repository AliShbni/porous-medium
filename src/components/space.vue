<template>
  <div id="parentContainer" style="position:relative; height: 100%;">
    <!-- Main container -->
    <div  id="container" 
          style="width: 100%; height: 100%; cursor: -webkit-grab; cursor: grab;"></div>
    <!-- options -->
    <options />
    <touchGuide />
  </div>
</template>

<script>
import options from './options'
import touchGuide from 'src/components/touchGuide'
import functions from '../modules/functions.js'
import cameraSetting from '../modules/cameraSetting.js'
export default {
  name: 'space',
  components: { options, touchGuide },
  data () {
    return {
    }
  },
  methods: {

    init: async function () {
      // create Scene
      functions.createScene('white')
      this.container = document.querySelector('#container')
      // Create Camera
      cameraSetting.createCamera(this.container)
      // Renderer
      functions.createRenderer(this.container)
      this.container.appendChild(functions.renderer.domElement)
      // Add lights
      functions.createAmbientLight()
      // Add map
      functions.loadEnvMap('1')
      // Animate //
      functions.animate()
      this.onWindowResize()
    },

    onWindowResize: function () {
      functions.camera.aspect = this.container.clientWidth / this.container.clientHeight
      functions.camera.updateProjectionMatrix()
      functions.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    }

  },

  mounted () {
    this.init()
    window.visualViewport.addEventListener('resize', this.onWindowResize)
  },

  beforeDestroy () {
    window.visualViewport.removeEventListener('resize', this.onWindowResize)
    this.uploadInfo.isModelLoaded = false
  }

}
</script>

<style >
#container{
  display: block;
  touch-action: pinch-zoom;
}
.blurriness {
  filter: blur(2px);
  -webkit-filter: blur(2px);
}
.backgroundText {
  position: absolute;
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%) rotate(-20deg); */
  color: rgba(255, 0, 0, 0.351);
}
</style>
