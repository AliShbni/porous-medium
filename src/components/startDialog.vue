<template>
    <q-inner-loading
      :showing="isStartDialogOpen"
      transition-duration="500"
      class="text-h4 text-weight-bold text-white noselect"
      style="background-color: #000f92; z-index: 100;">
      <div class="text-center q-my-md">
        <q-spinner-grid
          color="white"
          size="2em"
        />
      </div>
      <div class="text-center">Welcome to Porous Medium Simulator</div>
  </q-inner-loading>
</template>
<script>
export default {
  name: 'startDialog',
  props: ['isStartDialogOpen']
}
</script>