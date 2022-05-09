clientID = "clientID_" + parseInt(Math.random() * 100);
var MQTT_CLIENT = new Paho.MQTT.Client("service.hcilab.net", 1112, "/ws", clientID);
MQTT_CLIENT.connect({ onSuccess: myClientConnected });
function myClientConnected() {
    MQTT_CLIENT.subscribe("/test");
}
function up() {
    var mqttMessage = new Paho.MQTT.Message("UP");
    
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("UP");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/manual";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function down() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("DOWN");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/manual";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function left() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("LEFT");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/manual";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function right() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("RIGHT");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/manual";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function stoprobot() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("STOP");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/manual";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function turnright() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("TRIGHT");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/manual";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function turnleft() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("TLEFT");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/manual";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}
function EMERGENCY() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("EMERGENCYSTOP");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/manual";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function ONE() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("HOME");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/man/easy";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}


function TWO() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("POSE_1");

    // Set the topic it should be pblished to
    mqttMessage.destinationName = "telemm/man/easy";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}


function THREE() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("POSE_2");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/man/easy";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function goa() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("GOTO_A");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/easy";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function gob() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("GOTO_B");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/easy";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}

function goc() {
    // create a new MQTT message with a specific payload
    var mqttMessage = new Paho.MQTT.Message("GOTO_C");

    // Set the topic it should be published to
    mqttMessage.destinationName = "telemm/mob/easy";

    // Publish the message
    MQTT_CLIENT.send(mqttMessage);
}