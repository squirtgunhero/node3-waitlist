
  # node³ Waitlist Landing Page

  A modern, animated waitlist landing page for node³ - Turn Your GPU Into Passive Income.

  This is a code bundle for Waitlist Landing Page. The original project is available at https://www.figma.com/design/4Wmd2lt4kdNigQLYtWEOMM/Waitlist-Landing-Page.

  ## Features

  - 🎨 Beautiful gradient animations
  - 📱 Fully responsive design
  - ✨ Smooth motion effects with Framer Motion
  - 📊 Google Sheets integration for waitlist management
  - 🎯 Email validation
  - 🔔 Toast notifications

  ## Running the code

  1. Run `npm i` to install the dependencies
  2. Run `npm run dev` to start the development server
  3. Open http://localhost:3000 in your browser

  ## Google Sheets Integration Setup

  To connect your waitlist form to Google Sheets and receive submissions:

  1. Follow the detailed instructions in `GOOGLE_SHEETS_SETUP.md`
  2. Create a `.env` file in the project root (see `env.example.txt`)
  3. Add your Google Apps Script Web App URL

  **Quick Setup:**
  - Create a Google Sheet
  - Add the script from `google-apps-script.js`
  - Deploy as Web App
  - Add the URL to your `.env` file

  See `GOOGLE_SHEETS_SETUP.md` for complete step-by-step instructions.

  ## Project Structure

  - `/src/components/` - React components
  - `/src/components/ui/` - Reusable UI components (shadcn/ui)
  - `/src/assets/` - Images and static assets
  - `google-apps-script.js` - Backend script for Google Sheets
  - `GOOGLE_SHEETS_SETUP.md` - Setup guide

  ## Tech Stack

  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS
  - Framer Motion
  - Radix UI
  - Lucide Icons
  