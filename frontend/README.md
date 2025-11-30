# MindBoy 🎮 - Your Pocket Mental Health Companion

Welcome to **MindBoy**, the most rad mental health chat app this side of the '90s! Built with the nostalgic vibes of a classic Gameboy, MindBoy makes checking in with your mental health as fun as beating your high score.

## 🕹️ What is MindBoy?

MindBoy is a retro-styled mental health chat application that combines the beloved aesthetics of the Nintendo Gameboy with modern AI-powered mental health support. Chat with your AI mental health companion through a beautifully crafted Gameboy-inspired interface!

## ✨ Features

- 🎨 **Authentic Gameboy Design** - Classic green screen, pixel fonts, and that sweet CRT effect
- 💬 **AI-Powered Support** - Thoughtful mental health conversations powered by OpenAI
- 🎮 **Interactive Controls** - D-pad, A/B buttons, and classic Gameboy controls
- ⚡ **Quick Actions** - Jump-start conversations with pre-made prompts
- 📱 **Responsive Design** - Looks great on all devices (but especially phones!)
- 🔊 **Retro Vibes** - Scanlines, pixel-perfect text, and nostalgic UI elements

## 🚀 Getting Started

### Prerequisites

Before you fire up MindBoy, make sure you have:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Backend API running** - MindBoy needs the FastAPI backend running on `http://localhost:8000`

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if you're a yarn person
   yarn install
   ```

3. **Make sure your backend is running:**
   - The backend should be running on `http://localhost:8000`
   - See the main project README or `api/README.md` for backend setup

### Running the App

**Development Mode** (with hot reload):
```bash
npm run dev
```

Then open your browser and navigate to:
```
http://localhost:3000
```

**Production Build:**
```bash
npm run build
npm start
```

## 🎮 How to Use MindBoy

1. **Power On** - Once the app loads, you'll see the MindBoy console with a welcome message
2. **Quick Start** - Choose from the quick action buttons for common topics
3. **Type a Message** - Press the **START** button or **B** button to open the text input
4. **Send** - Type your message and press **A** button or hit Enter
5. **Chat Away** - Have a meaningful conversation with your AI mental health companion!

### Controls

- **B Button** - Toggle the message input on/off
- **A Button** - Send your message (when input is shown)
- **START** - Toggle message input
- **SELECT** - Clear current message
- **D-Pad** - Just for show (and nostalgia!)

## 🎨 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Custom Pixel Font** - Press Start 2P from Google Fonts
- **FastAPI Backend** - Python backend with OpenAI integration

## 🐛 Troubleshooting

### "Failed to get response" error
- Make sure your backend is running on `http://localhost:8000`
- Check that your `OPENAI_API_KEY` is configured in the backend
- Verify CORS is enabled in the backend (it should be by default)

### Styles look broken
- Clear your browser cache
- Make sure all dependencies installed correctly with `npm install`
- Try deleting `.next` folder and running `npm run dev` again

### Port 3000 is already in use
- Kill the process using port 3000, or
- Run on a different port: `npm run dev -- -p 3001`

## 🚀 Deployment

This frontend is designed to be deployed on **Vercel** (because it's built with Next.js and loves Vercel):

1. Push your code to GitHub
2. Import your repo in Vercel
3. Set the root directory to `frontend`
4. Deploy! 🎉

Make sure to update the API URL in the fetch calls if your backend is deployed elsewhere.

## 🎨 Customization

Want to customize your MindBoy? Here's where to look:

- **Colors**: Edit the Gameboy color palette in `tailwind.config.js`
- **Screen Size**: Adjust the console dimensions in `components/GameboyConsole.tsx`
- **Quick Actions**: Modify the quick action prompts in `components/GameboyConsole.tsx`
- **Fonts**: Change the pixel font in `app/globals.css`

## 📝 Project Structure

```
frontend/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── GameboyConsole.tsx    # Main Gameboy component
│   ├── ChatScreen.tsx        # Chat message display
│   └── ControlButtons.tsx    # Gameboy controls
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind + color palette
└── tsconfig.json         # TypeScript config
```

## 🤝 Contributing

Feel free to open issues or submit PRs! This is a fun project and we welcome contributions that add more retro goodness or improve the mental health support features.

## 📜 License

This project is part of The AI Engineer Challenge. Check the main project for licensing info.

## 💚 Credits

Built with love, pixels, and a whole lot of '90s nostalgia. Special thanks to Nintendo for the Gameboy inspiration (this is a fan project, not affiliated with Nintendo).

---

**Remember:** MindBoy is here to support you, but it's not a replacement for professional mental health care. If you're struggling, please reach out to a qualified mental health professional. 💚

*Now go ahead and press START to begin your journey!* 🎮
