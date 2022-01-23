export const environment = {
  production: true,
  server: {
    api: {
      baseUrl: 'http://192.168.43.47:8481',
      getFullUrl: (url: string) => {
        return `${environment.server.api.baseUrl}/api/${url}`;
      },
    }}
};
