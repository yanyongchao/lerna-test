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
<style lang="scss">
.div {
  display: flex;
  font-weight: 600;
  color: red;
  background: red;
  span {
    color: blue;
  }
}
</style>
