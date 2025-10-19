# 3. 가열, 냉각, 가습, 제습을 위한 에너지요구량
## 3.1. 공조처리
공조처리에 필요한 에너지와 물질의 양을 계산하는 방식은 <그림 3.1-1>과 같이 3 단계로 구분하여 진행합니다.

<center>
     <img src="../../_images/3.1_1.png" style="max-width: 50%;" alt="공조처리에 필요한 요구량의 계산 절차">
     <div><strong>Figure 3.1-1. 공조처리에 필요한 요구량의 계산 절차</strong></div>
</center> 

- 1단계: 습공기선도 (h-x diagram) 조닝   
    - 동일한 기기(예열, 냉각, 가습, 재열)에 의해 비슷한 공기상태변화를 보이는 습공기선도 존을 분류합니다. 습공기선도 존의 경계 라인은 보조 계산에 따라 정해집니다.      

- 2단계: 기상데이터분석   
    - 기상데이터분석에 따라 해당하는 각 습공기선도 존에 대해 평균 외기 조건과 연간 시간을 구합니다.   

- 3단계: 공조처리에 필요한 요구량 계산   
    - 주어진 값에 따라 각 시스템 구성기기의 에너지와 유량 요구량을 산정합니다.   
    - 기본적인 계산 방향은 CAV(정풍량) 시스템을 기준으로 하며(그림 3.1-2. CAV 시스템의 개요 참조), 누기가 없다는 전제하에 아래 조건들이 성립합니다.   
        - 가습기나 열회수기의 펌프와 같은 보조 구성요소의 소비 전력량은 설정하지 않습니다.   
        - 단열가습기는 가습률 100%로 가동됩니다.   
        - 팬은 온도 상승을 유발하지 않습니다.      

<center>
     <img src="../../_images/3.1_2.png" style="max-width: 50%;" alt="CAV 시스템의 개요">
     <div><strong>Figure 3.1-2. CAV 시스템의 개요</strong></div>
</center> 

<그림 3.1-3>은 AU1(열회수 및 리턴공기 혼합 후의 공기상태)의 상태변화를 습공기선도에서 예시적으로 나타낸 것입니다.
<center>
     <img src="../../_images/3.1_3.png" style="max-width: 50%;" alt="AU1(열회수 및 리턴공기 혼합 후의 공기상태)의 상태변화">
     <div><strong>Figure 3.1-3. AU1(열회수 및 리턴공기 혼합 후의 공기상태)의 상태변화</strong></div>
</center>

### 1단계: 습공기선도 (h-x diagram) 조닝
- 실내공기의 상태는 아래 식으로 제시됩니다.   
<div align="center">
$$
\begin{aligned}
    \vartheta_{RA,u} \leq \vartheta_{RA} \leq \vartheta_{RA,o} \\
    x_{RA,u} \leq x_{RA} \leq x_{RA,o}
\end{aligned}
$$
<span class="eq-number">(3.1-4)</span>
</div>

 <div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 1;
    padding: 4px 8px;
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
    <span style="display: block;">\( \vartheta_{RA,u} \) : 하위경계의 실내온도</span>
    <span style="display: block;">\( \vartheta_{RA,o} \) : 상위경계의 실내온도</span>
    <span style="display: block;">\( \vartheta_{RA} \) : 실내온도</span>
    <span style="display: block;">\( x_{RA,u} \) : 하위경계의 실내절대습도</span>
    <span style="display: block;">\( x_{RA,o} \) : 상위경계의 실내절대습도</span>
    <span style="display: block;">\( x_{RA} \) : 실내절대습도</span>
  </div>
</div>   


