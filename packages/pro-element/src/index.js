import Space from './Space';

const components = [Space];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default { install };
