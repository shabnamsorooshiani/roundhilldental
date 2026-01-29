# Vercel Serverless Email Function Setup Guide

## Issues Found and Fixed

### 1. **404 Not Found Error**

**Problem**: Your API route was not found by Vercel.

**Solution**: The file must be located at:

```
/api/send-email.js
```

Your project structure should look like:

```
your-project/
├── api/
│   └── send-email.js
├── public/ (optional)
│   └── index.html
├── package.json
└── vercel.json (optional)
```

### 2. **Code Bug - Wrong Email Recipient**

**Problem**: In your original code, line was:

```javascript
to: process.env.RESEND_API_KEY,  // WRONG!
```

**Solution**: Changed to:

```javascript
to: to,  // Correct - uses the email from request body
```

### 3. **CORS Issues**

Added CORS headers to allow requests from your frontend.

## Setup Steps

### Step 1: Project Structure

Move your `send-email.js` file to the `/api` folder:

```bash
mkdir -p api
mv send-email.js api/
```

### Step 2: Install Dependencies

```bash
npm install resend
```

Your `package.json` should include:

```json
{
  "name": "your-project",
  "version": "1.0.0",
  "dependencies": {
    "resend": "^3.0.0"
  }
}
```

### Step 3: Environment Variables

In your Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (get it from https://resend.com/api-keys)

### Step 4: Deploy to Vercel

```bash
vercel deploy
```

Or push to GitHub if you have automatic deployments enabled.

## Testing

### Test with Postman:

1. **Method**: POST
2. **URL**: `https://your-project.vercel.app/api/send-email`
3. **Headers**:
   - Content-Type: `application/json`
4. **Body** (raw JSON):

```json
{
  "to": "ehsan.qadir@vigorant.com",
  "subject": "Hello World",
  "html": "<p>Congrats on sending your <strong>first email</strong>!</p>"
}
```

### Test with curl:

```bash
curl -X POST https://your-project.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "ehsan.qadir@vigorant.com",
    "subject": "Test Email",
    "html": "<p>This is a test email</p>"
  }'
```

## Important Notes

### Resend Domain Setup

For production, you should:

1. Verify your domain in Resend dashboard
2. Change `from: 'onboarding@resend.dev'` to `from: 'noreply@yourdomain.com'`

### Rate Limits on Hobby Plan

Vercel Hobby plan has:

- 100 GB bandwidth per month
- 100 hours of serverless function execution
- Resend free tier: 100 emails/day, 3,000 emails/month

### Security Considerations

1. Never expose your RESEND_API_KEY in client-side code
2. Consider adding rate limiting to prevent abuse
3. Validate email addresses on the server side
4. Consider adding CAPTCHA for public forms

## Troubleshooting

### Still Getting 404?

1. Make sure file is at `/api/send-email.js` (not `/api/send-email/index.js`)
2. Redeploy: `vercel --prod`
3. Check Vercel dashboard > Functions tab to see if the function is detected

### Getting 500 Error?

1. Check Vercel function logs in dashboard
2. Verify RESEND_API_KEY is set correctly
3. Make sure Resend npm package is installed

### Email Not Sending?

1. Verify your Resend API key is valid
2. Check if you've exceeded rate limits
3. Verify the "from" email domain

## Example Response

**Success (200)**:

```json
{
  "success": true,
  "data": {
    "id": "abc123def456"
  }
}
```

**Error (400)**:

```json
{
  "error": "Missing required fields: to, subject, html"
}
```

**Error (500)**:

```json
{
  "success": false,
  "error": "API key is invalid"
}
```
