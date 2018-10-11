<template>
  <div id="app">

    <message>Hello There</message>
    <message>Hello You!</message>
    <clicker>Button</clicker>
    
  </div>
</template>

<script>
import Message from './components/message.vue';
import Clicker from './components/clicker.vue';

export default {

  name: 'app',
  components: { Message, Clicker },
  
}
</script>

<style>

</style>
