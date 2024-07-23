# web3url

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```


## Upload website
1. build the website and generate the dist folder.

   `yarn build`

2. deploy a FlatDirectory contract.

   `ethfs-cli create -p 0x20cc... -c 43069`

3. upload the dist to the FlatDirectory contract.

   `ethfs-cli upload -a 0x5Ad...2B947 -p 0x20cc.. -f dist -c 43069`

4. set the default file.

   `ethfs-cli default -a 0x5Ad...2B947 -p 0x20cc... -f index.html -c 43069`

5. Access the website through gateway.

   [https://0x5ad14e8439b9619e165db27545faf6df13e2b947.3336.w3link.io/](https://0x5ad14e8439b9619e165db27545faf6df13e2b947.3336.w3link.io/)


## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
