import Template from '../components-v2/templates/index/index';
import { ProductList } from '../models/product';
import { Artist } from '../models/artist';
import { ArticleList } from '../models/article';

const articleItems: ArticleList[] = [
  {
    id: 1,
    thumbnail: '/images/category/print.jpeg',
    title: 'タイトルタイトルタイトルタイトルタイトルタイトル',
    createdAt: new Date().toDateString(),
  },
  {
    id: 2,
    thumbnail: '/images/category/print.jpeg',
    title: 'タイトルタイトルタイトルタイトルタイトルタイトル',
    createdAt: new Date().toDateString(),
  },
  {
    id: 3,
    thumbnail: '/images/category/print.jpeg',
    title: 'タイトルタイトルタイトルタイトルタイトルタイトル',
    createdAt: new Date().toDateString(),
  },
  {
    id: 4,
    thumbnail: '/images/category/print.jpeg',
    title: 'タイトルタイトルタイトルタイトルタイトルタイトル',
    createdAt: new Date().toDateString(),
  },
  {
    id: 5,
    thumbnail: '/images/category/print.jpeg',
    title: 'タイトルタイトルタイトルタイトルタイトルタイトル',
    createdAt: new Date().toDateString(),
  },
  {
    id: 6,
    thumbnail: '/images/category/print.jpeg',
    title: 'タイトルタイトルタイトルタイトルタイトルタイトル',
    createdAt: new Date().toDateString(),
  },
];

const authorSliderItems: {
  author: Artist;
  products: ProductList[];
}[] = [
  {
    author: {
      id: 1,
      category: {
        id: 1,
        name: 'category',
      },
      name: 'テスト',
      uniqueName: 'foaendp',
      icon: '/images/category/print.jpeg',
    },
    products: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/painting.jpeg',
      },
      {
        id: 2,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/pottery.jpeg',
      },
      {
        id: 3,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/photo.jpeg',
      },
      {
        id: 4,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/drawing.jpeg',
      },
      {
        id: 5,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/sculpture.jpeg',
      },
      {
        id: 6,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/print.jpeg',
      },
      {
        id: 7,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/painting.jpeg',
      },
      {
        id: 8,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/pottery.jpeg',
      },
      {
        id: 9,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/photo.jpeg',
      },
      {
        id: 10,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/drawing.jpeg',
      },
      {
        id: 11,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/sculpture.jpeg',
      },
      {
        id: 12,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/print.jpeg',
      },
    ],
  },
  {
    author: {
      id: 1,
      name: 'テスト',
      uniqueName: 'foaendp',
      category: {
        id: 1,
        name: 'カテゴリー',
      },
      icon: '/images/category/print.jpeg',
    },
    products: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/painting.jpeg',
      },
      {
        id: 2,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/pottery.jpeg',
      },
      {
        id: 3,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/photo.jpeg',
      },
      {
        id: 4,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/drawing.jpeg',
      },
      {
        id: 5,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/sculpture.jpeg',
      },
      {
        id: 6,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/print.jpeg',
      },
    ],
  },
  {
    author: {
      id: 1,
      name: 'テスト',
      uniqueName: 'foaendp',
      category: {
        id: 1,
        name: '画家',
      },
      icon: '/images/category/print.jpeg',
    },
    products: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/painting.jpeg',
      },
      {
        id: 2,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/pottery.jpeg',
      },
      {
        id: 3,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/photo.jpeg',
      },
      {
        id: 4,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/drawing.jpeg',
      },
      {
        id: 5,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/sculpture.jpeg',
      },
      {
        id: 6,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/print.jpeg',
      },
    ],
  },
  {
    author: {
      id: 1,
      category: {
        id: 1,
        name: 'カテゴリー',
      },
      name: 'テスト',
      uniqueName: 'foaendp',
      icon: '/images/category/print.jpeg',
    },
    products: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/painting.jpeg',
      },
      {
        id: 2,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/pottery.jpeg',
      },
      {
        id: 3,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/photo.jpeg',
      },
      {
        id: 4,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/drawing.jpeg',
      },
      {
        id: 5,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/sculpture.jpeg',
      },
      {
        id: 6,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/print.jpeg',
      },
    ],
  },
  {
    author: {
      id: 1,
      name: 'テスト',
      uniqueName: 'foaendp',
      category: {
        id: 1,
        name: '画家',
      },
      icon: '/images/category/print.jpeg',
    },
    products: [
      {
        id: 1,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/painting.jpeg',
      },
      {
        id: 2,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/pottery.jpeg',
      },
      {
        id: 3,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/photo.jpeg',
      },
      {
        id: 4,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/drawing.jpeg',
      },
      {
        id: 5,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/sculpture.jpeg',
      },
      {
        id: 6,
        category: {
          id: 1,
          name: 'カテゴリー',
        },
        alt: 'index',
        title: 'タイトルタイトルタイトル',
        price: 3000,
        thumbnail: '/images/category/print.jpeg',
      },
    ],
  },
];

const Home = () => {
  return <Template articleItems={articleItems} authorSliderItems={authorSliderItems} />;
};

export default Home;
