<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar style="height: 40px" class="text-h5">
        <q-space/>
        Porous medium
        <q-space/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
