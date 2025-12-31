<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    import Typography from '$lib/components/typography.svelte';

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div>
    <Typography>hi</Typography>
    {@render children()}
</div>
