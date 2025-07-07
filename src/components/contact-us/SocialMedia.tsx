// components/SocialMedia.tsx

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYelp,
  FaExternalLinkAlt,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Brownstoner",
    icon: <FaExternalLinkAlt />,
    url: "https://www.brownstoner.com/",
  },
  { name: "Yelp", icon: <FaYelp />, url: "https://www.yelp.com/" },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/",
  },
  { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/" },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/",
  },
];

export default function SocialMedia() {
  return (
    <section className="bg-[#f5f0e8] py-10 text-center">
      <h2 className="text-2xl font-semibold text-[#0d2b39] mb-8">
        Connect with Us
      </h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-[#6d4c41] hover:text-orange-600 transition"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <span className="text-sm font-medium">{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
