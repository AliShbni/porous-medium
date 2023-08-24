<template>
  <div id="q-app">
    <!-- startDialog -->
    <startDialog  v-if="isStartDialogOpen"  
                    :isStartDialogOpen="isStartDialogOpen"/>
    <MainLayout  v-else/>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import startDialog from './components/startDialog.vue'
export default {
  name: 'App',
  components: { MainLayout, startDialog },
  data () {
    return {
      isStartDialogOpen: true
    }
  },

  created(){
    setTimeout(()=>{ this.isStartDialogOpen = false }, 2000)
  }

}
</script>
