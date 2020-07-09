<template>
  <div>
    <h4 class="text-center mb-2">Add an Event <input type="checkbox" v-model="showForm"></h4>
    <div class="row" v-if="showForm">
      <div class="col-12">
        <div>
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
              v-model="event.title"
            >
          </div>

          <div class="form-group">
            <label for="description">description</label>
            <input
              type="text"
              class="form-control"
              id="description"
              placeholder="description"
              v-model="event.description"
            >
          </div>

          <div class="form-group">
            <label for="date">date</label>
            <input
              type="date"
              class="form-control"
              id="date"
              placeholder="date"
              v-model="event.date"
            >
          </div>

          <div class="form-group">
            <label for="location">location</label>
            <input
              type="text"
              class="form-control"
              id="location"
              placeholder="location"
              v-model="event.location"
            >
          </div>

          <button class="btn btn-primary" @click="addEvent">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp.js";

export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      showForm:false,
    };
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    }
  },

};
</script>

<style>
</style>
