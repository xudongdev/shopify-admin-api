import { CountryCode } from "../enums/CountryCode";
import { SourceType } from "../enums/SourceType";
import { MailingAddress } from "../objects/MailingAddress";
import { MailingAddressTransformer } from "./MailingAddressTransformer";

describe(MailingAddressTransformer.name, () => {
  const transformer = new MailingAddressTransformer();

  it(`${MailingAddressTransformer.name} ${SourceType.GRAPHQL}`, async () => {
    expect(
      transformer.run(
        {
          countryCode: CountryCode.US,
        },
        SourceType.GRAPHQL
      )
    ).toMatchObject({
      countryCode: CountryCode.US,
    } as MailingAddress);
  });

  it(`${MailingAddressTransformer.name} ${SourceType.REST}`, async () => {
    expect(transformer.run({}, SourceType.REST)).toMatchObject(
      {} as MailingAddress
    );
  });
});
