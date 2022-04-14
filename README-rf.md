**Requisitos funcionais**
- Funcionalidades da aplicação (Cadastrar uma categoria, poder recuperar senha pelo e-mail, etc)
  Regras de uma funcionalidade específica

**Requisitos não-funcioanis**
- Requisitos não ligados diretamente com a aplicação ou regras de negócio (Ex. dados serão guardados em um banco de dados postgres)

**Regras de negócio**
- Regras por trás dos requisitos (Requisito: deve ser possivel cadastrar uma categoria -> Regra de negócio: não deve ser possível cadastrar uma categoria com caracteres especiais ou com nome igual). São regras estabelecidades que serão implementadas na aplicação

---

# Cadastro de carro
**RF**
- Deve ser possível cadastrar um novo carro
- Deve ser possível listar todas as categorias

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente
- Não deve ser possível alterar a placa de um carro já cadastrado
- Ao cadastrar um carro, este deve estar disponível por padrão
- Apenas administradores devem poder cadastrar carros no sistema


# Listagem de carros
**RF**
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo nome da marca
- Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
- Usuário não precisa estar logado no sistema para acessar a listagem


# Cadastro de especificação de carros
**RF**
- Deve ser possível cadastrar especificações para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado no sistema
- Não deve ser possível cadastrar uma especificação já existente no carro em questão
- Apenas administradores devem poder cadastrar especificações no sistema


# Cadastro de imagens de carros
**RF**
- Deve ser possível cadastrar pelo menos uma imagen do carro
- Deve ser possível listar todos os carros

**RNF**
- Utilizar o Multer para upload dos arquivo

**RN**
- Usuário pode cadastrar mais de uma imagem para o mesmo carro
- Apenas administradores devem poder cadastrar imagens


# Aluguel de carros
**RF**
- Deve ser possível cadastrar um aluguel

**RN**
- O aluguel deve ter duração mínima de 24 horas
- Um usuário com um aluguel ativo não deve poder cadastrar mais um enquanto o anterior não terminar
- Não deve ser possível cadastrar um novo aluguel para um carro não disponível
