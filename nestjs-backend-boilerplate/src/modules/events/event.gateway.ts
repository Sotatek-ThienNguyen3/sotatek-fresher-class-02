import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { verify } from 'jsonwebtoken';
import { Server, Socket } from 'socket.io';
import { jwtConstants } from 'src/modules/auth/auth.constants';

@WebSocketGateway()
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  async handleDisconnect(client: Socket): Promise<void> {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  async handleConnection(client: Socket): Promise<void> {
    const token = client.handshake.query?.authorization;
    if (token) {
      try {
        const payload = (verify(token, jwtConstants.accessTokenSecret) as unknown) as { userId: number };
        client.join(payload.userId);
        this.logger.log(`User ${payload.userId} connected: ${client.id}`);
      } catch (e) {
        this.logger.log(e);
        this.logger.log(`Failed to decode access token for client ${client.id}`);
      }
    } else {
      this.logger.log(`Guest connected: ${client.id}`);
    }

    client.on('leave', (symbol: string) => {
      this.logger.log(`Client ${client.id} leave ${symbol} `);
      client.leave('default_room');
    });

    client.on('join', (symbol: string) => {
      this.logger.log(`Client ${client.id} join ${symbol} `);
      client.join(['default_room']);
    });
  }
}
