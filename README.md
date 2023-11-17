## Objetivo: PicPay Simplificado

Temos 2 tipos de usuários, os comuns e lojistas, ambos têm carteira com dinheiro e realizam transferências entre eles. Vamos nos atentar somente ao fluxo de transferência entre dois usuários.

Requisitos:

Para ambos tipos de usuário, precisamos do Nome Completo, CPF, e-mail e Senha. CPF/CNPJ e e-mails devem ser únicos no sistema. Sendo assim, seu sistema deve permitir apenas um cadastro com o mesmo CPF ou endereço de e-mail.

Usuários podem enviar dinheiro (efetuar transferência) para lojistas e entre usuários.

Lojistas só recebem transferências, não enviam dinheiro para ninguém.

Validar se o usuário tem saldo antes da transferência.

Antes de finalizar a transferência, deve-se consultar um serviço autorizador externo, use este mock para simular (https://run.mocky.io/v3/5794d450-d2e2-4412-8131-73d0293ac1cc).

A operação de transferência deve ser uma transação (ou seja, revertida em qualquer caso de inconsistência) e o dinheiro deve voltar para a carteira do usuário que envia.

No recebimento de pagamento, o usuário ou lojista precisa receber notificação (envio de email, sms) enviada por um serviço de terceiro e eventualmente este serviço pode estar indisponível/instável. Use este mock para simular o envio (https://run.mocky.io/v3/54dc2cf1-3add-45b5-b5a9-6bf7e7f1f4a6).

Este serviço deve ser RESTFul.


## Tecnologias utilizadas

- NestJS
- Docker 
- TypeOrm
- Swagger
- Postgres
- JWT
  

## Começando

1 - Configurar .env

2 - instalar depedencias

```bash
npm install
```

3 - executar as migrations

```bash
npm run migration:run
```

4 - subir os containers

```bash
docker-compose up -d
```

6 Doc API - localhost:{porta que você subiu api}/api

## Comandos para migrations

Para gerar migrations: 
```bash
npm run migration:generate -- src/infra/database/migrations/{nome da migration}
```
Para executar migrations: 
```bash
npm run migration:run
```
Para reverter migrations: 
```bash
npm run migration:revert
```

## Contato

- Email: gomez.amorim18@hotmail.com
- Linkedin: https://www.linkedin.com/in/gabriel-gomes99/
