import { Field, Int, ObjectType } from "type-graphql";

import { MailingAddress } from "./MailingAddress";

@ObjectType()
export class DraftOrder {
  @Field(() => Int)
  public id: number;

  @Field(() => MailingAddress, { nullable: true })
  public billingAddress?: MailingAddress;

  @Field(() => MailingAddress, { nullable: true })
  public shippingAddress?: MailingAddress;
}
