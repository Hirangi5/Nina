// src/actions/bridge.ts
import {
  createConfig,
  executeRoute,
  getRoutes
} from "@lifi/sdk";

// src/providers/wallet.ts
import { formatUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";

// src/providers/chainConfigs.ts
import {
  mainnet,
  base,
  sepolia,
  bsc,
  arbitrum,
  avalanche,
  polygon,
  optimism,
  cronos,
  gnosis,
  fantom,
  klaytn,
  celo,
  moonbeam,
  aurora,
  harmonyOne,
  moonriver,
  arbitrumNova,
  mantle,
  linea,
  scroll,
  filecoin,
  taiko,
  zksync,
  canto
} from "viem/chains";
var DEFAULT_CHAIN_CONFIGS = {
  ethereum: {
    chainId: 1,
    name: "Ethereum",
    chain: mainnet,
    rpcUrl: "https://eth.llamarpc.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://etherscan.io"
  },
  base: {
    chainId: 8453,
    name: "Base",
    chain: base,
    rpcUrl: "https://base.llamarpc.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://basescan.org"
  },
  sepolia: {
    chainId: 11155111,
    name: "Sepolia",
    chain: sepolia,
    rpcUrl: "https://rpc.sepolia.org",
    nativeCurrency: {
      name: "Sepolia Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://sepolia.etherscan.io"
  },
  bsc: {
    chainId: 56,
    name: "BNB Smart Chain",
    chain: bsc,
    rpcUrl: "https://bsc-dataseed1.binance.org/",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18
    },
    blockExplorerUrl: "https://bscscan.com"
  },
  arbitrum: {
    chainId: 42161,
    name: "Arbitrum One",
    chain: arbitrum,
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://arbiscan.io"
  },
  avalanche: {
    chainId: 43114,
    name: "Avalanche C-Chain",
    chain: avalanche,
    rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18
    },
    blockExplorerUrl: "https://snowtrace.io"
  },
  polygon: {
    chainId: 137,
    name: "Polygon",
    chain: polygon,
    rpcUrl: "https://polygon-rpc.com",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    blockExplorerUrl: "https://polygonscan.com"
  },
  optimism: {
    chainId: 10,
    name: "Optimism",
    chain: optimism,
    rpcUrl: "https://mainnet.optimism.io",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://optimistic.etherscan.io"
  },
  cronos: {
    chainId: 25,
    name: "Cronos",
    chain: cronos,
    rpcUrl: "https://evm.cronos.org",
    nativeCurrency: {
      name: "Cronos",
      symbol: "CRO",
      decimals: 18
    },
    blockExplorerUrl: "https://cronoscan.com"
  },
  gnosis: {
    chainId: 100,
    name: "Gnosis",
    chain: gnosis,
    rpcUrl: "https://rpc.gnosischain.com",
    nativeCurrency: {
      name: "xDAI",
      symbol: "XDAI",
      decimals: 18
    },
    blockExplorerUrl: "https://gnosisscan.io"
  },
  fantom: {
    chainId: 250,
    name: "Fantom",
    chain: fantom,
    rpcUrl: "https://rpc.ftm.tools",
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18
    },
    blockExplorerUrl: "https://ftmscan.com"
  },
  klaytn: {
    chainId: 8217,
    name: "Klaytn",
    chain: klaytn,
    rpcUrl: "https://public-node-api.klaytnapi.com/v1/cypress",
    nativeCurrency: {
      name: "KLAY",
      symbol: "KLAY",
      decimals: 18
    },
    blockExplorerUrl: "https://scope.klaytn.com"
  },
  celo: {
    chainId: 42220,
    name: "Celo",
    chain: celo,
    rpcUrl: "https://forno.celo.org",
    nativeCurrency: {
      name: "Celo",
      symbol: "CELO",
      decimals: 18
    },
    blockExplorerUrl: "https://celoscan.io"
  },
  moonbeam: {
    chainId: 1284,
    name: "Moonbeam",
    chain: moonbeam,
    rpcUrl: "https://rpc.api.moonbeam.network",
    nativeCurrency: {
      name: "Glimmer",
      symbol: "GLMR",
      decimals: 18
    },
    blockExplorerUrl: "https://moonscan.io"
  },
  aurora: {
    chainId: 1313161554,
    name: "Aurora",
    chain: aurora,
    rpcUrl: "https://mainnet.aurora.dev",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://aurorascan.dev"
  },
  harmonyOne: {
    chainId: 16666e5,
    name: "harmonyOne",
    chain: harmonyOne,
    rpcUrl: "https://api.harmonyOne.one",
    nativeCurrency: {
      name: "ONE",
      symbol: "ONE",
      decimals: 18
    },
    blockExplorerUrl: "https://explorer.harmonyOne.one"
  },
  moonriver: {
    chainId: 1285,
    name: "Moonriver",
    chain: moonriver,
    rpcUrl: "https://rpc.api.moonriver.moonbeam.network",
    nativeCurrency: {
      name: "Moonriver",
      symbol: "MOVR",
      decimals: 18
    },
    blockExplorerUrl: "https://moonriver.moonscan.io"
  },
  arbitrumNova: {
    chainId: 42170,
    name: "Arbitrum Nova",
    chain: arbitrumNova,
    rpcUrl: "https://nova.arbitrum.io/rpc",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://nova-explorer.arbitrum.io"
  },
  mantle: {
    chainId: 5e3,
    name: "Mantle",
    chain: mantle,
    rpcUrl: "https://rpc.mantle.xyz",
    nativeCurrency: {
      name: "Mantle",
      symbol: "MNT",
      decimals: 18
    },
    blockExplorerUrl: "https://explorer.mantle.xyz"
  },
  linea: {
    chainId: 59144,
    name: "Linea",
    chain: linea,
    rpcUrl: "https://linea-mainnet.rpc.build",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://lineascan.build"
  },
  scroll: {
    chainId: 534353,
    name: "Scroll Alpha Testnet",
    chain: scroll,
    rpcUrl: "https://alpha-rpc.scroll.io/l2",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://blockscout.scroll.io"
  },
  filecoin: {
    chainId: 314,
    name: "Filecoin",
    chain: filecoin,
    rpcUrl: "https://api.node.glif.io/rpc/v1",
    nativeCurrency: {
      name: "Filecoin",
      symbol: "FIL",
      decimals: 18
    },
    blockExplorerUrl: "https://filfox.info/en"
  },
  taiko: {
    chainId: 167005,
    name: "Taiko (Alpha-3) Testnet",
    chain: taiko,
    rpcUrl: "https://rpc.a3.taiko.xyz",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://explorer.a3.taiko.xyz"
  },
  zksync: {
    chainId: 324,
    name: "zksync Era",
    chain: zksync,
    rpcUrl: "https://mainnet.era.zksync.io",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrl: "https://explorer.zksync.io"
  },
  canto: {
    chainId: 7700,
    name: "Canto",
    chain: canto,
    rpcUrl: "https://canto.slingshot.finance",
    nativeCurrency: {
      name: "CANTO",
      symbol: "CANTO",
      decimals: 18
    },
    blockExplorerUrl: "https://tuber.build"
  }
};
var getChainConfigs = (runtime) => {
  return runtime.character.settings.chains?.evm || DEFAULT_CHAIN_CONFIGS;
};

