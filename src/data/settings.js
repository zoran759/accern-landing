export const settings = {
  projectName: "Accern",
  preloaderTime: 700,
  formApi: "./form-process.php",
  seo: {
    title: "Accern",
    meta: [
      {name: "description", content: "Accern"},
      {property: "og:title", content: "Accern"}
    ],
  },
  navigation: [
    { name: "Home", link: "/", component: "Home", seo: { title: "Accern", description: "Accern" }, excludeNav: true },
    {
      name: "Why Accern?", sub: {
        type: "columns-3",
        columns: [
          {
            label: "Overview",
            size: 2,
            links: [
              { name: "Company", component: "Company", description: "Meet the team and learn how we are changing the world with AI.", link: "/company" },
              { name: "Customers", description: "See how Accern is helping customers to accelerate AI adoption." },
              { name: "Careers", description: "Learn about various career paths at Accern and view our open positions." }
            ]
          },
          {
            label: "Features",
            size: 6,
            links: [
              { name: "Data Store", component: "Data", description: "Choose from a wide collection of datasets or simply connect your own for analysis.", link: "/data", icon: "icon-link-data.svg" },
              { name: "Deployments", component: "Deployments", description: "Select from a list of secured deployment options available.", link: "/deployments", icon: "icon-link-deployment.svg" },
              { name: "AutoML Taxonomy", component: "AutoTaxonomy", description: "Build custom taxonomy at scale with our AutoML taxonomy generator.", link: "/auto-taxonomy", icon: "icon-link-taxonomy.svg" },
              { name: "Integrations", component: "Integrations", description: "Import your data and export solutions seamlessly into your everyday workflows.", link: "/integrations", icon: "icon-link-integrations.svg" },
              { name: "Adaptive NLP Models", component: "AdaptiveNLP", description: "Check out various NLP models which can be used out-of-box or retrain for your use.", link: "/adaptive-nlp", icon: "icon-link-adaptive-nlp.svg" },
              { name: "Adaptive Forecasting", description: "Stay tune for our adaptive forecasting capabilities coming soon.", link: "#", icon: "icon-link-coming.svg", isComing: true },
            ]
          },
          {
            label: "Partnership Program",
            size: 4,
            className: "nav-sub-cover",
            links: [
              { name: "Data Partners", description: "Partnering with leading data providers and offering distribution on our platform.", icon: "icon-link-coming.svg", isComing: true },
              { name: "Technology Partners", description: "Partnering with leading technology companies to embed Accern’s offering.", icon: "icon-link-coming.svg", isComing: true },
              { name: "Solution Partners", description: "Partnering with subject-matter-experts to use Accern to implement AI solutions.", icon: "icon-link-coming.svg", isComing: true },
              { name: "Explore all partnerships", isSimple: true },
            ]
          }
        ]
      }
    },
    {
      name: "Solutions", sub: {
        type: "columns-1",
        columns: [
          {
            label: "Solutions",
            size: 12,
            links: [
              { name: "Investments", description: "View our solutions around investment research and portfolio risk.", link: "#", icon: "icon-investments.svg" },
              { name: "Banking", component: "Banking", description: "View our solutions around credit risk and fraud detection.", link: "/banking", icon: "icon-bank.svg" },
              { name: "Insurance", description: "View our solutions around insurance underwriting and claims automation.", link: "#", icon: "icon-insurance.svg" },
              { name: "Technology", description: "View our solutions around building new AI features for your core products.", link: "#", icon: "icon-link-coming.svg", isComing: true },
              { name: "Government", description: "View our solutions around public threats, disease outbreaks, and logistics.", link: "#", icon: "icon-link-coming.svg", isComing: true },
              { name: "Life Science", description: "View our solutions for the life science industry", link: "#", icon: "icon-link-coming.svg", isComing: true },
              { name: "Health Care", description: "View our solutions for the health care industry", link: "#", icon: "icon-link-coming.svg", isComing: true },
              { name: "Retail", description: "View our solutions for the Retail industry", link: "#", icon: "icon-link-coming.svg", isComing: true },
            ]
          },
        ]
      }
    },
    { name: "Contact", component: "Contact", link: "/contact", seo: { title: "Accern - Contact", description: "Accern - Contact" } },
    { name: "Login", link: "/login", seo: { title: "Accern - Login", description: "Accern - Login" } },
  ],

  footer: {
    columns: [
      {
        title: "Accern",
        rows: [
          { name: "55 Broadway", link: "" },
          { name: "New York, NY 10006", link: "" },
          { name: "+1 (347) 745 6649", link: "" },
          { name: "info@accern.com", link: "" }
        ]
      },
      {
        title: "Features",
        rows: [
          { name: "Data Store", link: "#" },
          { name: "AutoML Taxonomy", link: "#" },
          { name: "Adaptive NLP Models", link: "#" },
          { name: "Deployments", link: "#" },
          { name: "Integrations", link: "#" }
        ]
      },
      {
        title: "Solutions",
        rows: [
          { name: "Investments", link: "#" },
          { name: "Banking", link: "#" },
          { name: "Insurance", link: "#" },
          { name: "Technology", link: "#" },
          { name: "Government", link: "#" }
        ]
      },
      {
        title: "Overview",
        rows: [
          { name: "Company", link: "#" },
          { name: "Customers", link: "#" },
          { name: "Careers", link: "#" },
        ]
      },
      {
        title: "Contact Us",
        rows: [
          { name: "Sales", link: "#" },
          { name: "Media", link: "#" },
          { name: "Investment", link: "#" },
          { name: "Partnership", link: "#" },
        ]
      },
    ],
    copyright: "Copyright © 2014 – 2020 Accern Corporation. All Rights Reserved.",
    links: [
      { name: "Terms & conditions", link: "#" },
      { name: "Privacy policy", link: "#" },
    ]
  },

  getstarted: {
    title: "Get started",
    description: "Sign up for a free trial of our platform and start accelerating AI within your organization.",
    link: {
      name: "Free Trial",
      link: ""
    }
  },

  requestTrial: {
    label: "ACCERN AI DEVELOPER",
    title: "Accelerate AI Workflows",
    description: "Get a 14-day trial of our AI Developer platform and start accelerating AI within your organization.",
    customers: {
      label: "NOTABLE CUSTOMERS",
      columns: [
        {icon: "icon-google-flatten.png"},
        {icon: "icon-jefferies-flatten.png", className: "icon-stiny"},
        {icon: "icon-allianz-flatten.png"},
      ],
    },
    form: {
      label: "Get a demo",
      title: "Request Trial",
      message: "That's All, thank you!",
      fields: [
        { name: "name", type: "text", placeholder: "Name", className: "advanced", required: true },
        { name: "company", type: "text", placeholder: "Company", className: "advanced", required: true },
        { name: "email", type: "email", placeholder: "E-mail", className: "advanced", required: true },
        { name: "phone", type: "text", placeholder: "Phone Number", className: "advanced" },
        { name: "message", type: "textarea", placeholder: "Message", className: "advanced", required: true },
      ]
    }
  }
}