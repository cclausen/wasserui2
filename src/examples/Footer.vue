<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <div
              class="text-sm text-center copyright text-muted"
              :class="'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, made by
            Christian Clausen
          </div>
        </div>
        <div class="col-lg-6">
          <ul class="nav nav-footer justify-content-center justify-content-lg-end">
            <li class="nav-item">
              <router-link
                  :to="{ name: Impress }"
                  class="px-0 nav-link font-weight-bold"
                  target="_blank"
              >
                <i
                    class="fa fa-section"
                    :class="'me-sm-2'"
                ></i>
                <span class="d-sm-inline d-none">Impressum</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
