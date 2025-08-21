// ----- Awesome Lists List -----
const SEED_LISTS = [
  {
    "name": "Awesome AI",
    "description": "A general list of resources, libraries, and tools for artificial intelligence.",
    "github": "https://github.com/awesomelistsio/awesome-ai",
    "category": "AI",
    "slug": "awesome-ai"
  },
  {
    "name": "Awesome AI Ethics",
    "description": "Resources and discussions on the ethical implications of AI, including bias, fairness, and transparency.",
    "github": "https://github.com/awesomelistsio/awesome-ai-ethics",
    "category": "AI",
    "slug": "awesome-ai-ethics"
  },
  {
    "name": "Awesome AI for Edge Computing",
    "description": "Tools and frameworks for running AI models on edge devices and IoT.",
    "github": "https://github.com/awesomelistsio/awesome-ai-edge-computing",
    "category": "AI",
    "slug": "awesome-ai-for-edge-computing"
  },
  {
    "name": "Awesome AI in Healthcare",
    "description": "A curated list of tools, frameworks, applications, datasets, and resources for AI in Healthcare.",
    "github": "https://github.com/awesomelistsio/awesome-ai-healthcare",
    "category": "AI",
    "slug": "awesome-ai-in-healthcare"
  },
  {
    "name": "Awesome AI Infrastructure",
    "description": "Resources for building scalable AI infrastructure, including distributed training, MLOps, and model deployment.",
    "github": "https://github.com/awesomelistsio/awesome-ai-infrastructure",
    "category": "AI",
    "slug": "awesome-ai-infrastructure"
  },
  {
    "name": "Awesome AI Research Papers",
    "description": "A curated list of influential AI research papers and academic resources.",
    "github": "https://github.com/awesomelistsio/awesome-ai-research-papers",
    "category": "AI",
    "slug": "awesome-ai-research-papers"
  },
  {
    "name": "Awesome Computer Vision",
    "description": "A list of resources for computer vision, including libraries, frameworks, and datasets.",
    "github": "https://github.com/awesomelistsio/awesome-computer-vision",
    "category": "AI",
    "slug": "awesome-computer-vision"
  },
  {
    "name": "Awesome Deep Learning",
    "description": "A curated collection of resources and frameworks for deep learning and neural networks.",
    "github": "https://github.com/awesomelistsio/awesome-deep-learning",
    "category": "AI",
    "slug": "awesome-deep-learning"
  },
  {
    "name": "Awesome Machine Learning",
    "description": "A comprehensive list of libraries, frameworks, and tools for machine learning.",
    "github": "https://github.com/awesomelistsio/awesome-machine-learning",
    "category": "AI",
    "slug": "awesome-machine-learning"
  },
  {
    "name": "Awesome Natural Language Processing (NLP)",
    "description": "Tools, libraries, and datasets for NLP and text analysis.",
    "github": "https://github.com/awesomelistsio/awesome-nlp",
    "category": "AI",
    "slug": "awesome-natural-language-processing-nlp"
  },
  {
    "name": "Awesome Reinforcement Learning",
    "description": "A collection of tools, frameworks, and research papers for reinforcement learning.",
    "github": "https://github.com/awesomelistsio/awesome-reinforcement-learning",
    "category": "AI",
    "slug": "awesome-reinforcement-learning"
  },
  {
    "name": "Awesome Blogging",
    "description": "A curated list of awesome tools, resources, platforms, and tips for bloggers of all levels.",
    "github": "https://github.com/awesomelistsio/awesome-blogging",
    "category": "Blogging",
    "slug": "awesome-blogging"
  },
  {
    "name": "Awesome Blogging Monetization",
    "description": "A curated list of tools, platforms, strategies, and resources for blog monetization.",
    "github": "https://github.com/awesomelistsio/awesome-blogging-monetization",
    "category": "Blogging",
    "slug": "awesome-blogging-monetization"
  },
  {
    "name": "Awesome Ghost",
    "description": "A curated list of awesome resources, themes, plugins, and tools for the Ghost blogging platform.",
    "github": "https://github.com/awesomelistsio/awesome-ghost",
    "category": "Platforms",
    "slug": "awesome-ghost"
  },
  {
    "name": "Awesome Microblogging",
    "description": "A curated list of tools, platforms, resources, and strategies for microblogging.",
    "github": "https://github.com/awesomelistsio/awesome-microblogging",
    "category": "Blogging",
    "slug": "awesome-microblogging"
  },
  {
    "name": "Awesome Travel Blogging",
    "description": "A curated list of awesome resources, tools, platforms, and tips for travel bloggers.",
    "github": "https://github.com/awesomelistsio/awesome-travel-blogging",
    "category": "Travel",
    "slug": "awesome-travel-blogging"
  },
  {
    "name": "Awesome WordPress",
    "description": "A curated list of resources for WordPress.",
    "github": "https://github.com/awesomelistsio/awesome-wordpress",
    "category": "Platforms",
    "slug": "awesome-wordpress"
  },
  {
    "name": "Awesome Altcoins",
    "description": "A collection of resources, tools, and information for alternative cryptocurrencies beyond Bitcoin and Ethereum.",
    "github": "https://github.com/awesomelistsio/awesome-altcoins",
    "category": "Cryptocurrency",
    "slug": "awesome-altcoins"
  },
  {
    "name": "Awesome Bitcoin",
    "description": "A curated list of tools, libraries, and resources for Bitcoin, the first and most widely used cryptocurrency.",
    "github": "https://github.com/awesomelistsio/awesome-bitcoin",
    "category": "Cryptocurrency",
    "slug": "awesome-bitcoin"
  },
  {
    "name": "Awesome Crypto Exchanges",
    "description": "A list of centralized and decentralized cryptocurrency exchanges, including trading tools and analytics.",
    "github": "https://github.com/awesomelistsio/awesome-crypto-exchanges",
    "category": "Cryptocurrency",
    "slug": "awesome-crypto-exchanges"
  },
  {
    "name": "Awesome Crypto Mining",
    "description": "A collection of resources for cryptocurrency mining, including software, hardware, and mining pools.",
    "github": "https://github.com/awesomelistsio/awesome-crypto-mining",
    "category": "Cryptocurrency",
    "slug": "awesome-crypto-mining"
  },
  {
    "name": "Awesome Crypto Wallets",
    "description": "A curated list of secure and popular cryptocurrency wallets for storing digital assets.",
    "github": "https://github.com/awesomelistsio/awesome-crypto-wallets",
    "category": "Cryptocurrency",
    "slug": "awesome-crypto-wallets"
  },
  {
    "name": "Awesome DeFi",
    "description": "A list of tools, platforms, and resources for the decentralized finance ecosystem.",
    "github": "https://github.com/awesomelistsio/awesome-defi",
    "category": "Cryptocurrency",
    "slug": "awesome-defi"
  },
  {
    "name": "Awesome Ethereum",
    "description": "A comprehensive list of resources, tools, and development frameworks for Ethereum.",
    "github": "https://github.com/awesomelistsio/awesome-ethereum",
    "category": "Cryptocurrency",
    "slug": "awesome-ethereum"
  },
  {
    "name": "Awesome Privacy Coins",
    "description": "Resources and tools focused on privacy-oriented cryptocurrencies (e.g., Monero, Zcash).",
    "github": "https://github.com/awesomelistsio/awesome-privacy-coins",
    "category": "Cryptocurrency",
    "slug": "awesome-privacy-coins"
  },
  {
    "name": "Awesome Smart Contracts",
    "description": "Libraries, tools, and frameworks for developing and auditing smart contracts.",
    "github": "https://github.com/awesomelistsio/awesome-smart-contracts",
    "category": "Cryptocurrency",
    "slug": "awesome-smart-contracts"
  },
  {
    "name": "Awesome Cassandra",
    "description": "A curated list of awesome libraries, tools, frameworks, and resources for Apache Cassandra, a highly scalable, distributed NoSQL database designed for handling large amounts of data across many commodity servers.",
    "github": "https://github.com/awesomelistsio/awesome-cassandra",
    "category": "Databases",
    "slug": "awesome-cassandra"
  },
  {
    "name": "Awesome CouchDB",
    "description": "A curated list of awesome libraries, tools, frameworks, and resources for CouchDB, an open-source NoSQL database known for its ease of use, scalability, and master-master replication.",
    "github": "https://github.com/awesomelistsio/awesome-couchdb",
    "category": "Databases",
    "slug": "awesome-couchdb"
  },
  {
    "name": "Awesome HBase",
    "description": "A curated list of awesome libraries, tools, frameworks, and resources for Apache HBase, a scalable, distributed, and NoSQL database built on top of Hadoop, designed for handling large amounts of data.",
    "github": "https://github.com/awesomelistsio/awesome-hbase",
    "category": "Databases",
    "slug": "awesome-hbase"
  },
  {
    "name": "Awesome MongoDB",
    "description": "A curated list of awesome libraries, tools, frameworks, and resources for MongoDB, a NoSQL document database designed for modern application development.",
    "github": "https://github.com/awesomelistsio/awesome-mongodb",
    "category": "Databases",
    "slug": "awesome-mongodb"
  },
  {
    "name": "Awesome MySQL",
    "description": "A curated list of awesome frameworks, libraries, tools, and resources for MySQL, a popular open-source relational database management system.",
    "github": "https://github.com/awesomelistsio/awesome-mysql",
    "category": "Databases",
    "slug": "awesome-mysql"
  },
  {
    "name": "Awesome PostgreSQL",
    "description": "A curated list of awesome libraries, tools, frameworks, and resources for PostgreSQL, an advanced open-source relational database system known for its performance, extensibility, and SQL compliance.",
    "github": "https://github.com/awesomelistsio/awesome-postgresql",
    "category": "Databases",
    "slug": "awesome-postgresql"
  },
  {
    "name": "Awesome Blockchain Protocols",
    "description": "A list of various blockchain protocols and frameworks, including Layer 1 and Layer 2 solutions.",
    "github": "https://github.com/awesomelistsio/awesome-blockchain-protocols",
    "category": "Decentralized Systems",
    "slug": "awesome-blockchain-protocols"
  },
  {
    "name": "Awesome Consensus Algorithms",
    "description": "A comprehensive list of consensus mechanisms and protocols used in decentralized systems (e.g., Proof of Work, Proof of Stake, Raft, Paxos).",
    "github": "https://github.com/awesomelistsio/awesome-consensus-algorithms",
    "category": "Decentralized Systems",
    "slug": "awesome-consensus-algorithms"
  },
  {
    "name": "Awesome Decentralized Autonomous Organizations (DAOs)",
    "description": "A collection of resources for building and participating in decentralized autonomous organizations.",
    "github": "https://github.com/awesomelistsio/awesome-daos",
    "category": "Decentralized Systems",
    "slug": "awesome-decentralized-autonomous-organizations-daos"
  },
  {
    "name": "Awesome Decentralized Finance (DeFi)",
    "description": "Resources and tools for building and understanding decentralized finance applications.",
    "github": "https://github.com/awesomelistsio/awesome-defi",
    "category": "Cryptocurrency",
    "slug": "awesome-decentralized-finance-defi"
  },
  {
    "name": "Awesome Decentralized Identity (DID)",
    "description": "A list of tools, protocols, and libraries for decentralized identity systems and self-sovereign identity (SSI).",
    "github": "https://github.com/awesomelistsio/awesome-decentralized-identity",
    "category": "Decentralized Systems",
    "slug": "awesome-decentralized-identity-did"
  },
  {
    "name": "Awesome Decentralized Systems",
    "description": "A curated list of tools, protocols, and resources for building decentralized applications and services.",
    "github": "https://github.com/awesomelistsio/awesome-decentralized-systems",
    "category": "Decentralized Systems",
    "slug": "awesome-decentralized-systems"
  },
  {
    "name": "Awesome Distributed Databases",
    "description": "A collection of distributed database technologies and tools, including consensus protocols and replication strategies.",
    "github": "https://github.com/awesomelistsio/awesome-distributed-databases",
    "category": "Databases",
    "slug": "awesome-distributed-databases"
  },
  {
    "name": "Awesome IPFS",
    "description": "A curated list of resources, tools, and libraries for the InterPlanetary File System (IPFS), a protocol for decentralized storage.",
    "github": "https://github.com/awesomelistsio/awesome-ipfs",
    "category": "Decentralized Systems",
    "slug": "awesome-ipfs"
  },
  {
    "name": "Awesome Peer-to-Peer (P2P) Networks",
    "description": "Resources and tools for building and understanding peer-to-peer networks.",
    "github": "https://github.com/awesomelistsio/awesome-p2p-networks",
    "category": "Decentralized Systems",
    "slug": "awesome-peer-to-peer-p2p-networks"
  },
  {
    "name": "Awesome Web3 Development",
    "description": "Tools, frameworks, and resources for building decentralized applications (dApps) using Web3 technologies.",
    "github": "https://github.com/awesomelistsio/awesome-web3-development",
    "category": "Decentralized Systems",
    "slug": "awesome-web3-development"
  },
  {
    "name": "Awesome Content Marketing",
    "description": "A curated list of tools, platforms, strategies, and resources for content marketing.",
    "github": "https://github.com/awesomelistsio/awesome-content-marketing",
    "category": "Digital Marketing",
    "slug": "awesome-content-marketing"
  },
  {
    "name": "Awesome Email Marketing",
    "description": "A curated list of tools, platforms, strategies, and resources for email marketing.",
    "github": "https://github.com/awesomelistsio/awesome-email-marketing",
    "category": "Digital Marketing",
    "slug": "awesome-email-marketing"
  },
  {
    "name": "Awesome SEO",
    "description": "A curated list of awesome SEO resources and tips to help you improve your website's search engine optimization.",
    "github": "https://github.com/awesomelistsio/awesome-seo",
    "category": "Digital Marketing",
    "slug": "awesome-seo"
  },
  {
    "name": "Awesome Social Media",
    "description": "A curated list of resources and tips to level up your social media game!",
    "github": "https://github.com/awesomelistsio/awesome-social-media",
    "category": "Digital Marketing",
    "slug": "awesome-social-media"
  },
  {
    "name": "Awesome Aerospace Engineering",
    "description": "A curated list of tools, frameworks, resources, and educational content for aerospace engineering.",
    "github": "https://github.com/awesomelistsio/awesome-aerospace-engineering",
    "category": "Engineering",
    "slug": "awesome-aerospace-engineering"
  },
  {
    "name": "Awesome Civil Engineering",
    "description": "A curated list of tools, frameworks, resources, and educational content for civil engineering.",
    "github": "https://github.com/awesomelistsio/awesome-civil-engineering",
    "category": "Engineering",
    "slug": "awesome-civil-engineering"
  },
  {
    "name": "Awesome Drone Engineers",
    "description": "A curated list of resources, tools, and communities for drone engineers.",
    "github": "https://github.com/awesomelistsio/awesome-drone-engineers",
    "category": "Engineering",
    "slug": "awesome-drone-engineers"
  },
  {
    "name": "Awesome Environmental Engineering",
    "description": "A curated list of tools, frameworks, resources, and educational content for environmental engineering.",
    "github": "https://github.com/awesomelistsio/awesome-environmental-engineering",
    "category": "Engineering",
    "slug": "awesome-environmental-engineering"
  },
  {
    "name": "Awesome Mechanical Engineering",
    "description": "A curated list of tools, platforms, resources, and educational content for mechanical engineering.",
    "github": "https://github.com/awesomelistsio/awesome-mechanical-engineering",
    "category": "Engineering",
    "slug": "awesome-mechanical-engineering"
  },
  {
    "name": "Awesome Robotics",
    "description": "A curated list of tools, frameworks, libraries, and resources for robotics.",
    "github": "https://github.com/awesomelistsio/awesome-robotics",
    "category": "Engineering",
    "slug": "awesome-robotics"
  },
  {
    "name": "Awesome Electron",
    "description": "A curated list of awesome resources for developing applications with Electron, a framework that allows you to build cross-platform desktop apps using web technologies.",
    "github": "https://github.com/awesomelistsio/awesome-electron",
    "category": "Frameworks",
    "slug": "awesome-electron"
  },
  {
    "name": "Awesome Game Engines",
    "description": "A curated list of game engines, frameworks, tools, and resources for game development.",
    "github": "https://github.com/awesomelistsio/awesome-game-engines",
    "category": "Gaming Development",
    "slug": "awesome-game-engines"
  },
  {
    "name": "Awesome Computational Mathematics",
    "description": "A curated list of tools, frameworks, libraries, and educational resources for computational mathematics.",
    "github": "https://github.com/awesomelistsio/awesome-computational-mathematics",
    "category": "Mathematics",
    "slug": "awesome-computational-mathematics"
  },
  {
    "name": "Awesome Open Source Math Tools",
    "description": "A curated list of open-source tools, libraries, and resources for mathematical computations.",
    "github": "https://github.com/awesomelistsio/awesome-open-source-math-tools",
    "category": "Mathematics",
    "slug": "awesome-open-source-math-tools"
  },
  {
    "name": "Awesome Audiovisual",
    "description": "A curated list of awesome tools, libraries, frameworks, and resources for working with audiovisual content, including video editing, audio processing, streaming, and multimedia applications.",
    "github": "https://github.com/awesomelistsio/awesome-audiovisual",
    "category": "Media",
    "slug": "awesome-audiovisual"
  },
  {
    "name": "Awesome FFmpeg",
    "description": "A curated list of awesome tools, libraries, guides, and resources for FFmpeg, a complete, cross-platform solution to record, convert, and stream audio and video.",
    "github": "https://github.com/awesomelistsio/awesome-ffmpeg",
    "category": "Media",
    "slug": "awesome-ffmpeg"
  },
  {
    "name": "Awesome Podcasting Tools",
    "description": "A curated list of tools, platforms, resources, and tips for podcasting.",
    "github": "https://github.com/awesomelistsio/awesome-podcasting-tools",
    "category": "Media",
    "slug": "awesome-podcasting-tools"
  },
  {
    "name": "Awesome Node.js",
    "description": "A curated list of awesome Node.js packages and resources to enhance your development experience.",
    "github": "https://github.com/awesomelistsio/awesome-nodejs",
    "category": "Programming",
    "slug": "awesome-node-js"
  },
  {
    "name": "Awesome Quantum Programming Frameworks",
    "description": "A curated list of frameworks, tools, libraries, and resources for quantum programming.",
    "github": "https://github.com/awesomelistsio/awesome-quantum-programming-frameworks",
    "category": "Quantum Computing",
    "slug": "awesome-quantum-programming-frameworks"
  },
  {
    "name": "Awesome Neuroscience",
    "description": "A curated list of tools, frameworks, datasets, educational resources, and community links for neuroscience.",
    "github": "https://github.com/awesomelistsio/awesome-neuroscience",
    "category": "Science",
    "slug": "awesome-neuroscience"
  },
  {
    "name": "Awesome Open Science",
    "description": "A curated list of tools, platforms, resources, and communities that promote open science.",
    "github": "https://github.com/awesomelistsio/awesome-open-science",
    "category": "Science",
    "slug": "awesome-open-science"
  },
  {
    "name": "Awesome Green Cloud Computing",
    "description": "A curated list of awesome tools, resources, frameworks, and educational content focused on Green Cloud Computing.",
    "github": "https://github.com/awesomelistsio/awesome-green-cloud-computing",
    "category": "Sustainability",
    "slug": "awesome-green-cloud-computing"
  },
  {
    "name": "Awesome Open Source Space Data APIs",
    "description": "A curated list of open source APIs, tools, and resources for accessing and analyzing space-related data.",
    "github": "https://github.com/awesomelistsio/awesome-open-source-space-data-apis",
    "category": "Space Technology",
    "slug": "awesome-open-source-space-data-apis"
  },
  {
    "name": "Awesome Digital Nomads",
    "description": "A curated list of awesome resources, tools, communities, and tips for digital nomads who want to embrace a location-independent lifestyle.",
    "github": "https://github.com/awesomelistsio/awesome-digital-nomads",
    "category": "Travel",
    "slug": "awesome-digital-nomads"
  },
  {
    "name": "Awesome Travel Hacking",
    "description": "A curated list of awesome resources, tools, and strategies for travel hacking, designed to help you save money, earn points and miles, and travel the world for less.",
    "github": "https://github.com/awesomelistsio/awesome-travel-hacking",
    "category": "Travel",
    "slug": "awesome-travel-hacking"
  },
  {
    "name": "Awesome Web Accessibility",
    "description": "A curated list of awesome resources, tools, and tips to improve web accessibility.",
    "github": "https://github.com/awesomelistsio/awesome-web-accessibility",
    "category": "Web Optimization",
    "slug": "awesome-web-accessibility"
  },
  {
    "name": "Awesome Web Performance",
    "description": "A curated list of awesome resources, tools, and tips to improve web performance.",
    "github": "https://github.com/awesomelistsio/awesome-web-performance",
    "category": "Web Optimization",
    "slug": "awesome-web-performance"
  },
  {
    "name": "Awesome ColdFusion",
    "description": "A curated list of awesome ColdFusion resources and tips for developers.",
    "github": "https://github.com/awesomelistsio/awesome-coldfusion",
    "category": "Programming",
    "slug": "awesome-coldfusion"
  },
  {
    "name": "Awesome Erlang",
    "description": "A curated list of awesome frameworks, libraries, tools, and resources for Erlang programming.",
    "github": "https://github.com/awesomelistsio/awesome-erlang",
    "category": "Programming",
    "slug": "awesome-erlang"
  },
  {
    "name": "Awesome Go",
    "description": "A curated list of awesome Go resources and tips to help you become a more productive and proficient Go developer.",
    "github": "https://github.com/awesomelistsio/awesome-go",
    "category": "Programming",
    "slug": "awesome-go"
  },
  {
    "name": "Awesome Haskell",
    "description": "A curated list of awesome Haskell resources and tips.",
    "github": "https://github.com/awesomelistsio/awesome-haskell",
    "category": "Programming",
    "slug": "awesome-haskell"
  },
  {
    "name": "Awesome npm",
    "description": "A curated list of awesome npm resources, tips, and best practices.",
    "github": "https://github.com/awesomelistsio/awesome-npm",
    "category": "Programming",
    "slug": "awesome-npm"
  },
  {
    "name": "Awesome OCaml",
    "description": "A curated list of awesome frameworks, libraries, tools, and resources for the OCaml programming language.",
    "github": "https://github.com/awesomelistsio/awesome-ocaml",
    "category": "Programming",
    "slug": "awesome-ocaml"
  },
  {
    "name": "Awesome Java",
    "description": "A curated list of awesome frameworks, libraries, tools, and resources for Java programming.",
    "github": "https://github.com/awesomelistsio/awesome-java",
    "category": "Programming",
    "slug": "awesome-java"
  },
  {
    "name": "Awesome Julia",
    "description": "A curated list of awesome resources, libraries, tools, and tips for Julia programming.",
    "github": "https://github.com/awesomelistsio/awesome-julia",
    "category": "Programming",
    "slug": "awesome-julia"
  },
  {
    "name": "Awesome Kotlin",
    "description": "A curated list of awesome tools, libraries, frameworks, and resources for Kotlin.",
    "github": "https://github.com/awesomelistsio/awesome-kotlin",
    "category": "Programming",
    "slug": "awesome-kotlin"
  },
  {
    "name": "Awesome Perl",
    "description": "A curated list of awesome frameworks, libraries, tools, and resources for the Perl programming language.",
    "github": "https://github.com/awesomelistsio/awesome-perl",
    "category": "Programming",
    "slug": "awesome-perl"
  },
  {
    "name": "Awesome PureScript",
    "description": "A curated list of awesome PureScript resources, libraries, tools, and tips.",
    "github": "https://github.com/awesomelistsio/awesome-purescript",
    "category": "Programming",
    "slug": "awesome-purescript"
  },
  {
    "name": "Awesome Python",
    "description": "A curated list of awesome frameworks, libraries, tools, and resources for Python programming.",
    "github": "https://github.com/awesomelistsio/awesome-python",
    "category": "Programming",
    "slug": "awesome-python"
  },
  {
    "name": "Awesome R",
    "description": "A curated list of awesome R frameworks, libraries, tools, and resources for data analysis, statistics, and visualization.",
    "github": "https://github.com/awesomelistsio/awesome-r",
    "category": "Programming",
    "slug": "awesome-r"
  },
  {
    "name": "Awesome Ruby",
    "description": "A curated list of awesome Ruby resources, libraries, frameworks, and tips to help you level up your Ruby development skills.",
    "github": "https://github.com/awesomelistsio/awesome-ruby",
    "category": "Programming",
    "slug": "awesome-ruby"
  },
  {
    "name": "Awesome Rust",
    "description": "A curated list of awesome resources and tips for Rust programming language enthusiasts.",
    "github": "https://github.com/awesomelistsio/awesome-rust",
    "category": "Programming",
    "slug": "awesome-rust"
  },
  {
    "name": "Awesome Scala",
    "description": "A curated list of awesome resources and tips for Scala development.",
    "github": "https://github.com/awesomelistsio/awesome-scala",
    "category": "Programming",
    "slug": "awesome-scala"
  },
  {
    "name": "Awesome Swift",
    "description": "A curated list of awesome Swift frameworks, libraries, and resources.",
    "github": "https://github.com/awesomelistsio/awesome-swift",
    "category": "Programming",
    "slug": "awesome-swift"
  },
  {
    "name": "Awesome TypeScript",
    "description": "A curated list of awesome tools, libraries, frameworks, and resources for TypeScript.",
    "github": "https://github.com/awesomelistsio/awesome-typescript",
    "category": "Programming",
    "slug": "awesome-typescript"
  },
  {
    "name": "Awesome Crypto Compliance",
    "description": "A curated list of awesome tools, platforms, frameworks, and resources for regulatory compliance.",
    "github": "https://github.com/awesomelistsio/awesome-crypto-compliance",
    "category": "Cryptocurrency",
    "slug": "awesome-crypto-compliance"
  },
  {
    "name": "Awesome Zero-Knowledge Proofs",
    "description": "A curated list of awesome libraries, tools, frameworks, and resources for Zero-Knowledge Proofs (ZKPs).",
    "github": "https://github.com/awesomelistsio/awesome-zero-knowledge-proofs",
    "category": "Decentralized Systems",
    "slug": "awesome-zero-knowledge-proofs"
  },
  {
    "name": "Awesome Climate Change",
    "description": "A curated list of impactful resources, tools, data, frameworks, and organizations dedicated to understanding and addressing climate change.",
    "github": "https://github.com/awesomelistsio/awesome-climate-change",
    "category": "Society",
    "slug": "awesome-climate-change"
  },
  {
    "name": "Awesome G7",
    "description": "A curated list of resources, reports, data, and policy tools related to the Group of Seven (G7).",
    "github": "https://github.com/awesomelistsio/awesome-g7",
    "category": "Politics",
    "slug": "awesome-g7"
  },
  {
    "name": "Awesome Political Science",
    "description": "A curated list of high-quality resources, tools, datasets, and educational content related to political science.",
    "github": "https://github.com/awesomelistsio/awesome-political-science",
    "category": "Politics",
    "slug": "awesome-political-science"
  },
  {
    "name": "Awesome Human Rights",
    "description": "A curated list of high-quality resources, tools, datasets, organizations, and educational content related to human rights.",
    "github": "https://github.com/awesomelistsio/awesome-human-rights",
    "category": "Society",
    "slug": "awesome-human-rights"
  },
  {
    "name": "Awesome Journalism",
    "description": "A curated list of high-quality tools, resources, and organizations for professional, investigative, data, and digital journalism.",
    "github": "https://github.com/awesomelistsio/awesome-journalism",
    "category": "Society",
    "slug": "awesome-journalism"
  },
  {
    "name": "Awesome Open Governance",
    "description": "A curated list of projects, platforms, and APIs for transparency, civic tech, and global governance.",
    "github": "https://github.com/awesomelistsio/awesome-open-governance",
    "category": "Politics",
    "slug": "awesome-open-governance"
  },
  {
    "name": "Awesome Civic Tech",
    "description": "A curated list of open source projects, platforms, communities, and tools advancing civic engagement and public service through technology.",
    "github": "https://github.com/awesomelistsio/awesome-civic-tech",
    "category": "Society",
    "slug": "awesome-civic-tech"
  },
  {
    "name": "Awesome Open Data",
    "description": "A curated list of high-quality open data resources, tools, platforms, and projects across domains.",
    "github": "https://github.com/awesomelistsio/awesome-open-data",
    "category": "Society",
    "slug": "awesome-open-data"
  }
];

