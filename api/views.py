from rest_framework import viewsets
from api.serializers import (
    BlogCategorySerializer, 
    BlogCategoryDetailSerializer,
    BlogPostSerializer, 
    BlogPostListRetrieveSerializer,
)
from api.models import BlogCategory, BlogPost
from django.shortcuts import render

def index(request):
    return render(request, 'index.html', {})

def category_detail(request, id):
    return render(request, 'index.html', {})

def post_detail(request, id):
    return render(request, 'index.html', {})

class BlogCategoryViewSet(viewsets.ModelViewSet):

    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer

    action_to_serializer = {
        "retrieve": BlogCategoryDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class BlogPostViewSet(viewsets.ModelViewSet):

    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    action_to_serializer = {
        "list": BlogPostListRetrieveSerializer,
        "retrieve": BlogPostListRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )
