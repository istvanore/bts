<template>
  <div class="event-modal__overlay" v-if="modalShow" @click="closeModal">
    <div class="event-modal__wrapper">
      <div class="event-modal">
        <div class="event-modal__title" :style="{backgroundColor:event.color}">
          <h1>{{ event.name}}</h1>
        </div>
        <div class="event-modal__date">
          <p>{{ event.from | moment }} - {{ event.to | moment }}</p>
        </div>
        <div class="event-modal__talent" :style="{backgroundColor:event.color}">
          <div class="talent" v-for="(talent, index) in event.talent" :key="index">
            <h2>{{ talent }}</h2>
          </div>
        </div>
    </div>
    </div>
    
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: "Event",
  data(){
    return{

    }
  },
  props:['event', 'modalShow'],
  methods:{
    closeModal(){
      this.$emit('closeModal')
    }
  },
  filters: {
  moment: function (date) {
    return moment(date).format('MMMM DD');
  }
}

}
</script>

<style>

</style>