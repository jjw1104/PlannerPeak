#always run the following lines of code in terminal after every use
# python manage.py makemigrations 
# python manage.py migrate


from django.db import models

# Create your models here.

class Note(models.Model):
    content = models.TextField()

class Assignment(models.Model):
    Name = models.TextField()
    Class = models.TextField()
    DueDate = models.DateField()
    Description = models.TextField()