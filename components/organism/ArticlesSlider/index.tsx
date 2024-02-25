import { getAllPosts } from '@/helpers/sanityHelper';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './index.css';
import EachSlide from '@/components/molecule/EachSlide';

const ArticlesSlider = () => {
  const request = 'post';
  const [allPosts, setAllPosts] = useState<any | null>(null);
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true });

  useEffect(() => {
    const firstPage = '0';
    const secondPage = '5';

    getAllPosts({
      request, setAllPosts, firstPage, secondPage,
    });
  }, []);
  return (
    <Box sx={{
      p: 2,
    }}
    >
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {allPosts && allPosts.map((post: any) => (
            <div key={post._id} className="embla__slide">
              <EachSlide post={post} />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};
export default ArticlesSlider;
