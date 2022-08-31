from rest_framework import routers


from .viewsets import AutoViewSet

router = routers.SimpleRouter()

router.register('autos',AutoViewSet)

urlpatterns = router.urls