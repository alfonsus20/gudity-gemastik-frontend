export const COMMODITY_IMAGE_CLASSIFICATION_LOADING =
  "COMMODITY_IMAGE_CLASSIFICATION_LOADING";
export const COMMODITY_IMAGE_CLASSIFICATION_SUCCESS =
  "COMMODITY_IMAGE_CLASSIFICATION_SUCCESS";
export const COMMODITY_IMAGE_CLASSIFICATION_FAILED =
  "COMMODITY_IMAGE_CLASSIFICATION_FAILED";
export const COMMODITY_IMAGE_CLASSIFICATION_RESET =
  "COMMODITY_IMAGE_CLASSIFICATION_RESET";

export interface CommodityImageClassificationLoading {
  type: typeof COMMODITY_IMAGE_CLASSIFICATION_LOADING;
}

export interface CommodityImageClassificationSuccess {
  type: typeof COMMODITY_IMAGE_CLASSIFICATION_SUCCESS;
  payload: {
    commodity_name: string;
    deskripsi: string;
  };
}

export interface CommodityImageClassificationFailed {
  type: typeof COMMODITY_IMAGE_CLASSIFICATION_FAILED;
  payload: string;
}

export interface CommodityImageClassificationReset {
  type: typeof COMMODITY_IMAGE_CLASSIFICATION_RESET;
}

export type CommodityImageClassificationDispatchTypes =
  | CommodityImageClassificationLoading
  | CommodityImageClassificationSuccess
  | CommodityImageClassificationFailed
  | CommodityImageClassificationReset
