import IntroductionItem from '../IntroductionItem/IntroductionItem';
import { descriptionItems } from '../../data/introductions';
import HeaderCard from '../HeaderCard/HeaderCard';

export default function IntroductionGroup() {
  return (
    <div>
      <HeaderCard index='03' title='自己紹介' detail='※詳しい経歴は、ESや履歴書をご確認ください'/>
        <dl>
          {descriptionItems.map((desc, index) => 
            <IntroductionItem key={index} desc={desc} />
          )}
        </dl>
    </div>
  )
}