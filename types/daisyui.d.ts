declare module "daisyui";
declare module "tailwindcss" {
  interface Config {
    daisyui?: {
      themes?: unknown[];
    };
  }
}