// src/providers/chainUtils.ts
import { createPublicClient, createWalletClient, http } from "viem";
var createChainClients = (chain, runtime, account) => {
  const chainConfig = DEFAULT_CHAIN_CONFIGS[chain];
  const transport = http(chainConfig.rpcUrl);
  return {
    chain: chainConfig.chain,
    publicClient: createPublicClient({
      chain: chainConfig.chain,
      transport
    }),
    walletClient: createWalletClient({
      chain: chainConfig.chain,
      transport,
      account
    })
  };
};
var initializeChainConfigs = (runtime, account) => {
  return Object.keys(DEFAULT_CHAIN_CONFIGS).reduce(
    (configs, chain) => {
      const supportedChain = chain;
      configs[supportedChain] = createChainClients(
        supportedChain,
        runtime,
        account
      );
      return configs;
    },
    {}
  );
};

// src/providers/wallet.ts
var WalletProvider = class {
  chainConfigs;
  currentChain = "ethereum";
  address;
  runtime;
  constructor(runtime) {
    const privateKey = runtime.getSetting("EVM_PRIVATE_KEY");
    if (!privateKey) throw new Error("EVM_PRIVATE_KEY not configured");
    this.runtime = runtime;
    const account = privateKeyToAccount(privateKey);
    this.address = account.address;
    this.chainConfigs = initializeChainConfigs(runtime, account);
  }
  getAddress() {
    return this.address;
  }
  async getWalletBalance() {
    try {
      const client = this.getPublicClient(this.currentChain);
      const walletClient = this.getWalletClient();
      const balance = await client.getBalance({
        address: walletClient.account.address
      });
      return formatUnits(balance, 18);
    } catch (error) {
      console.error("Error getting wallet balance:", error);
      return null;
    }
  }
  async connect() {
    return this.runtime.getSetting("EVM_PRIVATE_KEY");
  }
  async switchChain(runtime, chain) {
    const walletClient = this.chainConfigs[this.currentChain].walletClient;
    if (!walletClient) throw new Error("Wallet not connected");
    try {
      await walletClient.switchChain({
        id: getChainConfigs(runtime)[chain].chainId
      });
    } catch (error) {
      if (error.code === 4902) {
        console.log(
          "[WalletProvider] Chain not added to wallet (error 4902) - attempting to add chain first"
        );
        await walletClient.addChain({
          chain: {
            ...getChainConfigs(runtime)[chain].chain,
            rpcUrls: {
              default: {
                http: [getChainConfigs(runtime)[chain].rpcUrl]
              },
              public: {
                http: [getChainConfigs(runtime)[chain].rpcUrl]
              }
            }
          }
        });
        await walletClient.switchChain({
          id: getChainConfigs(runtime)[chain].chainId
        });
      } else {
        throw error;
      }
    }
    this.currentChain = chain;
  }
  getPublicClient(chain) {
    return this.chainConfigs[chain].publicClient;
  }
  getWalletClient() {
    const walletClient = this.chainConfigs[this.currentChain].walletClient;
    if (!walletClient) throw new Error("Wallet not connected");
    return walletClient;
  }
  getCurrentChain() {
    return this.currentChain;
  }
  getChainConfig(chain) {
    return getChainConfigs(this.runtime)[chain];
  }
};
var evmWalletProvider = {
  async get(runtime, message, state) {
    if (!runtime.getSetting("EVM_PRIVATE_KEY")) {
      return null;
    }
    try {
      const walletProvider = new WalletProvider(runtime);
      const address = walletProvider.getAddress();
      const balance = await walletProvider.getWalletBalance();
      return `EVM Wallet Address: ${address}
Balance: ${balance} ETH`;
    } catch (error) {
      console.error("Error in EVM wallet provider:", error);
      return null;
    }
  }
};

