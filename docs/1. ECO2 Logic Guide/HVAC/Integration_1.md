# 1. 공조 처리(1)

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

## 1.1. 기계식 환기

### 1.1.1. 존으로의 냉열/열 유입량
HVAC 시스템으로 인한 열 획득(Heat sources) 및 열 손실(Heat sinks)은 현재의 난방 또는 냉방 부하와 독립적으로(independently) 발생하는 경우 건물 구역에서 고려되어야 합니다. 예를 들어, 주거용 건물 환기 시스템과 중앙 공조(central air handling) 기능이 있는 환기 시스템이 이에 해당합니다. 기계식 환기에 의한 존으로의 냉열 및 열 유입량은 아래와 같습니다.
$$
Q_{V,mech} = H_{V,mech} \cdot (\vartheta_{i} - \vartheta_{V,mech}) \cdot t \quad \text{(냉열)} \tag{1.1-1}
$$

$$
Q_{V,mech} = H_{V,mech} \cdot (\vartheta_{V,mech} - \vartheta_{i}) \cdot t \quad \text{(열)} \tag{1.1-2}
$$

$$
H_{V,mech} = n_{mech} \cdot V \cdot c_{p,a} \cdot \rho_a \tag{1.1-3}
$$

> Where,  
>
> • $H_{V,mech}:$ 기계식 환기의 열 전달 계수 [W/K]  
> • $\vartheta_i:$ 난방/냉방 기준 실내 온도  
> • $\vartheta_{V,mech}:$ 평균 급기 온도, [°C]  
> • $t:$ 계산 기간 (24 h)  
> • $n_{mech}:$ 기계식 환기로 인한 일일 평균 환기 횟수 [$h^{-1}$]  
> • $V:$ 존의 체적$m^3$  
> • $c_{p,a}:$ 공기 비열 [J/(kg·K)]  
> • $\rho_a:$ 공기 밀도 [kg/m³]  
> • $c_{p,a} \cdot \rho_a$ 값은 $0.34\ [Wh/(m^3 \cdot K)]$를 적용합니다.  

### 1.1.2. 환기 시스템에 의한 평균 환기 횟수
평균 환기 횟수는 일일 평균값으로 결정됩니다. 용도프로필에 주어진 최소 외기 도입량은 시스템의 시스템의 냉방 요구량에 따라 증가합니다. 정풍량(CAV) 시스템의 경우, 최대 냉방 부하에 따라 증가할 수 있습니다. 냉방 부하에 따라 풍량이 변하는 변풍량(VAV) 시스템의 경우, 최소 풍량이 가정되어야 합니다. 주거용 시스템에서는 표준값 사용이 가능합니다.
$$
n_{mech} = n_{mech,ZUL} \cdot \frac{t_{V,mech}}{24 \ h} \tag{1.1-4}
$$

> Where,  
>
> • $n_{mech}:$ 기계식 환기로 인한 일일 평균 환기 횟수 [$h^{-1}$]  
> • $n_{mech,ZUL}:$ 기계식 환기 운전 시 급기로 인한 환기 횟수 [$h^{-1}$]  
> • $t_{V,mech}:$ 공조기 일일 운전 시간 (용도프로필 참고) [h]  

### 1.1.3. 기계식 환기의 급기에 의한 환기 횟수
* 주거용의 경우, 표준값인 용도프로필의 급기 환기 횟수를 사용합니다.
$$
n_{mech,ZUL} = n_{mech} \tag{1.1-5}
$$

* 비주거용의 경우, 공조 처리에 요구되는 최소 풍량과 용도에 따라 필요한 최소 외기 환기량이 모두 만족되어야 합니다. 
* 건물의 냉방 요구량을 충족하도록 설계된 정풍량 시스템의 경우, 최대 냉방부하로부터 최소 풍량을 계산합니다.
<div align="center">$$
\dot{V}_{mech,b} = \frac{\dot{Q}_{c,max}}{\rho_a \cdot c_{p,a} \cdot (\vartheta_i - \vartheta_{V,mech})} \tag{1.1-6}
$$</div>

비주거용에서 용도에 따른 최소 외기 환기량은 용도프로필의 면적 기준 최소 외기 풍량 ($\dot{V}_A$)을 참고합니다.
$$
\dot{V}_{mech,b} = \dot{V}_A \tag{1.1-7}
$$

