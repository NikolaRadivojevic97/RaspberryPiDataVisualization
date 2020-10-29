#define KeyesFlamepin (3)
#define MQ2pin (0)
float sensorValue;  //variable to store sensor value
float keyesValue;
void setup()
{
  Serial.begin(9600); // sets the serial port to 9600

}

void loop()
{
  sensorValue = analogRead(MQ2pin); // read analog input pin 0
  sensorValue=sensorValue/100;
  keyesValue = analogRead(KeyesFlamepin);
  keyesValue = 100-keyesValue/10;
  Serial.print(sensorValue);
  Serial.print(',');
  Serial.print(keyesValue);
  
  Serial.println("");
  delay(5000); // wait 2s for next reading
}
