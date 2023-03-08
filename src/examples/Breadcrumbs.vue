<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
      :class="`' me-sm-6' ${this.$store.state.isNavFixed ? 'text-dark' : 'text-white' }`"
    >
      <li class="text-sm breadcrumb-item">
        <a
        :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-white'"
         class="opacity-8" href="#">Pages</a>
      </li>
      <li
        class="text-sm breadcrumb-item active"
        :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-white'"
        aria-current="page"
      >
        {{ currentPage }}
      </li>
    </ol>
    <h6 class="mb-0 font-weight-bolder" :class="this.$store.state.isNavFixed ? 'text-dark' : 'text-white'">
      {{ currentPage }}
    </h6>
  </nav>
</template>

<script>
export default {
  name: "breadcrumbs",
  props: {
    currentPage: {
      required: true
    },
    textWhite: {
      type: String
    }
  }
};
</script>
