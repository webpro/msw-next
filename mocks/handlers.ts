import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'John',
      })
    );
  }),
];
