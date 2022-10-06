import styles from "./CatCard.module.scss";
export interface ICatCardProps {
  text: string;
}

const CatCard: React.FC<ICatCardProps> = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};

export default CatCard;
