from rest_framework import viewsets
from api.serializers import BlogCategorySerializer, BlogPostSerializer
from api.models import BlogCategory, BlogPost


class BlogCategoryViewSet(viewsets.ModelViewSet):

    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer

class BlogPostViewSet(viewsets.ModelViewSet):

    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
