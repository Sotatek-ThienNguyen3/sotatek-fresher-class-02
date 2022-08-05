import { enumize } from 'src/shares/enums/enumize';

export const TransactionStatus = enumize('PENDING', 'APPROVED', 'REJECTED');

export const TransactionType = enumize('DEPOSIT', 'WITHDRAWAL');
