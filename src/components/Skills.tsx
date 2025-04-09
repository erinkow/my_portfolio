import skillsItems from "./SkillData";
import githubIcon from '../assets/github-mark.png'

const Skills = () => {
    return (
      <section className="max-w-5xl mx-auto mt-12 px-4 mb-24 pt-5">
        <h2 className="text-3xl font-bold mb-8 text-center">私が貴社に貢献できること</h2>
        <h6 className='mb-6 mx-5'>
            私は、業務を円滑に進めるための調整力、対外的な発信力、そしてエンジニアとしての技術力を活かして貢献できると確信しています。以下はその具体的な実績です。
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg bg-stone-100 p-6 shadow-sm h-full flex flex-col justify-content"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
            <div className="text-gray-700 text-sm leading-relaxed">{item.content}</div>
          </div>
        ))}
        </div>
        <div className="mt-7 text-center ">
            <a href="https://github.com/erinkow/my_portfolio">
                <img
                    src={githubIcon}
                    alt="GitHubアイコン"
                    className="inline-block w-10 h-10 filter brightness-75"
                />
            </a>
       </div>
      </section>
    );
  };
  
  export default Skills;
  