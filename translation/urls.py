from django.urls import include, path

from . import views

""" here the requests to myApp/translation/* a string to translate * 
    are redirected to the view 'translation'. The view will take care of
    the translation """

urlpatterns = [
    path('translation/<str:text_to_translate>/',
         views.translation, name='translation'),
    path('', views.index),
]
