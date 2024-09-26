import { WalmartLocation as TWalmartLocation } from "../api/walmartLocation/WalmartLocation";

export const WALMARTLOCATION_TITLE_FIELD = "id";

export const WalmartLocationTitle = (record: TWalmartLocation): string => {
  return record.id?.toString() || String(record.id);
};
