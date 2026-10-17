module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-vercel-blob",
      providerOptions: {
        token: env("BLOB_READ_WRITE_TOKEN"),
      },
    },
  },
  //...
});
