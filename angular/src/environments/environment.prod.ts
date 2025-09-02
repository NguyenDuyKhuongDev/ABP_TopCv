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

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'ABP_TopCv',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44389',
      rootNamespace: 'ABP_TopCv',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
