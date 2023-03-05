<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Authors table</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0" aria-describedby="List of persons">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Person</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in persons" :key="person.id">
              <td>
                <p class="text-xs font-weight-bold mb-0">{{person.firstname}} {{person.lastname}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PersonControllerApi } from "@/api/src/index";

export default {
  name: "persons-table",
  data: () => ({
    persons: null,
    personApi: new PersonControllerApi(),
  }),
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.personApi.indexPersons((error, data) => this.persons = data)
    }
  }
};
</script>
