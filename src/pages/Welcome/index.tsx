import { Avatar, Badge, Card, Divider } from '@douyinfe/semi-ui';
import styles from './index.module.less';
import List from '../../components/List';

const description = ['性别：男', '公司：知乎', '部门：技术中台'];

function Welcome() {
  return (
    <div>
      <div className={styles.userCard}>
        <img
          src='https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg'
          width={350}
          height={90}
          className={styles.backgroundImg}
        />
        <div className={styles.info}>
          <Avatar
            alt='beautiful cat'
            src='https://bbs.404fwf.cn/assets/avatars/OyAKKiIJ6ojR0mOy.png'
            style={{ margin: 4 }}
            size='large'
          />
          <span className={styles.name}>
            <div className={styles.description}>我想嘻嘻哈哈🤪</div>
            <div className={styles.title}>
              向兴强
              <Badge count='知乎' />
            </div>
          </span>
        </div>
        <Divider />
        <List content={description} />
      </div>
    </div>
  );
}

export default Welcome;
