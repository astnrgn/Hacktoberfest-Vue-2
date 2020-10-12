<template>
  <footer class="footer">
    <p>Copyrights &copy; {{ year }} All Rights Reserved.</p>
  </footer>
</template>
<script>
export default {
    name: 'Footer',
    computed: {
        year () {
            return new Date().getFullYear()
        }
    }
}
</script>
<style lang="sass" scoped></style>
