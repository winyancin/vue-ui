<template>
  <d-button>按钮</d-button>
  <d-button :loading="loading1" icon="download" @click="loading1 = !loading1">下载</d-button>
  <d-button icon="settings" icon-position="right" 
            :loading="loading2" @click="loading2 = !loading2">图标在右</d-button>
  <d-button icon="loading">loading</d-button>
  <d-button-group>
    <d-button>按钮1</d-button>
    <d-button>按钮2</d-button>
    <d-button>按钮3</d-button>
  </d-button-group>
</template>

<script>
import Button from "../../../src/button";
import ButtonGroup from '../../../src/button-group'
export default {
  name: {
    
  },
  components: {
    "d-button": Button,
    'd-button-group': ButtonGroup
  },
};
</script>

<style></style>
