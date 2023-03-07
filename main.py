# python websocket client

import asyncio
import websockets
import time

async def send():
    async with websockets.connect('ws://localhost:8080') as websocket:
        for _ in range(1, 10):
            await websocket.send("Hello socket!!")
            time.sleep(1)
            data = await websocket.recv()
            print(data)
        
asyncio.get_event_loop().run_until_complete(send())