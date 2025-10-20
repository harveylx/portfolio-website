# Deployment Guide

This guide explains how to deploy your Astro portfolio to Cloudflare Pages using GitHub Actions.

## Prerequisites

- GitHub repository with this project
- Cloudflare account (free tier is sufficient)
- Domain registered at Namecheap (harveysingh.xyz)

## Setup Steps

### 1. Create Cloudflare Account & Get Credentials

1. Sign up at [Cloudflare](https://dash.cloudflare.com/sign-up) (free)
2. Get your **Account ID**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Select "Pages" from the left sidebar
   - Your Account ID is shown on the right side of the overview page
3. Create an **API Token**:
   - Go to [API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Click "Create Token"
   - Use the "Edit Cloudflare Workers" template
   - Add "Cloudflare Pages" permissions: **Edit**
   - Click "Continue to summary" → "Create Token"
   - **Copy the token immediately** (you won't see it again)

### 2. Add Secrets to GitHub Repository

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: The API token from step 1
4. Click **New repository secret** again and add:
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: Your Account ID from step 1

### 3. Initial Deployment

The GitHub Action will run automatically when you push to the `main` branch. For the first deployment:

```bash
git add .
git commit -m "Add Cloudflare Pages deployment workflow"
git push origin main
```

Monitor the deployment:
- Go to **Actions** tab in your GitHub repository
- Click on the running workflow to see progress

### 4. Configure Custom Domain in Cloudflare

After the first successful deployment:

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/) → **Pages**
2. Select your project (`harveysingh-xyz`)
3. Go to **Custom domains** tab
4. Click **Set up a custom domain**
5. Enter: `harveysingh.xyz` and `www.harveysingh.xyz`
6. Cloudflare will provide DNS records

### 5. Update Namecheap DNS Settings

1. Log in to [Namecheap](https://www.namecheap.com/)
2. Go to **Domain List** → Select `harveysingh.xyz`
3. Click **Manage** → **Advanced DNS**
4. Add the DNS records provided by Cloudflare (typically CNAME records):
   - Type: `CNAME`
   - Host: `@`
   - Value: `<your-project>.pages.dev`
   - TTL: Automatic

   - Type: `CNAME`
   - Host: `www`
   - Value: `<your-project>.pages.dev`
   - TTL: Automatic

5. Wait 5-30 minutes for DNS propagation

### 6. Verify Deployment

Visit https://harveysingh.xyz to see your live site!

## Automatic Deployments

From now on, every push to the `main` branch will automatically:
1. Build your Astro site
2. Deploy to Cloudflare Pages
3. Update your live site

## Manual Deployment

To trigger a manual deployment without pushing code:

1. Go to **Actions** tab in GitHub
2. Select **Deploy to Cloudflare Pages** workflow
3. Click **Run workflow** → **Run workflow**

## Costs

**Total: $0/month**

- Cloudflare Pages: Free (unlimited bandwidth, 500 builds/month)
- GitHub Actions: Free (2,000 minutes/month on public repos)
- Domain: ~$10-15/year (already paid at Namecheap)

## Troubleshooting

### Build fails with "CLOUDFLARE_API_TOKEN not found"
- Ensure you've added the secrets to GitHub (Step 2)
- Check the secret names match exactly (case-sensitive)

### DNS not resolving after 30 minutes
- Verify CNAME records in Namecheap point to Cloudflare Pages URL
- Check DNS propagation: https://www.whatsmydns.net/

### 404 errors on the site
- Check that `site` in astro.config.ts matches your domain
- Currently set to: `https://www.harveysingh.xyz/`

## Alternative Free Options

If you want to try other platforms:

1. **Vercel**: Change workflow to use `vercel-action` (also free)
2. **Netlify**: Use `netlify-actions/cli` (also free)
3. **GitHub Pages**: Use built-in GitHub Pages action (free, but slower)

All work with Namecheap DNS - just update the CNAME to point to the new platform.
