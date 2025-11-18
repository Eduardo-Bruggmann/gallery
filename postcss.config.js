module.exports = {
  plugins: {
    tailwindcss: {
      theme: {
        extend: {
          fontFamily: {
            sans: [
              "Mulish",
              "ui-sans-serif",
              "system-ui",
              "-apple-system",
              "Segoe UI",
              "Roboto",
              "Helvetica Neue",
              "Arial",
              "Noto Sans",
              "sans-serif",
            ],
          },
        },
      },
    },
    autoprefixer: {},
  },
};
