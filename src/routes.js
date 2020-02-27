const host = 'http://192.168.1.241:8996';
// const host = 'http://192.168.1.61:8000';

export default {
  userLogin: () => [host, 'account/login/'].join('/'),
  userCreate: () => [host, 'account/'].join('/'),
  verifyEmail: () => [host, 'account/verify/'].join('/'),

  getCompanyInfo: () => [host, 'company/me/'].join('/'),

  contractCreate: () => [host, 'company/contracts/'].join('/'),
  contractEdit: (id) => [host, 'company/contracts', id, ''].join('/'),
  productCreate: (id) => [host, 'company/documents', id, 'products/'].join('/'),
  productEdit: (id) => [host, 'company/products', id, ''].join('/'),
  productRemove: (id) => [host, 'company/products', id, ''].join('/'),

  countries: () => [host, 'documents/countries/'].join('/'),
  currencies: () => [host, 'documents/currencies/'].join('/'),
  banks: () => [host, 'documents/banks/'].join('/'),
  supplyTerms: () => [host, 'documents/conditions/delivery/'].join('/'),
  paymentTerms: () => [host, 'documents/conditions/payment/'].join('/'),
  categories: () => [host, 'documents/products/categories/'].join('/'),
  tnveds: () => [host, 'documents/tnveds/'].join('/'),
  units: () => [host, 'documents/units/'].join('/'),
  files: () => [host, 'documents/files/'].join('/'),

  draftContracts: () => [host, 'company/contracts/'].join('/'),
  publishedContracts: () => [host, 'company/contracts/published/'].join('/'),
  draftDetails: (id) => [host, 'company/contracts', id, ''].join('/'),
  offerCreate: (id) => [host, 'company/contracts', id, 'offers/'].join('/'),

  contractPublish: (id) => [host, 'company/contracts', id, 'send/'].join('/'),
};
