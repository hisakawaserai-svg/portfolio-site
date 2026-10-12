import styles from './AppGroup.module.css';
import stylesAppCard from '../AppCard/AppCard.module.css';
import AppCard from '../AppCard/AppCard';
import { type AppType, type ReleaseType } from '../AppCard/AppCard.types';
import { apps } from '../../data/apps';
import { releaseLabel, releaseColor } from '../../constants/release';
import HeaderCard from '../HeaderCard/HeaderCard';

const [release, unrelease, demo] = apps.reduce((acc, app) => {
  if(app.release === 'release'){
    acc[0].push(app);
  } else if(app.release === 'unrelease'){
    acc[1].push(app);
  } else {
    acc[2].push(app);
  }
  return acc;
}, [[], [], []] as AppType[][]);

const releasePlatformLabel: Record<ReleaseType, string> = {
  'release': 'App Store・Google Play・Web',
  'unrelease': '',
  'demo': 'ブラウザで動く',
}
type releaseCardProps = {
  releaseStatus: ReleaseType;
  array: AppType[];
}
function ReleaseCard({releaseStatus, array}: releaseCardProps) {
  return(
    <div className={styles.releaseContainer}>
      <span className={stylesAppCard.releaseMark} 
        style={{background: releaseColor[releaseStatus]}} 
      />
      <span className={styles.releaseLable}>{releaseLabel[releaseStatus]}</span>
      <span className={styles.releaseCount}>{array.length}</span>
      <span className={styles.releaseBar} />
      <span className={styles.releasePlatform}>{releasePlatformLabel[releaseStatus]}</span>
    </div>
  );
}

export default function AppGroup() {
  return(
    <div>
      <HeaderCard index='02' title='アプリ' detail={`ストアに${release.length}本公開中`} />
      {/* 公開中 */}
      {release.length > 0 && (
        <ReleaseCard releaseStatus={'release'} array={release} />
      )}
      {release.map((app, index) => 
        <AppCard key={app.id} app={app} index={index} />
      )}
      {/* デモ web公開 */}
      {demo.length > 0 && (
        <ReleaseCard releaseStatus={'demo'} array={demo} />
      )}
      {demo.map((app, index) => 
        <AppCard key={app.id} app={app} index={index + release.length} />
      )}
      {/* 未公開 */}
      {unrelease.length > 0 && (
        <ReleaseCard releaseStatus={'unrelease'} array={unrelease} />
      )}
      {unrelease.map((app, index) => 
        <AppCard key={app.id} app={app} index={index + release.length + demo.length} />
      )}
    </div>
  )
}