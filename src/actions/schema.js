import { schema } from 'normalizr';

const frame = new schema.Entity('frames');
export const game = new schema.Entity('games', {
  frames: [frame],
});
