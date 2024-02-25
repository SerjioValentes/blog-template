import { getAllPosts } from '@/helpers/sanityHelper';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './index.css';
import EachArticle from '@/components/molecule/EachArticle';

const ArticlesSlider = () => {
  const request = 'post';
  const [allPosts, setAllPosts] = useState<any | null>(null);
  const [emblaRef] = useEmblaCarousel();

  useEffect(() => {
    const firstPage = '0';
    const secondPage = '5';

    getAllPosts({
      request, setAllPosts, firstPage, secondPage,
    });
  }, []);
  return (
    <Box>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {allPosts && allPosts.map((post: any) => (
            <div key={post._id} className="embla__slide">
              <EachArticle post={post} />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};
export default ArticlesSlider;
