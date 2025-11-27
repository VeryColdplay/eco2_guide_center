# 1. 공조 처리(2)

## Nomenclature

### Symbols

<table class="nomenclature">
  <thead style="background:#f5f7fa;">
    <tr><th>Symbol</th><th>Description</th><th>Unit</th></tr>
  </thead>
  <tbody>
    <tr><td>\(c_{p,L}\)</td><td>공기 비열 (Specific heat of air)</td><td>kJ/kg·K</td></tr>
    <tr><td>d</td><td>일수 (Days)</td><td>d</td></tr>
    <tr><td>\(f_p\)</td><td>압력상관비계수 (Pressure ratio factor)</td><td>-</td></tr>
    <tr><td>h</td><td>엔탈피 (Enthalpy)</td><td>kJ/kg</td></tr>
    <tr><td>P</td><td>(팬) 소비전력 (Power consumption)</td><td>W</td></tr>
    <tr><td>p</td><td>압력 (Pressure)</td><td>Pa</td></tr>
    <tr><td>\(p_{S}\)</td><td>포화증기압 (Saturation vapor pressure)</td><td>Pa</td></tr>
    <tr><td>Q</td><td>에너지 (Energy)</td><td>kWh</td></tr>
    <tr><td>q</td><td>환산된 에너지요구량 (Calculated energy need per volume)</td><td>kWh/(m³/h)</td></tr>
    <tr><td>R</td><td>기기저항 (Flow resistance)</td><td>-</td></tr>
    <tr><td>t</td><td>시간 (Time)</td><td>h</td></tr>
    <tr><td>u</td><td>리턴공기 혼합비율 (Recirculated-air fraction)</td><td>-</td></tr>
    <tr><td>x</td><td>절대습도 (Humidity ratio)</td><td>g/kg</td></tr>
    <tr><td>\(\Delta\)</td><td>차이 (Difference)</td><td>-</td></tr>
    <tr><td>\(\dot{m}\)</td><td>질량유량 (Mass flow rate)</td><td>kg/s</td></tr>
    <tr><td>\(\dot{Q}\)</td><td>성능, 부하, 출력 (Power, Load, Output)</td><td>kW</td></tr>
    <tr><td>\(\dot{V}\)</td><td>풍량 (Volume flow rate)</td><td>m³/h</td></tr>
    <tr><td>\(\eta\)</td><td>(시스템) 총 효율 (Total efficiency)</td><td>-</td></tr>
    <tr><td>\(\Phi\)</td><td>열회수율 (Heat recovery rate)</td><td>-</td></tr>
    <tr><td>\(\rho_L\)</td><td>공기 밀도 (Density of air)</td><td>kg/m³</td></tr>
    <tr><td>\(\Phi_{WRG}\)</td><td>열회수율 (Heat recovery index)</td><td>-</td></tr>
    <tr><td>\(\vartheta\)</td><td>온도 (Temperature)</td><td>°C</td></tr>
  </tbody>
</table>


### Subscripts

