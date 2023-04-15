$(document).ready(function () {
    handlers.server_chat = function (message, shouldAddLine) {

        if (shouldAddLine === true) {
            handlers.chat_message({ type: "server", message: message });
            handlers.chat_message({ type: "server", message: "-" });
        } else {
            // message should just be a string
            handlers.chat_message({ type: "server", message: message });
        }
    }

    handlers.server_chat(loc("!LOC:Welcome to Celestial Expansion!"), true);
    handlers.server_chat(loc("!LOC:Take a new look into Space! Expansion updates orbital gameplay to make it friendly, deep and exciting!"), true);
    handlers.server_chat(loc("!LOC:Pay attention to orbital factory and units in it."), true);
    handlers.server_chat(loc("!LOC:In the early game, space is untouched and can hide you from sight! Read description of radars."), true);
    handlers.server_chat(loc("!LOC:Orbital constructors help you establish a base on new planets. Don't forget about them"), false);
});