- 다양한 HVAC 시스템과 가동 모드를 비교하기 위해서는 실내 공기 온도를 고려해야 합니다. 특히 천장 복사 패널과 같은 시스템의 복사 영향을 정밀하게 비교하기 위해서는 해당 영향이 고려되어야 합니다.   
- 복사 비율을 직접 고려하지 않을 경우, 시스템의 추가 에너지 요구량은 난방 및 냉방 기간의 실내 온도를 일정 수준(\(\Delta\theta_{L}\)) 상향 또는 하향 수정하여 반영합니다.   
- 에너지와 절대습도의 균형을 통해 급기 공기 상태에 대한 경계 조건을 설정합니다.   
<div align="center">
$$
\begin{aligned}
    & x_{ZUL,u} = x_{RA,u} + \frac{\dot{m}_{11,W}}{\dot{m}_{11,L}} < x_{ZUL} < x_{RA,o} + \frac{\dot{m}_{11,W}}{\dot{m}_{11,L}} = x_{ZUL,o} \\
    & \vartheta_{ZUL,u} = \vartheta_{RA,u} + \frac{\dot{Q}_{12}}{\dot{m}_{12,L} c_{p,L}} < \vartheta_{ZUL} < \vartheta_{RA,o} + \frac{\dot{Q}_{12}}{\dot{m}_{12,L} c_{p,L}} = \vartheta_{ZUL,o}
\end{aligned}
$$
<span class="eq-number">(3.1-5)</span>
</div>


 <div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 1;
    padding: 4px 8px;
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
    <span style="display: block;">\( \dot{m}_{11,W} \) : 급기(공조처리)에 필요한 수증기의 질량유량</span>
    <span style="display: block;">\( \dot{m}_{11,L} \) : 급기(공조처리)에 필요한 공기의 질량유량</span>
    <span style="display: block;">\( \dot{m}_{12,L} \) : 송풍(공조처리)에 필요한 공기의 질량유량</span>
    <span style="display: block;">\( x_{ZUL,u} \) : 하위경계의 절대급기습도</span>
    <span style="display: block;">\( x_{ZUL,o} \) : 상위경계의 절대급기습도</span>
    <span style="display: block;">\( \dot{Q}_{12} \) : 송풍에 필요한 에너지부하</span>
    <span style="display: block;">\( c_{p,L} \) : 공기의 비열</span>
    <span style="display: block;">\( \vartheta_{ZUL,u} \) : 하위경계의 급기온도</span>
    <span style="display: block;">\( \vartheta_{ZUL,o} \) : 상위경계의 급기온도</span>
    <span style="display: block;">\( \vartheta_{ZUL} \) : 급기온도</span>
  </div>
</div>   

- 공조 처리를 위한 가습 및 제습 여부는 아래 조건에 따라 결정됩니다.
    - 가습 조건:   
    <div align="center">$$
        x_{AUL} < \frac{x_{ZUL,u} - u \cdot x_{ABL,u}}{1-u} = x_{g,u} $$
        <span class="eq-number">(3.1-6)</span>
    </div>

    - 제습 조건:   
    <div align="center">
    $$
    x_{AUL} > \frac{x_{ZUL,o} - u \cdot x_{ABL,o}}{1-u} = x_{g,o}
    $$
    <span class="eq-number">(3.1-7)</span>
    </div>
<div style="
display: flex;
justify-content: center;
font-family: Pretendard, sans-serif;
font-size: 15px;
margin-top: 0px;
">
<div style="
    text-align: left;
    line-height: 1;
    padding: 4px 8px;
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
    <span style="display: block;">\( x_{AUL} \) : 외기의 절대습도</span>
    <span style="display: block;">\( u \) : 리턴공기의 혼합비율</span>
    <span style="display: block;">\( x_{ABL,u} \) : 하위경계의 배기절대습도</span>
    <span style="display: block;">\( x_{ABL,o} \) : 상위경계의 배기절대습도</span>
    <span style="display: block;">\( x_{g,u} \) : 습공기선도의 조닝을 위한 하위경계의 절대습도</span>
    <span style="display: block;">\( x_{g,o} \) : 습공기선도의 조닝을 위한 상위경계의 절대습도</span>
</div>
</div>   