<table class="nomenclature">
  <thead style="background:#f5f7fa;">
    <tr>
      <th>Subscript</th><th>Description</th><th>Subscript</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>*</td><td>설계 조건 (Design point)</td><td>AB, ABL</td><td>배기 (Exhaust air)</td></tr>
    <tr><td>AU, AUL</td><td>외기 (Outdoor air)</td><td>b</td><td>요구량 (Energy need)</td></tr>
    <tr><td>B</td><td>(가습) (Humidifying)</td><td>c</td><td>냉방 (Cooling)</td></tr>
    <tr><td>C</td><td>냉열 (Cooling)</td><td>E</td><td>(전기) 에너지 (Electrical energy)</td></tr>
    <tr><td>g</td><td>(조닝) 경계 (Boundary for zoning)</td><td>H</td><td>가열 (Heating)</td></tr>
    <tr><td>i</td><td>실내 (Indoor)</td><td>j</td><td>부분부하 상태 (Partial load state)</td></tr>
    <tr><td>konst</td><td>고정 (Constant)</td><td>L</td><td>공기 (Air)</td></tr>
    <tr><td>m</td><td>월별 (Monthly)</td><td>max</td><td>최대 (Maximum)</td></tr>
    <tr><td>mech</td><td>기계환기 (Mechanical ventilation)</td><td>o</td><td>상위 (Upper)</td></tr>
    <tr><td>op</td><td>주중 (Weekday / Operation)</td><td>RA</td><td>실내공기 (Room air)</td></tr>
    <tr><td>So</td><td>여름 (Summer)</td><td>soll</td><td>설정 (Setpoint)</td></tr>
    <tr><td>st</td><td>증기 (Steam, humidification)</td><td>t</td><td>(엔탈피 임계값, 온도 기반) (Temperature-based)</td></tr>
    <tr><td>u</td><td>하위경계 (Lower bound)</td><td>V</td><td>환기, 송풍 (Ventilation, Fan)</td></tr>
    <tr><td>W</td><td>수증기 (Water vapor)</td><td>we</td><td>주말 (Weekend)</td></tr>
    <tr><td>Wi</td><td>겨울 (Winter)</td><td>WRG</td><td>열회수기 (Heat recovery unit)</td></tr>
    <tr><td>x</td><td>(엔탈피 임계값, 습도 기반) (Humidity-based)</td><td>ZU, ZUL</td><td>급기 (Supply air)</td></tr>
  </tbody>
</table>

---

# 3. 공조기에서 가열, 냉각, 가습, 제습을 위한 에너지요구량

## 3.1. 공조처리
공조처리는 3단계로 구성됩니다. 먼저 1단계에서, 습공기선도 조닝을 수행합니다. 2단계에서, 기상 데이터 분석을 하여, 각 습공기선도 존에 대한 평균 외기 조건과 연간 시간을 계산합니다. 3단계에서 풍량과 엔탈피/절대습도 차로 에너지요구량을 계산합니다.

<center>
<div><strong>Figure 3.1-1. 공조처리에 필요한 요구량의 계산 절차</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_images/3.1_1.png" style="max-width: 80%;">
</center>

<center>
<div><strong>Figure 3.1-2. CAV 시스템의 개요</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_images/3.1_2.png" style="max-width: 80%;">
</center>

* Figure 3.1-3.은 AU1(공조기)에서의 공기 상태변화를 h-x diagram에 예시적으로 나타낸 것입니다.
<center>
<div><strong>Figure 3.1-3. AU1(열회수 및 리턴공기 혼합 후의 공기상태)의 상태변화</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_images/3.1_3.png" style="max-width: 80%;">
</center>

### 3.1.1. 습공기선도 (h-x diagram) 조닝
* 실내공기의 상태는 습공기 선도에 따라서 아래 두 식으로 제시됩니다.
$$
\vartheta_{RA,u} \leq \vartheta_{RA} \leq \vartheta_{RA,o} \tag{3.1-1}
$$
    
$$
x_{RA,u} \leq x_{RA} \leq x_{RA,o} \tag{3.1-2}
$$

> Where,  
>
> • $\vartheta_{RA,u}:$ 실내온도의 하한선 [$^\circ C$]  
> • $\vartheta_{RA,o}:$ 실내온도의 상한선 [$^\circ C$]  
> • $\vartheta_{RA}:$ 실내온도 [$^\circ C$]  
> • $x_{RA,u}:$ 실내 절대습도의 하한선 [g/kg]  
> • $x_{RA,o}:$ 실내 절대습도의 상한선 [g/kg]  
> • $x_{RA}:$ 실내 절대습도 [g/kg]  

* 다양한 HVAC 시스템 유형과 가동 모드를 비교하기 위해서는 실내 공기 온도를 고려해야 합니다. HVAC과 천장 복사 패널의 경우처럼 서로 다른 복사 효과를 가진 시스템들의 경우, 복사 효과가 고려되어야 합니다.
* 복사 효과가 없는 시스템의 추가적인 에너지 비용은 실내 공기 온도를 $\Delta\theta_{L}$ 만큼 난방 시 상향, 냉방 시 하향하는 방식으로 고려가 가능합니다. 

