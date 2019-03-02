from django.http import JsonResponse
from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):


    musics = Music.objects.all()
    return render(request,'index.html',context={'musics':musics})


def get_music(request):


    return JsonResponse({'msg':'hehe'})