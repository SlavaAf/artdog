"""artdog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from page.views import *

admin.autodiscover()

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', index_view, name='index'),
    url(r'^contacts/$', contacts_view, name='contacts'),
    url(r'^photo-and-video/$', photo_and_video_view, name='photo_and_video'),
    url(r'^photo-and-video/photo/$', photo_albums_view, name='photo_albums'),
    url(r'^photo-and-video/video/$', video_albums_view, name='video_albums'),
    url(r'^photo-and-video/albums/photo$', photo_view, name='photo'),
    url(r'^news/$', news_view, name='news'),
    url(r'^services/$', services_view, name='services'),
    url(r'^services/dog/$', dress_dog_view, name='dress_dog'),
    url(r'^reviews/$', reviews_view, name='reviews'),
    url(r'^about/$', about_view, name='about'),
]
