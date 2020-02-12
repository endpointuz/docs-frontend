const host = 'http://192.168.1.241:8996';

export default {
  userLogin: () => [host, 'account/login/'].join('/'),
};
