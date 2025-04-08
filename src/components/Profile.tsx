import profileImage from '../assets/profile_image.png';
import githubIcon from '../assets/github-mark.png'

const Profile = () => {
    return (
        <section className="mt-5 w-full flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-8">Profile</h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-4xl w-full">
            <img
              src={profileImage}
              alt="プロフィール画像"
              className="w-48 max-w-none aspect-square rounded-full object-cover mt-5 mr-4"
            />
            <div className="sm:text-left text-center pl-2">
              <h3 className="text-2xl font-semibold">渡辺 江里子</h3>
              <h6 className='font-bold text-gray-400'>Eriko Watanabe</h6>
              <h5 className='font-bold pt-5'>挑戦を怖がらず、苦手なものを得意分野に</h5>
              <p className="text-gray-600 pt-3">
                苦手意識は成長を妨げる、という言葉を常に念頭に置き、英語やソフトウェアの知識、趣味にまで至るさまざまな分野の習得に取り組んできました。
                初学者という立場に甘えることなく、常に中上級者としての自分をイメージしながら、日々向上を目指してきました。<br /> 
                <br />
                大学では英語を専攻、英語力を駆使してグローバルな環境で活躍したいという思いで20代にイギリスへ留学。
                帰国後は専門商社の輸入事務や外資のバックオフィスなど主にオフィスワークに従事してきました。<br />
                事務職としてのキャリアに将来への不安を感じていた頃、Contrast Securityへの入社がキャリアチェンジの転機となり、
                退職後は本格的にフロントエンドを中心に独学での学習を開始。
                直近では業務委託として、某SIer企業の開発支援業務を担当しておりました。<br />
                <br />
                将来的には、これまでの業務経験や英語力、そしてエンジニアとしての技術を活かし、グローバルな舞台で存在感のある活躍を目指しています。
              </p>
              <div className="mt-5 text-right ">
                <a href="https://github.com/erinkow/my_portfolio">
                    <img
                        src={githubIcon}
                        alt="GitHubアイコン"
                        className="inline-block w-10 h-10 filter brightness-75"
                    />
                </a>
              </div>
            </div>
          </div>
        </section>
    )
  };

export default Profile;
