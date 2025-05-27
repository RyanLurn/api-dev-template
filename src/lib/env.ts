import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/v4";

const env = createEnv({
  server: {
    DB_FILE_NAME: z.string().min(1)
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true
});

export default env;
