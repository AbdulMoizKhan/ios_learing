import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Box, Container, Grid, Typography } from "@mui/material";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import content from './content.json';

const ArticleLayout = dynamic(
  () => import('../../../app/components/articleLayout')
);

interface BlogPropsInterface {
  data: {
    heading: string;
    paragraph: string[];
    author:string;
    authorName:string;
    cover: string;
    minRead: string;
    publishDate: string;
    newBlog?: boolean;
    headText: {
      head: string;
      text: string[];
      text2: string[];
      level: 1 | 2 | 3 | 4 | 5;
      undorderdList: {
        text: string;
        heading: string;
        level: 1 | 2 | 3 | 4 | 5 | undefined;
      }[];
      undorderdList2: {
        text: string;
        heading: string;
        level: 1 | 2 | 3 | 4 | 5 | undefined;
      }[];
      orderedList: { text: string }[];
      paragraphs: string[];
    }[];
    table?: {
      columns: { text: string; dataKey: string }[];
      data: { [key: string]: string }[];
    };
    meta?: { [key: string]: string };
  };
}

const Article = ({ data }: BlogPropsInterface) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data.meta && (
        <Head>
          <title>{data.meta.title}</title>
          <meta name="description" content={data.meta.description} />
          <meta name="author" content="PureDome" />
          <meta property="og:title" content={data.meta.title} />
          <meta property="og:description" content={data.meta.description} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="PureDome" />
          <meta property="og:url" content={data.meta.link} />
          <link rel="canonical" href={data.meta.link} />
        </Head>
      )}
      {/* <Container sx={{maxWidth:"680px !important"}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">{data.heading}</Typography>
            <Typography variant="body1">{data.publishDate}</Typography>
            <Image src={data.cover} alt="cover" height={416} width={1000} />
          </Grid>
        </Grid>
        {!data.newBlog ? (
          <Grid container spacing={2}>
            <Grid item xs={12}> */}
              {/* Display paragraphs */}
              {/* {data.paragraphs.map((para, index) => (
                <Typography key={index} variant="body1">{para}</Typography>
              ))} */}
              {/* You can display headText and table similarly */}
            {/* </Grid>
          </Grid> */}
        {/* ) : ( */}
          <ArticleLayout data={data} />
        {/* )}
      </Container> */}
    </>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(content).map(slug => ({
    params: { slug }
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const data = content[slug as string];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
