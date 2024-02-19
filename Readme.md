# API CRUD DE REGISTRO DE USUÁRIOS.

## Esta é uma API CRUD básica que permite gerenciar usuários e perfis.

## Endpoints

### Usuários (User)
- **POST /user**: Cria um novo usuário.
- **PUT /user/edit/:id**: Edita um usuário existente.
- **DELETE /user/delete/:id**: Deleta um usuário pelo seu ID.
- **GET /user**: Retorna todos os usuários cadastrados.

### Perfis (Profile)
- **POST /profile/create**: Cria um novo perfil.
- **PUT /profile/edit/:id**: Edita um perfil existente.
- **DELETE /profile/delete/:id**: Deleta um perfil pelo seu ID.
- **GET /profile**: Retorna todos os perfis cadastrados.

### Relacionamentos (UserProfile)
- **GET /user/profile**: Retorna todos os perfis de usuários.
- **GET /user/profile/:id**: Retorna o perfil de um usuário pelo seu ID.

## Parâmetros
- **CreateUser, EditUser**: `{first_name, last_name, age}`
- **DeleteUser**: `{id}`
- **CreateProfile**: `{bio, user_id}`
- **EditProfile**: `{id, bio}`
- **DeleteProfile**: `{id}`
- **GetAllUsers, GetAllProfiles**: Não requer parâmetros.
- **GetAllUserProfiles**: Não requer parâmetros.
- **FindUserProfileById**: `{id}`

## Execução Local
Instale as depedências do projeto:

`npm i`

No terminal, execute o seguinte comando:

`npm run setup` 

Será criado um arquivo .env para configuração de conexão com o banco de dados de sua preferência.

Dentro do arquivo schema.prisma dentro da pasta prisma, selecione o banco de dados desejado modificando o provider do datasource.

Até a data de publicação deste projeto, os bancos de dados suportados são: postgres, mysql, sqlserver, cockroach e mongodb.

No terminal execute:

`npx migrate dev`

Após a execução do comando serão plicadas as migrações ao banco de dados escolhido.

Após o carregamento das migrações no banco de dados, a aplicação estará pronta para uso.