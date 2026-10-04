// Every ad the site can show. Add an entry here and it becomes available to
// <Advertisement ad="key" /> and to the "random" rotation.
//
// An ad with an `image` renders that image. Without one it renders a text
// card built from `pitch` + `brand` in the same shape as the image ads.
export const ADS = {
    pyro: {
        label: "Advertisement",
        href: "https://pyro.host/?ref=GEYS1ZIJ",
        image: "/img/pyro_ad.png",
        alt: "Use code GEYS1ZIJ on Pyro to support us on your first payment.",
        name: "Pyro",
        blurb: "Need a server? Use code GEYS1ZIJ on your first payment and Pyro gives us a cut."
    },
    kofi: {
        label: "Support us",
        // TODO: replace with the real LegitiDevs Ko-fi page
        href: "https://ko-fi.com/legitidevs",
        alt: "Buy LegitiDevs a coffee on Ko-fi.",
        name: "Ko-fi",
        blurb: "Prefer Ko-fi? Tip us there, one-off or monthly.",
        pitch: { before: "buy us a", highlight: "COFFEE", after: "to keep the servers running" },
        brand: { text: "Ko-fi", background: "#72a4f2", color: "#10121d" }
    }
};

export const AD_KEYS = Object.keys(ADS);
