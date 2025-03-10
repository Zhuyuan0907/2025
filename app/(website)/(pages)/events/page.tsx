"use client";

import { ReactNode } from "react";

export default function Page() {
  return (
    <div className="flex items-start py-8 text-normal-mobile md:text-normal">
      <div className="w-full">
        <h1 className="mb-4 text-h1-mobile font-bold md:mb-12 md:text-h1">
          年會活動
        </h1>

        <EventSection id="geocaching" title="大地遊戲">
          沒有議程的時候不知道要做什麼嗎？想跟現場攤位互動卻又不知道從什麼話題開始？別擔心！快點打開
          OPass 參加大地遊戲吧！
          <br />
          <br />
          今年的大地遊戲結合 SITCON 2025 年會主題「Lines of Flight
          逃逸路線」。在遊戲中，你將透過收集「板塊碎片」，建構專屬於你的逃逸路線，破解關卡，贏取積分，並有機會帶回
          SITCON 2025 精心準備的超讚紀念品！
          <br />
          <br />
          【如何獲得板塊碎片？】
          <br />
          🤝
          與贊助商互動：與贊助商交流，你將可以獲取拼圖碎片，讓你快速地完成逃逸路線，挑戰更高的積分！
          <br />
          🎤
          參加年會活動：不論是參加指南針計畫、導遊團還是其他精彩活動，通通有機會獲得拼圖碎片～
          <br />
          <br />
          獲得越多積分、中獎機率越高！快點拿起手機，開始規劃你的逃逸路線吧！
        </EventSection>

        <EventSection id="compass" title="指南針計畫">
          期待在年會中結交更多志趣相投的夥伴嗎? 歡迎參與指南針計畫！
          <br />
          <br />
          指南針計畫為大家提供彼此交流的機會，旨在幫助你找到志同道合的夥伴，一同探討共同感興趣的主題。不論你是擁有豐富經驗的老手，還是對科技充滿好奇心的新手，都能在這裡找到共鳴。
          <br />
          <br />
          我們會根據你提供的資料，為你匹配合適的夥伴組成小組，讓你能與志同道合的夥伴們暢快的談天說地。在年會期間，你可以和小組成員一起參加現場多樣化的活動，也能在午餐時進行一場輕鬆的聚會，無論是分享彼此經驗、交流不同觀點，還是圍繞年會中的議程深入討論，都將是一段充滿收穫的經歷。
          <br />
          <br />
          無論你是初來乍到的新人，還是資訊領域的老鳥，每個人都能在這裡找到屬於自己的團隊，攜手創造一個開放、互相交流學習的環境。期待你的熱情參與，讓
          SITCON 2025 更加精彩！
        </EventSection>

        <EventSection id="guide" title="導遊團">
          在這個人潮洶湧的 SITCON
          年會中，是否感到有些迷茫呢？你是否還在猶豫該往哪個方向前進呢？別擔心，就讓資深導遊
          aka 歷屆總召帶領你探索 SITCON 年會現場！
          <br />
          <br />
          在導遊團集合地可以看到拿著 SITCON 旗子的導遊，跟著 SITCON
          導遊的腳步，帶領你前往社群攤位、走訪靜態海報展、咖啡廳，讓您更瞭解
          SITCON 的各個面向以及運作模式。
          <br />
          <br />
          導遊團共有上午兩團及下午兩團，時長約 40 分鐘，詳細資訊如下：
          <br />
          <br />
          <ScheduleTable />
          <br />
          趕快來參加導遊團，與新朋友一同揭開年會的精彩面紗！
        </EventSection>

        <EventSection id="lightning_talk" title="閃電講">
          有自己的精彩內容想和大家分享，卻來不及投稿嗎？那麼，歡迎參加 SITCON
          2025
          閃電講！閃電講將提供八位手腳最快的會眾五分鐘的時間與與會者們暢所欲言的分享你的專案或想法！{" "}
          <br />
          <br />
          在年會當天上午 10:00 開始至下午
          15:30，歡迎前往白板區的指定白板投稿參與。投稿的方式十分簡單！一但開放投稿，你就可以到白板區選擇一個空的順位，然後在白板上寫下你的演講標題和投稿者的名字（例如：「我在
          SITCON 2025 的趣事分享 by
          OsGa」），但名額只有八個，且每人限投一次，要搶要快！完成投稿後，請掃描白板區旁的表單，補充更多投稿資訊，例如標題、投稿者名稱及主題大綱。建議你可以事先準備好這些內容，以確保過程順利！
          <br />
          <br />
          參與者需要注意幾點事項。首先，投稿完成後，請於下午 16:40 準時到 R0 3F
          的右側集合，並攜帶你的演講設備，屆時會有議程組的夥伴在現場協助。每位講者的演講時間限制為五分鐘，我們將取八位投稿者上台分享，因此順位採取先搶先贏的方式，並且每人僅限投稿一次。我們希望保持活動的多樣性和趣味性，因此不接受過於商業化的投稿，若商業內容超過十秒，畫面將會被直接切斷。
          <br />
          <br />
          邀請你透過這個難得的機會，讓你在 SITCON 年會上與更多人交流與分享！
        </EventSection>

        <EventSection id="whiteboard" title="白板大戰">
          在多元觀點交織的時代，是時候點燃靈感的火花了。
          <br />
          <br />
          我們誠摯邀請你前往三樓白板區，用你的創意和觀點加入這場精彩絕倫的對話之戰。
          <br />
          <br />
          我們以「白板大戰」做為號召，圍繞多個有趣話題展開討論。在輕鬆愉快的氛圍中，用文字交流思想、分享觀點，創造更多的火花！
          <br />
          <br />
          快來白板上揮灑你的想法，向不同的觀點提出友善的挑戰，共同完成這場思想的盛宴吧！
        </EventSection>

        <EventSection id="whiteboard" title="咖啡廳">
          剛剛的精彩議程讓你意猶未盡？想與來自各地的會眾交流卻不知如何開始？還是需要一個地方讓自己放鬆片刻？歡迎來到
          SITCON 2025 咖啡廳！ <br />
          <br />
          這裡不僅是一杯好咖啡的歸屬地，更是滿足多樣需求的多功能空間。你可以在
          <span className="font-bold">二樓北側電梯廳</span>
          找到這個溫馨的角落，無論你是討論創新點子、拓展人脈，還是簡單地想喘口氣，咖啡廳都能滿足你的需求。
          <br />
          <br />
          在咖啡廳，你可以享受到：
          <br />
          <br />
          💬
          <span className="font-bold"> 輕鬆交流的氛圍</span>
          ：和志同道合的朋友暢聊剛剛的議程亮點，結識更多來自不同背景的夥伴，拓展視野、碰撞靈感。
          <br />☕<span className="font-bold"> 釋放壓力的暖心時刻</span>
          ：舒適的環境，搭配一杯香氣濃郁的咖啡，讓你在忙碌之中獲得片刻安寧，重整能量再出發。
          <br />
          💡
          <span className="font-bold"> 創意火花的激盪</span>
          ：與來自各領域的夥伴分享想法、腦力激盪，讓創新的可能性無限延伸，也許下一個大計劃就在這裡誕生！
          <br />
          <br />
          無論你是討論、交流、放鬆，還是開啟新的計畫，咖啡廳都歡迎你的蒞臨！快來一杯咖啡，享受屬於你的美好時光吧！
        </EventSection>
      </div>
      {/* <TableOfContent theme="light" sections={sections} submitUrl="" /> */}
    </div>
  );
}

function EventSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mt-6 rounded-lg border-[1px] border-[#FFFFFF] border-opacity-50 bg-background-light sm:relative sm:grid sm:grid-cols-3"
    >
      <div className="col-span-3 p-4">
        <h3 className="text-[26px] font-bold">{title}</h3>
        <p className="mt-4 leading-[200%]">{children}</p>
      </div>
    </section>
  );
}

function ScheduleTable() {
  const schedule = [
    { time: "上午 11:00", location: "在 3F 白板區旁" },
    { time: "上午 11:10", location: "在 4F 紀念品攤旁" },
    { time: "下午 14:40", location: "在 3F 白板區旁" },
    { time: "下午 14:50", location: "在 4F 紀念品攤旁" },
  ];

  return (
    <table className="w-full border-collapse border border-foreground">
      <thead>
        <tr className="border border-foreground">
          <th className="border border-foreground p-2 text-left">時間</th>
          <th className="border border-foreground p-2 text-left">
            出發地點（請提早 10 分鐘集合）
          </th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((item, index) => (
          <tr key={index} className="border border-foreground">
            <td className="border border-foreground p-2">{item.time}</td>
            <td className="border border-foreground p-2">{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
