"use client";

import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import {
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
} from "react-icons/io5";
import "../styles/pets.module.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";

export interface Pet {
  evolutions: PetEvolution[];
  experience: number;
}

export interface PetEvolution {
  petName: string;
  imagePath: string;
  experience: number;
}

const expIncrement = 5;

const initialPets: Pet[] = [
  {
    evolutions: [
      {
        petName: "Frogman",
        imagePath: "frogman.jpg",
        experience: 0,
      },
      {
        petName: "Frogmanner",
        imagePath: "frogmanner.jpg",
        experience: 50,
      },
      {
        petName: "Frogchad",
        imagePath: "frogchad.jpg",
        experience: 100,
      },
    ],
    experience: 0,
  },
  {
    evolutions: [
      {
        petName: "Giraffeboy",
        imagePath: "giraffeboy.png",
        experience: 0,
      },
      {
        petName: "Giraffechad",
        imagePath: "giraffechad.png",
        experience: 50,
      },
      {
        petName: "Giraffeman",
        imagePath: "giraffeman.png",
        experience: 100,
      },
    ],
    experience: 0,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function getPetEvolution(pet: Pet): PetEvolution {
  return pet.evolutions.reduce((currentEvolution, nextEvolution) =>
    nextEvolution.experience <= pet.experience
      ? nextEvolution
      : currentEvolution
  );
}

function goingToEvolutionise(pet: Pet): boolean {
  return pet.evolutions.some(
    (evolution) =>
      pet.experience < evolution.experience &&
      evolution.experience - (pet.experience + expIncrement) <= expIncrement
  );
}

const PetsCarousel: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>(initialPets);
  const [isShrinking, setIsShrinking] = useState(false);
  const [currentPetIndex, setCurrentPetIndex] = useState<number | null>(null);
  const [chat, setChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hiiii, please go workout, to feed me and make me happy!",
      sentTime: "just now",
      sender: "Pet",
      direction: "incoming",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleFeedClick = (pet: Pet, index: number) => {
    setCurrentPetIndex(index);
    if (goingToEvolutionise(pet)) {
      setIsShrinking(true);
    }
    setTimeout(() => {
      setPets((prevPets) => {
        const updatedPets = [...prevPets];
        updatedPets[index].experience = Math.min(
          updatedPets[index].experience + expIncrement,
          100
        );
        return updatedPets;
      });
      setIsShrinking(false);
      setCurrentPetIndex(null);
    }, 500);
  };

  const toggleChat = () => {
    setChat(!chat);
  };

  const handleSend = async (text: string) => {
    const userMessage = {
      message: text,
      direction: "outgoing",
      sender: "user",
      sentTime: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, userMessage]);
    setIsTyping(true);

    await processMessageToChatGPT([...messages, userMessage]);
  };

  const systemMessage = {
    role: "system",
    content:
      "You are a pet, you are talking to your owner and they are taking care of you.",
  };

  async function processMessageToChatGPT(chatMessages: any[]) {
    const apiMessages = chatMessages.map((messageObject) => ({
      role: messageObject.sender === "Pet" ? "assistant" : "user",
      content: messageObject.message,
    }));

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );
      const data = await response.json();
      setMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: "Pet",
          direction: "incoming",
        },
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error("Error:", error);
      setIsTyping(false);
    }
  }

  return (
    <div className="w-full rounded-[30px]">
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots
          ssr
          infinite
          autoPlaySpeed={1000}
          keyBoardControl
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-wrapper"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {pets.map((pet, index) => (
            <div key={index} className={`carousel-item-content rounded-[30px] m-6 border-4 border-blue-500 bg-gradient-to-b from-blue-500 to-purple-600 transition-transform duration-500 ${isShrinking && currentPetIndex === index ? 'scale-0' : 'scale-100'}`}>
              <div className="image-container m-6">
                <Image
                  src={`/assets/${getPetEvolution(pet).imagePath}`}
                  className="w-full rounded-xl aspect-square object-cover border-4 border-gray-300"
                  alt={getPetEvolution(pet).petName}
                  width={1000}
                  height={1500}
                />
              </div>
              <h2 className="text-5xl font-bold text-center mt-4">{getPetEvolution(pet).petName}</h2>
              <div className="flex justify-center items-center mb-4">
                <button className='text-center' onClick={() => setChat(!chat)}>
                  {chat ? `Close chat with ${getPetEvolution(pet).petName}` : `Chat with ${getPetEvolution(pet).petName}`}
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={() => handleFeedClick(pet, index)}
                  className="text-white text-2xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg w-64 py-2.5 text-center mb-2"
                >
                  FEED
                </button>
              </div>
              <progress className="progress m-6 progress-accent w-full max-w-xs" value={pet.experience} max="100"></progress>
              <h1 className="text-5xl font-bold text-center mb-4">{pet.experience}/100 EXP</h1>
            </div>
          ))}
        </Carousel>
      {!chat ? (
      <IoChatbubbleEllipsesOutline
        className='chat-btn'
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '10px',
          height: '10px',
          width: '40px',
        }}
        onClick={() => setChat(true)}
      />
    ) : (
      <div className='chat'>
        <div
          style={{
            position: 'fixed',
            bottom: '60px',
            minWidth: '75%',
            right: '12%',
            height: '30%', // Adjust the height here
            width: '250px', // Adjust the background color here
            border: '1px solid #ccc',
            borderRadius: '10px',
            overflowY: 'auto'
          }}
        >
          <MainContainer>
            <ChatContainer>
            <MessageList
              typingIndicator={isTyping && <TypingIndicator content='ChatGPT is typing' />}
              className='custom-message-list'
            >
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  className={`text-box ${msg.direction === 'outgoing' ? 'outgoing-message' : 'incoming-message'}`}
                  model={{
                    message: msg.message,
                    direction: msg.direction === 'outgoing' ? 'outgoing' : 'incoming',
                    position: 'single',
                  }}
                  style={{
                    // color: msg.direction === 'outgoing' ? 'white' : 'black', // Change text color based on direction
                    // backgroundColor: msg.direction === 'outgoing' ? '#007bff' : '#28a745', // Example background color
                    // borderRadius: '10px', // Example border radius
                    // padding: '8px 12px', // Example padding
                    // marginBottom: '8px',
                  }}
                />
              ))}
            </MessageList>
              <MessageInput
                className='text-box'
                placeholder='Type message here...'
                onSend={handleSend}
                style={{ color: 'black', backgroundColor: 'white'}}
              />
            </ChatContainer>
          </MainContainer>
        </div>
        <IoChatbubbleEllipsesSharp
          className='chat-btn'
          style={{
            position: 'fixed',
            bottom: '15px',
            right: '20px',
            height: '40px',
            width: '40px',
            transform: 'scaleX(-1)',
          }}
          onClick={() => setChat(false)}
        />
      </div>
    )}
    </div>
  );
};

export default PetsCarousel;