// ----- State -----
const FAVORITES_KEY = "al_favorites_v1";
const THEME_KEY = "al_theme";
const state = {
  query: "",
  sort: "name", // name | updated (reserved)
  selectedCategories: new Set(),
  favorites: new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]")),
  activeTab: "all" // all | favourites
};

// ----- Elements -----
const $year = document.getElementById("year");
const $search = document.getElementById("search");
const $sort = document.getElementById("sort");
const $clearFilters = document.getElementById("clearFilters");
const $categories = document.getElementById("categories");
const $tabAll = document.getElementById("tabAll");
const $tabFav = document.getElementById("tabFav");
const $grid = document.getElementById("grid");
const $empty = document.getElementById("empty");
const $modeToggle = document.getElementById("modeToggle");
const $modeIcon = document.getElementById("modeIcon");
$year.textContent = new Date().getFullYear();

// ----- Theme -----
function applySavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
    $modeIcon.textContent = "☀️";
    $modeToggle.lastElementChild.textContent = "Light";
  } else {
    document.documentElement.classList.remove("dark");
    $modeIcon.textContent = "🌙";
    $modeToggle.lastElementChild.textContent = "Dark";
  }
}
applySavedTheme();
$modeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  applySavedTheme();
});

// ----- Helpers -----
const toast = (msg => {
  let t, el;
  return (m) => {
    clearTimeout(t);
    if (!el) {
      el = document.createElement("div");
      el.id = "toaster";
      el.className = "fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-black/70 text-white text-sm";
      document.body.appendChild(el);
    }
    el.textContent = m;
    el.style.opacity = "1";
    t = setTimeout(() => el.style.opacity = "0", 1400);
  };
})();

