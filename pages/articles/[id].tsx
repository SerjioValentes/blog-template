import { getPost } from '@/helpers/sanityHelper';
import { Stack, Typography } from '@mui/material';
import { PortableText } from '@portabletext/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<any | null>(null);

  useEffect(() => {
    if (router.isReady) {
      getPost('post', id as string, setPost);
    }
  }, [router.isReady]);

  // const handleBack = () => {
  //   router.back();
  // };

  return (
    <div>
      {/* <Button variant="contained" onClick={handleBack}>
        Вернуться назад
      </Button> */}
      <Stack sx={{
        pt: 4,
      }}
      >

        <Typography align="center" variant="h3">{post && post?.title}</Typography>
        <Typography variant="h5">
          <PortableText
            value={post && post.body}
          />
        </Typography>
      </Stack>
    </div>
  );
};

export default Article;
