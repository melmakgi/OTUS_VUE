# Обучение Vue.js
## Учебный проект на Vue
### Создание проекта Vue

**Домашнее задание:**
Создать проект с Vue-cli, настроить конфиги

**Цель:**
Научиться разворачивать проект с нуля, разобраться какие какие есть настройки в vue.config.js
Сетап проекта Vue с нуля, кастомизация настроек базового проекта (расширение webpack);
Альтернативные варианты начального проекта на Vue.

**Описание/Пошаговая инструкция выполнения домашнего задания:**
1. создать репозиторий на github
1. сделать проект на vue с использованием vue-cli
1. добавить кастом конфиг (опционально)
1. прислать ссылку на репозиторий

*P.S.*
Домашнее задание изменено.
Так как Vue-cli использовался в Vue 2, а в Vue 3 рекомендовано использование Vite, то ДЗ выполнено с учетом рекомендаций.
Т.е. проект создан с помощью Vite.


### Порядок выполнения ДЗ (Mac OS):
1. установка Node.js версии LTS (включает npm)
    1. скачиваем установщик с https://nodejs.org/ru/download/
    1. запускаем установку из файла
    1. по окончании установки проверяем, выполнив команды в терминале:
        Node --version
        npm --version
1. Создание приложение Vue основанный на Vite (https://vuejs.org/guide/quick-start.html#creating-a-vue-application)
    1. в терминале выполняем команду: 
        npm init vite@latest
    1. запустится генератор нового приложения которое будет в себе использовать Vite
    1. вводим имя проекта
    1. отвечаем на вопросы мастера создания проекта
1. Переходим в директорию проекта
        cd <your-project-name>
1. Устанавливаем пакеты (зависимости)
        npm install
1. Запускаем сервер разработки
        npm run dev
        
По умолчанию сервер работает на порут: 5173. В конфигурационном файле Vite (vite.config.js) указываем номер порта на который сервер будет прослушивать.



This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
