export const environment = {
  production: true,
  server: {
    api: {
      baseUrl: 'https://enigma-azercellhackathon.herokuapp.com',
      getFullUrl: (url: string) => {
        return `${environment.server.api.baseUrl}/api/${url}`;
      },
    }}
};
