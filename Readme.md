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