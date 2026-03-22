
🚀 Quick Start
1. Installation
Unzip the project folder to your desired location. Open your terminal (Command Prompt/Terminal) and navigate to the project root.

Bash

# Install dependencies
npm install
2. Start Development Server
This will start a local server where you can see your changes instantly.

Bash

npm run dev
Open the link provided in your terminal (usually http://localhost:3000) to view the site.

# 📝 Customization Guide
1. Changing Content (The Easy Way)
Go to src/config/constants.ts. This file contains the PORTFOLIO_CONTENT object. You can safely edit:

Header: Name, Tagline, Bio.

Sections: About, Work, Services, Metrics, FAQ.

Contact: Email address and success messages.

Footer: Social Links and other footer contents 

Example:

TypeScript

// src/config/constants.ts
export const PORTFOLIO_CONTENT = {
  name: "Your Name",
  tagline: "Your New Headline",
  // ...
}
2. Adding Images
Place your image files in src/assets/ (or public/images).

Open src/config/images.ts.

Import your image and export it.

Reference it in constants.ts.

3. Feature Toggles
At the top of src/config/constants.ts, you can toggle UI features:

TypeScript

export const UI_FEATURES = {
  lazyLoadImages: true,   // Set false if you have very few images
  enableGlassNavbar: true // Set false for a solid white navbar
};
4. Advanced: Contact Form Integration
The contact form handles validation and UI states (Success/Error) automatically. However, it is Frontend-Only. You need to connect an email service.

Open src/App.tsx.

Search for const handleSubmit.

Look for the comment // INTEGRATION POINT.

Add your API call there (e.g., EmailJS, Formspree, or your own backend).

TypeScript

// Inside src/App.tsx
const handleSubmit = (e) => {
   e.preventDefault();
   // ... validation logic ...
   
   // 👇 PASTE YOUR EMAIL SERVICE CODE HERE
   // emailjs.sendForm(...) 
   
   setIsSubmitted(true);
}
📦 Build for Production
When you are ready to deploy (to Vercel, Netlify, or Hostinger):

Bash

npm run build
This creates a dist folder containing your optimized website.

To preview the production build locally:

Bash

npm run preview
