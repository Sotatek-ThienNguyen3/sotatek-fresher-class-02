import { enumize } from 'src/shares/enums/enumize';

export const UserStatus = enumize('ACTIVE', 'DEACTIVE', 'LOCKED');

export const UserRole = enumize('USER', 'ADMIN', 'SUPER_ADMIN');
