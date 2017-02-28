<template>
  <category-form :actionType="actionType"/>
</template>

<script>
  import CategoryForm from './CategoryForm';

  export default {
    name: 'CategoryEdit',
    components: {
      CategoryForm,
    },
    props: {
      actionType: {
        type: String,
        default: 'Submit',
      },
    },
    methods: {},
  };
</script>
