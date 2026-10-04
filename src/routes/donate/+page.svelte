<script>
  import Advertisement from "$lib/components/Advertisement.svelte";
  import { ADS } from "$lib/ads.js";

  const otherWays = ["kofi", "pyro"];
</script>

<svelte:head>
  <script async src="https://js.stripe.com/v3/buy-button.js"></script>
</svelte:head>

<div class="main-container">
  <div class="hero">
    <div class="hero-inner">
      <div class="pitch">
        <h1>Donate</h1>
        <p class="lead">LegitiDevs is run by the community, and everything we host costs money to keep online.</p>
        <p>Your <b>donations keep our API, website, and other services running smooth</b>, without crashes or downtime.</p>
        <ul>
          <li>Pays for the servers behind the API and World Browser</li>
          <li>Keeps this website and our domains online</li>
          <li>Lets us keep putting time into new projects</li>
        </ul>
        <p class="secondary">If you can donate, please do. Every contribution counts, whatever the size.</p>
      </div>

      <div class="checkout">
        <stripe-buy-button
          buy-button-id="buy_btn_1SAw0pLRpHOhXNRWdM0q4Fvu"
          publishable-key="pk_live_51RGrIELRpHOhXNRWOMvF04pYYklQD1obIUTyjB3wrwz1ug1MpTPD6zK8ZhClXTcVb1RXj6N0Ygqd5g955Cem25jz00ua8bNTSA"
        >
        </stripe-buy-button>
        <p class="secondary">Secure checkout through Stripe. You pick the amount.</p>
      </div>
    </div>
  </div>

  <div class="other-ways">
    <h2>Other ways to support us</h2>
    <div class="ways">
      {#each otherWays as key}
        <div class="way">
          <Advertisement ad={key} />
          <p><b>{ADS[key].name}</b> &mdash; {ADS[key].blurb}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .main-container {
    display: flex;
    flex-direction: column;
    background-color: light-dark(var(--main-light), var(--main-dark));
    color: light-dark(var(--text-main-light), var(--text-main-dark));
  }

  .hero {
    display: flex;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/img/lobby.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 60px 20px;
  }

  .hero-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    max-width: 1100px;
  }

  .pitch {
    flex: 1 1 420px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    color: #fff;
    padding: 30px;
    font-size: 1.15em;
    line-height: 1.6;

    h1 {
      align-items: flex-start;
      margin: 0 0 40px 0;

      &::after {
        background-color: var(--accent);
        width: 100%;
      }
    }

    p {
      margin: 0 0 15px 0;
    }

    .lead {
      font-size: 1.25em;
      line-height: 1.4;
    }

    ul {
      background-color: rgba(255, 255, 255, 0.08);
      margin-block: 0 15px;
      padding: 10px 10px 10px 30px;
    }

    .secondary {
      margin-bottom: 0;
      opacity: 0.75;
    }
  }

  .checkout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 0 1 320px;

    .secondary {
      margin: 0;
      color: #fff;
      font-size: 0.85em;
      text-align: center;
      opacity: 0.85;
    }
  }

  .other-ways {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px 60px 20px;

    h2 {
      margin-bottom: 30px;
      text-align: center;
    }

    .ways {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    .way {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 320px;
      max-width: 100%;

      p {
        margin: 0;
      }
    }
  }
</style>
