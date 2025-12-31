<script lang="ts">
    let { children } = $props();
</script>

<div>
    {@render children()}
</div>

<style>
    div {
        font-family: Arial, sans-serif;
    }
</style>
