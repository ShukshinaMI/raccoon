<h1 align="center">RACCOON</h1>

<p align="center">
<img src="https://img.shields.io/github/languages/count/ShukshinaMI/raccoon">
<img src="https://img.shields.io/github/languages/top/ShukshinaMI/raccoon">
<img src="https://img.shields.io/github/directory-file-count/ShukshinaMI/raccoon">
<img src="https://img.shields.io/github/repo-size/ShukshinaMI/raccoon">
<img src="https://img.shields.io/tokei/lines/github/ShukshinaMI/raccoon">
</p>

[comment]: <> (<img src="">)
[comment]: <> ([Посмотреть проект]&#40;&#41;)

## Содержание
 * [О проекте](#о-проекте)
   * [Стек технологий](#стек-технологий)
   * [Структура](#структура)
 * [Настройка проекта](#настройка-проекта)
   * BACKEND
   * FRONTEND
 * [Доступ к документации API](#доступ-к-документации-API)

## О проекте 
Представляет собой мини-приложение "блог", в котором можно просматривать список постов с разбиением на страницы,
возможностью поиска по тегу/автору/названию, возможностью перехода к детальной странице поста.

*Frontend-часть* реализована на React, с использованием ui-библиотеки [Ant Design](https://ant.design/).
В качестве менеджера состояний использован MobX. 

*Backend-часть* реализована на NodeJS с использованием фреймворка: Express. В качестве БД используется PostgreSQL. 
Подключение сервера Express к PostgreSQL с помощью node-postgres.


### Стек технологий
* HTML
* CSS
* React
* TypeScript
* NodeJS
* PostgreSQL

### Структура
```bash
├── backend
│    ├── src
│    │   ├── controllers
│    │   ├── dbconfig
│    │   ├── helpers
│    │   ├── models
│    │   ├── routes
│    │   └── utils
│    ├── .gitignore
│    ├── .prettierrc
│    ├── app.ts
│    ├── package.json
│    ├── package-lock.json
│    ├── server.ts
│    ├── swagger.json
│    └── tsconfig.json
├── frontend
│    ├── public
│    ├── src
│    │   ├── api
│    │   ├── core
│    │   ├── helpers
│    │   ├── icons
│    │   ├── pages
│    │   └── shared
│    ├── .gitignore
│    ├── .prettierrc
│    ├── package.json
│    ├── package-lock.json
│    └── tsconfig.json
└── README.md
```

## Настройка проекта

### BACKEND
#### 1. Нужно добавить ваши database details
```
 user: 'db_username',
 password: 'db_password',
 database: 'db_dbname',
 host: 'db_host',
``` 
#### 1. Для установки всех зависимостей запустить скрипт `npm install`
#### 2. запустить скрипт сборки `npm build`
#### 3. Запустить скрипт `npm run start-server`

### FRONTEND
#### 1. Для установки всех зависимостей запустить скрипт `npm install`
#### 2. Запустить скрипт `npm run start`

## Доступ к документации API
После запуска серверной части можно будет [посмотреть swagger](http://localhost:${port}/api)

## Запуск docker приложения
`docker compose up`