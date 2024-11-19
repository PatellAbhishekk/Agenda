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

#Events

`Bubbling`: Event target element se upar parent elements tak propagate hota hai.

`Capturing`: Event root se start ho kar target element tak reach karta hai.

`Delegation`: Parent element pe ek listener laga ke, child element ke events handle karte ho using bubbling.

`stopPropagation()`: event ko bubble ya capture hone se rokta hai.
// Child element pe event listener

```js
document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child clicked");
  event.stopPropagation(); // Event propagation stop
});
```
