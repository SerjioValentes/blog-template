'use client';

import React from 'react';
import { urlForImg } from '@/helpers/sanityHelper';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import { useRouter } from 'next/navigation';

const EachSlide = ({ post }: any) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/articles/${post.slug.current}`);
  };

  return (
    <Card
      onClick={handleRedirect}
      sx={{
        maxWidth: 300,
        height: 200,
        p: 2,
        border: '1px solid #ede8e8',
        cursor: 'pointer',
      }}
    >
      <CardMedia
        sx={{ height: 100 }}
        image={post?.mainImage ? urlForImg(post.mainImage?.asset).url() : ''}
      />
      <CardContent>
        <Typography
          variant="body2"
          component="span"
          sx={{
            height: '100px',
            overflow: 'hidden',
            textOverflow: 'clip',
          }}
        >
          <PortableText
            value={post.body}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};
export default EachSlide;
