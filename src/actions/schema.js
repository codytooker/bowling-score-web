import { schema } from 'normalizr';

const frame = new schema.Entity('frames', {}, {
  processStrategy: value => ({
    ...value,
    score: null,
  }),
});

export const game = new schema.Entity('games', { frames: [frame] }, {
  processStrategy: value => ({
    ...value,
    score: 0,
  }),
});
