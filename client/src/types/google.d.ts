/**
 * Shared type declarations for Google libraries
 * This file consolidates Window interface extensions to avoid conflicts
 */

/// <reference types="@types/google.maps" />

// Google Charts types
export interface GoogleCharts {
  charts: {
    load: (version: string, options: { packages: string[] }) => void;
    setOnLoadCallback: (callback: () => void) => void;
  };
  visualization: {
    GeoChart: new (element: HTMLElement) => {
      draw: (data: unknown, options: unknown) => void;
    };
    arrayToDataTable: (data: (string | number | null)[][]) => unknown;
    events: {
      addListener: (chart: unknown, event: string, callback: (e: { region: string }) => void) => void;
    };
  };
}

// Extended Window interface with both Google Maps and Google Charts
declare global {
  interface Window {
    google?: typeof google & Partial<GoogleCharts>;
  }
}
