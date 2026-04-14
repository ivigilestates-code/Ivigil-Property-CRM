import html from "eslint-plugin-html";

export default [
  {
    plugins: {
      html
    },
    files: ["**/*.html"],
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn"
    },
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        alert: "readonly",
        prompt: "readonly",
        confirm: "readonly",
        localStorage: "readonly",
        fetch: "readonly",
        URL: "readonly",
        Blob: "readonly",
        navigator: "readonly",
        btoa: "readonly",
        atob: "readonly",
        Promise: "readonly",
        Set: "readonly",
        Map: "readonly",
        Event: "readonly",
        Math: "readonly",
        Date: "readonly",
        JSON: "readonly",
        encodeURIComponent: "readonly",
        decodeURIComponent: "readonly",
        FileReader: "readonly",
        FormData: "readonly",
        Image: "readonly",
        location: "readonly"
      }
    }
  }
];
