#always run the following lines of code in terminal after every use
# python manage.py makemigrations 
# python manage.py migrate


from django.db import models

# Create your models here.

class Note(models.Model):
    content = models.TextField()
    Name = models.TextField()
    ClassName = models.TextField()
    DueDate = models.DateField()
    Description = models.TextField()

