# Facade pattern e repository com Vue.js

### Descrição
Esse projeto é um modelo para separar a camada de repositório e desacoplar o acesso aos dados.
O Facade Patterns está dentro da pasta ```facades``` de ```repositories/http```.
Dessa formar os repositóries de courses e campanhas.

### Injeção de dependência nos Pages.vue
Para injetar os services nas páginas vamos utilizar um mixin chamado ```service-mixin```.
Ele pode ser encontrado no diretório ```views```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
