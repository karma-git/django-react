FROM alpine:3.14

ARG SU_PW

COPY ./requirements.txt ./requirements.txt
COPY ./frontend/package.json ./package.json

COPY ./ /home/app

RUN apk add --no-cache \
    python3~=3.9.5 \
    py3-pip~=20.3.4 \
    nodejs \
    npm \
  && apk add --virtual build-deps \
    gcc \
    python3-dev \
    musl-dev \
    postgresql \
    postgresql-dev \
  && pip install psycopg2 \
  && apk add jpeg-dev zlib-dev libjpeg \
  && pip install --no-cache-dir -r requirements.txt \
  && apk del build-deps \
  && npm install

RUN addgroup --gid 1000 app \
  && adduser \
    --uid 1000 \
    --home /home/app \
    --shell /bin/ash \
    --ingroup app \
    --disabled-password \
    app \
  && chown -R app:app /home/app

COPY ./ /home/app

WORKDIR /home/app

# USER app

RUN python3 manage.py migrate \
  && python3 manage.py shell -c \
    "from django.contrib.auth.models import User; import os; \
    User.objects.create_superuser('admin', 'admin@example.com', os.environ['SU_PW'])" \
  && cd ./frontend \
  && npm run build \
  && cd .. \
  && python3 manage.py collectstatic \
  # LOAD FIXTURES
  && sh _restore.sh

EXPOSE 8080

ENTRYPOINT ["/usr/bin/python3"]
CMD ["manage.py", "runserver", "0.0.0.0:8080"]