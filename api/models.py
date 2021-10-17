from django.db import models

# Create your models here.
class BlogCategory(models.Model):

    name = models.CharField(max_length=255, verbose_name='Category name')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return f'categore=<{self.name}>'

class BlogPost(models.Model):

    blog_category = models.ForeignKey(BlogCategory, verbose_name='Category name', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Post name')
    slug = models.SlugField(unique=True)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_posts/')
    pub_date = models.DateField(auto_now=True)
    in_archive = models.BooleanField(default=False)

    def __str__(self):
        return f'post=<{self.title}>,from=<{blog_category.id}>'
