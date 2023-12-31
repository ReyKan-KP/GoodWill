import React, { useState, useEffect, useRef } from 'react';
import Campaign from "./UserNGO";

function GetUserNGO(){
    const [campaigns, setCampaigns] = useState([]);
    const [visibleCampaigns, setVisibleCampaigns] = useState(3);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/sitedata/ngosc');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log(data)
          setCampaigns(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);
    const loadMore = () => {
      // Increase the number of visible campaigns
      setVisibleCampaigns(prevVisibleCampaigns => prevVisibleCampaigns + 3);
    };
    return(
        <div style={{marginTop:"105px"}}>
            {campaigns.slice(0, visibleCampaigns).map(campaign => (
              <Campaign key={campaign._id} data={campaign} />
            ))}
             {visibleCampaigns < campaigns.length && (
          <div className="text-center more-post__btn">
            <a onClick={loadMore} className="thm-btn">
              Load More
            </a>
          </div>
          )}
        </div>
    )
}

export default GetUserNGO;