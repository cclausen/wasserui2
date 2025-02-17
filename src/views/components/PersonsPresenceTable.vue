<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Verfügbare Personen</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0" aria-describedby="List of persons">
          <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Person</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Rettungsschwimmer</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="person in activePersons" :key="person.id">
            <td>
              <p class="text-xs font-weight-bold mb-0">{{ person.firstname }} {{ person.lastname }}</p>
            </td>
            <td>
              <p class="text-xs mb-0">{{ person.lifeguard }}</p>
              <i v-if="!person.lifeguard || !validLifeguard(person.lifeguardFrom)"
                 class="fa-solid fa-triangle-exclamation me-2" aria-hidden="true"></i>
            </td>
            <td>
              <div v-if="personPresence[person.id] === undefined || !personPresence[person.id].start"
                   class="btn-group" role="group">
                <button type="button" class="btn btn-success" @click="clickStartPresence(person)">Anwesend</button>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                          aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Nicht einsatzbereit</a></li>
                    <li><a class="dropdown-item" href="#">Krank</a></li>
                    <li><a class="dropdown-item" href="#">Auswärts aktiv</a></li>
                  </ul>
                </div>
              </div>
              <div v-else
                   class="btn-group" role="group">
                <button type="button" class="btn btn-warning" @click="clickStopPresence(person)">Feierabend</button>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                          aria-expanded="false">
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Nicht mehr einsatzbereit</a></li>
                    <li><a class="dropdown-item" href="#">Verletzt</a></li>
                    <li><a class="dropdown-item" href="#">Auswärts aktiv</a></li>
                  </ul>
                </div>
              </div>
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
  PersonControllerApi
} from "@/api/src/index";
import {PresenceControllerApi} from "@/api/src";

export default {
  name: "persons-presence-table",
  data: () => ({
    persons: null,
    personApi: new PersonControllerApi(),
    presenceApi: new PresenceControllerApi(),
    personPresence: {}
  }),
  computed: {
    activePersons() {
      return this.persons?.filter(person => person.status === 'ACTIVE')
    }
  },
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.personApi.indexPersons(
          (error, data) => {
            this.persons = data;
            for (let person of this.persons) {
              this.presenceApi.openPresenceByPerson(person.id, (error, data) => this.personPresence[person.id] = data)
            }
          }
      )
    },
    validLifeguard(date) {
      let twoYearsBefore = new Date();
      twoYearsBefore.setFullYear(twoYearsBefore.getFullYear() - 2);
      return date && twoYearsBefore < date
    },
    clickStartPresence(person) {
      this.presenceApi.startPresence(person.id, (error) => {
        if (error) {
          console.error(error)
        } else {
          this.fetchData()
        }
      })
    },
    clickStopPresence(person) {
      this.presenceApi.stopPresenceByUser(person.id, (error) => {
        if (error) {
          console.error(error)
        } else {
          this.fetchData()
        }
      })
    }
  }
};
</script>
