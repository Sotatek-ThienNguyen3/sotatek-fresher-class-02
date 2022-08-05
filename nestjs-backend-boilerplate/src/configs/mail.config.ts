import { getConfig } from 'src/configs/index';

interface IEmailConfig {
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  service: string;
  enable: boolean;
}

export const mailConfig: IEmailConfig = {
  auth: {
    user: getConfig().get<string>('mail.account'),
    pass: getConfig().get<string>('mail.password'),
  },
  from: getConfig().get<string>('mail.from'),
  service: getConfig().get<string>('mail.service'),
  enable: getConfig().get<string>('mail.enable') === 'true',
};
