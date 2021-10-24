from django.db import models

# Create your models here.
class BlogCategory(models.Model):

    name = models.CharField(max_length=255, verbose_name='Category name')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return f'categore=<{self.name}>'


class BlogPostManager(models.Manager):

    def get_queryset(self):
        return BlogPostQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().filter(in_archive=False)
    
    def find_by_title_in_qs(self, post_title):
        return self.get_queryset().find_by_title_in_qs(post_title)

class BlogPostQuerySet(models.QuerySet):

    def find_by_title_in_qs(self, post_title):
        return self.filter(title__icontains=post_title)


class BlogPost(models.Model):

    blog_category = models.ForeignKey(BlogCategory, verbose_name='Category name', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Post name')
    slug = models.SlugField(unique=True)
    content = models.TextField()
    pub_date = models.DateField(auto_now=True)
    in_archive = models.BooleanField(default=False)
    objects = BlogPostManager()

    def __str__(self):
        return f'post=<{self.title}>,from=<{self.blog_category.id}>'
