// Utility to get asset path with basePath for GitHub Pages
// Uses build-time constant that gets embedded in the client bundle
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Georgetown-2026' : '';

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
