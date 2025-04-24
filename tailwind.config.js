/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Reference CSS variables with semantic names
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        
        card: {
          DEFAULT: "rgba(var(--card))",
          foreground: "rgba(var(--card-foreground))",
        },
        
        popover: {
          DEFAULT: "rgba(var(--popover))",
          foreground: "rgba(var(--popover-foreground))",
        },
        
        primary: {
          DEFAULT: "rgba(var(--primary))",
          foreground: "rgba(var(--primary-foreground))",
        },
        
        secondary: {
          DEFAULT: "rgba(var(--secondary))",
          foreground: "rgba(var(--secondary-foreground))",
        },
        
        muted: {
          DEFAULT: "rgba(var(--muted))",
          foreground: "rgba(var(--muted-foreground))",
        },
        
        accent: {
          DEFAULT: "rgba(var(--accent))",
          foreground: "rgba(var(--accent-foreground))",
        },
        
        destructive: {
          DEFAULT: "rgba(var(--destructive))",
        },
        
        border: "rgba(var(--border))",
        input: "rgba(var(--input))",
        ring: "rgba(var(--ring))",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)", 
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
} 