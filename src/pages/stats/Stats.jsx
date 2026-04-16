import React from 'react';
import { useLoaderData } from 'react-router';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const activities = useLoaderData() || [];

    let textCount = 0;
    let callCount = 0;
    let videoCount = 0;

    activities.forEach(item => {
        if (item.category === 'Text') {
            textCount++; 
        } else if (item.category === 'Call') {
            callCount++;
        } else if (item.category === 'Video') {
            videoCount++; 
        }
    });

    // Purple-500, Teal-900, Emerald-500
    const chartData = [ 
        { name: 'Call', value: callCount, fill: '#134e4a' },
        { name: 'Text', value: textCount, fill: '#8b5cf6' },   
        { name: 'Video', value: videoCount, fill: '#10b981' }, 
         
    ];

    const hasData = textCount > 0 || callCount > 0 || videoCount > 0;
    
    

    return (
        <div className='bg-gray-50'>
            <div className="container mx-auto max-w-7xl py-10 px-4">
                <h2 className="text-4xl font-bold mb-10 text-Gray-800">Friendship Analytics</h2>

                <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-gray-100 mx-auto pb-8">
                    <h3 className="text-lg font-semibold text-teal-900 mb-8">By Interaction Type</h3>

                    <div className="h-[400px] w-full flex justify-center items-center pb-12">
                        {/* Jodi data thake tahole chart dekhabe*/}
                        {hasData ? (
                            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}>
                                <Pie
                                    data={chartData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="55%"
                                    outerRadius="72%"
                                    cornerRadius="10%"
                                    paddingAngle={3}
                                    dataKey="value"
                                    isAnimationActive={true}
                                />
                                <Tooltip />
                                <Legend 
                                    iconType="circle"
                                    formatter={(value) => (
                                        <span className="text-gray-600 font-medium mr-10">{value}</span>
                                    )}
                                />
                            </PieChart>
                        ) : (
                            /* Jodi data na thake */
                            <div className="text-center">
                                <p className="text-2xl text-gray-600 font-semibold">No interaction logged yet!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;