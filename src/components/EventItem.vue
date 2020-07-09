<template>
  <div class="col-12 col-lg-4">
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{event.title}}</h5>
        <p class="card-text">{{event.description}}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Date: {{event.date}}</li>
          <li class="list-group-item">Location: {{event.location}}</li>
          <li class="list-group-item">Host: {{event.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp.js";

export default {
  props: ["event"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
