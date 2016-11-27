// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment: any = {
  "title": "破狼博客",
  "baseUrl": "/",
  "env": "prod",
  "question": {
    "url": "https://api.github.com/repos/greengerong/rebirth-question/issues?callback=JSONP_CALLBACK&access_token=[set token]"
  },
  "article": {
    "pageSize": 5
  },
  "api": {
    "host": "https://greengerong.github.io/rebirth/assets/source/"
  }
};
