# TestProject

## Установка
Установка JSON-server, angular-cli и зависимостей для приложения.

Для того чтобы продолжить, у вас должна быть установлен NodeJS. Подробнее об установке можно посмотреть в [офф. документации NodeJS](https://nodejs.org/en/download/package-manager/)

### Установка angular-cli

Для установки Angular cli, запустите команду:

```shell script
npm install -g @angular/cli
```

Для проверки установки запустить команду:

```shell script
ng
```

Подробнее о Angular cli можно посмотреть в [офф. документации](https://angular.io/cli)

### Установка зависимостей

После клонирования приложения необходимо установить зависимости с помощью npm:

```shell script
npm install
```


### Установка JSON-server
'
Для создания фейкового REST API необходимо установить. Подробнее можно просмотреть здесь [JSON-server](https://github.com/typicode/json-server)

```shell script
npm install -g json-server
```

## Запуск проекта

### Запуск JSON-server

Для запуска JSON-server используется команда:

```shell script
json-server --watch db.json
```

### Запуск проекта

Для запуска приложения можно использовать команду:

```shell script
ng serve
```
