<template>
  <q-inner-loading 
            :showing="isLoadingDialogOpen"
            persistent
            transition-duration="500">
            <div 
                class="text-center text-h6 q-my-xs noselect"
                style="width: 100%;">
                <div class="text-center q-my-md">
                  <q-spinner-ios
                    color="primary"
                    size="3em"
                  />
                </div>
                <div class="text-center">{{header}}...</div>
            </div>
  </q-inner-loading>
</template>
<script>
export default {
  name: 'loadingDialog',
  props: ['header'],
  data () {
    return {
      isLoadingDialogOpen: true
    }
  }
}
</script>

<style>
.logo {
  position: relative;
  animation-name: image;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes image {
  0%    {transform: rotate(0deg);}
  25%   {transform: rotate(90deg);}
  50%   {transform: rotate(180deg);}
  75%   {transform: rotate(270deg);}
  100%  {transform: rotate(360deg);}

  /* 0%    {color: black;}
  25%   {color: brown;}
  50%   {color: yellow;}
  75%   {color: blue;}
  100%  {color: green;} */
}
</style>
