from django.http import HttpResponse
from django.shortcuts import render
import googletrans

""" I use the translation view to take the text and send back the
    translation """


def index(request):
    return render(request, 'translation/index.html')


def translation(request, text_to_translate):
    google = googletrans.Translator()
    return HttpResponse(google.translate(text_to_translate, src='fr').text)
