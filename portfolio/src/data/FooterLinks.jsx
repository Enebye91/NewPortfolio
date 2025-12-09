const year = new Date().getFullYear();

export const FooterData = [
  {
    title: "Version",
    links: [{ label: `© ${year} VEL design` }],
  },

  {
    title: "Contact",
    links: [
      { label: "+4520617459", href: "tel:+4520617459" },
      {
        label: "michellevel91@gmail.com",
        href: "mailto:michellevel91@gmail.com",
      },
    ],
  },
  {
    title: "Sitemap",
    links: [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "About",
        to: "/About",
      },
    ],
  },

  {
    title: "Socials",
    links: [
      {
        label: "LinkeIn",
        href: "https://www.linkedin.com/in/michelle-v-johansen",
      },
    ],
  },
];
