# App

GymPass style app

## RFs (Requisitos Funcionais)

- [] Deve ser possível se cadastrar;
- [] Deve ser possível se autenticar;
- [] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [] Deve ser possível o usuário obter seu histórico de check-ins;
- [] Deve ser possível o usuário buscar academias próximas;
- [] Deve ser possível o usuário buscar adamedias pelo nome;
- [] Deve ser possível o usuário realizar check-ins em uma academia;
- [] Deve ser possível validar o check-in de um usuário;
- [] Deve ser possível cadastrar uma academia;

## RNs (Regras de Negócio)
- [] O usuário não deve poder se cadastrar com email duplicada;
- [] O usuário não pode fazer 2 check-ins no mesmo dia;
- [] O usuário não pode fazer check-ins se não estiver (100m) da academia;
- [] O check-in só pode ser validado até 20 minutos após a criado;
- [] O check-in só pode ser validado por administradores;
- [] A academia só pode ser cadastrada por administradores;

# RNFs (Requisitos não funcionais)
- [] A senha do usuário precisar ser criptografada;
- [] Os dados da aplicação precisam estar persistidos em um banco de dados PostgreSQL;
- [] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [] O usuário precisa ser identificado por um JWT (Json Web Token);



# Comandos

## bibliotecas para desenvolvimento do projeto
npm i typescript @types/node tsx tsup -D

## bibliotecas de execução do projeto
npm i fastify : servidor http

## Passos de execução de comandos
npm init -y : inicializa o projeto
npx tsc --init : inicializa um projeto TypeScript gerando o arquivo tsconfig.json
