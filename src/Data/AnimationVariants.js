export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
export const item = {
  hidden: { y: -20, scale: 0, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
};
export const general = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
