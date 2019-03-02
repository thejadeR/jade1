from django.db import models

# Create your models here.
class Music(models.Model):

    title = models.CharField(max_length=100)
    thesrc = models.CharField(max_length=100)

