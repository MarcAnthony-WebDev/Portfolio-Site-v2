export type PortfolioItem = {
  id: number;
  title: string;
  href: string;
  src: string;
  description: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
};

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Cipco Fence",
    href: "https://cipcofence.com",
    src: "/images/cipco-fence-screenshot.png",
    description:
      "I built this website for Cipco Fence, focusing on a clean, user-friendly layout that highlights their services and expertise.",
    fromColor: "from-lime-900",
    viaColor: "via-lime-500",
    toColor: "to-lime-50",
  },
  {
    id: 2,
    title: "World of Discovery",
    href: "https://worldofdiscovery.org",
    src: "/images/wod-screenshot.png",
    description:
      "World of Discovery Summer Camp, located in Queens, NY, trusted me to create a vibrant, child-friendly website that captures the fun and excitement of summer camp. I collaborated closely with the camp's owner to ensure the design and functionality aligned with their vision, resulting in a site that engages both parents and kids.",
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
  },
];
