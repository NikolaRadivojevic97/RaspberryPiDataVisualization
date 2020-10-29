import requests
import json, time
import urllib
from influxdb import InfluxDBClient


def  get_data():
    data=requests.get('https://api.openweathermap.org/data/2.5/weather?q={0}&appid={1}&units=metric'.format('Beograd','b40ae4797e46b51bfa4b54ce4004d17e'))
    data_json=data.json()
    temp=data_json['main']['temp']
    humidityw=data_json['main']['humidity']
    print('Temperatura vazduha u Beogradu je :'+str(temp))
    print('Vlaznost vazduha u Beogradu je :'+str(humidityw))
    json_body = [
      {
        "measurement": "openweather",
        "fields":{
          "temperature_ouside": float(temp),
          "humidity_outside": humidityw}
      }
    ]
    data1=requests.get("http://172.20.222.228:5000/vratipodatke")
    data_json1=data1.json()
    temperature=data_json1['temperature']
    humidity=data_json1['humidity']
    smoke=data_json1['smoke']
    brightness=data_json1['brightness']
    json_body0 = [
      {
        "measurement": "temperature",
        "fields":{
          "officename": "O1",
          "value": float(temperature)}
      }
    ]
    json_body1 = [
      {
        "measurement": "humidity",
        "fields":{
          "officename": "O1",
          "value": float(humidity)}
      }
    ]
    json_body2 = [
      {
        "measurement": "smoke",
        "fields":{
          "officename": "O1",
          "value": float(smoke)}
      }
    ]
    json_body3 = [
      {
        "measurement": "brightness",
        "fields":{
          "officename": "O1",
          "value": float(brightness)}
      }
    ]
    client.write_points(json_body0)
    client.write_points(json_body1)
    client.write_points(json_body2)
    client.write_points(json_body3)
    client.write_points(json_body)
client = InfluxDBClient('localhost', 8086)
client.switch_database('proba')
while True:
    get_data()
    time.sleep(5)
