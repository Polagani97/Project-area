// set topic, payload and log for the power function
const powerAction=()=>{
    console.log("Power switch clicked");
    topic="set/power";
    payload="1";
}

// set topic, payload and log for the source function
const toSource=()=>{
    console.log("Home Screen switch clicked");
    topic="set/launch";
    payload="1";
}

// set topic, payload and log for the volume up function
const volumeUp=()=>{
    console.log("Volume Up switch clicked");
    topic="set/volume";
    payload="1";
}

// set topic, payload and log for the volume down function
const volumeDown=()=>{
    console.log("Volume Down switch clicked");
    topic="set/volume";
    payload="-1";
}

// set topic, payload and log for the youtube function
const youTube=()=>{
    console.log("Youtube switch clicked");
    topic="set/youtube";
    payload="1";
}

// set topic, payload and log for the mute function
const mute=()=>{
    console.log("Mute switch clicked");
    topic="set/mute";
    payload="1";
}