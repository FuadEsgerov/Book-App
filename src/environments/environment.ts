// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server: {
    api: {
      baseUrl: 'http://192.168.43.47:8481',
      getFullUrl: (url: string) => {
        return `${environment.server.api.baseUrl}/api/${url}`;
      },
    }}
};

/*export const environment = {
  production: false,
  server: {
    api: {
      authUrl: 'https://auth-service-stage.botbox.app', // https://auth-service-stage.botbox.app
      baseUrl: 'https://backend-service-stage.botbox.app', // https://backend-service-stage.botbox.app
      version: '',
      getFullUrl: (url: string) => {
        return `${environment.server.api.baseUrl}${environment.server.api.version}/api/${url}`;
      },
      getAuthFullUrl: (url: string) => {
        return `${environment.server.api.authUrl}${environment.server.api.version}/${url}`;
      }
    },
  },
  app: {
    layouts: {
      auth: {
        userToken: {
          cookieName: 'botbox_UT',
          cookieNameRefresh: 'botbox_UT_Refresh'
        }
      },
      main: {

      }
    }
  },
  utils: {
    regex: {
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /^[A-Za-z]\w{7,14}$/,
      phone:/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    },
  },
  integration:{
  id: '564204248258634'
  }
};
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
