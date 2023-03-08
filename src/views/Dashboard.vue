<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <wasser-infocard
                title="Anwesende Rettungsschwimmer"
                :value="0"
                percentage="0%"
                iconClass="fa fa-life-ring"
                iconBackground="bg-gradient-danger"
                detail="der verfügbaren Rettungsschwimmer"
                directionReverse
            ></wasser-infocard>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <wasser-infocard
                title="Anwesende Sanitäter"
                :value="availableMedics"
                percentage="100%"
                iconClass="fa fa-kit-medical"
                iconBackground="bg-gradient-danger"
                detail="der verfügbaren Rettungsschwimmer"
                directionReverse
            ></wasser-infocard>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <wasser-infocard
              title="Verfügbare Rettungsschwimmer"
              :value="availableLifeguards"
              percentage="100%"
              iconClass="fa fa-life-ring"
              iconBackground="bg-gradient-danger"
              detail="der Stations-Rettungsschwimmer"
              directionReverse
            ></wasser-infocard>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <wasser-infocard
                title="Verfügbare Sanitäter"
                :value="availableMedics"
                percentage="100%"
                iconClass="fa fa-kit-medical"
                iconBackground="bg-gradient-danger"
                detail="der Stations-Rettungsschwimmer"
                directionReverse
            ></wasser-infocard>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
              <presence-line-chart />
            </div>
          </div>
          <div class="col-lg-5">
            <carousel />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <persons-presence-table />
          </div>
          <div class="col-lg-5">
            <categories-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WasserInfocard from "@/examples/Cards/Card.vue";
import PresenceLineChart from "@/examples/Charts/PresenceLineChart.vue";
import Carousel from "./components/Carousel.vue";
import CategoriesCard from "./components/CategoriesCard.vue";

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";
import {PersonControllerApi} from "@/api/src";
import PersonsPresenceTable from "@/views/components/PersonsPresenceTable.vue";

export default {
  name: "dashboard-default",
  computed: {
    availableLifeguards() {
      return this.persons?.filter((person) => person.status === 'ACTIVE').length;
    },
    availableMedics() {
      return this.persons?.filter((person) => person.medic === 'A' || person.medic === 'B').length;
    },
  },
  data() {
    return {
      personApi: new PersonControllerApi(),
      persons: null,
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  created() {
    // fetch on init
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.personApi.indexPersons((error, persons) => {
        this.persons = persons;
      });
    },
  },
  components: {
    WasserInfocard,
    PresenceLineChart,
    Carousel,
    CategoriesCard,
    PersonsPresenceTable,
  },
};
</script>
