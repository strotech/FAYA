'use strict';

const Alexa = require('ask-sdk');

// handlers



    const LaunchRequestHandler = {
        canHandle(handlerInput) {
            return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
        },
        handle(handlerInput) {
            const speechText = 'Welcome to the demo calculator app';
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withSimpleCard('Lets calculate', speechText)
                .getResponse();
        }
    };

    const fayaAdd = {
        canHandle(handlerInput) {
            return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'fayaAdd';
        },
        handle(handlerInput) {

        var firstnum=handlerInput.requestEnvelope.request.intent.slots.firstnumber.value
        var firstN=parseInt(firstnum,10)
        var secondnum=handlerInput.requestEnvelope.request.intent.slots.secondnumber.value
        var secondN=parseInt(secondnum,10)
        var result=firstN+secondN
        console.log(firstnum)
        console.log(firstN)
        console.log(secondnum)
        console.log(secondN)
	    var speechText = 'THe addition details are '+result;

            return handlerInput.responseBuilder
                            .speak(speechText)
                            .reprompt(speechText)
                            .withSimpleCard('Addition details', speechText)
                            .getResponse();
    
        }
    };

    const fayaSubtract = {
        canHandle(handlerInput) {
            return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'fayaSubtract';
        },
        handle(handlerInput) {

        var firstnum=handlerInput.requestEnvelope.request.intent.slots.firstnumber.value
        var firstN=parseInt(firstnum,10)
        var secondnum=handlerInput.requestEnvelope.request.intent.slots.secondnumber.value
        var secondN=parseInt(secondnum,10)
        var result=firstN-secondN
	    var speechText = 'THe subtraction details are '+result;

            return handlerInput.responseBuilder
                            .speak(speechText)
                            .reprompt(speechText)
                            .withSimpleCard('Subtraction details', speechText)
                            .getResponse();
    
        }
    };

    const HelpIntentHandler = {
        canHandle(handlerInput) {
            return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
        },
        handle(handlerInput) {
            const speechText = 'This is a basic calculator app';
    
    return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withSimpleCard('Calculator help', speechText)
                .getResponse();
        }
    };

    const CancelAndStopIntentHandler = {
        canHandle(handlerInput) {
            return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                    || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
        },
        handle(handlerInput) {
            const speechText = 'Goodbye!';
    
    return handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('Goodbye', speechText)
                .getResponse();
        }
    };

    const SessionEndedRequestHandler = {
        canHandle(handlerInput) {
            return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
        },
        handle(handlerInput) {
            //any cleanup logic goes here
            return handlerInput.responseBuilder.getResponse();
        }
    };

    const ErrorHandler = {
        canHandle() {
          return true;
        },
        handle(handlerInput, error) {
          console.log(`Error handled: ${error.message}`);
    
        return handlerInput.responseBuilder
            .speak('Sorry, I can\'t understand the command. Please say again.')
            .reprompt('Sorry, I can\'t understand the command. Please say again.')
            .getResponse();
        },
    };

    exports.handler = Alexa.SkillBuilders.custom()
     .addRequestHandlers(LaunchRequestHandler,
                         fayaAdd,
                         fayaSubtract,
                         HelpIntentHandler,
                         CancelAndStopIntentHandler,
                         SessionEndedRequestHandler
                        )
     .lambda();

