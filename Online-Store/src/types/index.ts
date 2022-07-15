export {};

declare global {
  interface Window {
    analytics: { destroy(): void; getClicks(): string | number };
  }
}
