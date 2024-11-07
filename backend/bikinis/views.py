from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from .models import Bikini
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BikiniSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

def get_bikinis(request):
    if request.method == 'GET':
        bikinis = list(Bikini.objects.all().values())
        return JsonResponse(bikinis, safe=False)
    
def get_bikini_by_id(request, bikini_id):
    try:
        bikini = Bikini.objects.get(id=bikini_id)
        serializer = BikiniSerializer(bikini)
        return JsonResponse(serializer.data)  # Asegúrate de que esto sea un diccionario
    except Bikini.DoesNotExist:
        return JsonResponse({'error': 'Bikini not found'}, status=404)
         

@csrf_exempt
def create_bikini(request):
    if request.method == 'POST':
        try:
            # Cargar los datos enviados en el formulario
            name = request.POST.get('name')
            price = request.POST.get('price')
            size = request.POST.get('size')
            description = request.POST.get('description', '')

            # Verificar si la imagen fue enviada
            if 'image' not in request.FILES:
                return JsonResponse({"error": "Image file is required"}, status=400)

            image = request.FILES['image']

            # Crear un nuevo objeto Bikini con los datos recibidos
            new_bikini = Bikini(
                name=name,
                price=price,
                size=size,
                description=description,
                image=image  # Guardar la imagen
            )

            # Guardar en la base de datos
            new_bikini.save()

            # Devolver una respuesta de éxito
            return JsonResponse({"message": "Bikini created successfully", "id": new_bikini.id}, status=201)
        
        except KeyError as e:
            return JsonResponse({"error": f"Missing field: {str(e)}"}, status=400)
        except Exception as e:
            # Registrar otros errores
            return JsonResponse({"error": str(e)}, status=500)
    else:
        return JsonResponse({"error": "Only POST method allowed"}, status=405)


@csrf_exempt
@api_view(['PATCH'])
def update_bikini(request, bikini_id):
    try:
        bikini = Bikini.objects.get(id=bikini_id)
        serializer = BikiniSerializer(bikini, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)  # Devuelve el producto actualizado
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Bikini.DoesNotExist:
        return Response({"message": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)

@csrf_exempt
def delete_bikini(request, bikini_id):
    if request.method == 'DELETE':
        try:
            bikini = get_object_or_404(Bikini, id=bikini_id)
            bikini.delete()
            return JsonResponse({"message": "Bikini deleted successfully"}, status=204)  # 204 No Content
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)  # Manejo de errores
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)  # Método no permitido
    
# VISTAS DEL LOGIN

@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user = User.objects.create_user(username=username, password=password)
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    
    if user:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)
    
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)