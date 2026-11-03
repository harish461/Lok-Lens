export type CategoryType = 
  | "National"
  | "International"
  | "Politics"
  | "Business"
  | "Technology"
  | "Entertainment"
  | "Sports"
  | "Lifestyle";

export interface NewsArticle {
  id: string;
  title: string;
  titleHi?: string;
  slug: string;
  excerpt: string;
  excerptHi?: string;
  category: CategoryType;
  categoryHi?: string;
  image: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  views?: number;
  featured?: boolean;
  featuredInHero?: boolean;
  heroPosition?: "main" | "sub1" | "sub2" | "sub3" | "sub4";
  trending?: boolean;
  trendingRank?: number;
  topNews?: boolean;
  tags?: string[];
  isVideo?: boolean;
  videoDuration?: string;
}

export interface VideoArticle {
  id: string;
  title: string;
  titleHi?: string;
  slug: string;
  thumbnail: string;
  duration: string;
  category: CategoryType;
  publishedAt: string;
  views: string;
  isMain?: boolean;
}

