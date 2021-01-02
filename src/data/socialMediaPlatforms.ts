import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

type socialMediaPlatforms = {
  [key: string]: socialMediaPlatform;
};
type socialMediaPlatform = {
  icon: any;
  handlePrefix: string;
  displayName: string;
};

const socialMediaPlatforms: socialMediaPlatforms = {
  github: {
    icon: FaGithub,
    handlePrefix: '/',
    displayName: 'GitHub',
  },
  instagram: {
    icon: FaInstagram,
    handlePrefix: '@',
    displayName: 'Instagram',
  },
  linkedin: {
    icon: FaLinkedin,
    handlePrefix: '/',
    displayName: 'LinkedIn',
  },
  email: {
    icon: FaEnvelope,
    handlePrefix: '',
    displayName: 'E-Mail',
  },
  phone: {
    icon: FaPhone,
    handlePrefix: '',
    displayName: 'Phone',
  },
};

export default socialMediaPlatforms;
