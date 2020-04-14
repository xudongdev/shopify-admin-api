import { parseGid } from "@shopify/admin-graphql-api-utilities";

import { DraftOrder } from "../objects/DraftOrder";
import { DraftOrderFragment } from "../sdk";
import { AbstractTransformer } from "./AbstractTransformer";

export class DraftOrderTransformer extends AbstractTransformer<
  DraftOrder,
  DraftOrderFragment,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
> {
  protected graphql(data: DraftOrderFragment): DraftOrder {
    return {
      id: Number(parseGid(data.id)),
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected rest(data: any): DraftOrder {
    return {
      id: data.id,
    };
  }
}
