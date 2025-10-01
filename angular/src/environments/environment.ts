import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44389/',
  redirectUri: baseUrl,
  clientId: 'ABP_TopCv_App',
  responseType: 'code',
  scope: 'offline_access ABP_TopCv',
  requireHttps: true,
};

const useMockApi = true;

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'ABP_TopCv',
  },
  oAuthConfig,
   //cau hinh su dung mock api
    useMockApi,
  apis: {
    default: {
      // Redirect to angular app for mock data khi useMockApi = true
      url: useMockApi ? baseUrl : 'https://localhost:44389',
      rootNamespace: 'ABP_TopCv',
    },
    AbpAccountPublic: {
      url: useMockApi ? baseUrl : oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
