export type getDealsParams = {
  country?: filterCountryCodes;
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
};

export type getProductDetailsParams = {
  asin: string;
  country?: filterCountryCodes;
  more_info_query?: string;
};

type filterCountryCodes =
  | 'US'
  | 'AU'
  | 'BR'
  | 'CA'
  | 'CN'
  | 'FR'
  | 'DE'
  | 'IN'
  | 'IT'
  | 'MX'
  | 'NL'
  | 'SG'
  | 'ES'
  | 'TR'
  | 'AE'
  | 'GB'
  | 'JP'
  | 'SA'
  | 'PL'
  | 'SE'
  | 'BE'
  | 'EG';
