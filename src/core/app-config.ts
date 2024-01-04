import {ConfigServiceAddress} from './model/config-service-url';

let appConfig: ConfigServiceAddress;

function setAppConfig(newAppConfig: ConfigServiceAddress) {
  appConfig = newAppConfig;
}

function getAppConfig() {
  return appConfig ?? new ConfigServiceAddress();
}

// add other navigation functions that you need and export them
export const AppConfigService = {
  setAppConfig,
  getAppConfig,
};
