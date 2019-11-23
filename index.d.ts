declare module 'vuex-cognito-module' {
  interface CognitoConfig {
    userPoolId: string | undefined;
    identityPoolId: string | undefined;
    userPoolWebClientId: string | undefined;
    region: string | undefined;
  }

  export default function (store: object, config: CognitoConfig, namespace?: string, vuexModuleOptions?: object): void
}
