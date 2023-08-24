import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import cameraSetting from './cameraSetting'
// import alarms from './alarms'

export default {
  scene: null,
  renderer: null,
  camera: null,
  controls: null,
  material: new THREE.MeshStandardMaterial( { 
    color: 'grey', 
    metalness: 0.9, 
    roughness: 0.7 ,
    side: THREE.DoubleSide
  } ),
  initialCameraPosition: new THREE.Vector3(10000, 0, 0),
  effect: null,
  effectController: {
    numBlobs: 300,
    resolution: 50,
    isolation: 150,
    time: 10,
    floor: true,
    wallx: false,
    wallz: false
  },

  animate () {
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate.bind(this))
    this.controls.update()
    TWEEN.update()
  },

  update () {
    this.renderer.render(this.scene, this.camera)
  },

  createScene () {
    this.scene = new THREE.Scene()
    this.createPores()
    this.moveCamera()
  },

  moveCamera () {
    cameraSetting.moveCamera(this.initialCameraPosition.clone(), new THREE.Vector3(800, 800, 800))
  },

  createRenderer (container) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.setPixelRatio( window.devicePixelRatio)
    this.renderer.useLegacyLights = true
    this.renderer.toneMappingExposure = 4
    // controls
    cameraSetting.createControl()
  },

  createAmbientLight () {
    let color    = new THREE.Color('white')
    let ambientLight  = new THREE.AmbientLight(color, 4)
    this.scene.add(ambientLight)
  },

  loadEnvMap () {
    new RGBELoader().load('low.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping
      texture.needsUpdate = true
      this.scene.background = new THREE.Color('rgb(200, 200, 200)')
      this.scene.environment = texture
    },
    function (xhr) {
      console.log('Loaded ' + (xhr.loaded / xhr.total * 100) + '%')
    },
    function (error) {
      console.log('Error: ', error)
    }
    )
  },

  onWindowResize () {
    let container = document.querySelector('#container')
    this.camera.aspect = container.clientWidth / container.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(container.clientWidth, container.clientHeight)
  },

  createPores(){

    this.effect = new MarchingCubes( this.effectController.resolution, this.material, true, true, 100000 );
    this.effect.position.set( 0, 0, 0 );
    this.effect.scale.set( 100, 100, 100 );

    this.effect.enableUvs = false;
    this.effect.enableColors = false;

    this.scene.add( this.effect );

    this.updateCubes( this.effect, 10, this.effectController.numBlobs, 
                                       this.effectController.floor, 
                                       this.effectController.wallx, 
                                       this.effectController.wallz )
  },

  updateCubes() {
    
    let time = this.effectController.time
    this.effect.reset();

    // Resolution
    this.effect.init( Math.floor( this.effectController.resolution ) )
    // Isolation
    if ( this.effectController.isolation !== this.effect.isolation ) {
      this.effect.isolation = this.effectController.isolation;
    }

    const subtract = 12;
    const strength = 1.2 / ( ( Math.sqrt( this.effectController.numBlobs ) - 1 ) / 4 + 1 );

    for ( let i = 0; i < this.effectController.numBlobs; i ++ ) {

      const ballx = Math.sin( i + 1.26 * time * ( 1.03 + 0.5 * Math.cos( 0.21 * i ) ) ) * 0.27 + 0.5;
      const bally = Math.abs( Math.cos( i + 1.12 * time * Math.cos( 1.22 + 0.1424 * i ) ) ) * 0.77; // dip into the floor
      const ballz = Math.cos( i + 1.32 * time * 0.1 * Math.sin( ( 0.92 + 0.53 * i ) ) ) * 0.27 + 0.5;

      this.effect.addBall( ballx, bally, ballz, strength, subtract );

    }

    if ( this.effectController.floor ) this.effect.addPlaneY( 2, 12 );
    if ( this.effectController.wallz ) this.effect.addPlaneZ( 2, 12 );
    if ( this.effectController.wallx ) this.effect.addPlaneX( 2, 12 );

    this.effect.update();

  }

}
