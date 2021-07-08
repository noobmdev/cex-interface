import { useColorModeValue } from '@chakra-ui/react';
import { bgColors, colors, textColors } from 'constants/styles.constant';

const useColors = () => {
  const bgPrimaryColor = useColorModeValue(
    bgColors.primary.light,
    bgColors.primary.dark
  );
  const bgSubPrimaryColor = useColorModeValue(
    bgColors.subPrimary.light,
    bgColors.subPrimary.dark
  );
  const bgNormalColor = useColorModeValue(
    bgColors.normal.light,
    bgColors.normal.dark
  );
  const primaryColor = useColorModeValue(
    colors.primary.light,
    colors.primary.dark
  );
  const borderColor = useColorModeValue(
    colors.border.light,
    colors.border.dark
  );
  const textPrimaryColor = useColorModeValue(
    textColors.primary.light,
    textColors.primary.dark
  );

  return {
    bgPrimaryColor,
    bgSubPrimaryColor,
    bgNormalColor,
    primaryColor,
    borderColor,
    textPrimaryColor,
  };
};

export default useColors;
