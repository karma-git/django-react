from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response



def index(request):
    return render(request, 'index.html', {})


class TestAPIView(APIView):

    def get(self, request, *args, **kwargs):
        data = [{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}]
        return Response(data)
