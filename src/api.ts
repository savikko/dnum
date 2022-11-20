// forces vite-plugin-dts to generate types.d.ts
import "./types";

import {
  equalizeDecimals,
  from,
  fromJSON,
  isDnum,
  setDecimals,
  toJSON,
  toNumber,
  toParts,
} from "./dnum";
import { format } from "./formatting";
import {
  abs,
  add,
  ceil,
  divide,
  equal,
  floor,
  greaterThan,
  lessThan,
  multiply,
  round,
  subtract,
} from "./operations";

export type { Decimals, Dnum, Value } from "./types";

export {
  abs,
  add,
  ceil,
  divide,
  divide as div,
  equal,
  equal as eq,
  equalizeDecimals,
  floor,
  format,
  from,
  fromJSON,
  greaterThan,
  greaterThan as gt,
  isDnum,
  lessThan,
  lessThan as lt,
  multiply,
  multiply as mul,
  round,
  setDecimals,
  subtract,
  subtract as sub,
  toJSON,
  toNumber,
  toParts,
};
