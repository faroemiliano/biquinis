from django.db import models

# Create your models here.
from django.db import models

class Bikini(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='bikinis/')
    size = models.CharField(max_length=10, default='M')
    description = models.TextField(blank=True)
    

    def __str__(self):
        return self.name