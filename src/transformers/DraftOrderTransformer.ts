import { parseGid } from "@shopify/admin-graphql-api-utilities";

import { SourceType } from "../enums/SourceType";
import { DraftOrder } from "../objects/DraftOrder";
import { DraftOrderFragment } from "../sdk";
import { AbstractTransformer } from "./AbstractTransformer";
import { MailingAddressTransformer } from "./MailingAddressTransformer";

export class DraftOrderTransformer extends AbstractTransformer<
  DraftOrder,
  DraftOrderFragment,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
> {
  protected graphql(data: DraftOrderFragment): DraftOrder {
    const mailingAddressTransformer = new MailingAddressTransformer();

    return {
      id: Number(parseGid(data.id)),
      billingAddress: mailingAddressTransformer.run(
        data.billingAddress,
        SourceType.GRAPHQL
      ),
      shippingAddress: mailingAddressTransformer.run(
        data.shippingAddress,
        SourceType.GRAPHQL
      ),
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected rest(data: any): DraftOrder {
    const mailingAddressTransformer = new MailingAddressTransformer();

    return {
      id: data.id,
      billingAddress: mailingAddressTransformer.run(
        data.billing_address,
        SourceType.REST
      ),
      shippingAddress: mailingAddressTransformer.run(
        data.shipping_address,
        SourceType.REST
      ),
    };
  }
}
