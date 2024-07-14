export function getProjectId(nameString) {
  return nameString
    .trim() // Remove any leading or trailing whitespace
    .toLowerCase() // Convert the string to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ""); // Remove any non-alphanumeric characters except dashes
}

export const projectList = [
  {
    name: "InterStellar War",
    theme:
      "The battle of the intergalacticians: The beginning of the end, or the rise of a new era",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet mauris. Tempor, risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean dictumst risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestasscelerisque.",
    slideImages: [],
    introduction: { text: "", image: "", link: "" },
    tokenomics: { text: "", image: "", link: "" },
    bodyImage1: "",
    bodyImage2: "",
    bodyImage3: "",
    website: "",
    twitter: "",
    telegram: "",
    stage: "pending",
  },

  {
    name: "SoybeanSwap",
    theme:
      "Permissionless decentralized exchange on Soroban: swap and earn through yield farming.",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet mauris. Tempor, risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean dictumst risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestasscelerisque.",
    slideImages: [],
    introduction: { text: "", image: "", link: "" },
    tokenomics: { text: "", image: "", link: "" },
    bodyImage1: "",
    bodyImage2: "",
    bodyImage3: "",
    website: "",
    twitter: "",
    telegram: "",
    stage: "voting",
  },
  {
    name: "StellarJar",
    theme:
      "Secure, self-custody crypto wallet for Stellar Lumen and the Soroban ecosystem",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque ut pellentesque varius amet mauris. Tempor, risus, congue gravida nulla tincidunt nec diam. Tincidunt magnis eu, vitae dictumst commodo dolor in. Aenean dictumst risus posuere a at id fermentum nibh. Luctus nunc bibendum duis egestasscelerisque.",
    slideImages: [],
    introduction: { text: "", image: "", link: "" },
    tokenomics: { text: "", image: "", link: "" },
    bodyImage1: "",
    bodyImage2: "",
    bodyImage3: "",
    website: "",
    twitter: "",
    telegram: "",
    stage: "sale",
  },
];
