from django.shortcuts import render


def index_view(request):
    object_list = []
    return render(request, 'index.html', {'object_list': object_list})


def news_view(request):
    object_list = []
    return render(request, 'news.html', {'object_list': object_list})


def contacts_view(request):
    object_list = []
    return render(request, 'contacts.html', {'object_list': object_list})


def photo_and_video_view(request):
    object_list = []
    return render(request, 'fotoandvideo.html', {'object_list': object_list})


def services_view(request):
    object_list = []
    return render(request, 'services.html', {'object_list': object_list})


def reviews_view(request):
    object_list = []
    return render(request, 'reviews.html', {'object_list': object_list})


def about_view(request):
    object_list = []
    return render(request, 'about.html', {'object_list': object_list})

