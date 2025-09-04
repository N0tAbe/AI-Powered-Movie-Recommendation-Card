import React from 'react';
import { MessageSquareIcon, UsersIcon, TrendingUpIcon, SparklesIcon, StarIcon, PlayIcon, BookmarkIcon, ZapIcon } from 'lucide-react';
export const Discord = () => {
  const features = [{
    icon: <MessageSquareIcon className="h-6 w-6 text-purple-400" />,
    title: 'Daily Discussions',
    description: 'Join vibrant conversations about the latest releases and timeless classics.'
  }, {
    icon: <PlayIcon className="h-6 w-6 text-purple-400" />,
    title: 'Watch Battles',
    description: 'Participate in live community voting events to crown the best recommendations.'
  }, {
    icon: <SparklesIcon className="h-6 w-6 text-purple-400" />,
    title: 'AI-Generated Alternate Endings',
    description: "Explore AI-created 'what-if' scenarios for your favorite shows and movies."
  }, {
    icon: <BookmarkIcon className="h-6 w-6 text-purple-400" />,
    title: 'Curated Watchlists',
    description: 'Access community-crafted lists organized by mood, genre, and vibe.'
  }];
  const vipFeatures = [{
    icon: <StarIcon className="h-5 w-5" />,
    label: 'Exclusive deep-dive discussions'
  }, {
    icon: <TrendingUpIcon className="h-5 w-5" />,
    label: 'Early access to new features'
  }, {
    icon: <ZapIcon className="h-5 w-5" />,
    label: 'Full access to the AltVault content library'
  }];
  return <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Join the AltFlicks Community
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Connect with fellow movie enthusiasts, participate in exclusive
          events, and discover your next favorite watch in our Discord
          community.
        </p>
        <a href="https://discord.gg/altflicks" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white bg-[#5865F2] hover:bg-[#4752C4] transition-colors">
          <UsersIcon className="h-5 w-5" />
          Join Our Discord Server
        </a>
      </section>
      {/* Community Features */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Community Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>)}
        </div>
      </section>
      {/* VIP Benefits */}
      <section className="bg-gray-800 rounded-lg p-8 border border-gray-700">
        <div className="flex items-center gap-2 mb-6">
          <StarIcon className="h-6 w-6 text-yellow-400" />
          <h2 className="text-2xl font-bold">VIP Member Benefits</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-4">
              Upgrade to VIP status and unlock exclusive features that enhance
              your movie-watching experience:
            </p>
            <ul className="space-y-4">
              {vipFeatures.map((feature, index) => <li key={index} className="flex items-center gap-2 text-gray-300">
                  {feature.icon}
                  <span>{feature.label}</span>
                </li>)}
            </ul>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">The AltVault</h3>
            <p className="text-gray-300 mb-4">
              Our carefully curated collection of hidden gems and exceptional
              content, available exclusively to VIP members. Discover movies and
              shows you won't find anywhere else.
            </p>
            <button className="w-full py-2 px-4 rounded-full font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Become a VIP Member
            </button>
          </div>
        </div>
      </section>
    </div>;
};