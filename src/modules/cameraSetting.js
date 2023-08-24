import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import functions from './functions'
export default {

  createCamera (container) {
    functions.camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 10000)
    functions.camera.aspect = container.clientWidth / container.clientHeight
    functions.camera.position.set(functions.initialCameraPosition.x, functions.initialCameraPosition.y, functions.initialCameraPosition.z)
    functions.camera.fov = 80
    functions.camera.zoom = 10
    functions.camera.updateProjectionMatrix()
    functions.scene.add(functions.camera)
  },

  moveCamera (from, to) {
    const tween = new TWEEN.Tween(from).to(to, 2000)
      .easing(TWEEN.Easing.Quintic.Out)
      .onUpdate((coordin) => {
        functions.camera.position.set(coordin.x, coordin.y, coordin.z)
        functions.camera.updateProjectionMatrix()
      })
    tween.start()
  },

  createControl () {
    functions.controls = new OrbitControls(functions.camera, functions.renderer.domElement)
    functions.controls.addEventListener('change', () => { functions.update() }, false)
    functions.controls.autoRotate = false
    functions.controls.autoRotateSpeed = 1
    functions.controls.enableDamping = true
    functions.controls.dampingFactor = 0.07
    functions.controls.rotateSpeed   = 0.5
    functions.controls.enablePan = false
    functions.controls.update()
  }

}
