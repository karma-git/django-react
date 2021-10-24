# Overview

[SPA - single-page application](https://en.wikipedia.org/wiki/Single-page_application) (при изменении страниц контент не перезегружается).

Реализация SPA с помощью django rest framework в качестве бэка и react.js в качестве фронта.

<details>
<summary>YouTube курс</summary>

[YouTube курс](https://www.youtube.com/playlist?list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7)

Список уроков:
- [#1 Создание проекта](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=1)
- [#2 AXIOS и тестовое API](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=2)
- [#3 Модели - Manager - QuerySet](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=3)
- [#4 Serializer Viewset Router](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=4)
- [#5 POST PUT DELETE - Создание, изменение и удаление объекта](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=5)
- [#6 Navbar + views.py serializers.py рефакторин](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=6)
- [#7 Категории в Navbar с useEffect](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=7)
- [#8 Немного про React Router Dom](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=8)
- [#9 React Router Dom и match в компоненте](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=9)
- [#10 PostDetail и список постов в категории](https://www.youtube.com/watch?v=L2ZT9Y01Lcg&list=PLodoqt_ESP4ubldFsx_1kBrFr3RLNN7I7&index=10)

</details>

### Локальная установка

Требования:
- python3
- pip
- virtualenv
- nodejs
- npm

```bash
# Создаем виртуальное окружение
python3 -m venv venv
# Активируем
source venv/bin/activate
# Устанавливаем питоновские зависимости
pip install -r requirements.txt
# Устанавливаем js зависимости и собираем js часть
cd ./frontend
npm install
npm run build
cd ..
# Создаем необходимые таблицы в бд
python manage.py migrate
# Забираем статику котороую собрал react
python manage.py collectstatic
# Загрузим фикстуры
sh _restore.sh
# Создадим пользователя для админки
python manage.py shell -c \
    "from django.contrib.auth.models import User; import os; \
    User.objects.create_superuser('admin', 'admin@example.com', os.environ.get('SU_PW', '123456'))"
# запустим сервер
python manage.py runserver 0.0.0.0:8080
```
### Запуск с помощью docker
Сборка:
```bash
docker build -t dr:1.0 --build-arg SU_PW=123456 .
```
Запуск:
```bash
docker run -d -p 8080:8080 dr:1.0
```
