import { ApiResponse } from './amazon-api';

export interface Product extends Deal {}

export interface DealsResponse extends ApiResponse {
  data: DealsResponseData;
}

export interface DealsResponseData {
  deals: Deal[];
  total_deals: null;
  country: string;
  domain: string;
}

export interface Deal {
  deal_id: string;
  deal_type: string;
  deal_title: string;
  deal_photo: string;
  deal_state: string;
  deal_url: string;
  canonical_deal_url: string;
  deal_starts_at: string;
  deal_ends_at: string;
  deal_price: Price;
  list_price: Price;
  savings_percentage: number;
  savings_amount: Price;
  deal_badge: string;
  type: string;
  product_asin: string;
}

interface Price {
  amount: string;
  currency: string;
}
