from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$',views.index,name='index' ),
    url(r'^get_music/$',views.get_music,name='get_music')


]
