export type DescriptionBlock = 
  | {type: "paragraph", content:string;}
  | {type: "heading", content:string;}
  | {type: "list", content:string[];}

type BasePortfolioItem = {
  id: number;
  title: string;
  href: string;
  src: string;
  alt: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
};

export type PortfolioGalleryItem = BasePortfolioItem  & {
  description: string; 
};

export type PortfolioFeatureItem = BasePortfolioItem & {
  description: DescriptionBlock[];
}

export const portfolioFeature: PortfolioFeatureItem[] = [
  {
    id: 1,
    title: "Elite 3D Scan",
    href: "https://elite3dscan.com",
    src: "/images/elite_screenshot.png",
    alt: "A screenshot of the Elite 3D Scan website",
    description: [
      {
        type: "paragraph",
        content:
          "The Elite 3D Scan website is a modern, full-stack web application designed to showcase high-precision 3D scanning and BIM services for the AEC industry. This fully responsive platform delivers a seamless user experience across devices, with clean UI, smooth animations, and form validation powered by the latest frontend technologies.",
      },
      {
        type: "heading",
        content: "Tech Stack Highlights",
      },
      {
        type: "list",
        content: [
          "Next.js for performant SSR and optimized routing",
          "TypeScript for strong type safety and scalable architecture",
          "TailwindCSS and Shadcn/ui for utility-first and accessible components",
          "Framer Motion to add fluid, sequential page animations",
          "React Hook Form + Zod for schema-based validation in dynamic forms",
        ],
      },
      {
        type: "heading",
        content: "Key Features",
      },
      {
        type: "list",
        content: [
          "Hero landing page and marketing copy aimed at the construction tech audience",
          "Animated service and portfolio cards, enhancing engagement while communicating offerings",
          "Interactive modal and carousel for detailed project presentations",
          "Custom-built contact form with advanced validation and service selection",
          "Responsive layout and adaptive navigation for mobile users, including a custom hamburger menu",
          "Dark overlay headers with motion-enhanced titles for professional visual impact",
        ],
      },
    ],
  },
];

export const portfolioData: PortfolioGalleryItem[] = [
  {
    id: 1,
    title: "Cipco Fence",
    href: "https://cipcofence.com",
    src: "/images/cipco-fence-screenshot.png",
    description:
      "I built this website for Cipco Fence with a clean, user-friendly layout that highlights their services and expertise. The site features a smooth language changer that lets visitors switch between English and Spanish, along with full accessibility support—ensuring screen reader compatibility and intuitive keyboard navigation for an inclusive experience. Check it out!",
    fromColor: "from-lime-900",
    viaColor: "via-lime-500",
    toColor: "to-lime-50",
    alt: "A Screenshot of the Cipco Fence Website",
  },
  {
    id: 2,
    title: "World of Discovery",
    href: "https://worldofdiscovery.org",
    src: "/images/wod-screenshot.png",
    description:
      "World of Discovery Summer Camp, located in Queens, NY, trusted me to create a vibrant, child-friendly website that captures the fun and excitement of summer camp. I collaborated closely with the camp's owner to ensure the design and functionality aligned with their vision, resulting in a site that engages both parents and kids.",
    alt: "A Screenshot of the World of Discovery Website",
  },
  {
    id: 3,
    title: "Affordable",
    href: "https://affordablehomewarrantyplans.com",
    src: "/images/affordable-screenshot.png",
    description:
      "This website was developed with the primary goal of helping users find affordable home warranty plans. The design prioritizes ease of navigation and clear presentation of plan options, ensuring visitors can quickly compare and select the best coverage to protect their homes without breaking the bank.",
    fromColor: "from-blue-900",
    viaColor: "via-blue-500",
    toColor: "to-blue-50",
    alt: "A Screenshot of the Affordable Website",
  },
  {
    id: 4,
    title: "Mach-Speed",
    href: "https://mach-speed.com",
    src: "/images/mach-speed-screenshot.png",
    description:
      "Mach-Speed, a local business specializing in car parts sales and installation, entrusted me to create their website, business cards, and a promotional flyer. I delivered a cohesive brand experience across both digital and print, helping them connect with their target audience more effectively.",
    fromColor: "from-orange-900",
    viaColor: "via-orange-500",
    toColor: "to-orange-50",
    alt: "A Screenshot of the Mach-Speed Website",
  },
  {
    id: 5,
    title: "letscelebrate2026.com",
    href: "https://letscelebrate2026.com",
    src: "/images/lets-celebrate-screenshot.png",
    description:
      "This clean, two-page website was designed to commemorate America's 250th birthday, with a focus on selling patriotic lapel pins. The straightforward layout ensures a user-friendly shopping experience while celebrating a milestone in American history.",
    fromColor: "from-red-900",
    viaColor: "via-red-500",
    toColor: "to-red-50",
    alt: "A Screenshot of the letscelebrate2026.com Website",
  },
];
