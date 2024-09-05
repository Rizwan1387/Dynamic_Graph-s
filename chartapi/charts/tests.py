from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

class ChartDataViewsTest(APITestCase):
    def test_candlestick_data(self):
        url = reverse('candlestick-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_line_chart_data(self):
        url = reverse('line-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_bar_chart_data(self):
        url = reverse('bar-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_pie_chart_data(self):
        url = reverse('pie-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
