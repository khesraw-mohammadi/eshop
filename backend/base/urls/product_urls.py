from urllib.parse import urlparse
from django.urls import URLPattern, path
from base.views import product_views as views


urlpatterns = [
    path('', views.getProducts),
    path('<str:pk>/', views.getProduct),

]