async function shareLink(title, url) {
  try {
    if (navigator.share) return void (await navigator.share({ title, url }));
  } catch {}
  try {
    await navigator.clipboard.writeText(url);
    toast("Link copied to clipboard");
  } catch {
    toast("Could not share: your browser blocked it");
  }
}

// ----- Categories -----
const categories = [...new Set(SEED_LISTS.map(l => l.category))].sort();
function renderCategoryChips() {
  $categories.innerHTML = "";
  categories.forEach(cat => {
    const active = state.selectedCategories.has(cat);
    const btn = document.createElement("button");
    btn.className = `px-3 py-1 rounded-full text-sm border ${active ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-800" : "border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"}`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      if (state.selectedCategories.has(cat)) state.selectedCategories.delete(cat);
      else state.selectedCategories.add(cat);
      render();
    });
    $categories.appendChild(btn);
  });
}

// ----- Filters & Sorting & Search -----
$search.addEventListener("input", e => { state.query = e.target.value.trim().toLowerCase(); render(); });
$sort.addEventListener("change", e => { state.sort = e.target.value; render(); });
$clearFilters.addEventListener("click", () => {
  state.selectedCategories.clear(); state.query = ""; state.sort = "name";
  $search.value = ""; $sort.value = "name"; render();
});

// ----- Tabs -----
function setActiveTab(tab) {
  state.activeTab = tab;
  [$tabAll, $tabFav].forEach(b => b.classList.remove("bg-slate-100","dark:bg-slate-700/60"));
  (tab === "all" ? $tabAll : $tabFav).classList.add("bg-slate-100","dark:bg-slate-700/60");
  render();
}
$tabAll.addEventListener("click", () => setActiveTab("all"));
$tabFav.addEventListener("click", () => setActiveTab("favourites"));

