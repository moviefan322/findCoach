<template>
  <base-card>
    <section>
      <h2>Register as a Coach now!</h2>
      <coach-form></coach-form>
    </section>
  </base-card>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm.vue'

export default {
  components: {
    CoachForm
  }
}
</script>
