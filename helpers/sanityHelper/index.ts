import { client } from '@/sanity/lib/client';
import urlBuilder from '@sanity/image-url';
import { groq } from 'next-sanity';

export interface IGetAllPosts {
  request: string,
  setAllPosts: any,
  firstPage: string,
  secondPage: string
}

export const getAllPosts = async ({
  request, setAllPosts, firstPage, secondPage,
}: IGetAllPosts) => {
  await client.fetch<any>(groq`*[_type == "${request}"] | order(_id) [${firstPage}...${secondPage}]`)
    .then((data) => {
      setAllPosts(data);
    }).catch((error) => {
      console.log('error', error);
    });
};

export const getAllPostsCount = async ({ request, setMaxPage }: any) => {
  await client.fetch<any>(groq`count(*[_type == "${request}"])`)
    .then((data) => {
      if (data < 10) {
        setMaxPage(1);
      } else {
        setMaxPage(Math.ceil(data / 10));
      }
    }).catch((error) => {
      console.log('error', error);
    });
};

export const urlForImg = (source: any) => urlBuilder(client).image(source);

export const getAuthorData = async ({
  request, setAuthorData,
}: any) => {
  await client.fetch<any>(groq`*[_type == "${request}"]{bio, image, name}`)
    .then((data) => {
      console.log('data', data[0]);
      setAuthorData(data[0]);
    }).catch((error) => {
      console.log('error', error);
    });
};
