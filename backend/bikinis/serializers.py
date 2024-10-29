from rest_framework import serializers
from .models import Bikini

class BikiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bikini
        fields = '__all__'  # Asegúrate de incluir todos los campos