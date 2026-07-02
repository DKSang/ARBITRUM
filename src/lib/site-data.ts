import type {
  CaseStudy,
  EcosystemLogo,
  NavGroup,
  ProjectItem,
  StatItem,
} from "@/types";

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "SOLUTIONS",
    items: [
      { label: "FINANCE", href: "/solutions/finance" },
      { label: "GAMING", href: "/solutions/gaming" },
      { label: "CONSUMER", href: "/solutions/consumer" },
    ],
  },
  {
    label: "PRODUCTS",
    items: [
      { label: "ARBITRUM ONE", href: "/build-app" },
      { label: "DEDICATED BLOCKCHAINS", href: "/launch-chain" },
    ],
  },
  {
    label: "WHY ARBITRUM",
    items: [
      { label: "PERFORMANCE", href: "/why-arbitrum/features/performance" },
      { label: "CONFIDENTIALITY", href: "/why-arbitrum/features/confidentiality" },
      { label: "CUSTOMIZATION", href: "/why-arbitrum/features/customization" },
      { label: "COMPLIANCE", href: "/why-arbitrum/features/compliance" },
      { label: "CASE STUDIES", href: "https://blog.arbitrum.io/tag/case-studies/" },
    ],
  },
  {
    label: "DEVELOPERS",
    items: [
      { label: "GET STARTED", href: "https://docs.arbitrum.io/" },
      { label: "CONFIGURE A CHAIN", href: "https://docs.arbitrum.io/launch-arbitrum-chain/overview/introduction" },
      { label: "BUILD AN APP", href: "https://docs.arbitrum.io/#build-decentralized-apps" },
      { label: "BRIDGE", href: "https://portal.arbitrum.io/bridge" },
      { label: "EXPLORER", href: "https://arbiscan.io/" },
      { label: "FAUCET", href: "https://www.alchemy.com/faucets/arbitrum-sepolia" },
      { label: "STATUS", href: "https://status.arbitrum.io/" },
      { label: "GITHUB", href: "https://github.com/OffchainLabs/nitro" },
    ],
  },
  {
    label: "RESOURCES",
    items: [
      { label: "BLOG", href: "https://blog.arbitrum.io/" },
      { label: "PRESS", href: "/press" },
      { label: "TALKS", href: "/talks" },
      { label: "CONTACT US", href: "/contact" },
      { label: "PORTAL", href: "https://portal.arbitrum.io/" },
      { label: "GOVERNANCE", href: "https://docs.arbitrum.foundation/gentle-intro-dao-governance" },
      { label: "FORUM", href: "https://forum.arbitrum.foundation/" },
      { label: "GRANTS", href: "https://arbitrum.foundation/grants" },
      { label: "BRAND KIT", href: "/brand-kit" },
    ],
  },
];

export const HEADER_SOCIALS = [
  { label: "Discord", href: "https://discord.gg/arbitrum", icon: "/discord_icon.svg" },
  { label: "Twitter", href: "https://x.com/arbitrum", icon: "/twitter_icon.svg" },
  { label: "YouTube", href: "https://www.youtube.com/@Arbitrum", icon: "/youtube_icon.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/arbitrum", icon: "/linkedin_icon.svg" },
];

export const FOOTER_SOCIALS = [
  { label: "Discord", href: "https://discord.gg/arbitrum", icon: "/discord_icon.svg" },
  { label: "Twitter", href: "https://x.com/arbitrum", icon: "/twitter_icon.svg" },
  { label: "YouTube", href: "https://www.youtube.com/@Arbitrum", icon: "/youtube_icon.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/arbitrum", icon: "/linkedin_icon.svg" },
  { label: "TikTok", href: "https://www.tiktok.com/@arbitrumofficial", icon: "/tiktok_icon.svg" },
  { label: "Instagram", href: "https://www.instagram.com/arbitrum.io", icon: "/instagram_icon.svg" },
];

export const ECOSYSTEM_MARQUEE: EcosystemLogo[] = [
  { name: "USD.AI", logo: "/assets/usd-ai.webp" },
  { name: "Ostium", logo: "/images/projects/ostium-logo.webp" },
  { name: "Session", logo: "/images/projects/session-logo.webp" },
  { name: "The Beacon", logo: "/images/projects/the-beacon-logo.webp" },
  { name: "Wildcard", logo: "/images/projects/wildcard-logo.webp" },
  { name: "Golden Tides", logo: "/images/projects/golden-tides-logo.webp" },
  { name: "Otherside", logo: "/images/projects/otherside-logo.webp" },
  { name: "USDT0", logo: "/images/projects/usdt0-logo.webp" },
  { name: "Variational", logo: "/images/projects/variational-logo.webp" },
  { name: "USDC", logo: "/assets/usdc.webp" },
  { name: "Uniswap", logo: "/images/projects/uniswap-labs-logo.webp" },
  { name: "Aave", logo: "/images/projects/aave-logo.webp" },
  { name: "Pendle", logo: "/images/projects/pendle-logo.webp" },
  { name: "GMX", logo: "/images/projects/gmx-logo.webp" },
  { name: "Morpho", logo: "/images/projects/morpho-logo.webp" },
  { name: "Robinhood", logo: "/images/orbitchains/robinhood-logo.webp" },
];

export const STATS: StatItem[] = [
  {
    value: "$18B+",
    label: "Total Value Secured",
    description:
      "A testament to the trust and liquidity driving the next era of blockchain innovation.",
    sourceUrl: "https://l2beat.com/scaling/projects/arbitrum/tvs-breakdown",
  },
  {
    value: "123K+",
    label: "Daily Active Wallets",
    description:
      "A steady base of users who return to Arbitrum for their daily onchain activity.",
    sourceUrl: "https://dune.com/entropy_advisors/arbitrum-one-network-overview",
  },
  {
    value: "$11B+",
    label: "Gas Fees Saved",
    description:
      "Low-cost infrastructure keeps value with users, developers, and the companies building the onchain future.",
    sourceUrl: "https://dune.com/entropy_advisors/arbitrum-one-network-overview",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "How Lit Protocol Coordinates Decentralized Key Management with Stylus",
    image: "/images/case-studies/0925_Arbitrum_LitProtocol_Blog_option3.jpg",
    link: "https://blog.arbitrum.io/how-lit-protocol-coordinates-decentralized-key-management-with-stylus/",
  },
  {
    title: "How Variational is Reinventing Derivatives Onchain with Arbitrum",
    image: "/images/case-studies/0825_Variational_CaseStudy_Blog_option1.jpg",
    link: "https://blog.arbitrum.io/how-variational-is-reinventing-derivatives-onchain-with-arbitrum/",
  },
  {
    title: "Robinhood is realizing the crypto vision",
    image: "/images/case-studies/0625_ArbitrumRobinhood_Blog_1600x828--1-.png",
    link: "https://blog.arbitrum.io/robinhood-is-realizing-the-crypto-vision/",
  },
  {
    title: "How Talos is Using Arbitrum to Build the First Fully Autonomous Treasury",
    image: "/images/case-studies/1025_Talos_CaseStudy_Blog.jpg",
    link: "https://blog.arbitrum.io/how-talos-is-using-arbitrum-to-build-the-first-fully-autonomous-treasury/",
  },
  {
    title: "USD.AI: Accessible AI Infra Financing",
    image: "/images/case-studies/0825_USDAI_CaseStudy_Blog_1.jpg",
    link: "https://blog.arbitrum.io/usd-ai-accessible-ai-infra-financing/",
  },
  {
    title: "GMX: An In-Depth Look at Arbitrum's Leading Permissionless Exchange for On-Chain Leverage Trading",
    image: "/images/case-studies/gmx.jpg",
    link: "https://blog.arbitrum.io/gmx-an-in-depth-look-at-arbitrums-leading-permissionless-exchange/",
  },
  {
    title: "El Dorado's Stablecoin-powered SuperApp is Driving Tether Adoption on Arbitrum in LATAM",
    image: "/images/case-studies/5165794889500307030.jpg",
    link: "https://blog.arbitrum.io/el-dorados-stablecoin-powered-superapp/",
  },
  {
    title: "Rho on Arbitrum: Bringing Interest Rate Derivatives Onchain",
    image: "/images/case-studies/rho.jpg",
    link: "https://blog.arbitrum.io/rho-on-arbitrum-bringing-interest-rate-derivatives-onchain/",
  },
];

