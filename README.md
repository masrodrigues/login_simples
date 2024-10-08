# Tela de Login Simples

Este é um projeto de tela de login simples desenvolvido com Vite, com deploy realizado na Vercel. O projeto inclui estilização com CSS e implementação de responsividade para diferentes dispositivos (Desktop, Tablet, e Mobile).

**Link do Projeto:** [login-simples-two.vercel.app](https://login-simples-two.vercel.app/)

## Estrutura e Ferramentas Utilizadas

- **Vite**: Utilizado como ferramenta de build para um desenvolvimento mais rápido e simplificado.
- **CSS**: Para estilização responsiva e customização visual.
- **Husky**: Para garantir a padronização de commits e manter boas práticas no controle de versão.
- **Vercel**: (para deploy).

## Layouts Desenvolvidos

O layout foi implementado para três tipos de visualizações:

1. **Desktop:** Layout padrão com a tela dividida entre a imagem ilustrativa e o formulário de login.
![2024-10-01_11h33_53](https://github.com/user-attachments/assets/0a909a18-5867-4118-b91d-cfaf10293aa6)

2. **Tablet (768px x 1024px):** Mantém apenas o formulário de login centralizado e oculta a seção com a imagem.
![2024-10-01_19h49_02](https://github.com/user-attachments/assets/93b46267-0ae5-4b27-84c8-3870861ef630)

3. **Mobile (375px x 812px):** Exibe o formulário de login de maneira compacta e responsiva.
![2024-10-03_10h23_47](https://github.com/user-attachments/assets/e0d90ed4-d532-4ef3-b2b0-7a95c6486575)

## Estrutura de Arquivos

A estrutura de pastas segue as boas práticas de organização com separação de componentes e estilos


## Como Rodar o Projeto Localmente

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instalar as dependências:**

   ```bash
   npm install
   ```

3. **Rodar o projeto em ambiente de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acessar o projeto no navegador:**
   
   Normalmente, estará disponível em `http://localhost:5173/` (dependendo da configuração do Vite).

## Padrões de Commit com Husky

Foi implementado o Husky para padronização de commits, garantindo que as mensagens estejam no formato correto e seguindo convenções, como:

- `feat`: Para novas funcionalidades.
- `fix`: Para correções de bugs.
- `style`: Para mudanças de formatação.
- `refactor`: Para refatoração de código.

Para configurar o Husky, foi necessário:

1. Instalar o Husky como dependência de desenvolvimento:

   ```bash
   npm install husky --save-dev
   ```

2. Adicionar o script no `package.json` para configurar o Husky:

   ```json
   "scripts": {
     "prepare": "husky install"
   }
   ```

3. Criar os hooks necessários (como `pre-commit`) usando o comando:

   ```bash
   npx husky add .husky/pre-commit "npm test"
   ```

Dessa forma, o projeto está sempre com commits organizados e de acordo com as boas práticas de versionamento.


## Deploy na Vercel

O projeto foi publicado na Vercel para facilitar o acesso e visualização do layout. Para acessar a versão de produção, utilize o seguinte link: [login-simples-two.vercel.app](https://login-simples-two.vercel.app/).
