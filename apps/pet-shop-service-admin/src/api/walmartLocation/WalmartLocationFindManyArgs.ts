import { WalmartLocationWhereInput } from "./WalmartLocationWhereInput";
import { WalmartLocationOrderByInput } from "./WalmartLocationOrderByInput";

export type WalmartLocationFindManyArgs = {
  where?: WalmartLocationWhereInput;
  orderBy?: Array<WalmartLocationOrderByInput>;
  skip?: number;
  take?: number;
};
