/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * Leg User API
 * OpenAPI spec version: 1.0.0
 */
import type { Coordinate } from './coordinate';

export interface Address {
  regionAddress?: string;
  roadAddress?: string;
  locationName?: string;
  depth1?: string;
  depth2?: string;
  depth3?: string;
  detail?: string;
  coordinate?: Coordinate;
}