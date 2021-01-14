import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiCopy,
  FiExternalLink,
} from 'react-icons/fi';

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
    Icon: FiGithub,
    ActionIcon: FiExternalLink,
    handlePrefix: '/',
    displayName: 'GitHub',
  },
  instagram: {
    Icon: FiInstagram,
    ActionIcon: FiExternalLink,
    handlePrefix: '@',
    displayName: 'Instagram',
  },
  linkedin: {
    Icon: FiLinkedin,
    ActionIcon: FiExternalLink,
    handlePrefix: '/',
    displayName: 'LinkedIn',
  },
  email: {
    Icon: FiMail,
    ActionIcon: FiCopy,
    handlePrefix: '',
    displayName: 'E-Mail',
  },
  phone: {
    Icon: FiPhone,
    ActionIcon: FiCopy,
    handlePrefix: '',
    displayName: 'Phone',
  },
};

export default socialMediaPlatforms;
