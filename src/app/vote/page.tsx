import Image from "next/image";
import styles from "./page.module.css"; // Import CSS module

export default function Home() {
  return (
    <div className={styles["page-container"]}>
      {/* Banner Section */}
      <div className={styles["banner-section"]}></div>

      {/* Server Info Section */}
      <div className={styles["server-info"]}>
        <div className={styles["server-details"]}>
          <h1 className={styles["server-name"]}>SkyKingdom</h1>
          <span className={styles["server-rating"]}>⭐ 4.8</span>
        </div>
        <div className={styles["server-stats"]}>
          <p className={styles["players-online"]}>53 Players Online</p>
          <button className={styles["copy-ip-btn"]}>Copy IP</button>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles["main-content"]}>
        {/* Discord Info Card */}
        <div className={styles["info-card"]}>
          <div className={styles["info-card-banner"]}></div>
          <div className={styles["info-card-content"]}>
            <Image src="/assets/image.png" alt="Server Icon" width={100} height={100} className={styles["server-icon"]} />
            <div className={styles["info-text"]}>
              <h1>MCVoting</h1>
              <Image src="/assets/commserv.png" alt="CommServ" width={50} height={50} className={styles["commserv-icon"]} />
              <p className={styles["members-info"]}>
                <span className={styles["gray-text"]}>● 9 Members</span>
                <span className={styles["green-dot"]}>●</span> <span className={styles["gray-text"]}>6 Online</span>
              </p>
              <p className={styles["established-date"]}>Est. Apr 2025</p>
              <p className={styles["server-description"]}>Minecraft voting list website</p>
            </div>
          </div>
          <div className={styles["footer"]}>
            <Image src="/assets/minecraft-grass.png" alt="Minecraft" width={50} height={50} className={styles["minecraft-icon"]} />
            <span className={styles["minecraft-label"]}>Minecraft</span>
          </div>
        </div>

        {/* Voting Section */}
        <div className={styles["voting-section"]}>
          <button className={styles["vote-btn"]}>Vote For this server</button>
          <label className={styles["vote-toggle"]}>
            <input type="checkbox" id="vote-toggle" />
            <span className={styles["slider"]}></span>
            <span className={styles["toggle-label"]}>Would you like to rate this server?</span>
          </label>
          <div className={styles["star-rating"]}>⭐⭐⭐⭐⭐</div>
          <textarea className={styles["review-text"]} placeholder="Write your review..."></textarea>
          <button className={styles["submit-rating-btn"]}>Submit Rating</button>
        </div>
      </div>
    </div>
  );
}
