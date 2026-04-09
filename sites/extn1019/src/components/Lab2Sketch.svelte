<script lang="ts">
  import { onMount } from "svelte";

  let container: HTMLDivElement | undefined = $state();

  onMount(async () => {
    const p5 = (await import("p5")).default;
    const { default: lab2 } = await import("../sketches/lab-2.ts");
    const instance = new p5(lab2, container!);
    return () => instance.remove();
  });
</script>

<div bind:this={container} style:width="100%" style:min-height="400px"></div>
