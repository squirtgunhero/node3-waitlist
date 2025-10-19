# 🚀 Deploy node³ Landing Page to Vercel

Complete guide to deploy your landing page and connect your GoDaddy domain.

---

## Part 1: Deploy to Vercel (5 minutes)

### Step 1: Commit Your Code

```bash
# Add all files
git add .

# Commit
git commit -m "Add Google Sheets integration and production build"

# Push to GitHub (if you have a remote)
git push
```

### Step 2: Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** (or Login if you have an account)
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your repositories

### Step 3: Import Your Project

**Option A: Deploy from GitHub (Recommended)**
1. In Vercel dashboard, click **Add New...** → **Project**
2. Find your repository and click **Import**
3. Vercel will auto-detect it's a Vite project ✅
4. Click **Deploy**

**Option B: Deploy with Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

### Step 4: Add Environment Variable

**IMPORTANT:** Add your Google Sheets URL

1. In your Vercel project, go to **Settings** → **Environment Variables**
2. Add new variable:
   - **Name**: `VITE_GOOGLE_SCRIPT_URL`
   - **Value**: `https://script.google.com/macros/s/AKfycbw0S91ZisngpJQCmnqZ1RHQcvO6gXf2UY3kNCUg6jkmJPXAvfFV2PyzHJuhtrH_4xUI/exec`
   - **Environment**: Production
3. Click **Save**
4. Go to **Deployments** → Click on latest deployment → **Redeploy**

### Step 5: Test Your Deployment

1. Vercel will give you a URL like: `your-project.vercel.app`
2. Open it and test the waitlist form
3. Check your Google Sheet to confirm submissions work

---

## Part 2: Connect GoDaddy Domain (10 minutes)

### Step 1: Add Domain in Vercel

1. In your Vercel project, go to **Settings** → **Domains**
2. Click **Add**
3. Enter: `node-3.com`
4. Click **Add**
5. Also add: `www.node-3.com` (repeat steps)

### Step 2: Get Vercel DNS Records

Vercel will show you DNS records to add. You'll see something like:

**For node-3.com:**
- Type: `A`
- Value: `76.76.21.21`

**For www.node-3.com:**
- Type: `CNAME`
- Value: `cname.vercel-dns.com`

### Step 3: Configure DNS in GoDaddy

1. **Login to GoDaddy**
   - Go to [godaddy.com](https://www.godaddy.com)
   - Click **Sign In**
   - Go to **My Products**

2. **Access DNS Settings**
   - Find `node-3.com` in your domains list
   - Click **DNS** button next to it

3. **Add/Update A Record** (for root domain)
   - Find any existing `A` record with `@` as the Name
   - Click **Edit** (pencil icon)
   - Change **Points to**: `76.76.21.21`
   - **TTL**: 1 Hour (or keep default)
   - Click **Save**
   
   If no A record exists:
   - Click **Add**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   - TTL: 1 Hour
   - Click **Save**

4. **Add CNAME Record** (for www)
   - Click **Add** under DNS Records
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: 1 Hour
   - Click **Save**

### Step 4: Wait for DNS Propagation

- DNS changes take **5 minutes to 48 hours** (usually 15-30 minutes)
- Check status in Vercel (Settings → Domains)
- When ready, you'll see a ✓ checkmark

### Step 5: Test Your Domain

1. Open `https://node-3.com` in your browser
2. Test the waitlist form
3. Verify Google Sheets integration works
4. Test `https://www.node-3.com` also works

---

## Troubleshooting

### "Invalid Configuration" in Vercel
- Make sure you entered the domain exactly: `node-3.com`
- No http://, https://, or www prefix

### Domain Not Working After 24 Hours
1. Check GoDaddy DNS settings are correct
2. Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation
3. Try clearing your browser cache
4. Verify A record points to: `76.76.21.21`
5. Verify CNAME for www points to: `cname.vercel-dns.com`

### Waitlist Form Not Working
- Check Environment Variables in Vercel
- Make sure `VITE_GOOGLE_SCRIPT_URL` is set
- Redeploy after adding environment variables

### SSL Certificate Issues
- Vercel automatically provisions SSL
- May take 10-15 minutes after domain is configured
- Certificate auto-renews

---

## Quick Verification Checklist

✅ Code committed to Git  
✅ Deployed to Vercel  
✅ Environment variable added (`VITE_GOOGLE_SCRIPT_URL`)  
✅ Domain added in Vercel  
✅ A record set in GoDaddy (`76.76.21.21`)  
✅ CNAME record set in GoDaddy (`cname.vercel-dns.com`)  
✅ https://node-3.com loads your site  
✅ Waitlist form works on production  
✅ Google Sheet receives submissions  

---

## After Deployment

### Automatic Updates
- Push to your GitHub repository
- Vercel automatically rebuilds and deploys
- Changes live in ~2 minutes

### Monitor Your Site
- Check Vercel dashboard for analytics
- Monitor Google Sheet for signups
- Vercel provides automatic uptime monitoring

---

**Your site will be live at https://node-3.com!** 🎉

Need help? Check the troubleshooting section or Vercel's docs at [vercel.com/docs](https://vercel.com/docs)

