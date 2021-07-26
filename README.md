# This is my personal website, powered by Eleventy and Hilya.

Live Site: <https://danielsouza.org>

## Local Install

```bash
# 1. Clone the repository
git clone https://github.com/esperanca/personal_website

# 2. Navigate into repository
cd personal_website

# 3. Install the dependencies
npm install

# 4. Start the development server
npm run start

# 5. Start the build mode
npm run  build
```

## Setting up Netlify CMS

This project is preconfigured to work with Netlify CMS.
When Netlify CMS makes commits to your repo, Netlify will auto-trigger a rebuild / deploy when new commits are made.
You’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

- Go to <https://app.netlify.com>, select your website from the list.
- Go to Identity and click Enable Identity.
- Click on Invite Users and invite yourself. You will receive an email and you need to accept the invitation to set the password.
- Now headover to Settings > Identity > Services and Enable Git Gateway.
- You can also manage who can register and log in to your CMS. Go to Settings > Identity > Registration Registration Preferences. I would prefer to keep it to Invite Only if I am the only one using it.
- Now, go to to site-name.netlify.app/admin, and login with your credentials.
