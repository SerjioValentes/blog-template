import ImageNext from '@/components/atom/Image';
import { getAuthorData, urlForImg } from '@/helpers/sanityHelper';
import {
  Box, Typography, Stack,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React, { useEffect } from 'react';

const AboutMeSection = () => {
  const request = 'author';
  const [authorData, setAuthorData] = React.useState<any | null>(null);

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
          <ImageNext
            width="30vw"
            imgSrc={authorData?.image ? urlForImg(authorData.image?.asset).url() : ''}
            alt="author"
          />
        </Box>
        <Stack sx={{
          maxWidth: '50vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
            }}
          >
            {authorData && authorData.name}
          </Typography>
          <Typography>
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
