/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

/** Response object for getting an order item */
export interface GetOrderItemResponse {
  /** Id */
  id?: string | null;
  type?: string | null;
  description?: string | null;
  amount?: number | null;
  quantity?: number | null;
  /** Category */
  category?: string | null;
  /** Code */
  code?: string | null;
  status?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export const getOrderItemResponseSchema: Schema<GetOrderItemResponse> = object({
  id: ['id', optional(nullable(string()))],
  type: ['type', optional(nullable(string()))],
  description: ['description', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
  quantity: ['quantity', optional(nullable(number()))],
  category: ['category', optional(nullable(string()))],
  code: ['code', optional(nullable(string()))],
  status: ['status', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  updatedAt: ['updated_at', optional(nullable(string()))],
});
