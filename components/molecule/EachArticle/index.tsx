import React from 'react';
import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import { urlForImg } from '@/helpers/sanityHelper';

const myPortableTextComponents = {
  block: {
    h1: ({ children }: { children: React.ReactNode }) => <Typography variant="h5">{children}</Typography>,
  },
};

const EachArticle = ({ post } : any) => (
  <Box>
    <Card sx={{
      maxWidth: 245,
      minWidth: 245,
      height: 500,
      position: 'relative',
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
            components={myPortableTextComponents}
          />
        </Typography>
      </CardContent>
      <CardActions sx={{
        position: 'absolute',
        bottom: 0,
      }}
      >
        <Button variant="contained" size="small">Поделиться</Button>
        <Button variant="contained" size="small">Читать</Button>
      </CardActions>
    </Card>
  </Box>
);
export default EachArticle;
