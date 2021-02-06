# Base para todos os projetos React 

É um repositório com base dos meus principais projetos

# Tecnologias [libs / pre-processador / Plataforma ]

### Libs
<b>React</b>
<img alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />

### pre-processador css
<b>Sass</b>
<img alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />

### Plataforma
<b>NodeJS</b>
<img alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"/>

## Para fazer funcionar, basta fazer os seguintes passos:

Instalar dependências:
`yarn install`

Iniciar o projeto
`yarn start`

## Estrutura do projeto
```
|_src
    |_assets
        |_images/ [.jpg / .png / .svg]
    |_components
        |_ [componentes da aplicação]
    |_pages
        |_ [páginas que contem componentes]
    |_utils [funcionalidades abstraídas da aplicação]
    |_ global.scss [css global da aplicação]
    |_app.js [arquivo principal da aplicação]
    |_index.js [estrutura principal da aplicação que herda app.js]
```