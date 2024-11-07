from django.urls import path
from . import views



urlpatterns = [
    path('bikinis/', views.get_bikinis, name='get_bikinis'),
    path('bikinis/create/', views.create_bikini, name='create_bikini'),
    path('bikinis/<int:bikini_id>/', views.get_bikini_by_id, name='get_bikini_by_id'),
    path('bikinis/update/<int:bikini_id>/', views.update_bikini, name='update_bikini'),
    path('bikinis/delete/<int:bikini_id>/', views.delete_bikini, name='delete_bikini'),
    path('register/', views.register_user, name='register_user'),
    path('login/', views.login_user, name='login_user'),
]