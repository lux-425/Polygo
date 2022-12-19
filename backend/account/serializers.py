from django.contrib.auth.models import User

from rest_framework import serializers


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

        fields = ['username', 'password']

        extra_kwargs = {
            'username': {'required': True, 'allow_blank': False, 'min_length': 3, 'max_length': 16},
            'password': {'required': True, 'allow_blank': False, 'min_length': 3, 'max_length': 16}
        }


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')
