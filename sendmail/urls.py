from django.urls import path
from .views import email_form

urlpatterns = [
    path('', email_form, name='email_form'),
]