import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgName: string;
  // description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Пишет на русском',
    imgName: 'cat-work.png',
  },
  {
    title: 'Пишет на английском',
    imgName: 'cat-learn.png',
  },
  {
    title: 'Обновляет портфолио',
    imgName: 'cat-portfolio.png',
  },
  {
    title: 'Ищет работу',
    imgName: 'cat-job.png',
  },
];

function Feature({title, imgName}: FeatureItem) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img src={require('@site/static/img/' + imgName).default} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
