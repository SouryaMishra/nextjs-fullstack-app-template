import styles from "./BaseTemplate.module.scss";
export interface IBaseTemplateProps {
  text: string;
}

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};

export default BaseTemplate;
