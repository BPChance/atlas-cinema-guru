"use client";

import { useEffect, useState } from "react";

type Activity = {
  id: string;
  title: string;
  activity: "FAVORITED" | "WATCH_LATER";
  timestamp: string;
};

export default function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function loadActivities() {
      const res = await fetch("/api/activities", {
        cache: "no-store",
        credentials: "include",
      });
      const data = await res.json();
      setActivities(data.activities);
    }

    loadActivities();
  }, []);

  return (
    <div className="text-sm">
      {activities.map((item) => (
        <div key={item.id} className="p-2 text-black">
          <div className="whitespace-nowrap">
            {new Date(item.timestamp).toLocaleString()}
          </div>
          <div className="text-sm">
            {item.activity === "FAVORITED" ? (
              <>
                Favorited <span className="font-bold">{item.title}</span>
              </>
            ) : (
              <>
                Added <span className="font-bold">{item.title}</span> to Watch
                Later
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
