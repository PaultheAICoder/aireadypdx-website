# Analytics Setup Guide

This guide covers setting up Google Tag Manager (GTM) and Google Analytics 4 (GA4) for AI Ready PDX.

## Prerequisites

- Google account with access to Google Tag Manager and Google Analytics
- Admin access to update the codebase (to replace placeholder IDs)

## Step 1: Create Google Tag Manager Container

1. Go to [Google Tag Manager](https://tagmanager.google.com)
2. Click "Create Account"
3. Enter account name: "AI Ready PDX"
4. Enter container name: "aireadypdx.com"
5. Select "Web" as target platform
6. Accept Terms of Service
7. **Copy your Container ID** (format: GTM-XXXXXXX)

### Update the Code

1. Open `/index.html`
2. Find both instances of `GTM-XXXXXXX`
3. Replace with your actual Container ID

## Step 2: Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click Admin (gear icon)
3. Click "Create Property"
4. Enter property name: "AI Ready PDX"
5. Select business details and objectives
6. Create a Web data stream for `aireadypdx.com`
7. **Copy your Measurement ID** (format: G-XXXXXXXXXX)

## Step 3: Connect GA4 to GTM

1. In GTM, go to Tags > New
2. Click Tag Configuration > Google Analytics: GA4 Configuration
3. Enter your Measurement ID (G-XXXXXXXXXX)
4. Set Trigger to "All Pages"
5. Name the tag "GA4 Configuration"
6. Save

## Step 4: Set Up Conversion Events

### Form Submission Tracking

1. In GTM, create a new Trigger:
   - Trigger Type: Custom Event
   - Event Name: `form_submission`
   - Name: "Form Submission Event"

2. Create a new Tag:
   - Tag Type: Google Analytics: GA4 Event
   - Configuration Tag: Select your GA4 Configuration
   - Event Name: `generate_lead`
   - Add Parameters:
     - `form_name`: {{DLV - form_name}}
     - `requested_ai_session`: {{DLV - requested_ai_session}}
   - Trigger: Form Submission Event
   - Name: "GA4 - Form Submission"

3. Create Data Layer Variables for parameters:
   - Variable Type: Data Layer Variable
   - Name: DLV - form_name, Data Layer Variable Name: form_name
   - Name: DLV - requested_ai_session, Data Layer Variable Name: requested_ai_session

### Phone Click Tracking

1. Create Trigger:
   - Trigger Type: Custom Event
   - Event Name: `phone_click`

2. Create Tag:
   - Tag Type: GA4 Event
   - Event Name: `phone_click`
   - Parameter: `phone_number` = {{DLV - phone_number}}

### Email Click Tracking

1. Create Trigger:
   - Trigger Type: Custom Event
   - Event Name: `email_click`

2. Create Tag:
   - Tag Type: GA4 Event
   - Event Name: `email_click`
   - Parameter: `email_address` = {{DLV - email_address}}

## Step 5: Mark Conversions in GA4

1. In GA4, go to Admin > Events
2. Find your events (form_submission, phone_click, email_click)
3. Toggle "Mark as conversion" for each

## Step 6: Google Ads Integration

### Link Google Ads to GA4

1. In GA4, go to Admin > Product Links > Google Ads Links
2. Click "Link"
3. Select your Google Ads account
4. Enable personalized advertising
5. Complete linking

### Import Conversions to Google Ads

1. In Google Ads, go to Tools > Conversions
2. Click "+ New conversion action"
3. Select "Import" > Google Analytics 4
4. Select your GA4 property
5. Choose conversions to import (form_submission, phone_click)

### Set Up Remarketing

1. In GTM, the GA4 Configuration tag automatically enables remarketing
2. In Google Ads, create remarketing audiences from GA4 data

## Step 7: Test and Publish

1. In GTM, click "Preview" to enter debug mode
2. Visit aireadypdx.com in preview mode
3. Verify all tags fire correctly:
   - GA4 Configuration on page load
   - Form submission tag when form is submitted
   - Phone/email click tags when links are clicked
4. Check GA4 Realtime reports to confirm data is flowing
5. In GTM, click "Submit" to publish changes

## Verification Checklist

- [ ] GTM container ID updated in index.html (2 places)
- [ ] GA4 Configuration tag created in GTM
- [ ] Form submission tracking working
- [ ] Phone click tracking working
- [ ] Email click tracking working
- [ ] GA4 receiving data (check Realtime reports)
- [ ] Conversions marked in GA4
- [ ] Google Ads linked (if applicable)
- [ ] GTM published to production

## Troubleshooting

### Tags Not Firing

1. Check browser console for JavaScript errors
2. Verify GTM container ID is correct
3. Use GTM Preview mode to debug

### No Data in GA4

1. Verify Measurement ID is correct
2. Check GA4 Realtime report (data appears within seconds)
3. Verify GTM container is published (not just previewed)

### Form Submission Not Tracking

1. Verify the form submission succeeds (API returns 200)
2. Check dataLayer in browser console after submission
3. Verify trigger event name matches exactly: `form_submission`
