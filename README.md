<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/bchiang7/v4/main/src/images/logo.png" width="100" />
</div>
<h1 align="center">
  <a href="https://paolersiripong.pages.dev/" target="_blank">paolersiripong.pages.dev</a>
</h1>

<p align="center">
  My personal portfolio website built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted with <a href="https://pages.cloudflare.com/" target="_blank">Cloudflare Pages</a>
</p>

## About This Project

This portfolio showcases my skills, experience, and projects in web development. The site features a clean, responsive design with smooth animations and an intuitive user interface.

## Features

- Responsive design that works on all devices
- Project showcase with detailed descriptions
- Skills and technology stack visualization
- Contact form with validation

## Tech Stack

- [Gatsby](https://www.gatsbyjs.org/) - React-based framework
- [Styled Components](https://styled-components.com/) - For styling
- [React](https://reactjs.org/) - JavaScript library
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting platform

## 🛠 Installation & Set Up

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Start the development server
   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

2. Preview the site as it will appear once deployed
   ```sh
   npm run serve
   ```

## 📦 Deploying to Cloudflare Pages

1. Push your code to a GitHub repository

2. Log in to the Cloudflare dashboard and select "Pages"

3. Click "Create a project" and select "Connect to Git"

4. Select your GitHub repository

5. Configure your build settings:

   - Build command: `npm run build`
   - Build output directory: `public`
   - Node.js version: Select the version you're using (e.g., 20.x)

6. Click "Save and Deploy"

7. Wait for the initial build to complete. Your site will be available at a URL like `your-project-name.pages.dev`

8. (Optional) Configure a custom domain in the Cloudflare Pages settings

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Primary        | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Secondary      | ![#112240](https://via.placeholder.com/10/112240?text=+) `#112240` |
| Accent         | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |
| Text Primary   | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| Text Secondary | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Background     | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |

## Customization

To customize this portfolio for your own use:

1. Replace the logo and favicon with your own
2. Update the personal information in `src/config.js`
3. Add your own projects in the projects section
4. Modify the color scheme to match your personal brand

## Credits

This project is a fork of [Brittany Chiang's portfolio v4](https://github.com/bchiang7/v4). The original design was created by [Brittany Chiang](https://brittanychiang.com/) and has been customized for my personal use with her permission through the open-source license. Thank you Brittany for the beautiful design and inspiration!

## License

The code is available under the MIT license. Please give appropriate credit by linking back to [brittanychiang.com](https://brittanychiang.com) if you use this design.
