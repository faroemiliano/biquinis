from django.shortcuts import render

# Create your views here.
from django.http import HttpResponseBadRequest, HttpResponseNotAllowed, JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
import json
from .models import Bikini
from .serializers import BikiniSerializer

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
def update_bikini(request, bikini_id):
    if request.method in ['PUT', 'PATCH']:  # Aceptar ambos métodos
        try:
            bikini = Bikini.objects.get(id=bikini_id)
            data = request.POST
            print("Datos recibidos del frontend:", data)

            bikini.name = data.get('name', bikini.name)
            bikini.price = data.get('price', bikini.price)
            bikini.size = data.get('size', bikini.size)
            bikini.description = data.get('description', bikini.description)

            if 'image' in request.FILES:
                bikini.image = request.FILES['image']

            bikini.save()
            return JsonResponse({'message': 'Producto actualizado correctamente'}, status=200)

        except Bikini.DoesNotExist:
            return JsonResponse({'error': 'Producto no encontrado'}, status=404)

    return JsonResponse({'error': 'Método no permitido'}, status=405)

@csrf_exempt
def delete_bikini(request, bikini_id):
    if request.method == 'DELETE':
        bikini = get_object_or_404(Bikini, id=bikini_id)
        bikini.delete()
        return JsonResponse({"message": "Bikini deleted successfully"})