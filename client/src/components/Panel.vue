<template>
      <div class="container mt-5">
        <h1 class="display-4 mb-4 text-primary font-weight-bold">{{title}}</h1>
        <slot>
            No slot Content
        </slot>
    </div>
  </template>
<script>
export default{
  props: [
    'title'
  ]
}

</script>

<style>
</style>
