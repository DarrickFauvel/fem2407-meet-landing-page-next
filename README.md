# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

mobile<br>
<img src="https://github.com/DarrickFauvel/fem2407-meet-landing-page-next/blob/main/screenshot-mobile.jpeg?raw=true" width="200" />
<br>
tablet<br>
<img src="https://github.com/DarrickFauvel/fem2407-meet-landing-page-next/blob/main/screenshot-tablet.jpeg?raw=true" width="300" />
<br>
desktop<br>
<img src="https://github.com/DarrickFauvel/fem2407-meet-landing-page-next/blob/main/screenshot-desktop.jpeg?raw=true" width="400" />

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://fem2407-meet-landing-page-next.vercel.app/](https://fem2407-meet-landing-page-next.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- Flexbox
- Grid
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

### What I learned

I learned to position and scale the hero image in the mobile view design.

```html
// hero container with image at mobile view
<div className="relative aspect-[2.44/1] w-full overflow-hidden">
  <image
    className="absolute aspect-[2.71/1] w-full origin-top scale-[110.5%]"
    src="{imageHero}"
    alt="circles of people"
  />
</div>
```

The container uses an aspect ratio `2.44/1` which is less wide than the image width. So, the image aspect ratio is `2.71` which is wider than the container and is scaled `110.5%` from `origin-top`. Because the container is set to `overflow-hidden`, 5.25% on each side of the image is cropped out as in the design.

### Continued development

I may add some subtle animations.

### Useful resources

- [Tailwind CSS: Responsive Design](https://tailwindcss.com/docs/responsive-design) - This helped me apply media queries at the right breakpoints.

## Author

- Website - [darrickdevelops.com](https://darrickdevelops.com)
- Frontend Mentor - [@DarrickFauvel](https://www.frontendmentor.io/profile/DarrickFauvel)
- LinkedIn - [Darrick Fauvel](https://www.linkedin.com/in/darrickfauvel/)
