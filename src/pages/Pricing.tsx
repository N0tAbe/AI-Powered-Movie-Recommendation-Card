import React from 'react';
import { CheckIcon } from 'lucide-react';
export const Pricing = () => {
  const plans = [{
    name: 'Basic',
    price: 'Free',
    features: ['5 recommendations per month', 'Basic mood matching', 'Popular streaming platforms'],
    buttonText: 'Get Started',
    highlighted: false
  }, {
    name: 'Premium',
    price: '$4.99/month',
    features: ['Unlimited recommendations', 'Advanced mood matching', 'All streaming platforms', 'Hidden gem discoveries', 'Personalized watchlist'],
    buttonText: 'Try Premium',
    highlighted: true
  }, {
    name: 'Family',
    price: '$9.99/month',
    features: ['Up to 6 profiles', 'All Premium features', 'Family watchlist', 'Parental controls', 'Watch party features'],
    buttonText: 'Choose Family',
    highlighted: false
  }];
  return <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Choose Your Plan
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {plans.map((plan, index) => <div key={index} className={`rounded-lg p-6 ${plan.highlighted ? 'bg-gradient-to-b from-purple-500/10 to-pink-500/10 border-2 border-purple-500' : 'bg-gray-800 border border-gray-700'}`}>
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.price !== 'Free' && <span className="text-gray-400 ml-1">/ month</span>}
            </div>
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>)}
            </ul>
            <button className={`w-full py-2 px-4 rounded-full font-medium transition-colors ${plan.highlighted ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
              {plan.buttonText}
            </button>
          </div>)}
      </div>
    </div>;
};