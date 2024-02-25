import React from 'react';
import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography,
} from '@mui/material';
import { PortableText } from '@portabletext/react';
import { urlForImg } from '@/helpers/sanityHelper';

// eslint-disable-next-line max-len
// const urlFor = (source: any) => urlBuilder(client).image(source);
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
      {/* <Stack sx={{
        // position: 'absolute',
        // bottom: 0,
        justifyContent: 'space-around',
      }}
      > */}
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
      {/* </Stack> */}
    </Card>

    {/* <Button variant="contained" onClick={() => console.log(post)}>Check post - each</Button> */}
  </Box>
);
export default EachArticle;