시스템의 최소 풍량은 최대 냉방부하 충족을 위한 최소 풍량과 용도프로필의 최소 풍량 중 최대값으로 결정됩니다.

<div align="center">$$
\dot{V}_{mech,b} = \max\left(
\frac{\dot{Q}_{c,max}}{\rho_a \cdot c_{p,a} \cdot (\vartheta_i - \vartheta_{V,mech})},
\dot{V}_A
\right) \tag{1.1-8}
$$</div>


환기 횟수는 풍량과 존의 체적으로부터 결정됩니다.  

<div align="center">$$
n_{mech,ZUL} = \frac{\dot{V}_{mech,b}}{V} \tag{1.1-9}
$$</div>  

> Where,  
>
> • $\dot{V}_{mech,b}:$ 기준 급기풍량, 다음 중 가장 큰 값으로 결정됨: 용도프로필의 최소 풍량, 전체 냉방 부하 충족을 위한 풍량.  
> • $\dot{Q}_{c,max}:$ 최대 냉방 부하 [kW]  
> • $\vartheta_i:$ 용도프로필의 냉방 운전 시 건물 구역의 실내 설정 온도 $\vartheta_{i,c,soll}$ [°C]  
> • $\vartheta_{V,mech}:$ 식 을 사용하여 계산된 최소 급기 온도 [°C]  

### 1.1.4. 기계식 환기의 급기 온도
열교환기가 있는 단순 환기 시스템의 경우 아래 식을 적용합니다.
$$
\vartheta_{V,mech} = \vartheta_e + \eta_{V,mech} \cdot (\vartheta_i - \vartheta_e) \tag{1.1-10}
$$

공조기에서 토출되는 급기 온도 ($\vartheta_{V,mech}$)는 입력값으로 결정됩니다.

## 1.2. 공조 처리의 에너지 요구량 계산을 위한 기본 사항
존의 에너지 밸런스 계산을 위해서는 아래 변수들이 우선 결정되어야 합니다.  
•   기준 급기풍량 ($\dot{V}_{mech,b,m}$): 실내 냉난방 부하와 무관하게 결정되는 기준 풍량  
•   급기온도 ($\vartheta_{mech,m}$): 월별 평균 급기 온도  
•   월간 공조기기 가동시간: 일일 가동시간 ($t_{V,mech,m}$)과 월간 가동일수 ($d_{V,mech,m}$)를 통해 산정  
    -   주중의 경우, $d_{V,mech,m}$ = $d_{op}$  
    -   주말, 휴일의 경우, $d_{V,mech,m}$ = $d_{we}$  

## 1.2.1. 정풍량(CAV) 공조기의 급기풍량
정풍량 시스템의 급기풍량은 실내 열 부하가 아닌 실내 공기질 요구 조건에 의해 결정됩니다. 계산 기간 동안 풍량이 일정하면, 기준 풍량, 평균 풍량, 설계 풍량이 일치합니다.
<div align="center">$$
\dot{V}_{mech,b,m} = \dot{V}_{mech,m} = \dot{V}^* \tag{1.2-1}
$$</div>

정풍량 시스템의 월별 기준 급기풍량은 기준 급기풍량과 같습니다.

<div align="center">$$
\dot{V}_{mech,b,m} = \dot{V}_{mech,b} \tag{1.2-2}
$$</div>

> Where,  
>
> • $\dot{V}_{mech,b,m}:$ 월별 기준 급기풍량 [m³/h]  
> • $\dot{V}_{mech,m}:$ 월별 평균 급기풍량 [m³/h]  
> • $\dot{V}^{*}:$ 설계 급기풍량 [m³/h]  
> • $\dot{V}_{mech,b}:$ 기준 급기풍량 [m³/h]  

## 1.2.2. 시간/용도 기반 변풍량(VAV) 공조기의 급기풍량
시간이나 용도에 따라 풍량이 변하는 변풍량 시스템일 경우, 월별 평균 급기풍량은 부분부하 비율 및 부분부하 운전 시간에 따라 계산됩니다. 아래에서 $j$는 부분부하 운전(시간별 풍량이 다른)을 나타내며, 월별 공조기의 운전시간에 따른 부분부하일 경우, 월별 운전시간의 비율에 의해 급기풍량이 정해집니다.
<div align="center">$$
\dot{V}_{mech,b,m}=\dot{V}_{mech,m}=\frac{\sum_{j} (\dot{V}_{j} \cdot t_{V,mech,j,m} )}{t_{V,mech,m} \cdot d_{V,mech,m}} \tag{1.2-3}
$$</div>

