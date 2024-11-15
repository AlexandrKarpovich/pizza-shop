# Node ts + mongo db

Запустите скрипт:
start seed
npx ts-node src/seed.ts

Запуск сервера
Скомпилируйте TypeScript и запустите сервер:
npx tsc
node dist/server.js


Соберите и запустите контейнеры

docker-compose build
docker-compose up


Теперь ваше приложение доступно на http://localhost:3000. MongoDB будет работать на порту 27017.
Вы можете использовать переменную process.env.MONGO_URI для подключения к MongoDB.