export const TAB_PROJECTS: Record<"Finance" | "Gaming" | "Consumer", ProjectItem[]> = {
  Finance: [
    { name: "Aave", logo: "/images/projects/aave-logo.webp", description: "Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers.", link: "https://portal.arbitrum.io/?project=aave" },
    { name: "Pendle", logo: "/images/projects/pendle-logo.webp", description: "Pendle enables the permissionless tokenization and trading of yield, unlocking various strategies such as obtaining fixed yield, long crypto yields, or trade yields of any assets on Pendle.", link: "https://portal.arbitrum.io/?project=pendle" },
    { name: "GMX", logo: "/images/projects/gmx-logo.webp", description: "GMX: the on-chain Decentralised Perpetual Exchange with deep liquidity and low fees.", link: "https://portal.arbitrum.io/?project=gmx" },
    { name: "Variational", logo: "/images/projects/variational-logo.webp", description: "The most rewarding place to trade perps. Enjoy zero fees while earning loss refunds, spread discounts, and platform credits from your normal trading activity.", link: "https://portal.arbitrum.io/?project=variational" },
    { name: "Ostium", logo: "/images/projects/ostium-logo.webp", description: "Trade any strategy on any asset: from indices and currencies to metals, energy, and crypto.", link: "https://portal.arbitrum.io/?project=ostium" },
    { name: "Ethereal", logo: "/images/projects/ethereal-logo.webp", description: "Next generation decentralized spot and perpetuals trading powered by USDe.", link: "https://portal.arbitrum.io/?project=ethereal" },
    { name: "USD.AI", logo: "/images/projects/usd-ai-logo.webp", description: "USD.AI is a yield-bearing synthetic dollar protocol backed by GPU mortgages.", link: "https://portal.arbitrum.io/?project=usd-ai" },
    { name: "Morpho", logo: "/images/projects/morpho-logo.webp", description: "Lend and borrow using the most secure, efficient, flexible lending protocol on Arbitrum.", link: "https://portal.arbitrum.io/?project=morpho" },
  ],
  Gaming: [
    { name: "The Beacon", logo: "/images/projects/the-beacon-logo.webp", description: "Dive into The Beacon, a roguelite RPG game in development. Experience the thrilling demo now at play.thebeacon.gg and become part of our growing community!", link: "https://portal.arbitrum.io/?project=the-beacon" },
    { name: "Otherside", logo: "/images/projects/otherside-logo.webp", description: "Where the swamp ends, Otherside begins.", link: "https://portal.arbitrum.io/?project=otherside" },
    { name: "Wildcard", logo: "/images/projects/wildcard-logo.webp", description: "2v2 Collectible Card Action Game where strategy and skill collide. Choose your champion, craft your deck, cast summons, and battle for victory in epic arenas.", link: "https://portal.arbitrum.io/?project=wildcard" },
    { name: "L3E7", logo: "/images/projects/l3e7-logo.webp", description: "World's First 3D LBS (Location-Based Service) Game. Cloning the Whole Earth into a Cyberpunk Metaverse.", link: "https://portal.arbitrum.io/?project=l3e7" },
    { name: "Golden Tides", logo: "/images/projects/golden-tides-logo.webp", description: "Build a crew and set sail to compete against 31 other teams in a quest-packed race for treasure. Plunge into this free-to-play fantasy pirate Adventure MOBA!", link: "https://portal.arbitrum.io/?project=golden-tides" },
    { name: "My Pet Hooligan", logo: "/images/projects/my-pet-hooligan-logo.webp", description: "An interactive entertainment experience from AMGI Studios. Social-action multiplayer game in Early Access! Launching on Xbox.", link: "https://portal.arbitrum.io/?project=my-pet-hooligan" },
    { name: "Hyve", logo: "/images/projects/hyve-logo.webp", description: "Hyve Labs is building rewarding social GameFi experiences that you can play seamlessly across any platform.", link: "https://portal.arbitrum.io/?project=hyve" },
    { name: "RIFTSTORM", logo: "/images/projects/riftstorm-logo.webp", description: "Riftstorm is a co-op looter-shooter with roguelite that charges players with the defense of our world from mythic threats.", link: "https://portal.arbitrum.io/?project=riftstorm" },
  ],
  Consumer: [
    { name: "BlackBird", logo: "/images/projects/blackbird-logo.webp", description: "Rewards, access, and benefits at restaurants you love.", link: "https://portal.arbitrum.io/?project=blackbird" },
    { name: "El Dorado", logo: "/images/projects/el-dorado-logo.webp", description: "La SuperApp de Stablecoins para Latinoamérica.", link: "https://portal.arbitrum.io/?project=el-dorado" },
    { name: "Farcaster", logo: "/images/projects/farcaster-logo.webp", description: "A sufficiently decentralized social network.", link: "https://portal.arbitrum.io/?project=farcaster" },
    { name: "Peanut", logo: "/images/projects/peanut-logo.webp", description: "Peanut is the easiest way to send and receive crypto payments cross-chain via secure links.", link: "https://portal.arbitrum.io/?project=peanut" },
    { name: "Berry", logo: "/images/projects/berry-logo.webp", description: "With Berry, you can invest in stocks and assets you use every day, including ETFs like the S&P 500.", link: "https://portal.arbitrum.io/?project=berry" },
    { name: "OpenSea", logo: "/images/projects/opensea-logo.webp", description: "Buy, sell, & discover the internet of goods.", link: "https://portal.arbitrum.io/?project=opensea" },
    { name: "Forkast", logo: "/images/projects/forkast-logo.webp", description: "Forkast is prediction markets at the intersection of gaming culture, sports betting, and crypto trading.", link: "https://portal.arbitrum.io/?project=forkast" },
    { name: "T-Rex", logo: "/images/orbitchains/t-rex-logo.webp", description: "Purpose-built blockchain for entertainment and culture.", link: "https://portal.arbitrum.io/?orbitChain=t-rex", orbitChain: true },
  ],
};
