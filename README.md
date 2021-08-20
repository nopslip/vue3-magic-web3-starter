# Vue3, Magic, TailwindCSS, Web3 (Ethersjs) Starter 

This repo is being made as starting point to build quick/easy prototypes of Web3 apps. In working on a new project I wanted to be able to quickly spin up apps with this stack and wasn't able to find anything existing. 


##  Magic Link Support 
[Magic](https://magic.link/) integration gives awesome Passwordless login. The base code for this template was forked from @shahbaz17's nice work [here](https://github.com/shahbaz17/vue3-magic).  

###  Quickstart

```
git clone https://github.com/shahbaz17/vue3-magic.git
cd vue3-magic
mv .env.example .env
npm install
npm run serve
```

#### Get your Magic Publishable Key

Sign Up with [Magic](https://dashboard.magic.link/signup) and get your `VUE_APP_MAGIC_KEY`

![Dashboard Image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xm36hzdjr9680vyfiw3n.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## TailWind CSS

Using this as a vue plugin: 
https://www.npmjs.com/package/vue-cli-plugin-tailwind

```
vue add tailwind
npm i @tailwindcss/forms
```` 
* note: The install instructions [here](https://tailwindcss.com/docs/guides/vue-3-vite) failed with PostCSS v8 support issues. While there is a 'fix' here, https://tailwindcss.com/docs/installation#post-css-7-compatibility-build it didn't work. Using the vue-cli-plugin-tailwind worked so I ran with that. 

VSCode uses should check this plugin too - https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss


