# vuex-cognito-module

## notes
- this package was originally boosted from [here](https://github.com/vuetifyjs/vuex/tree/master/packages/cognito-module).

## changes
- `fetchCurrentAuthenticatedUser`

## todo
- [ ] ditch vuepress or upgrade dependcy security vulns
- [ ] typescript support


## original docs
Vuex module to interface with AWS Cognito

Docs Link: [https://cognito.vuetifyjs.com/](https://cognito.vuetifyjs.com/)

Install:
```bash
yarn add @vuetify/vuex-cognito-module
```

Import into your project's entry point (main.js in most Vue projects)
```js
import attachCognitoModule from '@vuetify/vuex-cognito-module';
```

Attach cognito module to the store
```js
import store from './store';
attachCognitoModule(store, {
  userPoolId: 'your-data-here',
  identityPoolId: 'your-data-here',
  userPoolWebClientId: 'your-data-here',
  region: 'your-data-here',
}, 'cognito')
```