// ----- Render -----
function render() {
  renderCategoryChips();

  const q = state.query;
  let items = SEED_LISTS.filter(l => {
    const matchesQuery = !q || [l.name, l.description].join(" ").toLowerCase().includes(q);
    const matchesCategory = state.selectedCategories.size === 0 || state.selectedCategories.has(l.category);
    const matchesTab = state.activeTab === "all" || state.favorites.has(l.slug);
    return matchesQuery && matchesCategory && matchesTab;
  });

  switch (state.sort) {
    case "name": items.sort((a, b) => a.name.localeCompare(b.name)); break;
    case "updated": items.sort((a,b) => a.name.localeCompare(b.name)); break;
    default: items.sort((a, b) => a.name.localeCompare(b.name));
  }

  $grid.innerHTML = "";
  if (!items.length) return void $empty.classList.remove("hidden"); else $empty.classList.add("hidden");

  items.forEach(l => {
    const isFav = state.favorites.has(l.slug);
    const card = document.createElement("div");
    card.className = "card h-full dark:shadow-none";
    card.innerHTML = `
      <div class="p-5">
        <div class="flex items-start justify-between gap-2">
          <h3 class="text-lg leading-tight font-semibold">${l.name}</h3>
          <span class="badge">${l.category}</span>
        </div>
        <p class="mt-3 text-sm text-slate-700 leading-relaxed dark:text-slate-300">${l.description}</p>
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button class="btn fav-btn ${isFav ? 'ring-1 ring-emerald-200' : ''}" data-slug="${l.slug}" aria-pressed="${isFav}">
              ${isFav ? '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.21l8.2-1.192z"/></svg>' :
                         '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15 9 22 9 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9 9 9 12 2"/></svg>'}
              <span>${isFav ? 'Favourited' : 'Favourite'}</span>
            </button>
            <button class="btn btn-ghost share-btn" data-title="${encodeURIComponent(l.name)}" data-url="${encodeURIComponent(l.github)}">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49"/></svg>
              <span>Share</span>
            </button>
          </div>
          <a class="btn btn-primary" href="${l.github}" target="_blank" rel="noreferrer">
            <svg class="h-4 w-4" role="img" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297a12 12 0 0 0-3.79 23.39c.6.111.82-.26.82-.577v-2.02c-3.338.726-4.042-1.61-4.042-1.61-.546-1.389-1.333-1.76-1.333-1.76-1.09-.745.083-.73.083-.73 1.204.084 1.84 1.237 1.84 1.237 1.072 1.836 2.813 1.305 3.5.998.108-.777.42-1.305.763-1.605-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.552 3.299-1.23 3.299-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.805 5.625-5.477 5.922.431.372.815 1.103.815 2.223v3.293c0 .319.218.693.825.576A12 12 0 0 0 12 .297z"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    `;

    card.querySelector(".fav-btn").addEventListener("click", (e) => {
      const slug = e.currentTarget.getAttribute("data-slug");
      if (state.favorites.has(slug)) state.favorites.delete(slug);
      else state.favorites.add(slug);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...state.favorites]));
      render();
    });
    card.querySelector(".share-btn").addEventListener("click", (e) => {
      const title = decodeURIComponent(e.currentTarget.getAttribute("data-title"));
      const url = decodeURIComponent(e.currentTarget.getAttribute("data-url"));
      shareLink(title, url);
    });
    $grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});
