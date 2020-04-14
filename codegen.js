require("dotenv").config();

const { SHOPIFY_DOMAIN, SHOPIFY_API_KEY, SHOPIFY_PASSWORD } = process.env;

module.exports = {
  schema: {
    [`https://${SHOPIFY_DOMAIN}/admin/api/2020-01/graphql.json`]: {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${SHOPIFY_API_KEY}:${SHOPIFY_PASSWORD}`
        ).toString("base64")}`,
      },
    },
  },
  documents: ["./src/graphql/**/**.graphql"],
  generates: {
    "./src/sdk.ts": {
      plugins: [
        // "fragment-matcher",
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        namingConvention: {
          enumValues: "keep",
        },
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};
