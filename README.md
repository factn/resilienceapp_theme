# Mutual Aid - Resilience App Theme
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Netlify Status](https://api.netlify.com/api/v1/badges/e1d80024-6417-4af4-ad3d-0ee57410366c/deploy-status)](https://app.netlify.com/sites/resilienceapp-theme/deploys)

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Get started

Clone the repository
```
$ cd <sites-folder>
$ git clone https://github.com/factn/resilienceapp_theme.git
```

Make sure you have Gatsby installed globally
```
$ npm i -g gatsby
```

Install your packages
```
$ npm install
```

Start the server
```
$ npm start
```

Sometimes you have to run a fresh build
```
$ npm run clean && gatsby develop
```

## GraphQL

http://localhost:8000/__graphql


**Note:** This theme uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/) and [Netlify CMS](https://www.netlifycms.org)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Editabe Pages: Landing, About, Blog-Collection and Contact page with Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `lambda` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more


### Media Libraries (installed, but optional)

Media Libraries have been included in this starter as a default. If you are not planning to use `Uploadcare` or `Cloudinary` in your project, you **can** remove them from module import and registration in `src/cms/cms.js`. Here is an example of the lines to comment or remove them your project.

```javascript
import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
```

Note: Don't forget to also remove them from `package.json` and `yarn.lock` / `package-lock.json` using `yarn` or `npm`. During the build netlify-cms-app will bundle the media libraries as well, having them removed will save you build time.
Example:
```
yarn remove netlify-cms-media-library-uploadcare
```
OR
```
yarn remove netlify-cms-media-library-cloudinary
```

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## Purgecss

[gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/daniel-huerta-34868631/"><img src="https://avatars0.githubusercontent.com/u/53913596?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Huerta</b></sub></a><br /><a href="#ideas-DAHuerta" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-DAHuerta" title="Project Management">📆</a></td>
    <td align="center"><a href="http://joshuawu.me/"><img src="https://avatars2.githubusercontent.com/u/12107969?v=4" width="100px;" alt=""/><br /><sub><b>Joshua Wu</b></sub></a><br /><a href="https://github.com/factn/resilience-landing-page/commits?author=jwu910" title="Code">💻</a> <a href="https://github.com/factn/resilience-landing-page/pulls?q=is%3Apr+reviewed-by%3Ajwu910" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/factn/resilience-landing-page/commits?author=jwu910" title="Documentation">📖</a></td>
    <td align="center"><a href="https://doza.design"><img src="https://avatars2.githubusercontent.com/u/20975817?v=4" width="100px;" alt=""/><br /><sub><b>Paul Mendoza</b></sub></a><br /><a href="https://github.com/factn/resilience-landing-page/issues?q=author%3Aqdozaq" title="Bug reports">🐛</a> <a href="https://github.com/factn/resilience-landing-page/commits?author=qdozaq" title="Code">💻</a> <a href="https://github.com/factn/resilience-landing-page/commits?author=qdozaq" title="Documentation">📖</a> <a href="#ideas-qdozaq" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-qdozaq" title="Maintenance">🚧</a> <a href="#question-qdozaq" title="Answering Questions">💬</a> <a href="https://github.com/factn/resilience-landing-page/pulls?q=is%3Apr+reviewed-by%3Aqdozaq" title="Reviewed Pull Requests">👀</a> <a href="#security-qdozaq" title="Security">🛡️</a></td>
    <td align="center"><a href="http://goodbright.nz"><img src="https://avatars2.githubusercontent.com/u/166867?v=4" width="100px;" alt=""/><br /><sub><b>Miles Thompson</b></sub></a><br /><a href="#ideas-utunga" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/factn/resilience-landing-page/commits?author=utunga" title="Code">💻</a> <a href="https://github.com/factn/resilience-landing-page/pulls?q=is%3Apr+reviewed-by%3Autunga" title="Reviewed Pull Requests">👀</a> <a href="#question-utunga" title="Answering Questions">💬</a> <a href="https://github.com/factn/resilience-landing-page/issues?q=author%3Autunga" title="Bug reports">🐛</a> <a href="#business-utunga" title="Business development">💼</a> <a href="#content-utunga" title="Content">🖋</a> <a href="#projectManagement-utunga" title="Project Management">📆</a></td>
    <td align="center"><a href="http://www.linkedin.com/in/lokaren/"><img src="https://avatars3.githubusercontent.com/u/2974103?v=4" width="100px;" alt=""/><br /><sub><b>Karen</b></sub></a><br /><a href="#design-karenkun" title="Design">🎨</a> <a href="#ideas-karenkun" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-karenkun" title="Project Management">📆</a> <a href="#question-karenkun" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/tuan-nguyen-067105a6/"><img src="https://avatars3.githubusercontent.com/u/3273671?v=4" width="100px;" alt=""/><br /><sub><b>Tuan Nguyen</b></sub></a><br /><a href="https://github.com/factn/resilience-landing-page/issues?q=author%3Amat10tng" title="Bug reports">🐛</a> <a href="https://github.com/factn/resilience-landing-page/commits?author=mat10tng" title="Code">💻</a> <a href="https://github.com/factn/resilience-landing-page/commits?author=mat10tng" title="Documentation">📖</a> <a href="#ideas-mat10tng" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-mat10tng" title="Maintenance">🚧</a> <a href="#projectManagement-mat10tng" title="Project Management">📆</a> <a href="#question-mat10tng" title="Answering Questions">💬</a> <a href="https://github.com/factn/resilience-landing-page/pulls?q=is%3Apr+reviewed-by%3Amat10tng" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/sarahjagrowski"><img src="https://avatars0.githubusercontent.com/u/63767896?v=4" width="100px;" alt=""/><br /><sub><b>sarahjagrowski</b></sub></a><br /><a href="#design-sarahjagrowski" title="Design">🎨</a> <a href="#ideas-sarahjagrowski" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!