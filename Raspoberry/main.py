from machine import Pin
from utime import sleep
import urequests


pins = [
    Pin(2, Pin.OUT),  # A
    Pin(3, Pin.OUT),  # B
    Pin(4, Pin.OUT),  # C
    Pin(5, Pin.OUT),  # D
    Pin(6, Pin.OUT),  # E
    Pin(8, Pin.OUT),  # F
    Pin(7, Pin.OUT),  # G
    Pin(0, Pin.OUT)   # DP (não conectado)
]


switch = Pin(13, Pin.IN)


url = "https://seproject-n0m6.onrender.com/Reports/save"

while True:
    if switch.value() == 1:
        try:
            response = urequests.post(url)
            response.close()

        except Exception as e:
            print("Erro ao enviar requisição:", e)

        sleep(0.5)  
    else:
        sleep(0.5)
