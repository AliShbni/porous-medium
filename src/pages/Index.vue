<template>
  <q-page>
    <!-- Setting -->
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        no-swipe-open
        :width="380"
        :breakpoint="1023"
        elevated>
        <setting @closeDrawer="leftDrawerOpen = false"/>
    </q-drawer>
    <!-- Page content -->
    <space
        style="height: calc(100dvh - 40px); width: 100%;"
        class="overflow-hidden"/>
  
    <!-- loading Dialog -->
    <loadingDialog  v-if="isLoading"
                    :header="loadingText" />
  
  </q-page>
  </template>
  
  <script>
  import space from '../components/space'
  import setting from '../components/setting'
  import loadingDialog from '../components/loadingDialog'
  export default {
    name: 'Index',
    components: { space, setting, loadingDialog },
    data () {
      return {
        model: null,
        canOpenRoomEditor: false,
        isLoading: false,
        loadingText: 'Finding 3D model',
        leftDrawerOpen: true
      }
    },
    methods: {
    
    }
  
  }
  </script>
  