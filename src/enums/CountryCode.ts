import { registerEnumType } from "type-graphql";

import { CountryCode } from "../sdk";

registerEnumType(CountryCode, {
  name: "CountryCode",
});

export { CountryCode };
