import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Motivation = () => {
    const items = [
        {
          title: 'グローバルな舞台での成長機会と成果思考な業務環境',
          content: '貴社が掲げる「効率的で自由なワークスタイル」や多国籍なメンバーと関われる「世界と繋がるコミュニケーション」という働き方に深く共感し、これまでの経験を活かして貢献したいと考え、志望いたします。\n\nこれまで、バックオフィス、営業アシスタント、輸入事務の各分野で、英語を用いて取引先や同僚との業務経験を積んでまいりました。異なる文化的背景を持つ方々とのコミュニケーションは、時に課題もありましたが、それ以上に新しい視点やビジネス手法を学ぶ貴重な機会となりました。この経験から、多様なバックグラウンドを持つメンバーとの協働において、柔軟性と適応力を培ってきたと自負しております。\n\nまた、貴社の完全フルリモートワークの環境は、自己管理能力と成果志向が求められると理解しておりますが、これまでの経験を活かし、効率的かつ柔軟に業務を遂行できると確信しております。\n\nさらに、個人の成長とキャリアを強く推進する姿勢にも魅力を感じております。これまでの経験と新たに習得したスキルを融合させ、グローバルな環境での業務に積極的に取り組み、貴社の発展に寄与したいと考えております。\n\n以上の理由から、貴社の一員として、多様な文化的背景を持つメンバーと協働し、新しい価値を創造していきたいと考えております。',
        },
        {
          title: '開発者へ美しいUIと時間を提供',
          content: '貴社の「シンプルかつ美しいUI」で開発者に「時間」を提供するというミッションに深く共感いたしました。\n\nフロントエンド技術は非常に移り変わりが激しく、私自身も最新のフロントエンド技術を学ぶ中で、短期間での変化に戸惑うことがあります。先日拝見したエンジニア不足についての記事では、経産省の調査で記事でWebサイトやWebアプリのUXの重要性が増していることを背景にフロントエンドエンジニアの需要がたかまっている一方で、フロントエンドエンジニア不足が懸念されており、その一因にWeb技術の急速な進化についていけないといった問題があるとのことでした。\n\n前職で一緒に働いていた20年以上の経験を持つベテランのフルスタックエンジニアの同僚でさえ、フロントエンド開発の難しさを実感しているという話しており、特に、スタイルの調整や最新のライブラリの習得には多くの時間と労力が必要と言う話は、私自身も納期までの限られた時間の中で理解を強いられる状況に何度か泣かされました。このような状況下で、貴社のミッションはますます重要性を増していると感じております。\n\n私自身これまでの経験を活かし、フロントエンド開発の効率化と品質向上に貢献したいと考えております。貴社の一員として、開発者の負担を軽減し、より良い開発体験を提供できるよう貢献していきたいと考えております。',
        },
        {
          title: '手厚いサポート体制',
          content: '貴社が30年以上にわたり、変化の激しいUIデザインや開発の分野でソリューションを提供し続けていること、そして約97%という高い顧客満足度を維持していることに深く感銘を受けております。\n\n前職のコントラストセキュリティでは営業チームに所属し、初期導入前のPOCから購入後のフォローまで、顧客対応の重要性を実感しておりました。特に日本の顧客は受け身な傾向があり、こちらから積極的にアクションを起こさなければ、顧客が直面している問題さえも私達に共有されないケースが多々ありました。\n\nこのような経験から、貴社の「お客様の成功に本気でコミットする」という姿勢に深く共感しております。単なる製品提供にとどまらず、開発者が直面する課題解決に寄り添う企業文化のもとで、国内外で貴社の製品を広めていけるよう貢献していきたいと考えております。',
        },
      ]
    return (
      <section className="max-w-3xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">志望動機</h2>
        <h5 className='pb-5 text-gray-600'>
        この度、貴社のソリューションコンサルタントというポジションの募集を拝見し、<br />
        貴社の理念、グローバルなワークスタイル、そして顧客に真剣に向き合う姿勢に強く共感いたしました。<br />
        主に以下の3点が志望動機となります。
        </h5>

        <div className="space-y-4 text-left">
        {/* <div className="rounded-lg overflow-hidden bg-stone-100 border border-gray-300 mb-4"> ★ 全体囲む */}
        {items.map((item, index) => (
            <Disclosure key={index}>
            {({ open }) => (
                <div className="mb-4 rounded-lg border border-gray-300 overflow-hidden bg-stone-100">
                    <DisclosureButton 
                        className="flex w-full justify-between items-center
                         bg-stone-100 px-10 py-5 text-left text-lg font-semibold
                         hover:border-stone-400
                         focus:outline-none focus:ring-0 focus-visible:outline-none"
                    >
                        <span>{item.title}</span>
                        <ChevronDownIcon
                            className={`h-5 w-5 transform transition-transform duration-300 ${
                                open ? 'rotate-180' : ''
                            }`}
                        />
                    </DisclosureButton>
                    <DisclosurePanel className="px-10 pt-2 pb-10 text-gray-600 bg-stone-100 ">
                        {item.content.split('\n\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </DisclosurePanel>
                </div>
            )}
            </Disclosure>
        ))}
        </div>
      </section>
    );
  };
  
  export default Motivation;
  