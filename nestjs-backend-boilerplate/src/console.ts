import * as dotenv from 'dotenv';
dotenv.config();

import { BootstrapConsole } from 'nestjs-console';
import { AppModules } from 'src/app.module';

const bootstrap = new BootstrapConsole({
  module: AppModules,
  useDecorators: true,
  contextOptions: {
    logger: true,
  },
});
bootstrap.init().then(async (app) => {
  try {
    await app.init();
    await bootstrap.boot();
    await app.close();
    process.exit(0);
  } catch (e) {
    console.error(e);
    await app.close();
    process.exit(1);
  }
});