// src/templates/index.ts
var transferTemplate = `Given the recent messages and wallet information below:

{{recentMessages}}

{{walletInfo}}

Extract the following information about the requested transfer:
- Chain to execute on
- Amount to transfer
- Recipient address
- Token symbol or address (if not native token)

Respond with a JSON markdown block containing only the extracted values:

\`\`\`json
{
    "chain": "ethereum" | "base" | "sepolia" | "bsc" | "arbitrum" | "avalanche" | "polygon" | "optimism" | "cronos" | "gnosis" | "fantom" | "klaytn" | "celo" | "moonbeam" | "aurora" | "harmonyOne" | "moonriver" | "arbitrumNova" | "mantle" | "linea" | "scroll" | "filecoin" | "taiko" | "zksync" | "canto" | null,
    "amount": string | null,
    "toAddress": string | null,
    "token": string | null
}
\`\`\`
`;
var bridgeTemplate = `Given the recent messages and wallet information below:

{{recentMessages}}

{{walletInfo}}

Extract the following information about the requested token bridge:
- Token symbol or address to bridge
- Source chain
- Destination chain
- Amount to bridge
- Destination address (if specified)

Respond with a JSON markdown block containing only the extracted values:

\`\`\`json
{
    "token": string | null,
    "fromChain": "ethereum" | "base" | "sepolia" | "bsc" | "arbitrum" | "avalanche" | "polygon" | "optimism" | "cronos" | "gnosis" | "fantom" | "klaytn" | "celo" | "moonbeam" | "aurora" | "harmonyOne" | "moonriver" | "arbitrumNova" | "mantle" | "linea" | "scroll" | "filecoin" | "taiko" | "zksync" | "canto" | null,
    "toChain": "ethereum" | "base" | "sepolia" | "bsc" | "arbitrum" | "avalanche" | "polygon" | "optimism" | "cronos" | "gnosis" | "fantom" | "klaytn" | "celo" | "moonbeam" | "aurora" | "harmonyOne" | "moonriver" | "arbitrumNova" | "mantle" | "linea" | "scroll" | "filecoin" | "taiko" | "zksync" | "canto" | null,
    "amount": string | null,
    "toAddress": string | null
}
\`\`\`
`;
var swapTemplate = `Given the recent messages and wallet information below:

{{recentMessages}}

{{walletInfo}}

Extract the following information about the requested token swap:
- Input token symbol or address (the token being sold)
- Output token symbol or address (the token being bought)
- Amount to swap
- Chain to execute on

Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined:

\`\`\`json
{
    "inputToken": string | null,
    "outputToken": string | null,
    "amount": string | null,
    "chain": "ethereum" | "base" | "sepolia" | "bsc" | "arbitrum" | "avalanche" | "polygon" | "optimism" | "cronos" | "gnosis" | "fantom" | "klaytn" | "celo" | "moonbeam" | "aurora" | "harmonyOne" | "moonriver" | "arbitrumNova" | "mantle" | "linea" | "scroll" | "filecoin" | "taiko" | "zksync" | "canto" | null,
    "slippage": number | null
}
\`\`\`
`;

