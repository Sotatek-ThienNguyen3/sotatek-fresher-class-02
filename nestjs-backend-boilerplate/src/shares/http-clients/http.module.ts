import { Global, Module } from '@nestjs/common';
import { HttpClient } from 'src/shares/http-clients/https.client';

@Global()
@Module({
  providers: [HttpClient],
  exports: [HttpClient],
})
export class HttpClientModule {}
