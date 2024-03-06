import Link from 'next/link';
import { IconBrandGithub, IconHome } from '@tabler/icons-react';
import { PortfolioDetailHeader } from '../_components/portfolio-header';
import { PortfolioDetail } from '../_components/portfolio-detail';

export default function PortfolioDetailPage() {
  return (
    <div className="flex flex-col gap-10 min-h-screen w-full bg-background">
      <div className="bg-dot-black/10">
        <PortfolioDetailHeader {...dummyHeader} className="pt-6 lg:pt-12" />
        <PortfolioDetail
          content={dummyContent}
          imageContent={
            <div className="sticky top-32 w-full h-60 rounded-md bg-gradient-to-br from-rose-300 to-rose-700" />
          }
          direction="right"
        />
        <PortfolioDetail
          content={dummyContent2}
          imageContent={
            <div className="sticky top-32 w-full h-60 rounded-md bg-gradient-to-br from-sky-300 to-sky-700" />
          }
          direction="left"
        />
        <PortfolioDetail
          content={dummyContent}
          imageContent={
            <div className="sticky top-32 w-full h-60 rounded-md bg-gradient-to-br from-violet-300 to-violet-700" />
          }
          direction="right"
        />
      </div>
    </div>
  );
}

const SAMPLE_IMG =
  'https://images.unsplash.com/photo-1709491135369-4b65470fc8ae?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const dummyHeader = {
  title: 'woo3145.com',
  description:
    'NextJS를 사용한 웹사이트 NextJS를 사용한 웹사이트 NextJS를 사용한 웹사이트 NextJS를 사용한 웹사이트 NextJS를 사용한 웹사이트',
  thumbnailUrl: SAMPLE_IMG,
  projectType: '개인',
  tags: (
    <div className="flex items-center gap-3">
      <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full px-2 py-0.5">
        개인
      </p>
      <p className="border border-purple-500 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs rounded-full px-2 py-0.5">
        NextJS
      </p>
      <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs rounded-full px-2 py-0.5">
        Supabase
      </p>
    </div>
  ),
  footer: (
    <div className="flex items-center gap-4">
      <Link
        href="https://github.com/woo3145/woo3145.com"
        target="_blank"
        className="hover:text-blue-500"
      >
        <IconBrandGithub className="w-6 h-6" />
      </Link>
      <Link
        href="https://woo3145.com"
        target="_blank"
        className="hover:text-blue-500"
      >
        <IconHome className="w-6 h-6" />
      </Link>
    </div>
  ),
};

const dummyContent = [
  {
    title: '린우스 토발즈',
    description:
      '좋은 프로그래머는 문제를 해결하는 사람이고, 훌륭한 프로그래머는 문제가 발생하지 않게 하는 사람입니다. 기술은 단순히 도구에 불과합니다. 중요한 것은 그 도구를 사용하여 무엇을 만들어내느냐입니다. 협업과 공유 없이는 진정한 혁신이 이루어질 수 없습니다',
  },
  {
    title: '데니스 리치',
    description:
      '가장 중요한 기술을 배우는 방법은 그것을 사용해보는 것입니다. 복잡성은 대단한 적입니다. 간결함을 추구하세요. 프로그래밍에서 완벽함을 달성하는 것은 불가능에 가깝지만, 그렇다고 시도하지 않을 이유는 없습니다.',
  },
  {
    title: '존 카맥',
    description:
      '최적화를 너무 일찍 시작하는 것은 모든 악의 근원입니다. 하지만, 그렇다고 최적화의 중요성을 무시해서는 안 됩니다. 창의적인 해결책은 때때로 규칙을 깨는 데서 나옵니다. 두려움 없이 새로운 접근을 시도하세요.',
  },
  {
    title: '제프 딘',
    description:
      '대규모 시스템을 설계할 때는 단순성, 확장성, 빠른 반복이 핵심입니다. 실패를 두려워하지 마세요. 실패는 지식의 원천입니다. 기술의 진보는 우리가 과거의 한계를 넘어서도록 도와주지만, 진짜 변화는 사람들의 마음가짐에서 시작됩니다.',
  },
];

const dummyContent2 = [
  {
    title: '에릭 레이먼드',
    description:
      '오픈 소스는 단순히 소프트웨어를 개발하는 방법이 아니라, 지식을 공유하고 협력하는 문화입니다. 가장 성공적인 소프트웨어는 사용자 커뮤니티와 긴밀하게 협력하여 개발됩니다. 모든 문제에는 다양한 해결책이 있으며, 오픈 소스 커뮤니티는 그 해결책을 탐색하는 최적의 장입니다.',
  },
  {
    title: '그레이스 호퍼',
    description:
      '가장 위험한 말은 우리가 항상 그렇게 해왔다는 것입니다. 혁신은 상태를 유지하기보다는 변화를 추구할 때 발생합니다. 컴퓨터 과학에서 진정한 진보는 기존의 규칙과 절차를 뛰어넘어 새로운 아이디어를 실행할 때 이루어집니다.',
  },
  {
    title: '팀 버너스-리',
    description:
      '웹의 진정한 힘은 보편성에 있습니다. 액세스는 장애물에 구애받지 않아야 합니다. 정보의 자유로운 흐름은 지식 사회의 기반이며, 이는 모든 인류의 발전을 촉진합니다. 인터넷은 단순히 기술이 아니라, 사람들을 연결하는 매개체입니다.',
  },
  {
    title: '앨런 케이',
    description:
      '가장 좋은 방법은 발명하는 것입니다. 미래를 예측하는 것보다 미래를 발명하는 것이 낫습니다. 창의성은 단순히 지식의 재배열이 아니라, 전혀 새로운 것을 창조하는 과정입니다. 컴퓨팅의 본질은 인간의 생각을 확장하고, 새로운 가능성을 탐구하는 데 있습니다.',
  },
];