- 가습 전 예열/냉각 조건: 공기가 가습 이전에 가열되거나 냉각되는 경우, 아래의 엔탈피 조건을 추가로 고려합니다.   
    - 가열:   
    <div align="center">
        $$
        h_{AU} - c_{p,L} \Phi \vartheta_{AU} < \frac{h_B - u \cdot h_{AB,u}}{1-u} - c_{p,L} \Phi \vartheta_{AB,u} = h_{g,u}
        $$
        <span class="eq-number">(3.1-8)</span>
    </div>
    - 냉각:   
    <div align="center">
    $$
    h_{AU} - c_{p,L} \Phi \vartheta_{AU} > \frac{h_B - u \cdot h_{AB,o}}{1-u} - c_{p,L} \Phi \vartheta_{AB,o} = h_{g,o}
    $$
    <span class="eq-number">(3.1-9)</span>
    </div>



## 3.2 공조처리에 필요한 에너지요구량
에너지요구량은 환산된 월별 풍량 당 공조에너지요구량과 월별 평균 급기풍량의 곱으로 계산합니다.   
<div align="center">
$$
Q_{V,i,m} = q_{i,m} \cdot \dot{V}_{mech,m}
$$
<span class="eq-number">(3.2-1)</span>
</div>


## 3.3 최대 성능
가열기, 냉각기, 가습기의 최대 성능 계산은 기기 부하 산정을 위해 필요하며, 기기 선정 시 안전율은 고려하지 않습니다.   

### 3.3.1 외기 및 배기공기의 상태값
최대 성능 계산을 위해 설계 조건에서의 외기 및 배기 공기 상태값(<표 3.3.1-1. 설계 조건에서 배기 상태>, <표 3.3.1-2. 설계 조건에서 외기 상태> 참조)을 사용합니다.   
<center>
     <div><strong>Table 3.3.1-1. 설계 조건에서 배기 상태</strong></div>
     <img src="../../_tables/3.3.1_1.png" style="max-width: 50%;" alt="설계 조건에서 배기 상태">
</center>

<center>
     <div><strong>Table 3.3.1-2. 설계 조건에서 외기 상태</strong></div>
     <img src="../../_tables/3.3.1_2.png" style="max-width: 50%;" alt="설계 조건에서 외기 상태">
</center>

### 3.3.2 급기 공기 엔탈피
- 포화압력: 여름철 습공기의 상태를 정하기 위해 증기압 곡선 계산식을 근사치적으로 이용합니다.   
<div align="center">
$$
ps(\vartheta) = e^{23.621 - \frac{4065}{\vartheta + 236.2506}}
\qquad 0.01^\circ C \leq \vartheta \leq 80^\circ C\ \text{일 경우}
$$
<span class="eq-number">(3.3.2-1)</span>
</div>

