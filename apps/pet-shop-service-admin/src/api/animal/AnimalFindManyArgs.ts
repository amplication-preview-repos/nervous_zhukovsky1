import { AnimalWhereInput } from "./AnimalWhereInput";
import { AnimalOrderByInput } from "./AnimalOrderByInput";

export type AnimalFindManyArgs = {
  where?: AnimalWhereInput;
  orderBy?: Array<AnimalOrderByInput>;
  skip?: number;
  take?: number;
};
