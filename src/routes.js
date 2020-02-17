const host = 'http://192.168.1.241:8996';

export default {
  userLogin: () => [host, 'account/login/'].join('/'),
  userCreate: () => [host, 'account/'].join('/'),
  verifyEmail: () => [host, 'account/verify/'].join('/'),

  getCompanyInfo: () => [host, 'company/me/'].join('/'),
};
