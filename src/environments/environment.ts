// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCfAdx0aT5P3xMo5Bh4PKW_sGfcBVBJM7Q',
    authDomain: 'angular-tasks-5b3e4.firebaseapp.com',
    databaseURL: 'https://angular-tasks-5b3e4.firebaseio.com',
    projectId: 'angular-tasks-5b3e4',
    storageBucket: 'angular-tasks-5b3e4.appspot.com',
    messagingSenderId: '522652603662'
  }
};
