from django.shortcuts import render # this was predifined findout the functionality.

# Create your views here.
# charts/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import (
    CandlestickDataSerializer,
    LineChartDataSerializer,
    BarChartDataSerializer,
    PieChartDataSerializer
)
from rest_framework import status

class CandlestickDataView(APIView):
    def get(self, request):
        data = [
            {"x": "2015-03-04", "open": 44, "high": 46, "low": 36, "close": 38},
            {"x": "2017-04-05", "open": 38, "high": 42, "low": 35, "close": 41},
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2023-02-03", "open": 40, "high": 48, "low": 38, "close": 44},
            
          
        ]
        serializer = CandlestickDataSerializer(data=data, many=True)
        if serializer.is_valid():
            return Response({"data": serializer.data}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LineChartDataView(APIView):
    """
    API endpoint for line chart data
    """
    def get(self, request):
        data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        serializer = LineChartDataSerializer(data=data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BarChartDataView(APIView):
    """
    API endpoint for bar chart data
    """
    def get(self, request):
        data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        serializer = BarChartDataSerializer(data=data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PieChartDataView(APIView):
    """
    API endpoint for pie chart data
    """
    def get(self, request):
        data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        serializer = PieChartDataSerializer(data=data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)