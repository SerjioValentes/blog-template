import React, { useEffect, useState } from 'react';
import {
  Box, Divider, Pagination, Stack, Typography,
} from '@mui/material';
import { IGetAllPosts, getAllPosts, getAllPostsCount } from '@/helpers/sanityHelper';
import EachArticle from '@/components/molecule/EachArticle';

const AllAriclesSection = () => {
  const request = 'post';

  const [allPosts, setAllPosts] = useState<any | null>(null);
  const [maxPage, setMaxPage] = useState<number>(10);

  useEffect(() => {
    const firstPage = '0';
    const secondPage = '10';
    getAllPostsCount({ request, setMaxPage });

    getAllPosts({
      request, setAllPosts, firstPage, secondPage,
    });
  }, []);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const firstPage = `${value - 1}${value === 1 ? '' : '0'}`;
    const secondPage = `${value}0`;

    const getAllPostsProps: IGetAllPosts = {
      request, setAllPosts, firstPage, secondPage,
    };
    getAllPosts(getAllPostsProps);
  };

  return (
    <Box>
      <Stack>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'right',
            py: 2,
          }}
        >
          Все статьи
        </Typography>
        <Divider />
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', py: 2 }}>
          {allPosts && allPosts.map((post: any) => (
            <div key={post._id}>
              <EachArticle post={post} />
            </div>
          ))}
        </Stack>
        <Pagination
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 4,
          }}
          count={maxPage}
          color="primary"
          onChange={onPageChange}
        />
      </Stack>
    </Box>
  );
};
export default AllAriclesSection;
