<template> 
    <section class="section">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h2 class="title">Hello, {{profile.firstName}}  {{profile.lastName}}!</h2>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters({
    profile: 'user/profile',
  }),
  components: {
  },
})
export default class DashboardHome extends Vue {
}
</script>
