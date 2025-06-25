const awesomeLists = [
  {
    title: "Awesome AI",
    description:
      "A general list of resources, libraries, and tools for artificial intelligence.",
    link: "https://github.com/awesomelistsio/awesome-ai",
    category: "AI"
  },
  {
    title: "Awesome AI Ethics",
    description:
      "Resources and discussions on the ethical implications of AI, including bias, fairness, and transparency.",
    link: "https://github.com/awesomelistsio/awesome-ai-ethics",
    category: "AI"
  },
  {
    title: "Awesome AI for Edge Computing",
    description:
      "Tools and frameworks for running AI models on edge devices and IoT.",
    link: "https://github.com/awesomelistsio/awesome-ai-edge-computing",
    category: "AI"
  },
  {
    title: "Awesome AI in Healthcare",
    description:
      "A curated list of tools, frameworks, applications, datasets, and resources for AI in Healthcare.",
    link: "https://github.com/awesomelistsio/awesome-ai-healthcare",
    category: "AI"
  },
  {
    title: "Awesome AI Infrastructure",
    description:
      "Resources for building scalable AI infrastructure, including distributed training, MLOps, and model deployment.",
    link: "https://github.com/awesomelistsio/awesome-ai-infrastructure",
    category: "AI"
  },
  {
    title: "Awesome AI Research Papers",
    description:
      "A curated list of influential AI research papers and academic resources.",
    link: "https://github.com/awesomelistsio/awesome-ai-research-papers",
    category: "AI"
  },
  {
    title: "Awesome Computer Vision",
    description:
      "A list of resources for computer vision, including libraries, frameworks, and datasets.",
    link: "https://github.com/awesomelistsio/awesome-computer-vision",
    category: "AI"
  },
  {
    title: "Awesome Deep Learning",
    description:
      "A curated collection of resources and frameworks for deep learning and neural networks.",
    link: "https://github.com/awesomelistsio/awesome-deep-learning",
    category: "AI"
  },
  {
    title: "Awesome Machine Learning",
    description:
      "A comprehensive list of libraries, frameworks, and tools for machine learning.",
    link: "https://github.com/awesomelistsio/awesome-machine-learning",
    category: "AI"
  },
  {
    title: "Awesome Natural Language Processing (NLP)",
    description: "Tools, libraries, and datasets for NLP and text analysis.",
    link: "https://github.com/awesomelistsio/awesome-nlp",
    category: "AI"
  },
  {
    title: "Awesome Reinforcement Learning",
    description:
      "A collection of tools, frameworks, and research papers for reinforcement learning.",
    link: "https://github.com/awesomelistsio/awesome-reinforcement-learning",
    category: "AI"
  },
  {
    title: "Awesome Blogging",
    description:
      "A curated list of awesome tools, resources, platforms, and tips for bloggers of all levels.",
    link: "https://github.com/awesomelistsio/awesome-blogging",
    category: "Blogging"
  },
  {
    title: "Awesome Blogging Monetization",
    description:
      "A curated list of tools, platforms, strategies, and resources for blog monetization.",
    link: "https://github.com/awesomelistsio/awesome-blogging-monetization",
    category: "Blogging"
  },
  {
    title: "Awesome Ghost",
    description:
      "A curated list of awesome resources, themes, plugins, and tools for the Ghost blogging platform.",
    link: "https://github.com/awesomelistsio/awesome-ghost",
    category: "Platforms"
  },
  {
    title: "Awesome Microblogging",
    description:
      "A curated list of tools, platforms, resources, and strategies for microblogging.",
    link: "https://github.com/awesomelistsio/awesome-microblogging",
    category: "Blogging"
  },
  {
    title: "Awesome Travel Blogging",
    description:
      "A curated list of awesome resources, tools, platforms, and tips for travel bloggers.",
    link: "https://github.com/awesomelistsio/awesome-travel-blogging",
    category: "Travel"
  },
  {
    title: "Awesome WordPress",
    description: "A curated list of resources for WordPress.",
    link: "https://github.com/awesomelistsio/awesome-wordpress",
    category: "Platforms"
  },
  {
    title: "Awesome Altcoins",
    description:
      "A collection of resources, tools, and information for alternative cryptocurrencies beyond Bitcoin and Ethereum.",
    link: "https://github.com/awesomelistsio/awesome-altcoins",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Bitcoin",
    description:
      "A curated list of tools, libraries, and resources for Bitcoin, the first and most widely used cryptocurrency.",
    link: "https://github.com/awesomelistsio/awesome-bitcoin",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Crypto Exchanges",
    description:
      "A list of centralized and decentralized cryptocurrency exchanges, including trading tools and analytics.",
    link: "https://github.com/awesomelistsio/awesome-crypto-exchanges",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Crypto Mining",
    description:
      "A collection of resources for cryptocurrency mining, including software, hardware, and mining pools.",
    link: "https://github.com/awesomelistsio/awesome-crypto-mining",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Crypto Wallets",
    description:
      "A curated list of secure and popular cryptocurrency wallets for storing digital assets.",
    link: "https://github.com/awesomelistsio/awesome-crypto-wallets",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome DeFi",
    description:
      "A list of tools, platforms, and resources for the decentralized finance ecosystem.",
    link: "https://github.com/awesomelistsio/awesome-defi",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Ethereum",
    description:
      "A comprehensive list of resources, tools, and development frameworks for Ethereum.",
    link: "https://github.com/awesomelistsio/awesome-ethereum",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Privacy Coins",
    description:
      "Resources and tools focused on privacy-oriented cryptocurrencies (e.g., Monero, Zcash).",
    link: "https://github.com/awesomelistsio/awesome-privacy-coins",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Smart Contracts",
    description:
      "Libraries, tools, and frameworks for developing and auditing smart contracts.",
    link: "https://github.com/awesomelistsio/awesome-smart-contracts",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Cassandra",
    description:
      "A curated list of awesome libraries, tools, frameworks, and resources for Apache Cassandra, a highly scalable, distributed NoSQL database designed for handling large amounts of data across many commodity servers.",
    link: "https://github.com/awesomelistsio/awesome-cassandra",
    category: "Databases"
  },
  {
    title: "Awesome CouchDB",
    description:
      "A curated list of awesome libraries, tools, frameworks, and resources for CouchDB, an open-source NoSQL database known for its ease of use, scalability, and master-master replication.",
    link: "https://github.com/awesomelistsio/awesome-couchdb",
    category: "Databases"
  },
  {
    title: "Awesome HBase",
    description:
      "A curated list of awesome libraries, tools, frameworks, and resources for Apache HBase, a scalable, distributed, and NoSQL database built on top of Hadoop, designed for handling large amounts of data.",
    link: "https://github.com/awesomelistsio/awesome-hbase",
    category: "Databases"
  },
  {
    title: "Awesome MongoDB",
    description:
      "A curated list of awesome libraries, tools, frameworks, and resources for MongoDB, a NoSQL document database designed for modern application development.",
    link: "https://github.com/awesomelistsio/awesome-mongodb",
    category: "Databases"
  },
  {
    title: "Awesome MySQL",
    description:
      "A curated list of awesome frameworks, libraries, tools, and resources for MySQL, a popular open-source relational database management system.",
    link: "https://github.com/awesomelistsio/awesome-mysql",
    category: "Databases"
  },
  {
    title: "Awesome PostgreSQL",
    description:
      "A curated list of awesome libraries, tools, frameworks, and resources for PostgreSQL, an advanced open-source relational database system known for its performance, extensibility, and SQL compliance.",
    link: "https://github.com/awesomelistsio/awesome-postgresql",
    category: "Databases"
  },
  {
    title: "Awesome Blockchain Protocols",
    description:
      "A list of various blockchain protocols and frameworks, including Layer 1 and Layer 2 solutions.",
    link: "https://github.com/awesomelistsio/awesome-blockchain-protocols",
    category: "Decentralized Systems"
  },
  {
    title: "Awesome Consensus Algorithms",
    description:
      "A comprehensive list of consensus mechanisms and protocols used in decentralized systems (e.g., Proof of Work, Proof of Stake, Raft, Paxos).",
    link: "https://github.com/awesomelistsio/awesome-consensus-algorithms",
    category: "Decentralized Systems"
  },
  {
    title: "Awesome Decentralized Autonomous Organizations (DAOs)",
    description:
      "A collection of resources for building and participating in decentralized autonomous organizations.",
    link: "https://github.com/awesomelistsio/awesome-daos",
    category: "Decentralized Systems"
  },
  {
    title: "Awesome Decentralized Finance (DeFi)",
    description:
      "Resources and tools for building and understanding decentralized finance applications.",
    link: "https://github.com/awesomelistsio/awesome-defi",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Decentralized Identity (DID)",
    description:
      "A list of tools, protocols, and libraries for decentralized identity systems and self-sovereign identity (SSI).",
    link: "https://github.com/awesomelistsio/awesome-decentralized-identity",
    category: "Decentralized Systems"
  },
  {
    title: "Awesome Decentralized Systems",
    description:
      "A curated list of tools, protocols, and resources for building decentralized applications and services.",
    link: "https://github.com/awesomelistsio/awesome-decentralized-systems",
    category: "Decentralized Systems"
  },
  {
    title: "Awesome Distributed Databases",
    description:
      "A collection of distributed database technologies and tools, including consensus protocols and replication strategies.",
    link: "https://github.com/awesomelistsio/awesome-distributed-databases",
    category: "Databases"
  },
  {
    title: "Awesome IPFS",
    description:
      "A curated list of resources, tools, and libraries for the InterPlanetary File System (IPFS), a protocol for decentralized storage.",
    link: "https://github.com/awesomelistsio/awesome-ipfs",
    category: "Decentralized Systems"
  },
  {
    title: "Awesome Peer-to-Peer (P2P) Networks",
    description:
      "Resources and tools for building and understanding peer-to-peer networks.",
    link: "https://github.com/awesomelistsio/awesome-p2p-networks",
    category: "Decentralized Systems"
  },
  {
    title: "Awesome Web3 Development",
    description:
      "Tools, frameworks, and resources for building decentralized applications (dApps) using Web3 technologies.",
    link: "https://github.com/awesomelistsio/awesome-web3-development",
    category: "Decentralized Systems"
  },
  {
    title: "Awesome Content Marketing",
    description:
      "A curated list of tools, platforms, strategies, and resources for content marketing.",
    link: "https://github.com/awesomelistsio/awesome-content-marketing",
    category: "Digital Marketing"
  },
  {
    title: "Awesome Email Marketing",
    description:
      "A curated list of tools, platforms, strategies, and resources for email marketing.",
    link: "https://github.com/awesomelistsio/awesome-email-marketing",
    category: "Digital Marketing"
  },
  {
    title: "Awesome SEO",
    description:
      "A curated list of awesome SEO resources and tips to help you improve your website's search engine optimization.",
    link: "https://github.com/awesomelistsio/awesome-seo",
    category: "Digital Marketing"
  },
  {
    title: "Awesome Social Media",
    description:
      "A curated list of resources and tips to level up your social media game!",
    link: "https://github.com/awesomelistsio/awesome-social-media",
    category: "Digital Marketing"
  },
  {
    title: "Awesome Aerospace Engineering",
    description:
      "A curated list of tools, frameworks, resources, and educational content for aerospace engineering.",
    link: "https://github.com/awesomelistsio/awesome-aerospace-engineering",
    category: "Engineering"
  },
  {
    title: "Awesome Civil Engineering",
    description:
      "A curated list of tools, frameworks, resources, and educational content for civil engineering.",
    link: "https://github.com/awesomelistsio/awesome-civil-engineering",
    category: "Engineering"
  },
  {
    title: "Awesome Drone Engineers",
    description:
      "A curated list of resources, tools, and communities for drone engineers.",
    link: "https://github.com/awesomelistsio/awesome-drone-engineers",
    category: "Engineering"
  },
  {
    title: "Awesome Environmental Engineering",
    description:
      "A curated list of tools, frameworks, resources, and educational content for environmental engineering.",
    link: "https://github.com/awesomelistsio/awesome-environmental-engineering",
    category: "Engineering"
  },
  {
    title: "Awesome Mechanical Engineering",
    description:
      "A curated list of tools, platforms, resources, and educational content for mechanical engineering.",
    link: "https://github.com/awesomelistsio/awesome-mechanical-engineering",
    category: "Engineering"
  },
  {
    title: "Awesome Robotics",
    description:
      "A curated list of tools, frameworks, libraries, and resources for robotics.",
    link: "https://github.com/awesomelistsio/awesome-robotics",
    category: "Engineering"
  },
  {
    title: "Awesome Electron",
    description:
      "A curated list of awesome resources for developing applications with Electron, a framework that allows you to build cross-platform desktop apps using web technologies.",
    link: "https://github.com/awesomelistsio/awesome-electron",
    category: "Frameworks"
  },
  {
    title: "Awesome Game Engines",
    description:
      "A curated list of game engines, frameworks, tools, and resources for game development.",
    link: "https://github.com/awesomelistsio/awesome-game-engines",
    category: "Gaming Development"
  },
  {
    title: "Awesome Computational Mathematics",
    description:
      "A curated list of tools, frameworks, libraries, and educational resources for computational mathematics.",
    link: "https://github.com/awesomelistsio/awesome-computational-mathematics",
    category: "Mathematics"
  },
  {
    title: "Awesome Open Source Math Tools",
    description:
      "A curated list of open-source tools, libraries, and resources for mathematical computations.",
    link: "https://github.com/awesomelistsio/awesome-open-source-math-tools",
    category: "Mathematics"
  },
  {
    title: "Awesome Audiovisual",
    description:
      "A curated list of awesome tools, libraries, frameworks, and resources for working with audiovisual content, including video editing, audio processing, streaming, and multimedia applications.",
    link: "https://github.com/awesomelistsio/awesome-audiovisual",
    category: "Media"
  },
  {
    title: "Awesome FFmpeg",
    description:
      "A curated list of awesome tools, libraries, guides, and resources for FFmpeg, a complete, cross-platform solution to record, convert, and stream audio and video.",
    link: "https://github.com/awesomelistsio/awesome-ffmpeg",
    category: "Media"
  },
  {
    title: "Awesome Podcasting Tools",
    description:
      "A curated list of tools, platforms, resources, and tips for podcasting.",
    link: "https://github.com/awesomelistsio/awesome-podcasting-tools",
    category: "Media"
  },
  {
    title: "Awesome Node.js",
    description:
      "A curated list of awesome Node.js packages and resources to enhance your development experience.",
    link: "https://github.com/awesomelistsio/awesome-nodejs",
    category: "Programming"
  },
  {
    title: "Awesome Quantum Programming Frameworks",
    description:
      "A curated list of frameworks, tools, libraries, and resources for quantum programming.",
    link:
      "https://github.com/awesomelistsio/awesome-quantum-programming-frameworks",
    category: "Quantum Computing"
  },
  {
    title: "Awesome Neuroscience",
    description:
      "A curated list of tools, frameworks, datasets, educational resources, and community links for neuroscience.",
    link: "https://github.com/awesomelistsio/awesome-neuroscience",
    category: "Science"
  },
  {
    title: "Awesome Open Science",
    description:
      "A curated list of tools, platforms, resources, and communities that promote open science.",
    link: "https://github.com/awesomelistsio/awesome-open-science",
    category: "Science"
  },
  {
    title: "Awesome Green Cloud Computing",
    description:
      "A curated list of awesome tools, resources, frameworks, and educational content focused on Green Cloud Computing.",
    link: "https://github.com/awesomelistsio/awesome-green-cloud-computing",
    category: "Sustainability"
  },
  {
    title: "Awesome Open Source Space Data APIs",
    description:
      "A curated list of open source APIs, tools, and resources for accessing and analyzing space-related data.",
    link:
      "https://github.com/awesomelistsio/awesome-open-source-space-data-apis",
    category: "Space Technology"
  },
  {
    title: "Awesome Digital Nomads",
    description:
      "A curated list of awesome resources, tools, communities, and tips for digital nomads who want to embrace a location-independent lifestyle.",
    link: "https://github.com/awesomelistsio/awesome-digital-nomads",
    category: "Travel"
  },
  {
    title: "Awesome Travel Hacking",
    description:
      "A curated list of awesome resources, tools, and strategies for travel hacking, designed to help you save money, earn points and miles, and travel the world for less.",
    link: "https://github.com/awesomelistsio/awesome-travel-hacking",
    category: "Travel"
  },
  {
    title: "Awesome Web Accessibility",
    description:
      "A curated list of awesome resources, tools, and tips to improve web accessibility.",
    link: "https://github.com/awesomelistsio/awesome-web-accessibility",
    category: "Web Optimization"
  },
  {
    title: "Awesome Web Performance",
    description:
      "A curated list of awesome resources, tools, and tips to improve web performance.",
    link: "https://github.com/awesomelistsio/awesome-web-performance",
    category: "Web Optimization"
  },
  {
    title: "Awesome ColdFusion",
    description:
      "A curated list of awesome ColdFusion resources and tips for developers.",
    link: "https://github.com/awesomelistsio/awesome-coldfusion",
    category: "Programming"
  },
  {
    title: "Awesome Erlang",
    description:
      "A curated list of awesome frameworks, libraries, tools, and resources for Erlang programming.",
    link: "https://github.com/awesomelistsio/awesome-erlang",
    category: "Programming"
  },
  {
    title: "Awesome Go",
    description:
      "A curated list of awesome Go resources and tips to help you become a more productive and proficient Go developer.",
    link: "https://github.com/awesomelistsio/awesome-go",
    category: "Programming"
  },
  {
    title: "Awesome Haskell",
    description: "A curated list of awesome Haskell resources and tips.",
    link: "https://github.com/awesomelistsio/awesome-haskell",
    category: "Programming"
  },
  {
    title: "Awesome npm",
    description:
      "A curated list of awesome npm resources, tips, and best practices.",
    link: "https://github.com/awesomelistsio/awesome-npm",
    category: "Programming"
  },
  {
    title: "Awesome OCaml",
    description:
      "A curated list of awesome frameworks, libraries, tools, and resources for the OCaml programming language.",
    link: "https://github.com/awesomelistsio/awesome-ocaml",
    category: "Programming"
  },
  {
    title: "Awesome Java",
    description:
      "A curated list of awesome frameworks, libraries, tools, and resources for Java programming.",
    link: "https://github.com/awesomelistsio/awesome-java",
    category: "Programming"
  },
  {
    title: "Awesome Julia",
    description:
      "A curated list of awesome resources, libraries, tools, and tips for Julia programming.",
    link: "https://github.com/awesomelistsio/awesome-julia",
    category: "Programming"
  },
  {
    title: "Awesome Kotlin",
    description:
      "A curated list of awesome tools, libraries, frameworks, and resources for Kotlin.",
    link: "https://github.com/awesomelistsio/awesome-kotlin",
    category: "Programming"
  },
  {
    title: "Awesome Perl",
    description:
      "A curated list of awesome frameworks, libraries, tools, and resources for the Perl programming language.",
    link: "https://github.com/awesomelistsio/awesome-perl",
    category: "Programming"
  },
  {
    title: "Awesome PureScript",
    description:
      "A curated list of awesome PureScript resources, libraries, tools, and tips.",
    link: "https://github.com/awesomelistsio/awesome-purescript",
    category: "Programming"
  },
  {
    title: "Awesome Python",
    description:
      "A curated list of awesome frameworks, libraries, tools, and resources for Python programming.",
    link: "https://github.com/awesomelistsio/awesome-python",
    category: "Programming"
  },
  {
    title: "Awesome R",
    description:
      "A curated list of awesome R frameworks, libraries, tools, and resources for data analysis, statistics, and visualization.",
    link: "https://github.com/awesomelistsio/awesome-r",
    category: "Programming"
  },
  {
    title: "Awesome Ruby",
    description:
      "A curated list of awesome Ruby resources, libraries, frameworks, and tips to help you level up your Ruby development skills.",
    link: "https://github.com/awesomelistsio/awesome-ruby",
    category: "Programming"
  },
  {
    title: "Awesome Rust",
    description:
      "A curated list of awesome resources and tips for Rust programming language enthusiasts.",
    link: "https://github.com/awesomelistsio/awesome-rust",
    category: "Programming"
  },
  {
    title: "Awesome Scala",
    description:
      "A curated list of awesome resources and tips for Scala development.",
    link: "https://github.com/awesomelistsio/awesome-scala",
    category: "Programming"
  },
  {
    title: "Awesome Swift",
    description:
      "A curated list of awesome Swift frameworks, libraries, and resources.",
    link: "https://github.com/awesomelistsio/awesome-swift",
    category: "Programming"
  },
  {
    title: "Awesome TypeScript",
    description:
      "A curated list of awesome tools, libraries, frameworks, and resources for TypeScript.",
    link: "https://github.com/awesomelistsio/awesome-typescript",
    category: "Programming"
  },
  {
    title: "Awesome Crypto Compliance",
    description:
      "A curated list of awesome tools, platforms, frameworks, and resources for regulatory compliance.",
    link: "https://github.com/awesomelistsio/awesome-crypto-compliance",
    category: "Cryptocurrency"
  },
  {
    title: "Awesome Zero-Knowledge Proofs",
    description:
      "A curated list of awesome libraries, tools, frameworks, and resources for Zero-Knowledge Proofs (ZKPs).",
    link: "https://github.com/awesomelistsio/awesome-zero-knowledge-proofs",
    category: "Decentralized Systems"
  }
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let currentPage = 1;
const itemsPerPage = 12;
let currentView = "all";

function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function toggleFavorite(title) {
  if (favorites.includes(title)) {
    favorites = favorites.filter((fav) => fav !== title);
  } else {
    favorites.push(title);
  }
  saveFavorites();
  displayLists();
}

function shareList(title, link) {
  if (navigator.share) {
    navigator
      .share({
        title: `Check out ${title}`,
        text: `I found this awesome list: ${title}`,
        url: link
      })
      .catch(console.error);
  } else {
    alert("Sharing not supported on this browser.");
  }
}

function displayLists() {
  const grid = document.getElementById("awesomeGrid");
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const categoryValue = document.getElementById("categoryFilter").value;
  const sortOption = document.getElementById("sortOptions").value;

  let dataSource = awesomeLists.filter((list) => {
    const matchesSearch =
      list.title.toLowerCase().includes(searchValue) ||
      list.description.toLowerCase().includes(searchValue);
    const matchesCategory = !categoryValue || list.category === categoryValue;
    return (
      matchesSearch &&
      matchesCategory &&
      (currentView !== "favorites" || favorites.includes(list.title))
    );
  });

  if (sortOption === "title") {
    dataSource.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "newest") {
    dataSource.sort((a, b) => (b.date || 0) - (a.date || 0));
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleLists = dataSource.slice(startIndex, endIndex);

  grid.innerHTML = "";

  if (visibleLists.length === 0) {
    grid.innerHTML = `<p class="text-center text-gray-500">No lists to display.</p>`;
    return;
  }

  visibleLists.forEach((list) => {
    const isFavorited = favorites.includes(list.title);
    const listItem = document.createElement("div");
    listItem.className =
      "p-6 bg-white rounded-lg shadow-md border border-gray-200";
    listItem.innerHTML = `
                    <div class="flex flex-col h-full">
                        <h2 class="text-xl font-semibold mb-2">${
                          list.title
                        }</h2>
                        <p class="mb-2 text-sm text-blue-600">Category: ${
                          list.category
                        }</p>
                        <p class="mb-4 text-gray-700">${list.description}</p>
                        <div class="mt-auto flex justify-between items-center gap-2">
                            <button onclick="toggleFavorite('${
                              list.title
                            }')" class="text-red-600 flex items-center gap-1">
                                <i data-lucide="heart"></i> ${
                                  isFavorited ? "Unfavorite" : "Favorite"
                                }
                            </button>
                            <button onclick="shareList('${list.title}', '${
      list.link
    }')" class="text-green-600 flex items-center gap-1">
                                <i data-lucide="share-2"></i> Share
                            </button>
                            <a href="${
                              list.link
                            }" target="_blank" class="text-blue-600 hover:underline flex items-center gap-1">
                                <i data-lucide="external-link"></i> View
                            </a>
                        </div>
                    </div>
                `;
    grid.appendChild(listItem);
  });

  displayPagination(dataSource);
  lucide.createIcons();
}

function displayPagination(dataSource) {
  const controls = document.getElementById("paginationControls");
  const totalPages = Math.ceil(dataSource.length / itemsPerPage);
  controls.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.className = `px-3 py-1 border rounded ${
      i === currentPage ? "bg-blue-500 text-white" : ""
    }`;
    button.onclick = () => {
      currentPage = i;
      displayLists();
    };
    controls.appendChild(button);
  }
}

function showLists(view) {
  currentView = view;
  document
    .getElementById("allTab")
    .classList.toggle("bg-blue-500", view === "all");
  document
    .getElementById("favoritesTab")
    .classList.toggle("bg-blue-500", view === "favorites");
  displayLists();
}

function toggleDarkMode() {
  const html = document.documentElement;
  if (html.classList.contains("light")) {
    html.classList.replace("light", "dark");
    document.body.classList.replace("bg-gray-100", "bg-gray-900");
  } else {
    html.classList.replace("dark", "light");
    document.body.classList.replace("bg-gray-900", "bg-gray-100");
  }
}

function sortLists() {
  currentPage = 1;
  displayLists();
}

function filterLists() {
  currentPage = 1;
  displayLists();
}

document
  .getElementById("toggleDarkMode")
  .addEventListener("click", toggleDarkMode);
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  displayLists();
});
