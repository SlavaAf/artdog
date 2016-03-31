from django.shortcuts import render


def index_view(request):
    object_list = []
    return render(request, 'index.html', {'object_list': object_list})