# ⚡ Quick Deployment Guide - node-3.com

## 1️⃣ Commit Your Code (1 min)

```bash
git add .
git commit -m "Production ready with Google Sheets integration"
git push
```

## 2️⃣ Deploy to Vercel (2 min)

1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **New Project** → Import your repository
3. Click **Deploy** (Vercel auto-detects Vite)
4. Wait ~2 minutes for build

## 3️⃣ Add Environment Variable (1 min)

In Vercel project:
- **Settings** → **Environment Variables**
- Add: `VITE_GOOGLE_SCRIPT_URL`
- Value: Your Google Apps Script URL
- Save & Redeploy

## 4️⃣ Connect Domain (5 min)

**In Vercel:**
- **Settings** → **Domains**
- Add `node-3.com` and `www.node-3.com`

**In GoDaddy:**
- Go to domain → **DNS**
- Update/Add A record: `@` → `76.76.21.21`
- Add CNAME: `www` → `cname.vercel-dns.com`

## 5️⃣ Done! ✅

Wait 15-30 minutes for DNS propagation, then visit:
**https://node-3.com**

---

📖 **Full Details:** See `DEPLOY_TO_VERCEL.md`

---

## Your Environment Variable

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbw0S91ZisngpJQCmnqZ1RHQcvO6gXf2UY3kNCUg6jkmJPXAvfFV2PyzHJuhtrH_4xUI/exec
```

## GoDaddy DNS Records

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 1 Hour

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
TTL: 1 Hour
```

