<template>
  <div><el-button>xxx</el-button></div>
</template>

<script>
import { Button } from 'element-ui';
export default {
  name: 'Space',
  props: {},
  components: {
    [Button.name]: Button,
  },
};
</script>
<style>
.div {
  color: red;
}
</style>
