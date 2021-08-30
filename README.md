# Vue3, Magic, TailwindCSS, Web3 Starter
## About Bloom App  

Bloom App was made to be a starting point for building Vue3 based Web3 apps. You can use it for rapid prototyping an MVP, a hackathon, or as even as the foundation for a production project. For now it's probably better suited for the former until more work is done to harden security, implement tests, and solidify best practices. 

Bloom App currently uses Magic as the Web3 provider and supports both Ethereum and Matic networks. Users are not required to have Metamask or other plugin based Web3 wallet. 

*The base code for this template was originally forked from @shahbaz17's nice work [here](https://github.com/shahbaz17/vue3-magic).  

## Bloom App Stack 
1) [VueJS 3](https://v3.vuejs.org/) 

2) [Magic.Link](https://magic.link/) for auth

3) [TailwindCSS](https://tailwindcss.com/) for clean/easy CSS  

4) [Ethers](https://github.com/ethers-io/ethers.js/) for all your Web3 needs

## Setup
Built with NodeJS v16.6.2. May or may not work with older versions.  


### Base App 
```zsh
git clone https://github.com/nopslip/magic-vue3-web3-starter.git
cd magic-vue3-web3-starter
npm install 
```
###  TailWind CSS
As a vue plugin: 
https://www.npmjs.com/package/vue-cli-plugin-tailwind

```
vue add tailwind
npm i @tailwindcss/forms
```
-->Note: The install instructions [here](https://tailwindcss.com/docs/guides/vue-3-vite) failed with PostCSS v8 support issues. While there is a fix here, https://tailwindcss.com/docs/installation#post-css-7-compatibility-build it didn't work. Using the vue-cli-plugin-tailwind worked so I ran with that. 

> VSCode users should check this plugin too for nice Tailwind auto-complete support https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

## Running the App 
Sign Up with [Magic](https://dashboard.magic.link/signup) and set your `VUE_APP_MAGIC_KEY`
```zsh
mv .env.example .env
```

Start Bloom App:
```zsh
npm run serve
```

Compiles and minifies for production:
```zsh
npm run build
```

Lints and fixes files:
```zsh
npm run lint
```


### Notes

Magic Instances are defined as VueJS Global Properties. As such, you can access them via the console directly with:
```
$vm.appContext.config.globalProperties.$magicEth
```
 


