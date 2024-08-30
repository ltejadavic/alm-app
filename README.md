This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is a landing page for a technology company, developed using Next.js for the frontend. The main objective is to provide an attractive and functional user interface that facilitates interaction with the company’s visitors and potential clients. Below is a summary of the key features implemented:

	1.Presentation and Navigation:
	The page includes a presentation section with highlighted information about the company and its services. The navigation is designed to be intuitive, featuring a hamburger menu for mobile devices and a responsive layout that ensures an optimal user experience across all devices.
 
	2.Services Section:
	A dedicated section describing the consulting and technological solutions offered by the company. This section is designed with a focus on clarity and visual appeal to capture the user’s attention.
 
	3.About Us:
	A section that provides information about the company’s team, their experience, and values. It includes a text and image design to enhance comprehension and information retention.
 
	4.Dynamic Gallery:
	An image gallery that dynamically loads from the server, allowing images to be added or removed without modifying the source code. It features a carousel with automatic transitions and manual navigation.
 
	5.FAQ (Frequently Asked Questions):
	An interactive FAQ module that allows users to expand and collapse answers, enhancing the user experience and providing key information in an accessible manner.
 
	6.Contact Form with CAPTCHA:
	A contact form that allows users to send messages directly from the website. It includes a custom CAPTCHA to enhance security and prevent spam. The CAPTCHA is dynamically generated using canvas to create a secure and unique image for each request.
 
	7.Informative Footer:
	A footer that includes contact information, a form to subscribe to a newsletter, and social links, all designed to remain consistent with the overall aesthetic of the site.

Technologies Used

	• Next.js: A React framework for building static websites and dynamic web applications.
	• React: A JavaScript library for building user interfaces.
	• CSS Modules: For modular and encapsulated CSS styling.
	• Canvas API: Used to dynamically generate CAPTCHA images.
	• Nodemailer: To handle email sending from the contact form.
	• JavaScript/TypeScript: Programming languages used to handle frontend logic and APIs.

This repository is ideal for those interested in learning about integrating Next.js with advanced security features, form management, and creating dynamic content on web pages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
