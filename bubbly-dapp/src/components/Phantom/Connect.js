// Phantom Wallet

const getProvider = () => {
    
    if ("solana" in window) {
        const provider = window.solana;
        if (provider.isPhantom) { return provider; }
    }
    window.open("https://phantom.app/", "_blank");
}

function Connect() {

    getProvider();
    window.solana.connect();
    window.solana.on("connect", () => console.log("connected!"));

    console.log(window.solana.publicKey);
}

export default Connect;