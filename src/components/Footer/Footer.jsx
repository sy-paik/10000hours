import './Footer.css';
import LogoImage from '../../images/logo.png'


export default function Footer() {
    return (
        <footer>
         <img src={LogoImage} alt="weniv" />
            <p className ="copyright">※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br />
            수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
        </footer>
    )
}