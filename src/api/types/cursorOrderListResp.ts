/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Leg User API
 * OpenAPI spec version: 1.0.0
 */
import type { OrderListResp } from './orderListResp';

export interface CursorOrderListResp {
  sliceSize?: number;
  numberOfElements?: number;
  isFirst?: boolean;
  isLast?: boolean;
  lastId?: number;
  sortBy?: string;
  filterBy?: string;
  searchBy?: string;
  content?: OrderListResp[];
}
