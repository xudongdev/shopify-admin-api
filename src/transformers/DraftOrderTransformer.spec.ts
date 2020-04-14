/* eslint-disable @typescript-eslint/camelcase */

import { SourceType } from "../enums/SourceType";
import { DraftOrder } from "../objects/DraftOrder";
import { DraftOrderTransformer } from "./DraftOrderTransformer";

describe(DraftOrderTransformer.name, () => {
  const transformer = new DraftOrderTransformer();

  it(`${DraftOrderTransformer.name} ${SourceType.GRAPHQL}`, async () => {
    expect(
      transformer.run(
        {
          id: "gid://shopify/DraftOrder/123",
        },
        SourceType.GRAPHQL
      )
    ).toMatchObject({
      id: 123,
    } as DraftOrder);
  });

  it(`${DraftOrderTransformer.name} ${SourceType.REST}`, async () => {
    expect(
      transformer.run(
        {
          id: 123,
        },
        SourceType.REST
      )
    ).toMatchObject({
      id: 123,
    } as DraftOrder);
  });
});
