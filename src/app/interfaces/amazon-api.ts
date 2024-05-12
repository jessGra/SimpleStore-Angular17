import { FilterCountryCodes } from '../enums/filter-country-codes';

export interface GetProductDetailsParams {
  asin: string;
  country?: FilterCountryCodes;
  more_info_query?: string;
}

export interface GetProductsParams {
  country?: FilterCountryCodes;
  offset?: number;
  sort_by?:
    | 'FEATURED'
    | 'LOWEST_DISCOUNT'
    | 'HIGHEST_DISCOUNT'
    | 'LOWEST_PRICE'
    | 'HIGHEST_PRICE';
  categories?: string;
  deal_state?: 'ALL' | 'AVAILABLE' | 'UPCOMING';
  min_product_star_rating?: 1 | 2 | 3 | 4;
  min_price?: number;
  max_price?: number;
}

export interface ApiResponse {
  request_id: string;
  status: string;
}
