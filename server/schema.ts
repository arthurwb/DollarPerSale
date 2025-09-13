import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  relationship,
  password,
  timestamp,
} from '@keystone-6/core/fields';

import { document } from '@keystone-6/fields-document';
import { type Lists } from '.keystone/types';

export const lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),
      password: password({ validation: { isRequired: true } }),
      // 🔥 REMOVE THIS LINE
      // posts: relationship({ ref: 'Post.author', many: true }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
    },
  }),

  Post: list({
    access: allowAll,
    graphql: {
      plural: 'Posts',
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      images: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      author: text({ validation: { isRequired: true } }),
      date: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),

  Project: list ({
    access: allowAll,
    graphql: {
      plural: 'Projects',
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      link: text({}),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      images: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      contributors: text({ validation: { isRequired: true } }),
    }
  })
} satisfies Lists;
