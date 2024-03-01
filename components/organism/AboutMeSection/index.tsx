import ImageNext from '@/components/atom/Image';
import { getAuthorData, urlForImg } from '@/helpers/sanityHelper';
import useWindowSize from '@/hooks/useWindowSize';
import {
  Box, Typography, Stack,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React, { useEffect } from 'react';

const AboutMeSection = () => {
  const request = 'author';
  const [authorData, setAuthorData] = React.useState<any | null>(null);

  const isMobile = useWindowSize();

  useEffect(() => {
    getAuthorData({
      request, setAuthorData,
    });
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'center',
        }}
      >
        <Box sx={{
          p: 4,
        }}
        >
          {authorData?.image
            && (
            <ImageNext
              width="30vw"
              height="auto"
              imgSrc={authorData?.image ? urlForImg(authorData?.image?.asset).url() : ''}
              alt="author"
              priority
            />
            )}
        </Box>
        <Stack sx={{
          maxWidth: '50vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            sx={{
              fontWeight: 'bold',
            }}
          >
            {authorData && authorData.name}
          </Typography>
          <Typography
            component="span"
          >
            <PortableText
              value={authorData && authorData.bio}
            />
          </Typography>
        </Stack>
      </Stack>

    </Box>
  );
};

export default AboutMeSection;
