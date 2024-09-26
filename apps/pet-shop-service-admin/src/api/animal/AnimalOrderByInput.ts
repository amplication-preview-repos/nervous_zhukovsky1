import { SortOrder } from "../../util/SortOrder";

export type AnimalOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
