---
author: Sam Moore
title: Install Fest
date: 2019-01-04
week: 6
---

## Install Fest

So as it turns out, this project has a lot of dependencies. There is a lot of software to install and configure so I've spent the last few afternoons stepping through documentation and tutorials to get some of the base things set up.

Here is a run down of what I have accomplished so far:

#### on the server (my laptop)

- Installed and configured [mosquitto](https://mosquitto.org)
![mosquitto setup](/images/posts/sam/mosquitto_setup.png)
- Reserved a local ip address on my network so it doesn't change later
![ip reservation](/images/posts/sam/reserved_ip.png)
- setup a basic MQTT client ([paho MQTT](https://pypi.org/project/paho-mqtt/)) to view (subscribe to) messages sent from the raspberry pi.

#### on the IoT device (rapsberry pi)

- Installed [pipenv](https://pipenv.readthedocs.io/en/latest/) to manage python version and dependencies (very useful)
- Install [pyenv](https://github.com/pyenv/pyenv) to manage python versions (also very useful)
- setup a basic MQTT client ([paho MQTT](https://pypi.org/project/paho-mqtt/)) to talk to the server (test the connection)

### Code

I've written two simple scripts to test the broker, one called `client.py` the other `monitor.py`. For the time being, the `client` just listens and prints out any messages it receives on a testing channel I set up `testing/heartbeat`. The `monitor`, as a sensor device would, constantly publishes messages to the channel.

#### client
``` python
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe("testing/heartbeat")

def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

client = mqtt.Client()

client.on_connect = on_connect
client.on_message = on_message

client.connect("127.0.0.1", 1883, 60)
client.loop_forever() # send/recv loop
```

#### monitor
``` python

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("10.0.0.7", 1883, 60)

client.loop_start()

while True:
    print('sending heartbeat...')
    client.publish("testing/heartbeat",
                   payload="I'm Alive!", qos=0, retain=False)
    sleep(1)
```

and here is what all that looks like:

![mqtt in action](/images/posts/sam/MQTT_in_action.gif)

So now I have a broker that sits between my services, on side is the raspberry pi measuring the flow of water and reporting back and the other is a server that takes that data and does something with it (store, display, collect stats, automated actions) etc.).
