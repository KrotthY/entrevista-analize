from django.db import models

# Create your models here.


class Auto(models.Model):
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=100)
    precio = models.IntegerField()
    color = models.TextField()
    descripcion = models.TextField()
