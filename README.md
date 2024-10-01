# MagicAI

![Captura de tela 2024-10-01 201637](https://github.com/user-attachments/assets/13a2adaa-403a-449d-8a1d-fe93030fe8d4)
![Captura de tela 2024-10-01 201659](https://github.com/user-attachments/assets/d228ced9-a26b-4b09-a4fd-64a0e11a0726)


> Este é um projeto de página web onde você pode criar desenhos no canvas, e eles são replicados automaticamente ao lado em forma de imagem gerada por Inteligência Artificial. A aplicação utiliza **Convex** e **Replicate** para transformar esboços desenhados à mão em imagens digitais criadas por IA, com uma interface estilizada utilizando **shadcn/ui**.

## Tecnologias Utilizadas

- [Convex](https://www.convex.dev/): Gerenciamento de back-end em tempo real para processar e armazenar os esboços.
- [Replicate](https://replicate.com/home): Serviço de IA para transformar os esboços em imagens.
- [Next.js](https://nextjs.org/): Framework React para a construção da interface do usuário.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS para o design responsivo e estilização da interface.
- [Shadcn/ui](https://ui.shadcn.com/): Componentes de UI acessíveis e reutilizáveis para a interface.

## Funcionalidades

- Desenhe no canvas na página web.
- Os esboços são replicados automaticamente em uma imagem gerada por IA ao lado.
- A comunicação entre o front-end e o back-end é feita utilizando **Convex**.
- A transformação dos esboços em imagens é realizada utilizando **Replicate**.
- Interface estilizada com **shadcn/ui** para proporcionar uma experiência visual moderna e intuitiva.

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/Jezebel1990/generate-images.git
   cd generate-images
   ```
2. Instale as dependências:
  ```bash
    npm install
   ```
3. Execute o projeto em desenvolvimento:
  ```bash
    npm run dev
   ```
4. Abra o navegador em http://localhost:3000 para ver a aplicação.

## Estrutura do Projeto
| Estrutura | Descrição |
| --- | --- |
| `/src` | Contém o código-fonte do projeto, incluindo os componentes React e as funções Convex. |
| `/convex` | Contém as funções relacionadas à comunicação com o back-end Convex. |
| `/public` | Arquivos estáticos como imagens e ícones. |
| `/shadcn/ui` | Componentes personalizados para a interface do usuário. |

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

Feito com ♥ por [Jezebel Guedes](https://www.linkedin.com/in/jezebel-guedes/) 👋 Entre em contato!
