<template>
  <q-card flat class="q-pa-md">
    <!-- medium Setting -->
    <mediumSetting />
    <!-- material Setting -->
    <materialSetting />
  </q-card>
</template>

<script>
import mediumSetting from './mediumSetting'
import materialSetting from './materialSetting'
export default {
  name: 'setting',
  components: { mediumSetting, materialSetting }
}
</script>
