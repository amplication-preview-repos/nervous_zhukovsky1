import { AnimalWhereInput } from "./AnimalWhereInput";

export type AnimalListRelationFilter = {
  every?: AnimalWhereInput;
  some?: AnimalWhereInput;
  none?: AnimalWhereInput;
};
