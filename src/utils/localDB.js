const getAllFromLocalDB = () => {
    // localStorage.clear();
    const allTimelineData = localStorage.getItem('user_activities');
    if (allTimelineData) {
        return JSON.parse(allTimelineData);
    } else {
        return []; 
    }
}

const addToLocalDB = (type, name) => {
    console.log("Adding to local DB:", type, name);
    const previousActivities = getAllFromLocalDB();
    
    const newEntry = {
        activityId: Date.now(),
        category: type,
        friendName: name,
        timestamp: new Date().toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        })
    };

    
    const updatedActivities = [newEntry, ...previousActivities];
    
    localStorage.setItem('user_activities', JSON.stringify(updatedActivities));
}

export { getAllFromLocalDB, addToLocalDB };