# Wolf Pack Game

**Wolf Pack** is a play-to-earn Telegram Mini App game on TON blockchain where players catch eggs to earn WPK tokens.

## 🎮 Game Overview

**Wolf Catches Eggs** - an addictive HTML5 Canvas game where you control a wolf catching falling eggs. Earn tokens, upgrade your wolf, invite friends, and join the pack!

### Core Gameplay
- **Control:** Move wolf left/right to catch eggs
- **Earn:** 10 tokens per caught egg
- **Upgrade:** Deposit TON to upgrade wolf levels (Normal → Bronze → Silver → Gold → Platinum → Diamond)
- **Passive Income:** Earn tokens per hour based on your wolf level
- **Referral System:** Invite friends and earn 25%/15%/5% of their deposits across 3 levels

## 🔗 TON Blockchain Integration

### Wallet Connection
- **TON Connect:** Integrated with Tonkeeper, Tonhub, MyTonWallet
- **Real TON deposits:** Players deposit TON to upgrade wolf levels
- **Smart Contract:** `DepositManager.tact` for automated referral payouts
- **Security:** All transactions signed in player's wallet, no access to funds

### Tokenomics (WPK)
- **Total Supply:** 1,000,000,000 WPK
- **Distribution:**
  - 40% Game rewards
  - 30% Treasury
  - 15% Marketing
  - 10% Team
  - 5% Liquidity
- **TGE:** After 150,000 players (Month 7 of roadmap)

## 🏗️ Project Structure

### Frontend (Game)
- **HTML5 Canvas** game with wolf catching mechanics
- **TON Connect** integration for wallet connection
- **Responsive UI** for Telegram Web App
- **Real-time stats** display (balance, level, referrals)

### Backend (API)
- **Node.js Express** server with PostgreSQL database
- **10+ API endpoints** (user registration, deposits, balance, referrals)
- **Automated referral tracking** (3-level system)
- **Transaction logging** and game state management

### Telegram Bot
- **Bot:** [@wolfpackgame_bot](https://t.me/wolfpackgame_bot)
- **Features:** /start, /balance, /referrals, game launch
- **Mini App:** Direct game launch from Telegram

## 🚀 Getting Started

### Play the Game
1. Open [@wolfpackgame_bot](https://t.me/wolfpackgame_bot) in Telegram
2. Click **/start** to register
3. Click **"Play Game"** to launch the Mini App
4. Connect your TON wallet (Tonkeeper/Tonhub/MyTonWallet)
5. Start catching eggs and earning tokens!

### Upgrade Your Wolf
1. **Level 1 (Normal):** 1 TON → 100 tokens/hour
2. **Level 2 (Bronze):** 2 TON → 250 tokens/hour
3. **Level 3 (Silver):** 5 TON → 700 tokens/hour
4. **Level 4 (Gold):** 10 TON → 1,600 tokens/hour
5. **Level 5 (Platinum):** 20 TON → 3,600 tokens/hour

### Referral Program
- **Level 1:** 25% of friend's deposit
- **Level 2:** 15% of friend's friend deposit
- **Level 3:** 5% of friend's friend's friend deposit

Your referral link is automatically generated after registration.

## 📱 Telegram Integration

### Bot Commands
- **/start** - Register and get your referral link
- **/balance** - Check your token balance and level
- **/referrals** - View your referral network and earnings
- **/upgrade** - See available wolf upgrade options

### Mini App Features
- **Direct launch** from Telegram chat
- **Seamless wallet connection** via TON Connect
- **Real-time game updates**
- **In-app deposits** with TON

## 🌐 Live Deployment

### Landing Page
- **URL:** [https://norkonton.github.io/-wolf-pack-landing-/](https://norkonton.github.io/-wolf-pack-landing-/)

### Game Backend
- **Platform:** Render.com (free tier)
- **Database:** PostgreSQL with 6-table schema
- **API:** RESTful endpoints for game operations

## 🔧 Technical Details

### Database Schema
- **Users:** Player profiles, balances, referral codes
- **Transactions:** Deposit history, referral payouts
- **Referrals:** 3-level referral tracking
- **Levels:** Wolf upgrade configurations
- **Game State:** Player progress and achievements

### Smart Contract
- **Contract:** `DepositManager.tact` (Tact language)
- **Features:** Automated deposit handling, referral distribution
- **Security:** Owner-controlled, transparent on-chain operations

## 📞 Contact & Support

- **Game Bot:** [@wolfpackgame_bot](https://t.me/wolfpackgame_bot)
- **Issues:** Report via GitHub Issues
- **Suggestions:** Contact through Telegram bot

## 📄 License

All rights reserved. Wolf Pack Game 2026.

---

**Start playing now:** [@wolfpackgame_bot](https://t.me/wolfpackgame_bot)