- 급기 공기 엔탈피: 습도 요구 조건(없음, 편차 허용, 편차 없음)과 계절(겨울/여름)에 따라 다른 공식을 적용하여 계산합니다.   
    - 습도 요구 없음:   
        - 겨울:   
        <div align="center">
        $$
        h_{ZUL,Wi} = 1.01\,\vartheta_{ZUL,Wi} + 0.001\,\left(2501 + 1.86\,\vartheta_{ZUL,Wi}\right)
        $$
        <span class="eq-number">(3.3.2-2)</span>
        </div>

        - 여름: 
        <div align="center">
        $$ h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + 0.011\left(2501 + 1.86\vartheta_{ZUL,So}\right) \qquad ps(\vartheta_{ZUL,So}) > 1737\,Pa\text{일 때} 
        $$
        <span class="eq-number">(3.3.2-3)</span>
        </div>

        <div align="center">
        $$
        h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + x_{ZUL,So}\left(2501 + 1.86\vartheta_{ZUL,So}\right) \qquad ps(\vartheta_{ZUL,So}) \leq 1737\,Pa\text{일 때} $$
        <span class="eq-number">(3.3.2-4)</span>
        </div>

        <div align="center">
        $$ x_{ZUL,So} = \frac{0.5911}{\dfrac{100000}{ps(\vartheta_{ZUL,So})} - 0.95} $$ 
        <span class="eq-number">(3.3.2-5)</span>
        </div>



    - 편차 허용 습도 요구:   
        - 겨울:   
        <div align="center">
        $$
        h_{ZUL,Wi} = 1.01\,\vartheta_{ZUL,Wi} + 0.008\,\left(2501 + 1.86\,\vartheta_{ZUL,Wi}\right)
        $$
        <span class="eq-number">(3.3.2-6)</span>
        </div>

        - 여름: 
        <div align="center">
        $$ 
        h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + 0.008\left(2501 + 1.86\vartheta_{ZUL,So}\right) \qquad ps(\vartheta_{ZUL,So}) > 1269\,Pa\text{일 때} $$
        <span class="eq-number">(3.3.2-7)</span>
        </div>

        <div align="center">
        $$ h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + x_{ZUL,So}\left(2501 + 1.86\vartheta_{ZUL,So}\right) \qquad ps(\vartheta_{ZUL,So}) \leq 1269\,Pa\text{일 때} $$
        <span class="eq-number">(3.3.2-8)</span>
        </div>

        <div align="center">
        $$ x_{ZUL,So} = \frac{0.5911}{\dfrac{100000}{ps(\vartheta_{ZUL,So})} - 0.95} $$
        <span class="eq-number">(3.3.2-9)</span>
        </div>   

        <div align="center">
        $$
        h_{ZUL,So,x} = 44.1\,\mathrm{kJ}/\mathrm{kg}
        $$
        <span class="eq-number">(3.3.2-10)</span>
        </div>

        <div align="center">
        $$
        h_{ZUL,So} = \min \left[\, h_{ZUL,So,t}\;;\; h_{ZUL,So,x} \,\right]
        $$
        <span class="eq-number">(3.3.2-11)</span>
        </div>


    - 편차 없는 습도 요구:   
        - 겨울:   
        <div align="center">
        $$ h_{ZUL,Wi} = 1.01\,\vartheta_{ZUL,Wi} + 0.001\,\left(2501 + 1.86\,\vartheta_{ZUL,Wi}\right)$$
        <span class="eq-number">(3.3.2-12)</span>
        </div>

        - 여름: 
        <div align="center">
        $$ h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + 0.012\left(2501 + 1.86\vartheta_{ZUL,So}\right) \qquad ps(\vartheta_{ZUL,So}) > 1892\,Pa\text{일 때} $$
        <span class="eq-number">(3.3.2-13)</span>
        </div>

        <div align="center">
        $$ h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + x_{ZUL,So}\left(2501 + 1.86\vartheta_{ZUL,So}\right) \qquad ps(\vartheta_{ZUL,So}) \leq 1892\,Pa\text{일 때} $$ 
        <span class="eq-number">(3.3.2-14)</span>
        </div>

        <div align="center">
        $$ x_{ZUL,So} = \frac{0.5911}{\dfrac{100000}{ps(\vartheta_{ZUL,So})} - 0.95} $$ 
        <span class="eq-number">(3.3.2-15)</span>
        </div>   

        <div align="center">
        $$
        h_{ZUL,So,x} = 31.6\,\mathrm{kJ}/\mathrm{kg}
        $$
        <span class="eq-number">(3.3.2-16)</span>
        </div>

        <div align="center">
        $$
        h_{ZUL,So} = \min \left[\, h_{ZUL,So,t}\;;\; h_{ZUL,So,x} \,\right]
        $$
        <span class="eq-number">(3.3.2-17)</span>
        </div>


### 3.3.3 최대 가열 성능
최대 가열 성능은 열 회수(WRG) 장치의 종류와 형식에 따라 회수된 열량을 차감하여 계산합니다.   

