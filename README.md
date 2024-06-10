# Dogs - Rede Social para Cachorros

Bem-vindo ao Dogs, uma rede social dedicada aos amantes de cachorros! Este projeto foi desenvolvido utilizando o que há de mais novo no ecossistema Next.js, como parte de um curso de Next.js oferecido pela [Origamid](https://www.origamid.com/). Aqui, os usuários podem compartilhar fotos, histórias e interagir com outros donos de cachorros.

A versão de deploy do projeto está disponível em: [dogsnext.henriquelopes.dev.br](https://dogsnext.henriquelopes.dev.br)

- **Usuário**: dogs
- **Senha**: 1234

## Tecnologias Utilizadas

- **Next.js 14**: A estrutura principal do projeto, oferecendo renderização do lado do servidor, geração estática e um poderoso sistema de rotas.
- **CSS Modules**: Para estilização dos componentes com escopo local e prevenção de conflitos de nomes.
- **TypeScript**: Adição de tipagem estática ao JavaScript, proporcionando um desenvolvimento mais seguro e robusto.
- **Victory**: Biblioteca para criação de gráficos interativos e altamente personalizáveis.
- **Jose**: Utilizada para validação de tokens JWT, garantindo segurança na autenticação e autorização de usuários.

## Funcionalidades

- **Cadastro e Login**: Permite que os usuários se registrem e façam login na plataforma.
- **Postagens de Fotos**: Os usuários podem postar fotos dos seus cachorros.
- **Interação Social**: Os usuários podem comentar nas fotos de outros usuários.
- **Gráficos**: Exibição de gráficos de estatísticas sobre o uso da plataforma, como número de postagens e interações.

## Como Executar o Projeto

1. **Clone o Repositório**

    ```bash
    git clone https://github.com/Henrique0498/dogs-next.git
    cd dogs-next
    ```

2. **Instale as Dependências**

    ```bash
    npm install
    # ou
    yarn install
    ```

3. **Execute o Projeto em Desenvolvimento**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```plaintext
.
├── src
│   ├── components    # Componentes reutilizáveis da aplicação
│   │   └── ComponenteExemplo
│   │       ├── index.tsx
│   │       └── ComponenteExemplo.module.css
│   ├── app                # Páginas e rotas do Next.js
│   └── ...                # Outros arquivos e diretórios
├── public   # Arquivos estáticos
└── ...               # Outros arquivos e diretórios na raiz do projeto
