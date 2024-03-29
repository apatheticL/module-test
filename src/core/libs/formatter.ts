import { isEmpty } from "@src/core/libs/utils";

export const formatCurrency = (number?: number | undefined) => {
  try {
    if (number) {
      const formattedValue = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return `${formattedValue}`;
    } else {
      return '0';
    }
  } catch (error) {
    return 'NaN';
  }
};
export const getThumbnailImageURL = (originalURL: string) => {
  if (isEmpty(originalURL)) {
    return originalURL;
  }

  return `${originalURL}.thumbnail.jpg`;
};
