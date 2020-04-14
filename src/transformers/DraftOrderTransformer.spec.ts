import { SourceType } from "../enums/SourceType";
import { DraftOrder } from "../objects/DraftOrder";
import { DraftOrderFragment } from "../sdk";
import { DraftOrderTransformer } from "./DraftOrderTransformer";

describe(DraftOrderTransformer.name, () => {
  const transformer = new DraftOrderTransformer();

  const graphQLDraftOrder: DraftOrderFragment = {
    id: "gid://shopify/DraftOrder/123",
  };

  describe("graphql", () => {
    it("graphql", async () => {
      const draftOrder = transformer.run(graphQLDraftOrder, SourceType.GRAPHQL);
      expect(draftOrder).toMatchObject({} as DraftOrder);
    });
  });
});
