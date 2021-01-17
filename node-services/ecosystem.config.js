module.exports = {
  apps: [
    {
      name: "service-one",
      script: "./service-one.js",
      mode: "cluster",
      instances: 2,
    },
  ],
};
