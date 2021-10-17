from rest_framework import serializers

from api.models import BlogCategory, BlogPost


class BlogCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogCategory
        fields = '__all__'


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = '__all__'

class BlogPostListRetrieveSerializer(serializers.ModelSerializer):

    blog_category = BlogCategorySerializer()

    class Meta:
        model = BlogPost
        fields = '__all__'
