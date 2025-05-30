/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "tomararyan-template",
  titleTemplate: "%s | tomararyan-template",
  defaultTitle: "tomararyan-template",
  description:
    "Aryan Tomar's personalized Next.js + ShadCN + TypeScript + SCSS starter template",
  canonical: "https://www.aryantomar.com",
  openGraph: {
    url: "https://www.aryantomar.com",
    title: "tomararyan-template",
    description: "Next.js + chakra-ui + TypeScript + SCSS template",
    type: "website",
    images: [
      {
        url: "https://www.aryantomar.com/opengraph-image.png?8684865a896acc3f",
        alt: "aryantomar.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "tomararyan-template",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