> Where,  
>
> • $\dot{V}_{j}:$ 부분부하 운전 $j$에서의 급기풍량 [m³/h]  
> • $t_{V,mech,j,m}:$ 부분부하 운전 $j$에서의 월별 운전시간 [h]  
> • $t_{V,mech,m}:$ 일일 운전시간 [h]  
> • $d_{V,mech,m}:$ 월별 시스템 운전 일수 [d]  

## 1.2.3. 실내 냉방부하 기반 변풍량 공조기의 급기풍량
실내 냉방 부하에 따라 풍량을 제어할 경우, 월별 평균 급기풍량은 실내 공기질 유지를 위한 최소 급기풍량과 냉방 부하를 처리하기 위한 추가 풍량을 더하여 산정합니다.
<div align="center">$$
\dot{V}_{mech,m} = \dot{V}_{mech,b,m} + \frac{Q_{c,b}}{\rho_L \cdot c_{p,L} \cdot (\vartheta_{i,c,m} - \vartheta_{V,mech,m}) \cdot t_{V,mech,m} \cdot d_{V,mech,m}} \tag{1.2-4}
$$</div>

또는
<div align="center">$$
\sum_{m} \dot{V} = t_{V,mech,m} \cdot d_{V,mech,m} \cdot \dot{V}_{mech,b,m} + \frac{Q_{c,b}}{c_{p,L} \cdot \rho_{L} \cdot(\vartheta_{i,c,m} - \vartheta_{V,mech,m})} \tag{1.2-5}
$$</div>

> Where,  
>
> • $\dot{V}_{mech,m}:$ 월별 평균 급기 풍량 [m³/h]  
> • $\sum_{m} \dot{V}:$ 월별 급기 풍량 [m³/h]  
> • $\dot{V}_{mech,b,m}:$ 월별 기준 급기 풍량 [m³/h]  
> • $Q_{c,b}:$ 존의 월별 냉방 에너지요구량 [kWh]  
> • $t_{v,mech,m}:$ 일일 팬 운전시간 [h/d]  
> • $d_{V,mech,m}:$ 월별 팬 운전일 수 [d]  
> • $\vartheta_{i,c,m}:$ 월별 평균 실내온도 [$^\circ C$]  
> • $\vartheta_{V,mech,m}:$ 월별 공조기 평균 급기 온도 (=$\vartheta_{V,mech}$) [$^\circ C$]  

* 송풍 동력 계산에 사용되는 최대급기풍량 ($\dot{V}_{mech,max}$)은 최대 냉방 부하($\dot{Q}_{c,max}$)로부터 계산됩니다.
<div align="center">$$
\dot{V}_{mech,max} = \frac{\dot{Q}_{c,max}}{\rho_L \cdot c_{p,L} \cdot (\vartheta_{i,c,soll} - \vartheta_{V,mech})} \tag{1.2-6}
$$</div>

> Where,  
>
> • $\dot{Q}_{c,max}:$ 건물 에너지 밸런스에서의 최대 공간 냉방 부하 (kW)  
> • $\vartheta_{i,c,soll}:$ 냉방 운전 시 실내 설정 온도 (용도프로필 참고)  

## 1.2.4. 월별 평균 급기온도
월별 평균 급기온도는 공조기가 있는 경우 입력값을 사용합니다. 가열/냉각 기능이 없는 환기장치의 경우, 아래 표의 값을 사용합니다.
가동시간이 12h/d 와 24h/d 사이일 경우 선형 보간하여 급기온도를 산정하고 12 h/d 이하일 경우 12h/d의 값을 적용합니다.

<center>
<div><strong>Table 1.2-1. 냉각기능이 없는 공조기기의 월별 평균 급기온도</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_tables/1.5_1.png" style="max-width: 80%;">
</center>

<center>
<div><strong>Table 1.2-2. 가열/냉각기능이 없는 공조기기의 월별 평균 급기온도</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_tables/1.5_2.png" style="max-width: 80%;">
</center>

# 2. 송풍의 에너지소요량

## 2.1. 정풍량 공조기
팬의 전력 소비는 제품 사양이 주어진 경우, 그 값을 사용하고, 제품 사양이 없는 경우, 급/배기 풍량 ($\dot{V}$), 덕트망의 총 압력손실 ($\Delta p^*$), 그리고 시스템의 팬, 전달시스템, 모터, 회전 수 제어 등에 대한 총 효율 ($\eta$)로부터 계산합니다.

