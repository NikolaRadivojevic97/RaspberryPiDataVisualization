import RPi.GPIO as GPIO
import time
import json, time
import urllib
from influxdb import InfluxDBClient
import Adafruit_DHT
import sys
import serial
from flask import Flask
app=Flask(__name__)
kom=serial.Serial("/dev/ttyACM0",9600)
GPIO.setmode(GPIO.BCM)



def  get_data():
    sensor=Adafruit_DHT.DHT11
    gpio=4
    humidity, temperature = Adafruit_DHT.read_retry(11, gpio)
    vrednost=kom.readline().decode("UTF-8")
    vrednosti=vrednost.split(",")
    smoke=vrednosti[0]
    brightness=vrednosti[1]
   
    jsondata={
      "temperature":temperature,
      "humidity":humidity,
      "smoke":smoke,
      "brightness":brightness.splitlines()[0]
    }
    print(jsondata)
    return jsondata
@app.route("/vratipodatke")
def vratiPodatke():
  return json.dumps(get_data())

if __name__=="__main__":
  app.run(host="0.0.0.0",debug=True)


   

