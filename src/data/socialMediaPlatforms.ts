import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCopy,
  FaLink,
} from 'react-icons/fa';

type socialMediaPlatforms = {
  [key: string]: socialMediaPlatform;
};
type socialMediaPlatform = {
  Icon: any;
  ActionIcon: any;
  handlePrefix: string;
  displayName: string;
};

const socialMediaPlatforms: socialMediaPlatforms = {
  github: {
    Icon: FaGithub,
    ActionIcon: FaLink,
    handlePrefix: '/',
    displayName: 'GitHub',
  },
  instagram: {
    Icon: FaInstagram,
    ActionIcon: FaLink,
    handlePrefix: '@',
    displayName: 'Instagram',
  },
  linkedin: {
    Icon: FaLinkedin,
    ActionIcon: FaLink,
    handlePrefix: '/',
    displayName: 'LinkedIn',
  },
  email: {
    Icon: FaEnvelope,
    ActionIcon: FaCopy,
    handlePrefix: '',
    displayName: 'E-Mail',
  },
  phone: {
    Icon: FaPhone,
    ActionIcon: FaCopy,
    handlePrefix: '',
    displayName: 'Phone',
  },
};

export default socialMediaPlatforms;