* 실내 엔탈피 및 습도 밸런스로부터 실내로 공급되는 급기 절대습도 및 엔탈피 상태에 대한 아래 제한 조건이 결정됩니다.
<div align="center">$$
x_{ZU,u} = x_{RA,u} + \frac{\dot{m}_{11,W}}{\dot{m}_{11,L}} < x_{ZU} < x_{RA,o} + \frac{\dot{m}_{11,W}}{\dot{m}_{11,L}} = x_{ZU,o} \tag{3.1-3}
$$</div>

$$
\vartheta_{ZU,u} = \vartheta_{RA,u} + \frac{\dot{Q}_{12}}{\dot{m}_{12,L} c_{p,L}} < \vartheta_{ZU} < \vartheta_{RA,o} + \frac{\dot{Q}_{12}}{\dot{m}_{12,L} c_{p,L}} = \vartheta_{ZU,o} \tag{3.1-4}
$$

> Where,  
>
> • $\dot{m}_{11,W}:$ 공조 처리에 필요한 수증기 질량유량 [kg/h]  
> • $\dot{m}_{11,L}:$ 공조 처리에 필요한 공기의 질량유량 [kg/h]  
> • $\dot{m}_{12,L}:$ 송풍에 필요한 공기의 질량유량 [kg/h]  
> • $x_{ZU,u} :$ 급기 절대습도의 하한선 [g/kg]  
> • $x_{ZU,o} :$ 급기 절대습도의 상한선 [g/kg]  
> • $\dot{Q}_{12} :$ 송풍에 필요한 에너지 [W]  
> • $\vartheta_{ZU,u} :$ 급기온도의 하한선 [$^\circ C$]  
> • $\vartheta_{ZU,o}:$ 급기온도의 상한선 [$^\circ C$]  
> • $\vartheta_{ZU}:$ 급기온도 [$^\circ C$]  

* 공조기의 가습 및 제습 여부는 아래 조건에 따라 결정됩니다.
    *   가습 조건:  
        <div align="center">$$
        x_{AU} < \frac{x_{ZU,u} - u \cdot x_{AB,u}}{1 - u} = x_{g,u} \tag{3.1-5}
        $$</div>


    *   제습 조건:  
        <div align="center">$$
        x_{AU} > \frac{x_{ZU,o} - u \cdot x_{AB,o}}{1 - u} = x_{g,o} \tag{3.1-6}
        $$</div>



> Where,  
>
> • $x_{AU}:$ 외기의 절대습도 [g/kg]  
> • $u:$ 재순환 공기 비율  
> • $x_{AB,u}:$ 배기 절대습도의 하한선 [g/kg]  
> • $x_{AB,o}:$ 배기 절대습도의 상한선 [g/kg]  
> • $x_{g,u}:$ 습공기선도의 조닝을 위한 절대습도의 하한선 [g/kg]  
> • $x_{g,o}:$ 습공기선도의 조닝을 위한 절대습도의 상한선 [g/kg]  

* 공기가 가습 이전에 가열되거나 냉각되는 경우, 가습 범위에 대해 아래의 수식을 사용합니다.

  * 가열:

    $$
    h_{AU} - c_{p,L} \cdot \Phi \cdot \vartheta_{AU}
    <
    \frac{h_B - u \cdot h_{AB,u}}{1 - u}
    - c_{p,L} \cdot \Phi \cdot \vartheta_{AB,u}
    = h_{g,u} \tag{3.1-7}
    $$

  * 냉각:

    $$
    h_{AU} - c_{p,L} \cdot \Phi \cdot \vartheta_{AU}
    >
    \frac{h_B - u \cdot h_{AB,o}}{1 - u}
    - c_{p,L} \cdot \Phi \cdot \vartheta_{AB,o}
    = h_{g,o} \tag{3.1-8}
    $$



