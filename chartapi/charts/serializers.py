# charts/serializers.py
from rest_framework import serializers

class CandlestickDataSerializer(serializers.Serializer):
    x = serializers.DateField()
    open = serializers.IntegerField()
    high = serializers.IntegerField()
    low = serializers.IntegerField()
    close = serializers.IntegerField()

class LineChartDataSerializer(serializers.Serializer):
    labels = serializers.ListField(child=serializers.CharField())
    data = serializers.ListField(child=serializers.IntegerField())

class BarChartDataSerializer(serializers.Serializer):
    labels = serializers.ListField(child=serializers.CharField())
    data = serializers.ListField(child=serializers.IntegerField())

class PieChartDataSerializer(serializers.Serializer):
    labels = serializers.ListField(child=serializers.CharField())
    data = serializers.ListField(child=serializers.IntegerField())
