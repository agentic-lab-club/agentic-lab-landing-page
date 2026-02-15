'use client';

import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabContentProps {
  tabs: Tab[];
}

export default function TabContent({ tabs }: TabContentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center p-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row">
          {/* Tab Buttons */}
          <div
            className="flex flex-row md:justify-start justify-center space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:w-[15%] md:border-r md:border-stone-600"
            id="tab-buttons"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer px-4 py-2 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-stone-500 border-stone-500 dark:text-stone-300 dark:border-stone-300'
                    : 'text-stone-700 hover:text-stone-400 border-transparent dark:text-stone-300 dark:hover:text-stone-100 dark:border-transparent'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4 md:mt-0 md:w-[85%] md:pl-4 p-2" id="tab-content">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`p-2 border-2 border-dashed border-stone-500 rounded ${
                  activeTab === tab.id ? '' : 'hidden'
                }`}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