- 열 회수량 (\(\Delta h_{WRG}\)):   
    - 열 회수기기 없음:   

    <div align="center">
    $$
    \Delta h_{WRG} = 0
    $$
    <span class="eq-number">(3.3.3-1)</span>
    </div>

    - 현열 회수기기:   

    <div align="center">
    $$
    \Delta h_{WRG} = \Phi_{WRG} \cdot c_{p,L} \left( \vartheta_{ABL,Wi} - \vartheta_{AUL,Wi} \right)
    $$
    <span class="eq-number">(3.3.3-2)</span>
    </div>


    - 전열(열 및 습기) 회수기기:   

    <div align="center">
    $$
    \Delta h_{WRG} = \Phi_{WRG} \cdot c_{p,L} \cdot \left( h_{ABL,Wi} - h_{AUL,Wi} \right)
    $$
    <span class="eq-number">(3.3.3-3)</span>
    </div>

- 최대 가열 성능 (\(\dot{Q}_H^*\)):    

    - 증기 가습이 없는 기기:

<div align="center"> 
$$
\dot{Q}_H^{*} = \dot{V}^{*} \cdot \rho_{L}^{*} \cdot \left( h_{ZUL,Wi} - h_{AUL,Wi} - \Delta h_{WRG} \right)
$$ 
<span class="eq-number">(3.3.3-4)</span>
</div>



    - 증기 가습이 있는 기기:

<div align="center">
$$
\dot{Q}_H^{*} = \dot{V}^{*} \cdot \rho_{L}^{*} \cdot \left( c_{p,L} \left( \vartheta_{ZUL,Wi} - \vartheta_{AUL,Wi} \right) - \Delta h_{WRG} \right)
$$
<span class="eq-number">(3.3.3-5)</span>
</div>

### 3.3.4 최대 냉각 성능
최대 냉각 성능은 최대 가열 성능과 같은 방식으로 냉열 회수 부분을 차감하여 계산합니다.   

- 냉열 회수량 (\(\Delta h_{WRG}\)):   

    - 열 회수기기 없음 또는 현열 회수 기능 없음:   

    <div align="center">
    $$
    \Delta h_{WRG} = 0
    $$
    <span class="eq-number">(3.3.4-1)</span>
    </div>

    - 현열 회수기기:   

    <div align="center">
    $$
    \Delta h_{WRG} = \Phi_{WRG} \cdot c_{p,L} \cdot \left( \vartheta_{AUL,so} - \vartheta_{ABL,so} \right)
    $$
    <span class="eq-number">(3.3.4-2)</span>
    </div>  

    - 전열(열 및 습기) 회수기기:   

    <div align="center">
    $$
    \Delta h_{WRG} = \Phi_{WRG} \cdot c_{p,L} \cdot \left( h_{AUL,so} - h_{ABL,so} \right)
    $$
    <span class="eq-number">(3.3.4-3)</span>
    </div>
 
- 최대 냉각 성능 (\(\dot{Q}^*_C\)):   

<div align="center">
$$
\dot{Q}^*_C = \dot{V}^* \cdot \rho_L^* \left( h_{AUL,so} - h_{ZUL,so} - \Delta h_{WRG} \right)
$$
<span class="eq-number">(3.3.4-4)</span>
</div>


### 3.3.5 최대 가습 성능
최대 가습 성능은 습도 회수 부분을 차감하여 계산합니다.   

- 습도 회수량 (\(\Delta h_{WRG}\)):   

    - 열 회수기기 없음 또는 현열 회수 기능 없음:   

    <div align="center">
    $$
    \Delta h_{WRG} = 0
    $$
    <span class="eq-number">(3.3.5-1)</span>
    </div>

    - 전열(열 및 습기) 회수기기:   

    <div align="center">
    $$
    \Delta h_{WRG} = 2501 \cdot \Phi_{WRG} \cdot \left( x_{ABL,Wi} - x_{AUL,Wi} \right)
    $$
    <span class="eq-number">(3.3.5-2)</span>
    </div>
   
- 최대 가습 성능 (\(dot{Q}^*_{st}\))*:   
<div align="center">
$$
\dot{Q}^*_{st} = \dot{V}^* \cdot \rho_L^* \left( h_{ZUL,wi} - h_{AUL,wi} - \Delta h_{WRG} \right)
$$
<span class="eq-number">(3.3.5-3)</span>
</div>
