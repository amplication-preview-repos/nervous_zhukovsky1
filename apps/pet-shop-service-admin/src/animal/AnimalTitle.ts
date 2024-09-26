import { Animal as TAnimal } from "../api/animal/Animal";

export const ANIMAL_TITLE_FIELD = "id";

export const AnimalTitle = (record: TAnimal): string => {
  return record.id?.toString() || String(record.id);
};
