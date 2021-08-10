const { ChainId, Token, WETH, Route, Fetcher } = require("@uniswap/sdk");

const DAI = new Token(
  ChainId.MAINNET,
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  18
);
console.log(DAI.chainId);

// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const init = async () => {
    const pair = await Fetcher.fetchPairData(WETH[DAI.chainId], DAI);
    const route = new Route([pair], WETH[DAI.chainId]);

    console.log(route.midPrice.toSignificant(6)); // 201.306
    console.log(route.midPrice.invert().toSignificant(6)); 
}

init();