> Where,  
>
> • $h_{AU}:$ 외기의 엔탈피 [kJ/kg]  
> • $\phi:$ 열회수 효율  
> • $\vartheta_{AB,u}:$ 배기 온도의 하한선 [$^\circ C$]  
> • $h_{AB,u}:$ 배기 엔탈피 [kJ/kg]  
> • $h_{B}:$ 급기 절대습도 하한선이 이슬점일 때 엔탈피 [kJ/kg]  
> • $x_{g,u}:$ 습공기선도 조닝을 위한 엔탈피 한계값 [kJ/kg]  

## 3.2 공조처리에 필요한 에너지요구량
에너지 특성치는 $1\ m^{3}/h$로 정규화된 급기 풍량을 기준으로 결정됩니다. 실제 설계 풍량에 대한 에너지요구량 계산을 위해 실제 급기 풍량을 곱하여 실제 값을 계산합니다.
$$
Q_{V,i,m} = q_{i,m} \cdot \dot{V}_{mech,m} \tag{3.2-1}
$$

> Where,  
>
> • $Q_{V,i,m} :$ 공조 가열/냉각/가습을 위한 월별 에너지요구량 [kWh]  
> • $q_{i,m}:$ 공조 가열/냉각/가습에 대한 월별 에너지요구량 특성치 [Wh/(m³/h)]  
> • $\dot{V}_{mech,m}:$ 월별 평균 급기 풍량 [m³/h]  

## 3.3 공조처리를 위한 최대 출력 계산
가열, 냉각, 가습의 최대 출력 계산은 공조 에너지소요량 계산 시 기기 부하 산정을 위해 필요하며, 기기 선정 시의 안전율은 고려하지 않습니다.

### 3.3.1 외기 및 배기공기의 상태값
최대 성능 계산을 위해 특성치 방법 기반 배기 조건 표와 기기 용량 산정시 사용되는 외기 조건 표를 사용합니다.

<center>
<div><strong>Table 3.3-1. 존의 배기 조건에 대한 설계 변수</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_tables/3.3.1_1.png" style="max-width: 80%;">
</center>

<center>
<div><strong>Table 3.3-2. 설계 조건에서 외기 상태</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_tables/3.3.1_2.png" style="max-width: 80%;">
</center>

### 3.3.2 급기 엔탈피의 계산
여름철 습공기의 상태를 정하기 위해 포화 증기압 근사 계산식을 사용합니다.
$$
ps(\vartheta) = e^{23.621 - \frac{4065}{\vartheta + 236.2506}} \qquad 0.01^\circ C \leq \vartheta \leq 80^\circ C\ \tag{3.3-1}
$$

급기 엔탈피: 습도 요구 조건(없음, 편차 허용, 편차 없음)과 계절(겨울/여름)에 따라 다른 공식을 적용하여 계산합니다.  

* 습도 요구 없는 공조기의 급기 엔탈피:  

    *   겨울 설계조건:  

        $$ h_{ZUL,Wi} = 1.01\,\vartheta_{ZUL,Wi} + 0.001\,(2501 + 1.86\,\vartheta_{ZUL,Wi}) \tag{3.3-2} $$

    *   여름 설계조건:  

<div align="center">$$
h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + 0.012\left(2501 + 1.86\,\vartheta_{ZUL,So}\right) \qquad p_{S}(\vartheta_{ZUL,So}) > 1892\,\mathrm{Pa} \tag{3.3-3}
$$</div>

<div align="center">$$
h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + x_{ZUL,So}\left(2501 + 1.86\,\vartheta_{ZUL,So}\right) \qquad p_{S}(\vartheta_{ZUL,So}) \leq 1892\,\mathrm{Pa} \tag{3.3-4}
$$</div>


