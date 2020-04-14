import _ from "lodash";

import { MailingAddress } from "../objects/MailingAddress";
import { MailingAddressFragment } from "../sdk";
import { AbstractTransformer } from "./AbstractTransformer";

export class MailingAddressTransformer extends AbstractTransformer<
  MailingAddress,
  MailingAddressFragment,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
> {
  protected graphql(data: MailingAddressFragment): MailingAddress {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected rest(data: any): MailingAddress {
    return {
      ..._.pick(data, [
        "address1",
        "address2",
        "city",
        "company",
        "country",
        "latitude",
        "longitude",
        "name",
        "phone",
        "province",
        "zip",
      ]),
      countryCode: data.country_code,
      provinceCode: data.province_code,
      firstName: data.first_name,
      lastName: data.last_name,
    } as Required<MailingAddress>;
  }
}
