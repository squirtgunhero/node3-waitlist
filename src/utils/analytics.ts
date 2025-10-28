/**
 * Google Analytics utility functions
 * 
 * Use these functions to track custom events throughout your application.
 */

// Type definitions for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event (e.g., 'waitlist_signup', 'button_click')
 * @param eventParams - Optional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track page views (useful for single-page applications)
 * @param pageTitle - Title of the page
 * @param pagePath - Path of the page
 */
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  }
};

/**
 * Track waitlist signups
 * @param email - User's email (optional, for privacy consider hashing)
 * @param source - Where the signup came from
 */
export const trackWaitlistSignup = (email?: string, source?: string) => {
  trackEvent('waitlist_signup', {
    event_category: 'engagement',
    event_label: source || 'main_form',
    // Note: Consider privacy implications before sending email
    // value: email ? hashEmail(email) : undefined,
  });
};

/**
 * Track button clicks
 * @param buttonName - Name/label of the button clicked
 * @param location - Where on the page the button is located
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    event_category: 'interaction',
    event_label: buttonName,
    location: location,
  });
};

/**
 * Track outbound links
 * @param url - The URL being navigated to
 * @param linkText - Text of the link clicked
 */
export const trackOutboundLink = (url: string, linkText?: string) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: linkText || url,
    transport_type: 'beacon',
  });
};

