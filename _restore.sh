#!/bin/bash

echo "==> Removing all data from the database..."
python3 manage.py flush --noinput

echo "==> Loading user fixtures..."
python3 manage.py loaddata api/fixtures/blogcategory.json

echo "==> Loading api fixtures..."
python3 manage.py loaddata api/fixtures/blogpost.json

echo "==> Done!"
