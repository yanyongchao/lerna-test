// catButton 的type属性 示例
<template>
  <!-- 注意这里代码必须再包裹一层div，否则会解析报错 -->
  <div>
    <el-button text="default">2</el-button>
    <el-button text="primary" type="primary">3</el-button>
    <el-button text="success" type="success">4</el-button>
    <el-button text="info" type="info">5</el-button>
    <el-button text="warning" type="warning">6</el-button>
    <el-button text="danger" type="danger">7</el-button>
    <el-button text="text" type="text">7</el-button>
  </div>
</template>
<script>
export default {};
</script>
