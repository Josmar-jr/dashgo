import {
  Stack,
  StackProps,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  Image as ImageChakra,
  ImageProps,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

export const animationBox = {
  hidden: { scale: 0, opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

export const animationItemTop = {
  hidden: { y: 80, opacity: 0 },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const StackBox = motion<StackProps>(Stack);
