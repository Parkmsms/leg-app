/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Leg User API
 * OpenAPI spec version: 1.0.0
 */
import type { ReviewResp } from './reviewResp';

export interface CursorReviewResp {
  sliceSize?: number;
  numberOfElements?: number;
  isFirst?: boolean;
  isLast?: boolean;
  lastId?: number;
  sortBy?: string;
  filterBy?: string;
  searchBy?: string;
  content?: ReviewResp[];
}