export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
  tags: {
    name: string;
  }[];
  slug: string;
  createdAt: string;
  coverImage: {
    responsiveImage: ResponsiveImage;
  };
  content: ProjectContent;
};

type ResponsiveImage = {
  alt: string;
  aspectRatio: number;
  base64: string;
  height: number;
  sizes: string;
  src: string;
  srcSet: string;
  title: string;
  webpSrcSet: string;
  width: number;
};

type ProjectContent = {
  blocks: any[];
  value: {
    schema: any;
    document: any;
  };
};
