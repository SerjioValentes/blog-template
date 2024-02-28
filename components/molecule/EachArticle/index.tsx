import React from 'react';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import { urlForImg } from '@/helpers/sanityHelper';
import { useRouter } from 'next/navigation';

const EachArticle = ({ post } : any) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/articles/${post.slug.current}`);
  };
  return (
    <Box>
      <Card
        onClick={handleRedirect}
        sx={{
          maxWidth: 245,
          minWidth: 245,
          height: 470,
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={post.mainImage ? urlForImg(post.mainImage?.asset).url() : ''}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              height: '200px',
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
    </Box>
  );
};
export default EachArticle;