// src/actions/bridge.ts
var BridgeAction = class {
  constructor(walletProvider) {
    this.walletProvider = walletProvider;
    this.config = createConfig({
      integrator: "eliza",
      chains: Object.values(
        getChainConfigs(this.walletProvider.runtime)
      ).map((config) => ({
        id: config.chainId,
        name: config.name,
        key: config.name.toLowerCase(),
        chainType: "EVM",
        nativeToken: {
          ...config.nativeCurrency,
          chainId: config.chainId,
          address: "0x0000000000000000000000000000000000000000",
          coinKey: config.nativeCurrency.symbol
        },
        metamask: {
          chainId: `0x${config.chainId.toString(16)}`,
          chainName: config.name,
          nativeCurrency: config.nativeCurrency,
          rpcUrls: [config.rpcUrl],
          blockExplorerUrls: [config.blockExplorerUrl]
        },
        diamondAddress: "0x0000000000000000000000000000000000000000",
        coin: config.nativeCurrency.symbol,
        mainnet: true
      }))
    });
  }
  config;
  async bridge(params) {
    const walletClient = this.walletProvider.getWalletClient();
    const [fromAddress] = await walletClient.getAddresses();
    const routes = await getRoutes({
      fromChainId: getChainConfigs(this.walletProvider.runtime)[params.fromChain].chainId,
      toChainId: getChainConfigs(this.walletProvider.runtime)[params.toChain].chainId,
      fromTokenAddress: params.fromToken,
      toTokenAddress: params.toToken,
      fromAmount: params.amount,
      fromAddress,
      toAddress: params.toAddress || fromAddress
    });
    if (!routes.routes.length) throw new Error("No routes found");
    const execution = await executeRoute(routes.routes[0], this.config);
    const process = execution.steps[0]?.execution?.process[0];
    if (!process?.status || process.status === "FAILED") {
      throw new Error("Transaction failed");
    }
    return {
      hash: process.txHash,
      from: fromAddress,
      to: routes.routes[0].steps[0].estimate.approvalAddress,
      value: BigInt(params.amount),
      chainId: getChainConfigs(this.walletProvider.runtime)[params.fromChain].chainId
    };
  }
};
var bridgeAction = {
  name: "bridge",
  description: "Bridge tokens between different chains",
  handler: async (runtime, message, state, options) => {
    const walletProvider = new WalletProvider(runtime);
    const action = new BridgeAction(walletProvider);
    return action.bridge(options);
  },
  template: bridgeTemplate,
  validate: async (runtime) => {
    const privateKey = runtime.getSetting("EVM_PRIVATE_KEY");
    return typeof privateKey === "string" && privateKey.startsWith("0x");
  },
  examples: [
    [
      {
        user: "user",
        content: {
          text: "Bridge 1 ETH from Ethereum to Base",
          action: "CROSS_CHAIN_TRANSFER"
        }
      }
    ]
  ],
  similes: ["CROSS_CHAIN_TRANSFER", "CHAIN_BRIDGE", "MOVE_CROSS_CHAIN"]
};

