# Personal Brand Portfolio Template
### Made by Flyzephy

 **LICENSE: Free for personal use only.**  
> Using this template for client work, agencies, or commercial projects?  
> 👉 **[Purchase a Commercial License Here](https://flyzephy.gumroad.com/l/jeeut)**  
> *Violating these terms may result in legal action under CC BY-NC 4.0.*

A clean, modern personal brand portfolio built with **React**, **TailwindCSS**, and **Vite**. Engineered for designers, freelancers, and agencies who need a high-converting landing page without the bloat.

Quick Preview: **[Personal-brand-portfolio/preview](https://personal-brand-portfolio.netlify.app)**
---

## ⚡ Features

* **Config-First Architecture:** Update 95% of the site content (Text, Metrics, Services, Projects) from a single file (`constants.ts`).
* **Ultra-Fast Performance:** 95+ Google Lighthouse score. No heavy animation libraries by default.
* **Fully Responsive:** Optimized touch targets and layouts for Mobile, Tablet, and Desktop.
* **Production Ready:** Built with Vite for instant HMR (Hot Module Replacement) and optimized build size.
* **Type-Safe:** Built with TypeScript to prevent content errors.
* **Spam Protection:** Contact form includes regex validation and character limits (500 chars).
* **Feature Toggles:** Enable/Disable features like "Glass Navbar" or "Lazy Loading" with a simple `true/false` switch.

---

## 🛠 Tech Stack

* **Core:** React 19
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Language:** TypeScript

---

## 🚀 QUICK START
Follow these steps to get your portfolio running in minutes.

1. **Unzip** the project folder.
2. Open your terminal (Command Prompt) and navigate to the project folder.
3. **Install Dependencies** (Required first step):
   ```bash
   npm install

#   Start Development Server:

npm run dev
This starts a local server. Copy and paste the link shown (usually (http://localhost:5173)/) into your browser to edit in real-time.

# 📂 Project Structure
We've organized the code so you know exactly where to look.

src/
├── config/                  <-- 🛑 START HERE
│   ├── constants.ts         # The Control Center (Edit all text/data here)
│   ├── images.ts            # Map your local images here
│   └── types.ts             # TypeScript definitions
│---styles/index.css         # Tailwind Imports & Global Styles            
├── assets/images            # Drop your images in here
└── App.tsx                  # Main Layout (Re-order UI sections like Hero, About here)

# 📝 How to Edit
To start customizing your site (changing the name, bio, projects, etc.), please refer to the Editguide.md file included in this folder. It contains step-by-step instructions for editing and deployment.

# 📦 Build for Production
When you are ready to publish your site:
```
npm run build
```
This creates a dist/ folder with your optimized, production-ready site. Preview it locally with:

`npm run preview`

Copy and paste the link shown (usually (http://localhost:4173)/) into your browser to preview the build.

Deploy the dist/ folder to Vercel, Netlify, GitHub Pages, or any static host.

**❓ FAQ**
- Q: Can I use this for a client project?

A: No, not without a Commercial License. Personal use only under the default license. Buy a Commercial License here.
- Q: Do I need to know React to use this?

A: No. If you can edit a JavaScript object in constants.ts, you can use this template.
- Q: Can I change the design/colors?

A: Yes. All styling is handled via Tailwind classes. You can modify tailwind.config.js or edit classes directly in components if needed.
- Q: What if I break something?

A: The template is type-safe and modular. If you only edit constants.ts, you cannot break the build. For deeper changes, refer to the React/Vite docs.

Thank you for using Flyzephy.
Built for speed. Engineered for simplicity.
© Flyzephy — **[Commercial License](https://flyzephy.gumroad.com/l/jeeut)**