* 편차 허용된 습도 요구가 있는 공조기의 급기 엔탈피:

    *   겨울 설계조건:
        $$ h_{ZUL,Wi} = 1.01\,\vartheta_{ZUL,Wi} + 0.006\,(2501 + 1.86\,\vartheta_{ZUL,Wi}) \tag{3.3-5} $$

    *   여름 설계조건:
        $$
        h_{ZUL,Wi} = 1.01\,\vartheta_{ZUL,Wi} + 0.001\left(2501 + 1.86\,\vartheta_{ZUL,Wi}\right) \tag{3.3-6}
        $$

        $$
        h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + 0.008\left(2501 + 1.86\,\vartheta_{ZUL,So}\right) \qquad p_{S}(\vartheta_{ZUL,So}) > 1269\,\mathrm{Pa} \tag{3.3-7}
        $$

        $$
        h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + x_{ZUL,So}\left(2501 + 1.86\,\vartheta_{ZUL,So}\right) \qquad p_{S}(\vartheta_{ZUL,So}) \leq 1269\,\mathrm{Pa} \tag{3.3-8}
        $$

        $$
        h_{ZUL,So,x} = 44.1\,\mathrm{kJ}/\mathrm{kg} \tag{3.3-9}
        $$

        $$
        h_{ZUL,So} = \min\left(h_{ZUL,So,t}\; ;\; h_{ZUL,So,x}\right) \tag{3.3-10}
        $$


*   편차 허용되지 않은 습도 요구가 있는 공조기의 급기 엔탈피:

    *   겨울 설계조건:  
        $$ h_{ZUL,Wi} = 1.01\,\vartheta_{ZUL,Wi} + 0.008\,(2501 + 1.86\,\vartheta_{ZUL,Wi}) \tag{3.3-11}$$

    *   여름 설계조건:  
        <div align="center">$$
        h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + 0.008\left(2501 + 1.86\,\vartheta_{ZUL,So}\right) \qquad p_{S}(\vartheta_{ZUL,So}) > 1892\,\mathrm{Pa} \tag{3.3-12}
        $$</div>

        <div align="center">$$
        h_{ZUL,So} = 1.01\,\vartheta_{ZUL,So} + x_{ZUL,So}\left(2501 + 1.86\,\vartheta_{ZUL,So}\right) \qquad p_{S}(\vartheta_{ZUL,So}) \leq 1892\,\mathrm{Pa} \tag{3.3-13}
        $$</div>

        <div align="center">$$
        h_{ZUL,So,x} = 31.6\,\mathrm{kJ}/\mathrm{kg} \tag{3.3-14}
        $$</div>

        <div align="center">$$
        h_{ZUL,So} = \min\left(h_{ZUL,So,t}\; ;\; h_{ZUL,So,x}\right) \tag{3.3-15}
        $$</div>



* 절대습도의 근사식은 아래와 같습니다.  

<div align="center">$$
x_{ZUL,So} = \frac{0.5911}{\dfrac{100000}{ps(\vartheta_{ZUL,So})} - 0.95} \tag{3.3-16}
$$</div>


> Where,  
>
> • $\vartheta:$ 공기 온도 [$^{\circ}C$]  
> • $P_{S}:$ 수증기 포화증기압 [Pa]  
> • $h:$ 엔탈피 [kJ/kg]  
> • $x:$ 절대습도 [kg/kg]  
> • 아래첨자:  
>    -   $ZUL:$ 급기 조건  
>    -   $So:$ 여름 설계조건  
>    -   $Wi:$ 겨울 설계조건  
>    -   $t:$ 온도 요구값  
>    -   $x:$ 절대습도 요구값  

### 3.3.3 최대 가열 출력
최대 가열 출력은 열회수기로 절감되는 열량을 고려하여 계산합니다.

* 열 회수량:  
    *   열 회수기 없음:  
        $$ \Delta h_{WRG} = 0 \tag{3.3-17} $$
    *   현열 회수:  
        $$ \Delta h_{WRG} = \Phi_{WRG} \cdot c_{p,L} ( \vartheta_{ABL,Wi} - \vartheta_{AUL,Wi} ) \tag{3.3-18} $$
    *   전열 회수:  
        $$ \Delta h_{WRG} = \Phi_{WRG} \cdot ( h_{ABL,Wi} - h_{AUL,Wi} ) \tag{3.3-19} $$


