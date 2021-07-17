import { useColorModeValue } from '@chakra-ui/react';
import { bgColors, colors, textColors } from 'constants/styles.constant';

export const useBorderColors = () => {
  const borderColor = useColorModeValue(
    colors.border.light,
    colors.border.dark
  );
  return { borderColor };
};

export const useBgColors = () => {
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

  return {
    bgPrimaryColor,
    bgSubPrimaryColor,
    bgNormalColor,
  };
};

export const useTextColors = () => {
  const textPrimaryColor = useColorModeValue(
    textColors.primary.light,
    textColors.primary.dark
  );
  const textNormalColor = useColorModeValue(
    textColors.normal.light,
    textColors.normal.dark
  );

  return {
    textPrimaryColor,
    textNormalColor,
  };
};

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
  const textNormalColor = useColorModeValue(
    textColors.normal.light,
    textColors.normal.dark
  );

  return {
    bgPrimaryColor,
    bgSubPrimaryColor,
    bgNormalColor,
    primaryColor,
    borderColor,
    textPrimaryColor,
    textNormalColor,
  };
};

export default useColors;
