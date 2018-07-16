import { createStore } from 'redux';
import reducer from '../../reducer/reducer';

export const editModeState = {
  articles: [],
  enlargedArticle: {
    author: 'Author test',
    title: 'Title test',
    id: 'id test',
    content: 'Velit ipsum occaecati eum recusandae quos. Dolor sint molestiae ducimus. Velit vel vero illum sed ut itaque. Tempore et asperiores.     Laborum aut eligendi omnis ullam repudiandae incidunt. Laborum est ab est. Dolorem repellendus similique deserunt voluptatibus accusantium fugiat nemo natus et. Vel sunt nostrum sunt maiores tempore et ipsam sed. In necessitatibus sint quo deleniti ut. Reprehenderit veniam et. Ea placeat quia qui rem. Praesentium voluptas velit laudantium aut itaque autem distinctio voluptas. Perferendis ipsa dolores nulla quis. Molestiae quas dolor ullam nobis facere molestiae illo porro. Dolores quis corrupti hic ut et minus voluptate quasi. Eveniet aut omnis quas. Voluptatem magni cumque itaque velit dolor. Ipsam nemo quos magnam aspernatur enim atque rem alias. Earum libero soluta dolor expedita. Numquam ratione aut minima qui dolorem cumque a. Omnis pariatur sit nihil in. Dolorem ducimus et eligendi ea reprehenderit veniam omnis qui delectus. Ab est rerum accusantium veniam a ex. Consequatur exercitationem sed illo. Tempora explicabo veritatis. Necessitatibus magni quae ex sit ipsum cupiditate perferendis ut. Consequuntur ipsa voluptatem delectus sit aliquam minus quod. Repudiandae eaque nisi nemo velit sit cumque qui beatae. Ab aut laudantium. Impedit aut sunt qui qui quasi aut vel consectetur nesciunt. Voluptatum esse impedit',
    tags: ['tag1', 'tag2'],
    published: true,
    excerpt: 'Velit ipsum occaecati eum recusandae quos. Dolor sint'
  },
  editMode: true
};

export const editModeStore = createStore(
  reducer,
  editModeState,
);

export const readModeState = {
  articles: [],
  enlargedArticle: {
    author: 'Author test',
    title: 'Title test',
    id: 'id test',
    content: 'Velit ipsum occaecati eum recusandae quos. Dolor sint molestiae ducimus. Velit vel vero illum sed ut itaque. Tempore et asperiores.     Laborum aut eligendi omnis ullam repudiandae incidunt. Laborum est ab est. Dolorem repellendus similique deserunt voluptatibus accusantium fugiat nemo natus et. Vel sunt nostrum sunt maiores tempore et ipsam sed. In necessitatibus sint quo deleniti ut. Reprehenderit veniam et. Ea placeat quia qui rem. Praesentium voluptas velit laudantium aut itaque autem distinctio voluptas. Perferendis ipsa dolores nulla quis. Molestiae quas dolor ullam nobis facere molestiae illo porro. Dolores quis corrupti hic ut et minus voluptate quasi. Eveniet aut omnis quas. Voluptatem magni cumque itaque velit dolor. Ipsam nemo quos magnam aspernatur enim atque rem alias. Earum libero soluta dolor expedita. Numquam ratione aut minima qui dolorem cumque a. Omnis pariatur sit nihil in. Dolorem ducimus et eligendi ea reprehenderit veniam omnis qui delectus. Ab est rerum accusantium veniam a ex. Consequatur exercitationem sed illo. Tempora explicabo veritatis. Necessitatibus magni quae ex sit ipsum cupiditate perferendis ut. Consequuntur ipsa voluptatem delectus sit aliquam minus quod. Repudiandae eaque nisi nemo velit sit cumque qui beatae. Ab aut laudantium. Impedit aut sunt qui qui quasi aut vel consectetur nesciunt. Voluptatum esse impedit',
    tags: ['tag1', 'tag2'],
    published: true,
    excerpt: 'Velit ipsum occaecati eum recusandae quos. Dolor sint'
  },
  editMode: false
};

export const readModeStore = createStore(
  reducer,
  readModeState,
);