* 급기 팬:
<div align="center">$$
P_{V,ZUL,m} = \frac{ \dot{V}_{ZUL} \Delta p^*_{ZUL} } { \eta_{ZUL} } \tag{2.1-1}
$$</div>

* 배기 팬:
<div align="center">$$
P_{V,ABL,m} = \frac{ \dot{V}_{ABL} \Delta p^*_{ABL} } { \eta_{ABL} } \tag{2.1-2}
$$</div>

> Where,  
>
> • $P_{V}:$ 팬의 전력 소비 [W]  
> • $\eta:$ 전체 효율  
> • $\dot{V}:$ 부분부하 운전 풍량 [m³/h]  
> • $\Delta p^{*}:$ 설계 풍량 조건에서 급/배기 덕트 전체 압력손실 [Pa]  

* 급기와 배기 풍량이 5% 미만의 편차를 보일 경우, 아래와 같이 가정합니다.
<div align="center">$$
\dot{V}_{ZUL} = \dot{V}_{ABL} = \dot{V}_{mech,m} = \dot{V}^* \tag{2.1-3}
$$</div>

* 월별 전기 에너지소요량은 아래 식으로 계산합니다.
$$
Q_{V,E,m} = (P_{V,ZUL,m} + P_{V,ABL,m}) \cdot t_{V,mech,m} \cdot d_{V,mech,m} \tag{2.1-4}
$$

## 2.2. 변풍량 공조기

### 2.2.1. 계산 방식
변풍량 시스템은 각 존의 개별 댐퍼에 의해 풍량이 제어되고, 중앙의 급기와 배기 팬은 덕트망의 일정한 압력 하에서 회전 수에 의해 제어됩니다. 변풍량방식시스템(VAV)은 덕트망에서 압력센서가 위치하는 지점을 기준으로 아래와 같이 두 부분으로 나뉩니다.

* 센서 전단: 덕트 내 저항 $R_{\Delta p} = \text{constant}$ 또는 압력손실 $\Delta p = \text{variable}$
* 센서 후단: 덕트 내 저항 $R_{\Delta p} = \text{variable}$ 또는 압력손실 $\Delta p = \text{constant}$

<center>
<div><strong>Figure 2.2-1. 환기 덕트망의 고정 및 변동 저항</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_images/2.2.1_1.png" style="max-width: 80%;">
</center>

* 팬의 전력 소비는 아래 식으로 계산됩니다. 
* 급기 팬:
<div align="center">$$ 
P_{V,ZUL} = \frac{ \dot{V}_{ZUL} \Delta p^*_{ZUL} f_{p,ZUL} }{ \eta_{ZUL} } + \frac{ \dot{V}_{ZUL}^3 \Delta p^*_{ZUL} (1 - f_{p,ZUL}) }{ \eta_{ZUL} \, \dot{V}_{ZUL}^{*2} } \tag{2.2-1}
$$</div>

* 배기 팬:
<div align="center">$$
P_{V,ABL} = \frac{ \dot{V}_{ABL} \Delta p^*_{ABL} f_{p,ABL} }{ \eta_{ABL} } + \frac{ \dot{V}_{ABL}^3 \Delta p^*_{ABL} (1 - f_{p,ABL}) }{ \eta_{ABL} \, \dot{V}_{ABL}^{*2} } \tag{2.2-2}
$$</div>

> Where,  
>
> • $P_{V}:$ 부분부하 조건에서 팬 전력 소비 [W]  
> • $f_p:$ 압력비 계수  
> • $\eta:$ 전체 효율  
> • $\dot{V}:$ 부분부하 운전 시 풍량 [m³/h]  
> • $\dot{V}^{*}:$ 설계 공기풍량(최대풍량) [m³/h]  
> • $\Delta p^{*}:$ 설계 풍량 조건에서 급/배기 덕트 전체 압력 손실 [Pa]  

* 압력비 계수는 설계 풍량에서 덕트의 해당 구간에서의 고정 압력 손실과 전체 덕트의 총 압력 손실의 비율입니다.
$$
f_{p} = \frac{\Delta p_{konst}}{\Delta p^{*}} \tag{2.2-3}
$$

> Where,  
>
> • $\Delta p_{konst}:$ 덕트망의 각 구간에서 고정 압력 손실 [Pa]  

