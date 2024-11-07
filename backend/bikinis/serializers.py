from rest_framework import serializers
from .models import Bikini
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

class BikiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bikini
        fields = '__all__'  # Asegúrate de incluir todos los campos


