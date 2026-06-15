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



