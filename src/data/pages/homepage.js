export const page = {
  seo: {
    title: "Accern",
    meta: [
      { name: "description", content: "Accern" },
      { property: "og:title", content: "Accern" }
    ],
  },
  homehero: {
    label: "Powered by Artificial Intelligence",
    title: "Accelerate AI for",
    strings: ['Financial Markets', 'Banking', 'Insurance', 'Government', 'Technology'],
    img: "home-hero-illustration.png",
    isForm: false
  },

  solutions: {
    label: "Customers",
    title: "Check out our customer success stories",
    columns: [
      { title: "Increased Productivity by 20x for Large Credit Rating Agency", icon: "icon-increased.svg", link: "#" },
      { title: "Deployed AI Solutions 24x Faster for Large Asset Manager", icon: "icon-deployed.svg", link: "#" },
      { title: "Automated and Improved Existing Credit Risk Model by 2.86%", icon: "icon-automated.svg", link: "#" },
    ]
  },

  industry: {
    label: "Industry Solutions",
    title: "Get started with our ready-made AI industry solutions.",
    isShape: true,
    className: "bg-light",
    columns: [
      { title: "Investments", description: "Explore solutions around investment research and portfolio risk.", icon: "icon-investments.svg", link: "#" },
      { title: "Banking", description: "Explore solutions around credit risk and fraud detection.", icon: "icon-bank.svg", link: "#" },
      { title: "Insurance", description: "Explore solutions around underwriting and claims automation.", icon: "icon-insurance.svg", link: "#" },
      { title: "Technology", description: "Explore solutions around embedded AI feature enhancements.", icon: "icon-technology.svg", link: "#" },
      { title: "Government", description: "Explore solutions around public threats, disease outbreaks, and logistics.", icon: "icon-government.svg", link: "#" },
    ]
  },

  features: {
    isReducedMargin: true,
    rows: [
      {
        label: "Data Store",
        title: "Unstructured Data Compatibility",
        description: "We are compatible with any type of unstructured text data. Simply connect your data feeds, PDFs, text files, and more for analysis. You can also choose from a wide collection of public and premium datasets available in our data store for immediate use.",
        img: "data-illustration.svg",
        link: {
          link: "/data",
        }
      },
      {
        label: "AutoML Taxonomy",
        title: "Auto Machine-Learning Taxonomy",
        description: "Our Taxonomy generator uses AutoML to automate classifiers for your industry documents. Or, if you want a quicker start, you can use our pre-built classifiers or simply upload your own to Accern.",
        img: "taxonomy-illustration.svg",
        link: {
          link: "/auto-taxonomy",
        }
      },
      {
        label: "Adaptive NLP Models",
        title: "Adaptive NLP Models",
        description: "Browse one of the largest collections of adaptive NLP models for finance, which you can use immediately. In addition, you can retrain each of our models to fit your needs or simply upload your own NLP models.",
        img: "adaptive-models-illustration.svg",
        link: {
          link: "/adaptive-nlp",
        }
      },
      {
        label: "Deployment",
        title: "Secured & Flexible Deployment Options",
        description: "We have a wide variety of deployment options to fit your security needs. If you want advanced enterprise-grade security, we can deploy and manage a private dedicated cloud instance or set up an on-premise deployment for you.",
        img: "deployment-illustration.svg",
        link: {
          link: "/deployments",
        }
      },
      {
        label: "Integrations",
        title: "Seamless Workflow Integrations",
        description: "We have hundreds of integrations with popular business applications and databases, which allows for seamless import of your data to Accern and quick export of your AI solutions to your everyday workflow apps.",
        img: "integrations-illustrations.svg",
        link: {
          link: "/integrations",
        }
      },
    ]
  },

  aiplatform: {
    label: "Accern AI Platform",
    titleEF: "Build and deploy",
    title: "AI solutions in minutes.",
    columns: [
      { title: "Data Scientist", icon: "icon-data-scientist.svg", link: "" },
      { title: "Business Analysts", icon: "icon-business-analysts.svg", link: "" },
      { title: "Data Engineer", icon: "icon-data-engineer.svg", link: "" },
      { title: "Software Developer", icon: "icon-software-developer.svg", link: "" },
      { title: "IT Professionals", icon: "icon-it-professionals.svg", link: "" },
    ]
  },

  awards: {
    label: "Award & Recognition",
    columns:
      [
        { name: "Forbes 30 Under 30", description: "Enterprise Tech", logo: "forbes.png", link: "#" },
        { name: "Top 10 AI Software", description: "O’Reilly and Intel AI", logo: "oreilly.png", link: "#" },
        { name: "Best Data Analysis", description: "Benzinga FinTech Awards", logo: "benzinga.png", link: "#" },
        { name: "Top Text Parser", description: "J.P.Morgan", logo: "jpmorgan.svg", link: "#" },
      ]
  },

  advantages: {
    img: "advantages-illustration.svg",
    columns:
      [
        { title: "Ready for Business", description: "Get started with our ready-made AI industry solutions to accelerate your business immediately.", icon: "icon-box.svg" },
        { title: "Build in Minutes", description: "Build AI solutions within minutes and deploy it by using our no-code AI platform.", icon: "icon-clock.svg" },
        { title: "Enterprise Secure and Scalable", description: "Your data is highly secured with our enterprise-grade platform, and we can scale up or down based on your needs.", icon: "icon-shield.svg" },
      ]
  },

  brands: {
    columns: [
      { link: "#", logo: "logo-google.png", className: "preset-img-3" },
      { link: "#", logo: "logo-jefferies.png", className: "preset-img-3" },
      { link: "#", logo: "logo-moodys.png", className: "preset-img-3" },
      { link: "#", logo: "logo-william-blair.png", className: "preset-img-4" },
      { link: "#", logo: "logo-allianz.png", className: "preset-img-3" },
      { link: "#", logo: "logo-salesforce.png", className: "preset-img-6" },
    ]
  },

  ourmission: {
    label: "Our Mission",
    title: "We are accelerating AI adoption for organizations",
    titleCL: "mw-580",
    description: "Some of the world's best data science teams are using Accern to accelerate their NLP and Predictive Modeling workflows.",
    link: "#"
  }
}