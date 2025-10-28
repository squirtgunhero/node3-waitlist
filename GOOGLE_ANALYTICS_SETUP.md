# Google Analytics Setup Guide

Google Analytics has been added to your waitlist landing page! Follow these steps to complete the setup.

## Step 1: Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" (gear icon) in the bottom left
4. Under "Property" column, click "Data Streams"
5. Create a new Web stream or select an existing one
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

## Step 2: Add Your Measurement ID

Replace the placeholder `G-XXXXXXXXXX` in two places in `index.html`:

```html
<!-- Line 10 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Line 15 -->
gtag('config', 'G-XXXXXXXXXX');
```

Replace both instances with your actual Measurement ID.

## Step 3: Use Analytics Tracking in Your App

The `src/utils/analytics.ts` file provides helper functions for tracking custom events.

### Example: Track Waitlist Signups

In your `WaitlistForm.tsx` component, import and use the tracking function:

```typescript
import { trackWaitlistSignup } from '../utils/analytics';

// After successful form submission
const handleSubmit = async (email: string) => {
  // ... your form logic ...
  
  // Track the signup
  trackWaitlistSignup(email, 'main_form');
};
```

### Example: Track Button Clicks

```typescript
import { trackButtonClick } from '../utils/analytics';

<button onClick={() => {
  trackButtonClick('Get Started', 'hero_section');
  // ... your button logic ...
}}>
  Get Started
</button>
```

### Available Tracking Functions

- `trackEvent(eventName, eventParams)` - Track any custom event
- `trackPageView(pageTitle, pagePath)` - Track page views
- `trackWaitlistSignup(email, source)` - Track waitlist signups
- `trackButtonClick(buttonName, location)` - Track button clicks
- `trackOutboundLink(url, linkText)` - Track external link clicks

## Step 4: Test Your Setup

1. Run your development server: `npm run dev`
2. Open your site in a browser
3. Open browser DevTools > Network tab
4. Look for requests to `google-analytics.com` or `googletagmanager.com`
5. Perform an action (like submitting the waitlist form)
6. Check Google Analytics Real-Time reports to see if events are being tracked

## Step 5: Verify in Google Analytics

1. Go to your Google Analytics property
2. Click "Reports" > "Realtime"
3. Visit your site and perform actions
4. You should see your activity appear in real-time
5. Custom events will appear under "Events" in the main reports

## Privacy Considerations

- The current setup respects user privacy
- Consider adding a cookie consent banner if required by your jurisdiction (GDPR, CCPA, etc.)
- The `trackWaitlistSignup` function includes a commented option for hashing emails if you need to track them
- Review Google Analytics data retention and privacy settings in your GA admin panel

## Additional Configuration (Optional)

### Enable Enhanced Measurement

In Google Analytics:
1. Go to Admin > Data Streams > Your Web Stream
2. Click "Enhanced measurement"
3. Toggle features like scroll tracking, outbound clicks, site search, etc.

### Set Up Custom Dimensions

Create custom dimensions in GA4 to track additional user properties or event parameters specific to your node³ application.

## Troubleshooting

- **Events not showing up**: Check that you replaced the placeholder Measurement ID
- **Console errors**: Make sure the gtag script loads before any tracking calls
- **Ad blockers**: Remember that ad blockers may prevent GA from loading in development
- **Real-time delay**: Events may take 1-2 minutes to appear in GA real-time reports

---

✅ Your Google Analytics setup is complete! Just add your Measurement ID and start tracking.