// src/actions/swap.ts
import {
  createConfig as createConfig2,
  executeRoute as executeRoute2,
  getRoutes as getRoutes2
} from "@lifi/sdk";
var SwapAction = class {
  constructor(walletProvider) {
    this.walletProvider = walletProvider;
    this.config = createConfig2({
      integrator: "eliza",
      chains: Object.values(
        getChainConfigs(this.walletProvider.runtime)
      ).map((config) => ({
        id: config.chainId,
        name: config.name,
        key: config.name.toLowerCase(),
        chainType: "EVM",
        nativeToken: {
          ...config.nativeCurrency,
          chainId: config.chainId,
          address: "0x0000000000000000000000000000000000000000",
          coinKey: config.nativeCurrency.symbol,
          priceUSD: "0",
          logoURI: "",
          symbol: config.nativeCurrency.symbol,
          decimals: config.nativeCurrency.decimals,
          name: config.nativeCurrency.name
        },
        rpcUrls: {
          public: { http: [config.rpcUrl] }
        },
        blockExplorerUrls: [config.blockExplorerUrl],
        metamask: {
          chainId: `0x${config.chainId.toString(16)}`,
          chainName: config.name,
          nativeCurrency: config.nativeCurrency,
          rpcUrls: [config.rpcUrl],
          blockExplorerUrls: [config.blockExplorerUrl]
        },
        coin: config.nativeCurrency.symbol,
        mainnet: true,
        diamondAddress: "0x0000000000000000000000000000000000000000"
      }))
    });
  }
  config;
  async swap(params) {
    const walletClient = this.walletProvider.getWalletClient();
    const [fromAddress] = await walletClient.getAddresses();
    const routes = await getRoutes2({
      fromChainId: getChainConfigs(this.walletProvider.runtime)[params.chain].chainId,
      toChainId: getChainConfigs(this.walletProvider.runtime)[params.chain].chainId,
      fromTokenAddress: params.fromToken,
      toTokenAddress: params.toToken,
      fromAmount: params.amount,
      fromAddress,
      options: {
        slippage: params.slippage || 0.5,
        order: "RECOMMENDED"
      }
    });
    if (!routes.routes.length) throw new Error("No routes found");
    const execution = await executeRoute2(routes.routes[0], this.config);
    const process = execution.steps[0]?.execution?.process[0];
    if (!process?.status || process.status === "FAILED") {
      throw new Error("Transaction failed");
    }
    return {
      hash: process.txHash,
      from: fromAddress,
      to: routes.routes[0].steps[0].estimate.approvalAddress,
      value: BigInt(params.amount),
      data: process.data,
      chainId: getChainConfigs(this.walletProvider.runtime)[params.chain].chainId
    };
  }
};
var swapAction = {
  name: "swap",
  description: "Swap tokens on the same chain",
  handler: async (runtime, message, state, options, callback) => {
    try {
      const walletProvider = new WalletProvider(runtime);
      const action = new SwapAction(walletProvider);
      return await action.swap(options);
    } catch (error) {
      console.error("Error in swap handler:", error.message);
      if (callback) {
        callback({ text: `Error: ${error.message}` });
      }
      return false;
    }
  },
  template: swapTemplate,
  validate: async (runtime) => {
    const privateKey = runtime.getSetting("EVM_PRIVATE_KEY");
    return typeof privateKey === "string" && privateKey.startsWith("0x");
  },
  examples: [
    [
      {
        user: "user",
        content: {
          text: "Swap 1 ETH for USDC on Base",
          action: "TOKEN_SWAP"
        }
      }
    ]
  ],
  similes: ["TOKEN_SWAP", "EXCHANGE_TOKENS", "TRADE_TOKENS"]
};

