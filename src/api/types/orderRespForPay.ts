/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Leg User API
 * OpenAPI spec version: 1.0.0
 */
import type { OrderRespForPayStatus } from './orderRespForPayStatus';

export interface OrderRespForPay {
  id?: number;
  orderNo?: string;
  userId?: number;
  storeId?: number;
  status?: OrderRespForPayStatus;
  originPrice?: number;
  finalPrice?: number;
}
