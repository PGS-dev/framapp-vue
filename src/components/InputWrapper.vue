<template>
  <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" :type="options.type" :id="options.id" @input="onValidate()">
    <label class="mdl-textfield__label" :for="options.id">{{options.label}}</label>
    <inline-error :state="options.validation" label="Email"></inline-error>
  </div>
</template>

<script>
  export default {
    name: 'InputWrapper',
    props: {
      value: [String, Number],
      options: {
        type: String,
        label: String,
        id: String,
        validation: Object,
      },
      onValidate: Function
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value);
      },
    },
  };

</script>

<style lang="scss" scoped>

</style>
