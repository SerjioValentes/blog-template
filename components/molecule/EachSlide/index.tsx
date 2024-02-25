import { urlForImg } from '@/helpers/sanityHelper';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import React from 'react';

const EachSlide = ({ post }: any) => (
  <Card sx={{
    maxWidth: 300,
    height: 200,
    p: 2,
    border: '1px solid #ede8e8',
  }}
  >
    <CardMedia
      sx={{ height: 100 }}
      image={post.mainImage ? urlForImg(post.mainImage?.asset).url() : ''}
    />
    <CardContent>
      <Typography
        variant="body2"
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
export default EachSlide;