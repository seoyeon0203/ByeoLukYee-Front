import { Link } from "react-router-dom";

import '../../styles/common/Styles.css';

import buyStyle from '../../styles/buying-Item/BuyPostItem.module.css';

import { GoHeart } from "react-icons/go";
import { VscEye } from "react-icons/vsc";
 
function BuyPostItem() {
    return(
        <>
            <Link to="/selling-posts/1" style={{ textDecoration: "none", color: 'black' }}>
                <div className={buyStyle['BoxContainer']}>
                    <div className={buyStyle['firstDiv']}>
                        <div className={buyStyle['contextDiv']}>
                            <p>아이폰 7 카메라용으로 삽니다!!</p>
                            <p>생활기스 있어도 괜찮아요! 배터리는 80% 이상만 제시해주세요</p>
                        </div>
                        <div className={buyStyle['moneyDiv']}>
                            <p>100,000원</p>
                            <p>희망 구매 가격</p>
                        </div>
                    </div>
                    <div className={buyStyle['secondDiv']}>
                        <p>#경매중</p>
                        <div className={buyStyle['iconDiv']}>
                            <div className={buyStyle['eyesVectorDiv']}>
                                <VscEye className={buyStyle['eyesVector']}/>
                                <p>0</p>
                            </div>
                            <div className={buyStyle['heartVectorDiv']}>
                                <GoHeart className={buyStyle['heartVector']}/>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BuyPostItem;