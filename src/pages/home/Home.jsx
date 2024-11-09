import React from "react";
import {
  Code2,
  Users,
  Timer,
  Brain,
  ChevronRight,
  Star,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="border-none shadow-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </CardContent>
  </Card>
);

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:from-slate-800 dark:to-purple-800 transition-colors duration-200">
      <div className="container mx-auto px-6 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-violet-100 dark:bg-violet-900/50 rounded-full text-violet-600 dark:text-violet-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Revolutionizing Collaborative Coding
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Code Together,{" "}
              <span className="text-violet-600 dark:text-violet-400">
                Build Better
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Experience real-time collaborative coding with integrated
              problem-solving. Practice algorithms, tackle coding challenges,
              and grow together with peers in an interactive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => navigate("/signin")}
                className="bg-violet-600 hover:bg-violet-700"
              >
                Start Coding Now
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                size="lg"
                onClick={() => navigate("/problemset")}
                variant="outline"
                className="border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400"
              >
                Explore Problems
              </Button>
            </div>
          </div>

          {/* Hero SVG */}
          <div className="flex-1">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#7c3aed", stopOpacity: 0.2 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#a78bfa", stopOpacity: 0.1 }}
                  />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#7c3aed", stopOpacity: 0.1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#a78bfa", stopOpacity: 0.05 }}
                  />
                </linearGradient>
              </defs>
              {/* Main Window */}
              <rect
                x="50"
                y="20"
                width="300"
                height="220"
                rx="10"
                className="fill-white dark:fill-slate-900 text-violet-500"
                strokeWidth="2"
                stroke="currentColor"
              />

              <rect
                x="60"
                y="50"
                width="135"
                height="180"
                rx="4"
                fill="url(#grad1)"
              />
              <rect
                x="205"
                y="50"
                width="135"
                height="180"
                rx="4"
                fill="url(#grad2)"
              />

              <path
                d="M177.5 140 C190 140, 190 140, 202.5 140"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <circle cx="177.5" cy="140" r="3" fill="#7c3aed" />
              <circle cx="202.5" cy="140" r="3" fill="#7c3aed" />
            </svg>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "10+", label: "Coding Problems" },
            { number: "20+", label: "Active Users" },
            { number: "1K+", label: "Solutions Submitted" },
            { number: "99.9%", label: "Platform Uptime" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={Users}
            title="Real-time Collaboration"
            description="Code together in real-time with built-in video chat and cursor presence. Experience seamless pair programming."
          />
          <FeatureCard
            icon={Brain}
            title="Interactive Learning"
            description="Learn from peers, share knowledge, and improve your problem-solving skills with our curated collection of challenges."
          />
          <FeatureCard
            icon={Timer}
            title="Time-based Challenges"
            description="Practice under pressure with timed coding challenges and compete with friends in real-time contests."
          />

          <FeatureCard
            icon={Zap}
            title="Instant Feedback"
            description="Get immediate feedback on your solutions with our advanced test case runner and performance metrics."
          />
        </div>

        {/* CTA Section */}
        <Card className="border-none shadow-xl bg-violet-600 dark:bg-violet-900 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Coding Together?
            </h2>
            <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already enhancing their
              coding skills through collaborative problem-solving.
            </p>
            <Button
              onClick={() => navigate("/problemset")}
              size="lg"
              variant="secondary"
              className="bg-white text-violet-600 hover:bg-violet-50"
            >
              Get Started Now
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-violet-200 dark:border-violet-800 py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-50 dark:text-gray-50 font-semibold text-xl">
              <Code2 />
              <span>Collaborix</span>
            </div>
            <div className="mt-4 md:mt-0 text-slate-600 dark:text-slate-300">
              © 2024 Collaborix. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
