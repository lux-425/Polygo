from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User

from .serializers import SignUpSerializer, UserSerializer

# Create your views here.


@api_view(['POST'])
def register(request):
    data = request.data

    user = SignUpSerializer(data=data)

    if user.is_valid():
        if not User.objects.filter(username=data['username']).exists():
            user = User.objects.create(
                username=data['username'],
                password=make_password(data['password']),
            )
            return Response({
                'message': 'New user registered successfully.'
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'error': 'User already registered with this username.'
            }, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(user.errors)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def currentUser(request):
    user = UserSerializer(request.user)

    return Response(user.data)
