import IntroductionItem from '../IntroductionItem/IntroductionItem';
import { descriptionItems } from '../../data/introductions';
import HeaderCard from '../HeaderCard/HeaderCard';

export default function IntroductionGroup() {
  return (
    <div>
      <HeaderCard index='03' title='自己紹介' />
        <dl>
          {descriptionItems.map((desc, index) => 
            <IntroductionItem key={index} desc={desc} />
          )}
        </dl>
    </div>
  )
}