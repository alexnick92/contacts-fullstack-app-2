from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=120)
    number = models.CharField(max_length=15)
    
    def _str_(self):
        return self.title