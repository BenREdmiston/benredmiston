import React from 'react';

export default function Tabs() {
    return (
        <div>
            <div class="px-6">  // container
                <div class="flex border-b border-gray-200">  // tabs
                    <button id="tab-1" class=""> 
                        About
                    </button>
                    <button id="tab-2" class="">  
                        Contact
                    </button>
                    <button id="tab-3" class=""> 
                        Skills/Portfolio
                    </button>
                    <button id="tab-4" class="">  
                        Introduction
                    </button>
                </div>
            </div>
        </div>
    )
} 