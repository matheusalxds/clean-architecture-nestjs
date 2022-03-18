## The Powerful NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>
<!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
[![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Clean Architecture

![alt text](./public/clean-architecture.jpg "Clean Architecture")

The project has been developed thinking about concepts of Clean Architecture,
in a nutshell, I spread the functionalities in layers to better meet the responsibilities.

Our `Domain` is responsible to keep **entities** and **use-cases**. `Application`
layer is responsible for introducing controllers. `Infra` layer has the responsibility
to become a gateway between our application and third packages, and last but not least,
there's the `Main` layer, better known as a _"dirty layer"_, because the `Main` will
connect each part of the project.

## TypeORM
[TypeORM](https://typeorm.io/#/) is an ORM that can run in NodeJS, Browser, Cordova,
PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be
used with TypeScript and JavaScript (ES5, ES6, ES7, ES8). Its goal is to always support
the latest JavaScript features and provide additional features that help you to
develop any kind of application that uses databases - from small applications with
a few tables to large scale enterprise applications with multiple databases.

## Getting Started
### Installation

```bash
$ npm install
```

### Creating the database

Before we start the application, it's necessary to create our database.

It's very simple to create our migration files, as simple as you can think, you just need to run
the following command:

```bash
$ npm gen:migration <migration_name>
```
If you want to execute the migration file, you need to run the following command:

```bash
$ npm run:migration
```

Sometimes, we need to revert the migration, so we need to run the following command:

```bash
$ npm rev:migration
```

If you prefer to use the documentation for this, you can find it [here](https://orkhan.gitbook.io/typeorm/docs/migrations).

### Running the app

After you create the database, it is possible to start the application with the following command:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers.
If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
