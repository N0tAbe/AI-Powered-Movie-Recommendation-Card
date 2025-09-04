import React, { useState } from 'react';
import { UserIcon, SettingsIcon, HeartIcon, HistoryIcon, SaveIcon, EditIcon, CreditCardIcon, BellIcon, ShieldIcon, MonitorIcon } from 'lucide-react';
export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [currentPlan, setCurrentPlan] = useState('Premium');
  const tabs = [{
    id: 'profile',
    label: 'Profile',
    icon: UserIcon
  }, {
    id: 'subscription',
    label: 'Subscription',
    icon: CreditCardIcon
  }, {
    id: 'preferences',
    label: 'Preferences',
    icon: HeartIcon
  }, {
    id: 'settings',
    label: 'Settings',
    icon: SettingsIcon
  }];
  const profileData = {
    name: 'Alex Thompson',
    email: 'alex@example.com',
    preferences: {
      favoriteGenres: ['Sci-Fi', 'Drama', 'Comedy'],
      preferredPlatforms: ['Netflix', 'Hulu'],
      contentRating: 'All',
      languagePreference: 'English'
    }
  };
  const mockHistory = [{
    title: 'Arrival',
    date: '2024-01-15',
    rating: 5,
    genre: 'Sci-Fi'
  }, {
    title: 'Palm Springs',
    date: '2024-01-10',
    rating: 4,
    genre: 'Comedy'
  }, {
    title: 'Sound of Metal',
    date: '2024-01-05',
    rating: 5,
    genre: 'Drama'
  }];
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, this would save to backend
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'subscription':
        return <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <CreditCardIcon className="text-purple-400" />
                <h2 className="text-xl font-semibold">Subscription Details</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-purple-400">
                      Current Plan: {currentPlan}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-sm bg-purple-500 text-white">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Billing cycle: Monthly
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      Next billing date: Feb 15, 2024
                    </span>
                    <button className="text-sm text-purple-400 hover:text-purple-300">
                      Change Plan
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Payment Method</h3>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
                    <div className="flex items-center gap-3">
                      <CreditCardIcon className="text-gray-400" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-400">Expires 12/25</p>
                      </div>
                    </div>
                    <button className="text-sm text-purple-400 hover:text-purple-300">
                      Update
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Billing History</h3>
                  <div className="space-y-2">
                    {[{
                    date: 'Jan 15, 2024',
                    amount: '$4.99'
                  }, {
                    date: 'Dec 15, 2023',
                    amount: '$4.99'
                  }, {
                    date: 'Nov 15, 2023',
                    amount: '$4.99'
                  }].map((bill, index) => <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-700">
                        <span>{bill.date}</span>
                        <span>{bill.amount}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>;
      case 'settings':
        return <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <BellIcon className="text-purple-400" />
                <h2 className="text-xl font-semibold">Notifications</h2>
              </div>
              <div className="space-y-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500" />
                  <span className="text-gray-300">
                    Email notifications for new recommendations
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500" />
                  <span className="text-gray-300">
                    Weekly digest of trending content
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-purple-500 focus:ring-purple-500" />
                  <span className="text-gray-300">
                    Special offers and updates
                  </span>
                </label>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <ShieldIcon className="text-purple-400" />
                <h2 className="text-xl font-semibold">Privacy & Security</h2>
              </div>
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors">
                  Change Password
                </button>
                <button className="w-full text-left px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors">
                  Two-Factor Authentication
                </button>
                <button className="w-full text-left px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors">
                  Privacy Settings
                </button>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <MonitorIcon className="text-purple-400" />
                <h2 className="text-xl font-semibold">Display Settings</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Language
                  </label>
                  <select className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>
          </div>;
      case 'preferences':
        return <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <HeartIcon className="text-purple-400" />
                <h2 className="text-xl font-semibold">Viewing Preferences</h2>
              </div>
              <div className="grid gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-2">
                    Favorite Genres
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.preferences.favoriteGenres.map(genre => <span key={genre} className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">
                        {genre}
                      </span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-300 mb-2">
                    Preferred Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.preferences.preferredPlatforms.map(platform => <span key={platform} className="px-3 py-1 rounded-full text-sm bg-pink-500/20 text-pink-300">
                          {platform}
                        </span>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <HistoryIcon className="text-purple-400" />
                <h2 className="text-xl font-semibold">
                  Recent Recommendations
                </h2>
              </div>
              <div className="divide-y divide-gray-700">
                {mockHistory.map(item => <div key={item.title} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>{item.genre}</span>
                          <span>•</span>
                          <span>
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({
                      length: item.rating
                    }).map((_, i) => <span key={i} className="text-yellow-400">
                            ★
                          </span>)}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>;
      default:
        return <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <UserIcon className="text-purple-400" />
                <h2 className="text-xl font-semibold">Basic Information</h2>
              </div>
              <form onSubmit={handleSave}>
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input type="text" value={profileData.name} onChange={e => setProfileData({
                    ...profileData,
                    name: e.target.value
                  })} disabled={!isEditing} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input type="email" value={profileData.email} onChange={e => setProfileData({
                    ...profileData,
                    email: e.target.value
                  })} disabled={!isEditing} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50" />
                  </div>
                </div>
              </form>
            </div>
          </div>;
    }
  };
  return <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Account
        </h1>
        {activeTab === 'profile' && <button onClick={() => setIsEditing(!isEditing)} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 transition-colors">
            {isEditing ? <>
                <SaveIcon size={16} />
                Save Changes
              </> : <>
                <EditIcon size={16} />
                Edit Profile
              </>}
          </button>}
      </div>
      <div className="bg-gray-800 rounded-lg p-1 mb-6">
        <div className="flex flex-wrap gap-2">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-gray-300 hover:text-white'}`}>
              <tab.icon size={16} />
              {tab.label}
            </button>)}
        </div>
      </div>
      {renderTabContent()}
    </div>;
};