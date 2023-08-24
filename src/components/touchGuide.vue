<template>
  <div  v-if="isOpen"
        class="text-center q-pa-md q-mb-lg overflow-hidden absolute-bottom">
        <q-icon name="img:/rotate.svg" style="font-size: 4em"/>
  </div>
</template>
<script>
export default {
name: 'touchGuide',
data () {
  return {
    isOpen: true
  }
},
created(){
  setTimeout(() => {
    this.isOpen = false
  }, 5000)
}
}
</script>
