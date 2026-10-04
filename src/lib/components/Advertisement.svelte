<script>
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import { ADS, AD_KEYS } from "$lib/ads.js";

	// ad: a key from $lib/ads.js, or "random" to pick one per page load
	let { ad = "pyro" } = $props();

	// "random" is resolved on mount so the server and client render agree
	let key = $state(ad === "random" ? null : ad);
	let current = $derived(ADS[key]);

	onMount(() => {
		if (ad === "random") key = AD_KEYS[Math.floor(Math.random() * AD_KEYS.length)];
	});
</script>

<div class="ad">
    <p class="title">{current?.label ?? "Advertisement"}</p>
    <div class="substitute-ad-container">
        {#if current}
            <a class="substitute-ad" href={current.href} target="_blank" rel="noopener sponsored" aria-label={current.alt} in:fade>
                {#if current.image}
                    <img src={current.image} alt={current.alt}/>
                {:else}
                    <div class="text-ad">
                        <div class="pitch">
                            <span>{current.pitch.before}</span>
                            <b style:color={current.brand.background}>{current.pitch.highlight}</b>
                            <span>{current.pitch.after}</span>
                        </div>
                        <div class="brand" style:background-color={current.brand.background} style:color={current.brand.color}>
                            {current.brand.text}
                        </div>
                    </div>
                {/if}
            </a>
        {/if}
    </div>
</div>

<style>
    .ad {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px;
        width: 320px;
        max-width: 100%;
        box-sizing: border-box;
        box-shadow: 0px 5px light-dark(#9FA0AD, #111113);
        background-color: light-dark(#f1f0f5, #2b2b2f);

        p, a {
            margin: 0;
        }

        > .title {
            text-align: center;
            font-size: 1.2em;
            color: light-dark(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5));
        }

        > .substitute-ad-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 10px;
            /* holds the space while a "random" ad is being picked */
            aspect-ratio: 384 / 222;

            .substitute-ad {
                display: block;
                width: 100%;
                height: 100%;
                text-decoration: none;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                margin: 0;
            }

            .text-ad {
                display: grid;
                grid-template-columns: 1fr 1fr;
                width: 100%;
                height: 100%;
                border-radius: 6px;
                overflow: hidden;
                background-color: #0b0b12;
                font-family: "Poppins";

                .pitch {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 12px;
                    color: #fff;
                    font-size: 0.8em;
                    line-height: 1.3;

                    b {
                        font-size: 1.6em;
                        line-height: 1.2;
                    }
                }

                .brand {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 1.8em;
                }
            }
        }
    }
</style>
