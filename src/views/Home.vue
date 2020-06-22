<template>
  <div class="home">
    <button class="cta" @click="showRandomEvent" v-if="!modalShow">Show event</button>
    <Event :event="event" :modalShow="modalShow" @closeModal="modalShow = false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Event from '@/components/Event.vue'

export default {
  name: 'Home',
  data(){
    return{
      modalShow: false,
      event: {}
    }
  },
  computed:{
    events(){
      return this.$store.getters.events
    }
  },
  components: {
    Event
  },
  methods:{
    showRandomEvent(){
      let eventIndex = Math.floor(Math.random() * this.events.length);
      this.event = this.events[eventIndex]
      this.modalShow = true
    }
  }
}
</script>
