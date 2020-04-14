import { composeGid } from "@shopify/admin-graphql-api-utilities";
import { GraphQLClient } from "graphql-request";

import { SourceType } from "./enums/SourceType";
import { ShopifyOptions } from "./interfaces/ShopifyOptions";
import { DraftOrder } from "./objects/DraftOrder";
import { getSdk } from "./sdk";
import { DraftOrderTransformer } from "./transformers/DraftOrderTransformer";

export class Shopify {
  private readonly client: GraphQLClient;
  private readonly domain: string;
  private readonly apiVersion: string = "2020-01";
  private readonly sdk: ReturnType<typeof getSdk>;

  public constructor({
    domain,
    accessToken,
    apiKey,
    password,
  }: ShopifyOptions) {
    this.domain = domain;

    this.client = new GraphQLClient(
      `https://${this.domain}/admin/api/${this.apiVersion}/graphql.json`,
      {
        headers: accessToken
          ? {
              "X-Shopify-Access-Token": accessToken,
            }
          : {
              Authorization: `Basic ${Buffer.from(
                `${apiKey}:${password}`
              ).toString("base64")}`,
            },
      }
    );

    this.sdk = getSdk(this.client);
  }

  public async getDraftOrder(id: number): Promise<DraftOrder> {
    const { draftOrder: graphqlDraftOrder } = await this.sdk.getDraftOrder({
      id: composeGid("DraftOrder", id),
    });

    const transformer = new DraftOrderTransformer();

    return transformer.run(graphqlDraftOrder, SourceType.GRAPHQL);
  }
}