* 각 값들은 급/배기 덕트에서 개별적으로 결정될 수 있습니다.

### 2.2.2. 시간과 용도에 따른 변풍량방식 공조기
풍량이 하루 중 특정 시간이나 건물의 사용에 따라 제어되고, 이러한 제어가 규칙적 또는 연중 균일하게 분포되어 있을 경우, 1.2.2처럼 부분부하의 빈도를 알아야 합니다. 송풍에 대한 월별 에너지소요량은 월별 모든 부분부하 $j$에서의 에너지소요량의 총합입니다.
$$
Q_{V,E,m} = \sum_{j} t_{V,mech,j,m} \cdot (P_{V,ZUL,j} + P_{V,ABL,j}) \tag{2.2-4}
$$

> Where,  
>
> • $t_{V,mech,j,m}:$ 부분부하 운전 $j$의 월별 운전시간 [h]  
> • $P_{V,ZUL,j}:$ 부분부하 운전 $j$에서의 급기팬 전력 소비 [kW]  
> • $P_{V,ABL,j}:$ 부분부하 운전 $j$에서의 배기팬 전력 소비 [kW]  

### 2.2.3. 실내 냉방부하에 따른 변풍량방식 공조기
풍량 제어가 존의 냉방 부하 기반일 경우, 시간 경과에 따른 부분부하 풍량의 분포는 건물 용도와 추가로 외기 조건에 의한 함수입니다. 부분부하 시 풍량의 빈도 분포는 해당 존의 월별 최대 냉방부하를 이용하여 총 에너지 밸런스 계산을 통해 산정되어야 합니다.
* 월별 송풍 에너지소요량은 아래 식으로 계산됩니다.

<div align="center">$$
Q_{V,E,m} = Q_{V,E,ZUL,m} + Q_{V,E,ABL,m} \tag{2.2-5}
$$</div>

$$
Q_{V,E,ZUL,m} = ( \frac{\Delta p^{*}_{ZUL} \cdot f_{p,ZUL}}{\eta_{ZUL}} ) \cdot \sum_{m} \dot{V}_{ZUL} + ( \frac{\Delta p^{*}_{ZUL} \cdot (1 - f_{p,ZUL})}{\eta_{ZUL} \cdot \dot{V}_{ZUL}^{*2}} ) \cdot \sum_{m} \dot{V}_{ZUL}^3 \tag{1.1-1}
$$

$$
Q_{V,E,ABL,m} = ( \frac{\Delta p^{*}_{ABL} \cdot f_{p,ABL}}{\eta_{ABL}} ) \cdot \sum_{m} \dot{V}_{ABL} + ( \frac{\Delta p^{*}_{ABL} \cdot (1 - f_{p,ABL})}{\eta_{ABL} \cdot \dot{V}_{ABL}^{*2}} ) \cdot \sum_{m} \dot{V}_{ABL}^3 \tag{1.1-1}
$$

* 급기와 배기 풍량이 5% 미만의 편차를 보일 경우, 아래와 같이 가정합니다.
<div align="center">$$
\dot{V}_{ZUL} = \dot{V}_{ABL} = \dot{V}_{mech,m} \tag{2.2-6}
$$</div>

> Where,  
>
> • $\Delta p^{*}:$ 설계 풍량 조건에서 덕트 내 전체 압력손실 [Pa]  
> • $f_p:$ 압력비 계수  
> • $\dot{V}^{*}:$ 설계 공기풍량(최대풍량) [m³/h]  
> • $\sum_m \dot{V}:$ 월별 급기 풍량 [m³/h]  
> • $\sum_m \dot{V}^3:$ 월별 급기 풍량의 세제곱 [m⁹/h³]  
> • $\eta:$ 전체 효율  

* $\sum_{m} \dot{V}^3$의 근사값은 아래 식으로 구할 수 있습니다:
<div align="center">$$
\sum_{m} \dot{V}^3 = \sum_{m} \dot{V} \cdot ( 0.8 \cdot \dot{V}_{mech,m} + 0.2 \cdot \dot{V}_{mech,\max,m} )^2 \tag{2.2-7}
$$</div>

> Where,  
>
> • $\dot{V}_{mech,m}:$ 월별 평균 급기풍량 [m³/h]  
> • $\dot{V}_{mech,max,m}:$ 월별 최대 급기풍량 [m³/h]  
> • $\sum_m \dot{V}:$ 해당 월의 급기 유량 [m³/h]  
