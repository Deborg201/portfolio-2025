import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/yourusername", // Replace with your actual GitHub URL
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/yourusername", // Replace with your actual LinkedIn URL
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/c/yourchannel", // Replace with your actual YouTube URL
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/yourusername", // Replace with your actual Twitter URL
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