// src/actions/transfer.ts
import { parseEther } from "viem";
var TransferAction = class {
  constructor(walletProvider) {
    this.walletProvider = walletProvider;
  }
  async transfer(runtime, params) {
    const walletClient = this.walletProvider.getWalletClient();
    const [fromAddress] = await walletClient.getAddresses();
    await this.walletProvider.switchChain(runtime, params.fromChain);
    try {
      const hash = await walletClient.sendTransaction({
        account: fromAddress,
        to: params.toAddress,
        value: parseEther(params.amount),
        data: params.data,
        kzg: {
          blobToKzgCommitment: function(blob) {
            throw new Error("Function not implemented.");
          },
          computeBlobKzgProof: function(blob, commitment) {
            throw new Error("Function not implemented.");
          }
        },
        chain: void 0
      });
      return {
        hash,
        from: fromAddress,
        to: params.toAddress,
        value: parseEther(params.amount),
        data: params.data
      };
    } catch (error) {
      throw new Error(`Transfer failed: ${error.message}`);
    }
  }
};
var transferAction = {
  name: "transfer",
  description: "Transfer tokens between addresses on the same chain",
  handler: async (runtime, message, state, options) => {
    const walletProvider = new WalletProvider(runtime);
    const action = new TransferAction(walletProvider);
    return action.transfer(runtime, options);
  },
  template: transferTemplate,
  validate: async (runtime) => {
    const privateKey = runtime.getSetting("EVM_PRIVATE_KEY");
    return typeof privateKey === "string" && privateKey.startsWith("0x");
  },
  examples: [
    [
      {
        user: "assistant",
        content: {
          text: "I'll help you transfer 1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
          action: "SEND_TOKENS"
        }
      },
      {
        user: "user",
        content: {
          text: "Transfer 1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
          action: "SEND_TOKENS"
        }
      }
    ]
  ],
  similes: ["SEND_TOKENS", "TOKEN_TRANSFER", "MOVE_TOKENS"]
};

// src/index.ts
var evmPlugin = {
  name: "evm",
  description: "EVM blockchain integration plugin",
  providers: [evmWalletProvider],
  evaluators: [],
  services: [],
  actions: [transferAction, bridgeAction, swapAction]
};
var src_default = evmPlugin;
export {
  BridgeAction,
  SwapAction,
  TransferAction,
  WalletProvider,
  bridgeAction,
  bridgeTemplate,
  src_default as default,
  evmPlugin,
  evmWalletProvider,
  swapAction,
  swapTemplate,
  transferAction,
  transferTemplate
};
//# sourceMappingURL=index.js.map