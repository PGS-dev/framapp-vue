<template>
  <form>
    <label>Name:</label>
    <input v-model="name"/>
    <label>Description:</label>
    <textarea v-model="description"></textarea>
    <input type="submit"
           :value="actionType"
           class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent submit"/>
  </form>
</template>

<script>
  import { actionTypes as categoryActions } from '../store/modules/products';

  export default {
    name: 'CategoryForm',
    data() {
      return {
        name: '',
        description: '',
      };
    },
    props: {
      actionType: {
        type: String,
        default: 'Submit',
      },
    },
    created() {
      if (this.$route.params.id) {
        this.$store.dispatch(categoryActions.GET_CATEGORY, this.$route.params.id);
      }
    },
  };
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  width: 300px;
}
input, textarea {
  margin-bottom: 20px;
}
</style>
