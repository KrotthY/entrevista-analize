from rest_framework import viewsets
from .models import Auto
from .serializer  import AutoSerializer



class AutoViewSet(viewsets.ModelViewSet):
    queryset = Auto.objects.all()
    serializer_class = AutoSerializer
