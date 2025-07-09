import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'production', 'test']).default('dev'),
  PORT: z.coerce.number().default(3333),
//   DATABASE_URL: z.string().url(),
//   JWT_SECRET: z.string().min(1, 'JWT_SECRET is required'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('Invalid environment variables:', _env.error.format());
  //process.exit(1);
    throw new Error('Invalid environment variables');
}

export const env = _env.data;