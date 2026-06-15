# Estruturação dos Componentes React

No projeto Costs, a arquitetura foi organizada seguindo o princípio de separação de responsabilidades e reutilização de componentes.

## Componentes de Layout

Os componentes Navbar e Footer foram isolados na pasta `layout`, pois são elementos compartilhados por todas as páginas da aplicação.

### Navbar

Responsável pela navegação principal do sistema, contendo os links para as páginas disponíveis. Ao transformá-la em um componente independente, foi possível reutilizá-la em toda a aplicação sem duplicação de código.

Benefícios:

* Reutilização.
* Facilidade de manutenção.
* Centralização da navegação.

### Footer

Responsável pelas informações de rodapé da aplicação. Assim como a Navbar, foi componentizado para evitar repetição em cada página.

Benefícios:

* Padronização visual.
* Facilidade de atualização.
* Reutilização em múltiplas telas.

## Estrutura Geral

```text
components/
├── layout/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Container.js
│   └── Message.js
├── form/
│   ├── Input.js
│   ├── Select.js
│   └── SubmitButton.js
├── project/
│   ├── ProjectForm.js
│   ├── ProjectCard.js
│   └── ServiceForm.js
└── page/
    ├── Home.js
    ├── Projects.js
    ├── Project.js
    └── NewProject.js
```

## Motivo da Componentização

A componentização foi utilizada para tornar o código mais organizado, reutilizável e escalável.

Em vez de criar toda a interface em um único arquivo, cada parte da aplicação possui uma responsabilidade específica:

* Layout: estrutura visual compartilhada.
* Form: componentes genéricos de entrada de dados.
* Project: componentes ligados à regra de negócio.
* Page: telas associadas às rotas da aplicação.

Essa abordagem segue boas práticas do React e facilita futuras manutenções, correções e inclusão de novas funcionalidades.

