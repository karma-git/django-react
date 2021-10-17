from django.urls import path
from backend.api.views import TestAPIView

urlpatterns = [
    path('test-api/', TestAPIView.as_view(), name='test'),
]
