from django.contrib import admin
from .models import contacts

class contactsAdmin(admin.ModelAdmin):
    list_display = ('name', 'number')

# Register your models here.

admin.site.register(contacts, contactsAdmin)