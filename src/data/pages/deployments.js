export const page = {
  seo: {
    title: "Accern - Deployments",
    meta: [
      {name: "description", content: "Accern - Deployments"},
      {property: "og:title", content: "Accern - Deployments"}
    ],
  },
  hero: {
    label: "Deployments",
    title: "Secured Flexible <strong>Deployment</strong> Options",
    description: "Accern provides enterprise-grade secured deployment options based on your needs.",
    img: "deployments-illustration.svg",
    button: {
      name: "GET A DEMO",
    },
    isForm: false,
  },

  dataOutput: {
    title: "Data Output",
    titleCL: "mw-440",
    description: "We deliver your data in multiple formats and offer many popular connectors to stream your data directly to your end application or repository.",
    className: "bg-light",
    isShape: true,
    isGrouped: true,
    groups: [
      {
        name: "Data Feed Type",
        columns: [
          { title: "Streaming API", icon: "icon-streaming-api.svg", },
          { title: "Restful API", icon: "icon-restful-api.svg" },
          { title: "Historic API", icon: "icon-historic-api.svg" },
        ]
      },
      {
        name: "Data Formats",
        columns: [
          { title: "CSV", icon: "icon-csv.svg" },
          { title: "JSON", icon: "icon-json.svg" },
        ]
      }
    ]
  },

  features: {
    rows: [
      {
        title: "Secured Public Cloud",
        description: "To get started quickly, we offer a fully secure private cloud.  You will be on our shared infrastructure with your own private instance.  No need to worry about large overhead expenses and maintenance.",
        img: "public-cloud-illustration.svg",
        link: {
          link: "#",
          name: "Get Setup Now"
        }
      },
      {
        title: "Enterprise Secured Dedicated Private Cloud",
        description: "We can set up an enterprise-grade secured dedicated private cloud environment for you so your data is completely protected. Accern will manage the infrastructure so you can focus on building AI solutions.",
        img: "private-cloud-illustration.svg",
        link: {
          name:"Get Setup Now",
          link: "#",
        }
      },
      {
        title: "Enterprise Secured On-Premise Server",
        description: "We can deploy Accern on your enterprise-grade secured private cloud or servers anywhere in the world using Docker Swarm and Kubernetes. Our team of deployment experts will make sure you are up and running in no time.",
        img: "on-premise-illustration.svg",
      },
    ]
  },

  additionalFeatures: {
    title: "Check Out Our Additional Features",
    titleCL: "mw-440",
    className: "bg-light mb-spacer",
    columns: [
      { title: "Data Store", description: "Choose from a wide collection of datasets or simply connect your own for analysis.", icon: "icon-data.svg" },
      { title: "AutoML Taxonomy", description: "Build custom taxonomy at scale with our AutoML taxonomy generator. ", icon: "icon-taxonomy.svg" },
      { title: "Adaptive NLP Models", description: "Check out various NLP models that you can use out-of-the-box or retrain for your needs.", icon: "icon-adaptive-nlp.svg" },
      { title: "Integrations", description: "Import your data and export solutions seamlessly into your everyday workflows.", icon: "icon-integrations.svg" },
    ]
  },
}