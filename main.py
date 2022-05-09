from typing import List
from fastapi import FastAPI, Request, WebSocket
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pathlib import Path
import random
import json
from fastapi.responses import HTMLResponse
import paho.mqtt.client as mqtt
# from sse_starlette.sse import EventSourceResponse
from fastapi.middleware.cors import CORSMiddleware

broker_address="service.hcilab.net" 
#broker_address="iot.eclipse.org" #use external broker
client = mqtt.Client() #create new instance
client.connect(broker_address,2580) #connect to broker
# client.publish("telemm/mob/manual","TEST")#publish
app = FastAPI()

q=[]
app.mount(
    "/static",
    StaticFiles(directory=Path(__file__).parent.absolute() / "static"),
    name="static",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="templates")
@app.get("/")
async def root(request: Request):
    global q
    UID=random.randint(1000000000,9999999999)
    response = RedirectResponse(url='/'+str(UID))
    return response

@app.get("/{UID}")
async def root_sth(request: Request, UID: int): 
    global q
    q.append(UID)
    return templates.TemplateResponse(
        "index.html", {"request": request, "q":q,"UID":UID}
    )

@app.get("/test")
async def root_sth():
    return templates.TemplateResponse(
        "test.html"
    )

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        print(data)
        print(q)
        if str(data[0])=="a" and int(str(data[data.index(" ")+1:-1])+str(data[-1]))==q[0]:
            client.publish("telemm/mob/manual",data[1:data.index(" ")])
            print("1")
        elif str(data[0]) == "c":
            await websocket.send_text(f"{q}")
            print("2")

        elif str(data[0]) == "s":
            await websocket.send_text("sFailures")
        else:
            q.remove(int(data))
            print(data)
            print("3")
    