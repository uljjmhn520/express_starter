module.exports = {
  app:{
    user: process.env.RUNTIME_USER || "",
    group: process.env.RUNTIME_GROUP || "",
  },
  servers:{
    http:{
      bind:'0.0.0.0',
      port:process.env.SERVER_HTTP_PORT || 50006
    }
  }
};