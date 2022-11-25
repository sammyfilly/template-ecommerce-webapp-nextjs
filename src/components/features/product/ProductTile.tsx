import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { CtfImage } from '@src/components/features/contentful';
import { FormatCurrency } from '@src/components/shared/format-currency';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

export const ProductTile = ({ featuredProductImage, price, slug }: PageProductFieldsFragment) => {
  return slug ? (
    <Box as={Link} href={slug}>
      {featuredProductImage && (
        <Box borderRadius={4} overflow="hidden">
          <CtfImage {...featuredProductImage} />
        </Box>
      )}
      {price && (
        <Text mt={3}>
          <FormatCurrency value={price} />
        </Text>
      )}
    </Box>
  ) : null;
};
