<template>
  <div>
    <button class="btn btn-danger d-block float-right ml-auto my-3" @click="signOut">Sign Out</button>
    <h1 class="display-4 text-center mb-5">Dashboard</h1>
    <hr>
    <div class="row">
      <div class="col-12">
        <AddEvent/>
      </div>
    </div>
    <hr>
    <div class="row mb-5">
        <EventItem v-for="(event, i) in $store.state.events" :key="i" :event="event"/>
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp.js";
import AddEvent from "./AddEvent.vue";
import EventItem from "./EventItem.vue";

export default {
  data() {
    return {};
  },
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch('setEvents',events);
    });
  }
};
</script>

<style>
</style>
