# Lineup

## Tailwind Setup

1. Scaffold a new vite vanilla project `pnpm init vite@latest .` command
2. Install tailwindcss
   `pnpm add -D tailwindcss postcss autoprefixer`

3. create setting files
   using: `pnpx tailwindcss init -p`

4. In your css file add the tailwind directives:
   `@tailwind base;` `@tailwind components;` `@tailwind utilities;`

---

# DaisyUI Setup

1. Install daisyui
   `pnpm add -D daisyui`
2. Add this in your tailwind.config.js file

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```
