const skillsItems = [
  {
    title: '顧客と開発チーム間の進行支援',
    content: (
      <p>
        2023年まで所属していた Contrast Security では、営業アシスタントとして顧客とのやり取りをする中で、直接製品に対する要望や問題などを共有いただくことが多々ありました。<br />
        いただいた要望によっては担当営業とエンジニアと相談の上、顧客のポテンシャルや規模感などを鑑みてエスカレーションをしていました。
        社内エンジニアチームへの共有はもちろん、タスクの進捗状況の管理、顧客の定期的なフォローアップやミーティングの調整なども行っていました。
      </p>
    ),
  },
  {
    title: '営業チームの一員としての登壇実績',
    content: (
      <>
        <div className="mb-2">
          Contrast Securityでは、営業チームの一員としてウェビナーセッションのプレゼン企画、登壇の経験があります。社内リード向けの限定プライベートウェビナーの他に、以下のような外部オンラインセミナーにも登壇しています：
        </div>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li><strong>2021年5月：</strong>ナノオプトメディア（オンラインセミナー）</li>
          <li><strong>2022年5月：</strong>「週刊BCN」主催オンラインセミナー</li>
          <li><strong>2022年10月：</strong>日経クロステック EXPO 2022 オンラインセミナー</li>
        </ul>
      </>
    ),
  },
  {
    title: 'フロントエンドエンジニアとしての知識と経験',
    content: (
      <>
        <p className="mb-2">
          2024年9月から2025年3月末まで、某SIer企業にて開発支援システムの保守・メンテナンスに従事していました。以下の技術スタックを使用・習得しています：
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li><strong>フロントエンド：</strong>JavaScript, TypeScript, React, Next.js, Tailwind CSS, MUI</li>
          <li><strong>バックエンド・DB：</strong>Node.js, Express, Prisma + PostgreSQL, MySQL, Supabase</li>
          <li><strong>認証：</strong>Clerk</li>
          <li><strong>テスト:</strong>Jmeter</li>
          <li><strong>その他：</strong>Python, AWS lambda, Docker, github, gitlab, VirtualBox</li>
        </ul>
      </>
    ),
  },
];

export default skillsItems;
