# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the CFCI website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123XYZ`)

## Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting

### Common Issues:

1. **"Failed to send message"**
   - Check your internet connection
   - Verify your EmailJS credentials are correct
   - Check the browser console for detailed error messages

2. **Template variables not showing**
   - Ensure your template uses the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Make sure the form field names match: `from_name`, `from_email`, `message`

3. **Emails going to spam**
   - Add your domain to EmailJS allowed origins
   - Set up proper email authentication (SPF, DKIM) with your email provider

### Rate Limits:

- Free plan: 200 emails/month
- Consider upgrading if you expect more traffic

## Security Notes

- Never commit your actual credentials to version control
- The `.env` file is already in `.gitignore`
- Use the `.env.example` file as a template for other developers