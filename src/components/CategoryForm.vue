<template>
  <form>
    <label>Name:</label>
    <input v-model="name"></input>
    <label>Description:</label>
    <textarea v-model="description"></textarea>
    <input type="submit"
           :value="actionType"
           class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent submit">
    </input>
  </form>
</template>

<script>
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
