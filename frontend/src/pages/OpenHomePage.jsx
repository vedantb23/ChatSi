import React, { useState } from "react";
import { Link } from "react-router";
import {
  MessageCircle,
  Video,
  Users,
  Globe,
  Heart,
  UserPlus,
  BookOpen,
  Zap,
  Shield,
  Star,
  Send,
  Smile,
  Plus,
  ChevronDown,
  Github,
  Download,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import DynamicChatNavbar from "./DynamicChatNavbar";

const OpenHomePage = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [message, setMessage] = useState("");

  const chatMessages = [
    {
      id: 1,
      user: "Sarah",
      message: "¡Hola! ¿Cómo estás?",
      time: "2:30 PM",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      id: 2,
      user: "You",
      message: "Hi! I'm doing great. Can you help me practice Spanish?",
      time: "2:31 PM",
      isMe: true,
    },
    {
      id: 3,
      user: "Sarah",
      message: "¡Por supuesto! Let's start with basic greetings.",
      time: "2:32 PM",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  const languages = [
    { lang: "Spanish", users: "2.3M", flag: "🇪🇸" },
    { lang: "French", users: "1.8M", flag: "🇫🇷" },
    { lang: "Japanese", users: "1.5M", flag: "🇯🇵" },
    { lang: "German", users: "1.2M", flag: "🇩🇪" },
    { lang: "Korean", users: "980K", flag: "🇰🇷" },
    { lang: "Italian", users: "850K", flag: "🇮🇹" },
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "Unlimited Chat",
      description:
        "Connect with millions of users worldwide. Share messages, images, and voice notes without any limits.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      title: "HD Video Calls",
      description:
        "Crystal clear video calls with up to 50 participants. Screen sharing and recording included.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Language Exchange",
      description:
        "Learn 50+ languages from native speakers. AI-powered translation and pronunciation guides.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Smart Matching",
      description:
        "Find language partners based on your interests, timezone, and learning goals.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const faqs = [
    {
      question: "Is ChatSi really free forever?",
      answer:
        "Yes! ChatSi is completely free and open-source. No hidden fees, no premium tiers, no time limits. We believe language learning and global communication should be accessible to everyone.",
    },
    {
      question: "How many people can join a video call?",
      answer:
        "You can have up to 50 people in a single video call. All features including screen sharing, recording, and chat are available for free.",
    },
    {
      question: "What languages can I learn?",
      answer:
        "We support over 50 languages with native speakers from around the world. Our AI translation helps bridge communication gaps while you learn.",
    },
    {
      question: "How do friend requests work?",
      answer:
        "Send friend requests to people you meet in language exchange sessions. Once accepted, you can chat privately and schedule regular practice sessions.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use end-to-end encryption for all messages and calls. Being open-source means you can verify our security practices yourself.",
    },
  ];

  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/",
      color: "hover:text-blue-400 hover:bg-blue-400/10",
      hoverScale: "hover:scale-110",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "hover:text-gray-300 hover:bg-gray-300/10",
      hoverScale: "hover:scale-110",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/",
      color: "hover:text-indigo-400 hover:bg-indigo-400/10",
      hoverScale: "hover:scale-110",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/",
      color: "hover:text-blue-500 hover:bg-blue-500/10",
      hoverScale: "hover:scale-110",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/",
      color: "hover:text-pink-400 hover:bg-pink-400/10",
      hoverScale: "hover:scale-110",
    },
  ];

  return (
    <div className="bg-slate-900 text-gray-200 min-h-screen">
      {/* Padding to prevent overlap with fixed navbar */}
      <DynamicChatNavbar />
      <div className="pt- px-6">
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
              <div className="text-center animate-fade-in">
                <div className="flex justify-center mb-6 ">
                  <div className="h-[100px] w-[180px] ">
                    <img src="bird-hero-unscreen.gif" alt="" />
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight z-10">
                  ChatSi
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
                  Connect • Learn • Grow Together
                </p>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                  The Completely free, open-source platform for unlimited chat,
                  video calls, and language exchange with millions of users
                  worldwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link to="/signup">
                    <button className="btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 border-none text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                      <Download className="w-5 h-5 mr-2" />
                      Start Chatting Free/Login
                    </button>
                  </Link>
                  <button className="btn btn-lg btn-outline border-purple-400 text-purple-300 hover:bg-purple-600 hover:border-purple-600 transform hover:scale-105 transition-all duration-300">
                    <Github className="w-5 h-5 mr-2" />
                    <a
                      href="https://github.com/vedantb23/ChatSi"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      5k+
                    </div>
                    <div className="text-gray-400">Active Users</div>
                  </div>
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="text-4xl font-bold text-pink-400 mb-2">
                      50+
                    </div>
                    <div className="text-gray-400">Languages</div>
                  </div>
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      ∞
                    </div>
                    <div className="text-gray-400">Free Forever</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Everything You Need
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Professional-grade features that rival paid platforms,
                  completely free and open-source.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Features */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Make Friends Worldwide
                  </h2>
                  <p className="text-xl text-gray-400 mb-8">
                    Build meaningful connections with people from different
                    cultures. Send friend requests, create groups, and expand
                    your global network.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <UserPlus className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Smart Friend Suggestions
                        </h3>
                        <p className="text-gray-400">
                          AI-powered matching based on interests and language
                          goals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Interest-Based Groups
                        </h3>
                        <p className="text-gray-400">
                          Join communities around your hobbies and passions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Cultural Exchange
                        </h3>
                        <p className="text-gray-400">
                          Learn about different cultures through authentic
                          conversations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                        <img
                          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                          alt="User 1"
                          className="w-12 h-12 rounded-full mb-3"
                        />
                        <h4 className="font-semibold text-white">Alex Chen</h4>
                        <p className="text-sm text-gray-400">Learning French</p>
                        <button className="w-full mt-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-colors">
                          Add Friend
                        </button>
                      </div>
                      <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                        <img
                          src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                          alt="User 2"
                          className="w-12 h-12 rounded-full mb-3"
                        />
                        <h4 className="font-semibold text-white">
                          Maria Silva
                        </h4>
                        <p className="text-sm text-gray-400">
                          Teaching Portuguese
                        </p>
                        <button className="w-full mt-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm transition-colors">
                          Friends ✓
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                        <img
                          src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                          alt="User 3"
                          className="w-12 h-12 rounded-full mb-3"
                        />
                        <h4 className="font-semibold text-white">
                          Yuki Tanaka
                        </h4>
                        <p className="text-sm text-gray-400">
                          Learning English
                        </p>
                        <button className="w-full mt-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-colors">
                          Add Friend
                        </button>
                      </div>
                      <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                        <img
                          src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                          alt="User 4"
                          className="w-12 h-12 rounded-full mb-3"
                        />
                        <h4 className="font-semibold text-white">
                          Emma Wilson
                        </h4>
                        <p className="text-sm text-gray-400">Teaching German</p>
                        <button className="w-full mt-3 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm transition-colors">
                          Pending...
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface Preview */}
          <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Beautiful Chat Experience
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Modern, intuitive interface designed for seamless
                  communication and language learning.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between p-6 bg-gray-900/50 border-b border-gray-700/50">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                        alt="Sarah"
                        className="w-12 h-12 rounded-full border-2 border-green-500"
                      />
                      <div>
                        <h3 className="font-semibold text-white">
                          Sarah Martinez
                        </h3>
                        <p className="text-sm text-green-400 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Online • Teaching Spanish
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="p-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition-colors">
                        <Video className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors">
                        <UserPlus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-6 space-y-4 h-80 overflow-y-auto">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-3 ${
                          msg.isMe ? "flex-row-reverse" : ""
                        }`}
                      >
                        {!msg.isMe && (
                          <img
                            src={msg.avatar}
                            alt={msg.user}
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                            msg.isMe
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white ml-auto"
                              : "bg-gray-700 text-white"
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.isMe ? "text-purple-200" : "text-gray-400"
                            }`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-6 bg-gray-900/50 border-t border-gray-700/50">
                    <div className="flex gap-3">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Type your message..."
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                          <Smile className="w-5 h-5" />
                        </button>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl transition-all transform hover:scale-105">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Language Learning Section */}
          <div className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Learn Any Language
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Connect with native speakers and practice languages in real
                  conversations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{lang.flag}</span>
                        <div>
                          <h3 className="font-semibold text-white">
                            {lang.lang}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {lang.users} speakers
                          </p>
                        </div>
                      </div>
                      <button className="p-2 bg-purple-600/20 hover:bg-purple-600 rounded-lg transition-colors group-hover:animate-pulse">
                        <Plus className="w-4 h-4 text-purple-400 group-hover:text-white" />
                      </button>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${Math.random() * 60 + 40}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-20 bg-gray-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-400">
                  Everything you need to know about ChatSi
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="collapse collapse-arrow bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                  >
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title text-xl font-medium text-white">
                      {faq.question}
                    </div>
                    <div className="collapse-content">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="py-16 bg-gray-900/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex justify-center mb-0">
                  <div className="w-[160px] rounded-2xl flex items-center justify-center">
                    <img src="/bird-hero-unscreen.gif" alt="" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ChatSi
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Open-source, free forever. Connect with the world, learn
                  languages, and make friends without limits.
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 transition-all duration-300 ${social.color} ${social.hoverScale} hover:shadow-lg hover:shadow-purple-500/20`}
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-current transition-colors duration-300" />
                    </a>
                  ))}
                </div>

                <div className="flex justify-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-green-400">
                    <Shield className="w-5 h-5" />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Zap className="w-5 h-5" />
                    <span>Lightning Fast</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <BookOpen className="w-5 h-5" />
                    <span>Open Source</span>
                  </div>
                </div>

                <div className="text-gray-500 text-sm">
                  © 2025 ChatSi. Free forever, built with ❤️ for the global
                  community by Vedant B .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenHomePage;
