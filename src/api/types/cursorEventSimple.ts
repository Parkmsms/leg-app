/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Leg User API
 * OpenAPI spec version: 1.0.0
 */
import type { EventSimple } from './eventSimple';

export interface CursorEventSimple {
  sliceSize?: number;
  numberOfElements?: number;
  isFirst?: boolean;
  isLast?: boolean;
  lastId?: number;
  sortBy?: string;
  filterBy?: string;
  searchBy?: string;
  content?: EventSimple[];
}
