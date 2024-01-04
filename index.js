/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Federated, ScriptManager} from '@callstack/repack/client';
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const resolveURL = Federated.createURLResolver({
    containers: {
      state_management: 'http://localhost:9001/[name][ext]',
    },
  });

  const url = resolveURL(scriptId, caller);
  if (!url) {
    return undefined;
  }
  return {
    url,
    cache: !__DEV__,
    query: {
      platform: Platform.OS,
    },
    timeout: 500000,
    verifyScriptSignature: 'off',
  };
});

AppRegistry.registerComponent(appName, () => App);