* 최대 가열 출력:
  * 증기 가습이 없는 기기:

    $$
    \dot{Q}_H^{*} = \dot{V}^{*} \cdot \rho_L \cdot
    \left( h_{ZUL,Wi} - h_{AUL,Wi} - \Delta h_{WRG} \right) \tag{3.3-20}
    $$

  * 증기 가습이 있는 기기:

    $$
    \dot{Q}_H^{*} = \dot{V}^{*} \cdot \rho_L \cdot
    \left( c_{p,L} \left( \vartheta_{ZUL,Wi} - \vartheta_{AUL,Wi} \right)
    - \Delta h_{WRG} \right) \tag{3.3-21}
    $$



> Where,  
>
> • $\vartheta:$ 공기 온도 [$^{\circ}C$]  
> • $\dot{Q}_H^{*}:$ 최대 가열 출력 [kW]  
> • $\Phi_{WRG}:$ 열회수 계수  
> • $\dot{V}^{*}:$ 설계 급기 풍량 [m³/h]  
> • $h:$ 엔탈피 [kJ/kg]  
> • $\Delta h_{WRG}:$ 열회수로 인한 엔탈피 차 [kJ/kg]  


### 3.3.4 최대 냉각 출력
최대 냉각 출력은 최대 가열 출력과 같은 방식으로 냉열 회수 부분을 차감하여 계산합니다.

* 냉열 회수량:  

    *   열 회수 없음/현열 회수만:  
        <div align="center">$$
        \Delta h_{WRG} = 0 \tag{3.3-22}
        $$</div>

    *   현열 회수:  
        <div align="center">$$
        \Delta h_{WRG} = \Phi_{WRG} \cdot c_{p,L} \cdot ( \vartheta_{AUL,So} - \vartheta_{ABL,So} ) \tag{3.3-23}
        $$</div>

    *   전열 회수:  
        <div align="center">$$
        \Delta h_{WRG} = \Phi_{WRG} \cdot \left( h_{AUL,So} - h_{ABL,So} \right) \tag{3.3-24}
        $$</div>


* 최대 냉각 출력:  
<div align="center">$$
\dot{Q}_C^* = \dot{V}^* \cdot \rho_L \left( h_{AUL,So} - h_{ZUL,So} - \Delta h_{WRG} \right) \tag{3.3-25}
$$</div>



> Where,  
>
> • $\vartheta:$ 공기 온도 [$^{\circ}C$]  
> • $\dot{Q}_C^{*}:$ 최대 냉열 출력 [kW]  
> • $\Phi_{WRG}:$ 열회수 계수  
> • $\dot{V}^{*}:$ 설계 급기 풍량 [m³/h]  
> • $h:$ 엔탈피 [kJ/kg]  
> • $\Delta h_{WRG}:$ 열회수로 인한 엔탈피 차 [kJ/kg]  

### 3.3.5 최대 가습 출력

최대 가습 출력은 습도 회수 부분을 차감하여 계산합니다.

* 수증기 회수량:
    * 열 회수 없음/현열 회수만:
      $$ \Delta h_{WRG} = 0 \tag{3.3-26} $$
    * 전열 회수:
      $$ \Delta h_{WRG} = 2501 \cdot \Phi_{WRG} \cdot ( x_{ABL,Wi} - x_{AUL,Wi} ) \tag{3.3-27} $$

* 최대 가습 출력 ($dot{Q}^*_{st}$):
  <div align="center">$$ \dot{Q}^*_{st} = \dot{V}^* \cdot \rho_L ( h_{ZUL,wi} - h_{AUL,wi} - \Delta h_{WRG} ) \tag{3.3-28} $$</div>

> Where,  
>
> • $\dot{Q}^*_{st}:$ 증기 생산을 위한 최대 출력 [kW]  
> • $\Phi_{WRG}:$ 열회수 계수  
> • $\dot{V}^{*}:$ 설계 급기 풍량 [m³/h]  
> • $h:$ 엔탈피 [kJ/kg]  
> • $\Delta h_{WRG}:$ 열회수로 인한 엔탈피 차 [kJ/kg]  
