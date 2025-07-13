# 1.5. 급탕 에너지요구량 (Energy need for hot water)

**급탕 에너지요구량**은 **한 존**을 기준으로, **월 단위**로 계산됩니다.
**월간** 급탕 에너지요구량은 **일간** 급탕 에너지요구량을 계산한뒤 특정 달의 사용일수를 곱하여 계산합니다. 
<br>
아래 그림과 같이 한 존의 월간 급탕 에너지요구량이 결정되면, 이를 월별로 모두 합하여 한 존의 최종 급탕 에너지요구량이 됩니다.

<div style="text-align: center;">
  <img src="https://www.researchgate.net/publication/267435585/figure/fig4/AS:667861970337800@1536242110522/Amount-of-domestic-hot-water-consumption-in-an-apartment-by-month.png" 
       alt="Domestic hot water consumption" 
       style="max-width: 80%; height: auto;" />

  <div style="font-size: 14px; margin-top: 8px;">
    (출처: <a href="https://www.researchgate.net/publication/267435585" target="_blank">ResearchGate 원문 링크</a>)
  </div>
</div>


<br>
<br>

## 1.5.1. 월간 급탕 에너지요구량 \(Q_{w,b}\)

**급탕** **에너지요구량**은 기호로 **\(Q_{w,b,d}\)**로 표시하며, 존에 따라 결정됩니다.   
ECO2에서는 한 존에서의 **급탕에 필요한 월간 에너지요구량**을 다음과 같이 계산합니다:


<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 2em;
  ">
 \( Q_{w,b} = Q_{w,b,d} \cdot d_{Nutz,mth}  \)  (3.2.9-3)
  </div>
</div>

<!-- ✅ Where 이하: 완전히 별도의 블록으로 분리 -->
<div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 2;
    padding: 16px 24px;
    border-radius: 0px;
  ">
    <!-- Where 텍스트: 독립적, 굵고 이탤릭 -->
    <div style="
      font-style: italic;
      font-weight: bold;
      font-family: 'Times New Roman', 'Cambria Math', serif;
      margin-bottom: 24px;
    ">
      Where,
    </div>
    <!-- 수식 설명들: 왼쪽 정렬, Pretendard 유지 -->
    <span style="display: block;">\( Q_{w,b,d} \) : 일일 급탕 에너지요구량 (\( W/m^2 \))</span>
    <span style="display: block;">\( d_{Nutz,mth} \) : 건물 공간의 용도에 따른 연간 이용일수(예: 개인사무실 250일) (식에서는 mth인데 where에서는 a로 되어 있음)</span>
  </div>
</div>


<br>
<br>
<br>

## 1.5.2. 일간 급탕 에너지요구량 \(Q_{w,b,d}\)
한편 일간 급탕 에너지요구량은 존별로 상이하며, 다음과 같이 **용도프로필** 내 면적 또는 인원으로 환산된 **\(q_w,b,d\)**의 값을 단위에 맞게 환산하여 사용합니다.   
일간 급탕 에너지요구량의 계산:

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 2em;
  ">
 \( Q_{w,b,d} = q_{w,b,d} \cdot Bezug \) (3.2.9-2)
  </div>
</div>

<!-- ✅ Where 이하: 완전히 별도의 블록으로 분리 -->
<div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 2;
    padding: 16px 24px;
    border-radius: 0px;
  ">
    <!-- Where 텍스트: 독립적, 굵고 이탤릭 -->
    <div style="
      font-style: italic;
      font-weight: bold;
      font-family: 'Times New Roman', 'Cambria Math', serif;
      margin-bottom: 24px;
    ">
      Where,
    </div>

    <!-- 수식 설명들: 왼쪽 정렬, Pretendard 유지 -->
    <span style="display: block;">\( q_{w,b,d} \) : 사람, 침대, 좌석 또는 면적 등으로부터 환산되어 도출되는 급탕에 필요한 일일 열 요구량 </span>
    <span style="display: block;">\( Bezug \) : 환산단위(사람/면적/침실 등) </span>
  </div>
</div>

ECO2에서는 용도프로필 내 일간 급탕 열 요구량\(q_w,b,d\)의 값으로 DIN V 18599를 참고하였으며, 주요 존의 급탕요구량은 다음과 같이 제시되고 있습니다:

| 용도프로필 | 급탕요구량 | 
|-----------|-----------|
| 주거공간 | 84 | 
| 대규모사무실 | 30 | 
| 강당 | 30 | 
| 구내식당 | 1250 | 
| 화장실 | 0 | 
| 병실 | 82 | 
| 객실 | 82 | 
| 열람실 | 30 | 


<br>
<br>


## 1.5.3. 월별 이용일수 \(d_{Nutz,mth}\)
급탕 에너지요구량 계산에 필요한 월별 이용일수\((d_{Nutz,mth)}\)는 다음과 같이 계산됩니다:

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 2em;
  ">
 \( d_{Nutz,mth} = \frac{d_{Nutz,mth}}{365} \cdot d_{mth}   \) (3.2.9-1)
  </div>
</div>

<!-- ✅ Where 이하: 완전히 별도의 블록으로 분리 -->
<div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 2;
    padding: 16px 24px;
    border-radius: 0px;
  ">
    <!-- Where 텍스트: 독립적, 굵고 이탤릭 -->
    <div style="
      font-style: italic;
      font-weight: bold;
      font-family: 'Times New Roman', 'Cambria Math', serif;
      margin-bottom: 24px;
    ">
      Where,
    </div>

    <!-- 수식 설명들: 왼쪽 정렬, Pretendard 유지 -->
    <span style="display: block;">\( d_{Nutz,a} \) : 건물 공간의 용도에 따른 연간 이용일수(e.g. 개인사무실:250일) </span>
    <span style="display: block;">\( {d_mth} \) : 월별 일수 </span>
  </div>
</div>