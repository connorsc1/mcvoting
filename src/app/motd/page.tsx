"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [serverIP, setServerIP] = useState("play.skykingdom.net");
  const [serverData, setServerData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchServerData = async (ip: string) => {
    if (!ip) return;
    setLoading(true);
    setError("");
    setServerData(null);

    try {
      const response = await fetch(`https://api.mcsrvstat.us/2/${ip}`);
      const data = await response.json();

      if (data && data.motd && data.motd.html) {
        setServerData(data);
      } else {
        setError("Failed to retrieve server data.");
      }
    } catch (err) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServerData(serverIP);
  }, [serverIP]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Minecraft Server Info</h1>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={serverIP}
          onChange={(e) => setServerIP(e.target.value)}
          placeholder="Enter Server IP"
          className={styles.input}
        />
        <button onClick={() => fetchServerData(serverIP)} className={styles.button}>
          Fetch Server Info
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {serverData && (
        <div className={styles.serverBox}>
          {serverData.icon ? (
            <Image
              src={`data:image/png;base64,${serverData.icon.split(",")[1]}`}
              alt="Server Icon"
              width={70}
              height={70}
              className={styles.serverIcon}
            />
          ) : (
            <div className={styles.noIcon}>No Icon</div>
          )}

          <div className={styles.textContainer}>
            <h2 className={styles.serverName}>{serverData.hostname || serverIP}</h2>
            
            {/* MOTD Box with Fixed Width */}
            <div className={styles.motdBox}>
              <div
                className={styles.motd}
                dangerouslySetInnerHTML={{ __html: serverData.motd.html.join("<br>") }}
              />
            </div>
          </div>

          <div className={styles.playerCount}>
            {serverData.players && (
              <span style={{ color: "white" }}>
                {serverData.players.online} / {serverData.players.max} players
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
