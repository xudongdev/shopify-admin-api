import { Field, Float, ObjectType } from "type-graphql";

import { CountryCode } from "../enums/CountryCode";

@ObjectType()
export class MailingAddress {
  @Field({ nullable: true })
  address1?: string;

  @Field({ nullable: true })
  address2?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  company?: string;

  @Field({ nullable: true })
  country?: string;

  @Field(() => CountryCode)
  countryCode: CountryCode;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  province?: string;

  @Field({ nullable: true })
  provinceCode?: string;

  @Field({ nullable: true })
  zip?: string;
}
