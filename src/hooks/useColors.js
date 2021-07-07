import { useColorModeValue } from '@chakra-ui/react';
import { bgColors, colors, textColors } from 'constants/styles';

const useColors = () => {
  const bgPrimaryColor = useColorModeValue(
    bgColors.primary.light,
    bgColors.primary.dark
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
    primaryColor,
    borderColor,
    textPrimaryColor,
  };
};

export default useColors;
