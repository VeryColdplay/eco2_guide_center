# 2. 냉방 에너지소요량 (Energy use for cooling system)

## Nomenclature

### Symbols

<table class="nomenclature">
  <thead style="background:#f5f7fa;">
    <tr><th>Symbol</th><th>Meaning</th><th>Unit</th></tr>
  </thead>
  <tbody>
    <tr><td>\(A_{K,A}\)</td><td>열적 외피 외부 설치 표면적 (Surface area outside thermal envelope)</td><td>m²</td></tr>
    <tr><td>a</td><td>밸브 authority (Valve authority)</td><td>-</td></tr>
    <tr><td>b</td><td>평가계수 (Evaluation factor)</td><td>-</td></tr>
    <tr><td>\(b_{VC}\)</td><td>냉각코일 가동시간(월/연) (Full utilization hours)</td><td>h</td></tr>
    <tr><td>c</td><td>비열 (Specific heat)</td><td>kJ/kg·K</td></tr>
    <tr><td>e</td><td>소비지수 (Expenditure factor)</td><td>-</td></tr>
    <tr><td>EER</td><td>에너지 효율 비율 (Energy efficiency ratio)</td><td>kW/kW</td></tr>
    <tr><td>f</td><td>계수 (Factor)</td><td>-</td></tr>
    <tr><td>\(L_{max}\)</td><td>최대 배관 길이 (Maximum pipe length)</td><td>m</td></tr>
    <tr><td>P</td><td>성능 (Power)</td><td>W</td></tr>
    <tr><td>\(P_{d,hydr}\)</td><td>설계점 수압성능(CW/CHW) (Hydraulic power at design point)</td><td>W</td></tr>
    <tr><td>\(P_{el,av,rot}\)</td><td>열회수 회전자 평균전력 (Mean electric power for HR rotor)</td><td>W</td></tr>
    <tr><td>\(P_{C,elektr}\)</td><td>냉열기기 정격소비전력 (Rated drive power)</td><td>kW</td></tr>
    <tr><td>\(P_{el,av,KVS}\)</td><td>KVS 펌프 단위유량당 평균전력 (Mean pump power per unit flow)</td><td>W/(m³/h)</td></tr>
    <tr><td>\(P_{el,mh}\)</td><td>가습펌프 단위풍량당 전력 (Specific power of humidification pumps)</td><td>W/(m³/h\(_{air}\))</td></tr>
    <tr><td>PLV</td><td>평균 부분부하계수 (Mean part-load value)</td><td>-</td></tr>
    <tr><td>Q</td><td>에너지 (Energy)</td><td>kWh</td></tr>
    <tr><td>\(\dot{Q}\)</td><td>정격 열성능 (Rated power)</td><td>kW</td></tr>
    <tr><td>\(q_{R,elektr}\)</td><td>재냉기 단위 전기에너지요구량 (Specific electrical energy demand, recooler)</td><td>-</td></tr>
    <tr><td>R</td><td>배관 단위길이당 압력손실 (Pressure loss along pipes)</td><td>kPa/m</td></tr>
    <tr><td>SEER</td><td>연간 에너지 효율 비율 (Seasonal EER)</td><td>-</td></tr>
    <tr><td>t</td><td>시간 (Time)</td><td>h</td></tr>
    <tr><td>\(t_{C,r}\)</td><td>HVAC 냉각유닛 연간 가동시간 (Relative annual running time)</td><td>h</td></tr>
    <tr><td>\(\dot{V}\)</td><td>유량 (Volume flow rate)</td><td>m³/h</td></tr>
    <tr><td>\(W_{d,hydr,l}\)</td><td>주기별 수력학적 에너지 (Hydraulic energy per period)</td><td>kWh/period</td></tr>
    <tr><td>\(\beta\)</td><td>부하율 (Part-load level)</td><td>-</td></tr>
    <tr><td>\(\Delta p\)</td><td>압력손실 (Pressure drop)</td><td>kPa</td></tr>
    <tr><td>\(\Delta p_{z}\)</td><td>설계점 압력손실 (Pressure drop at design point)</td><td>kPa</td></tr>
    <tr><td>\(\eta\)</td><td>효율 (Efficiency)</td><td>-</td></tr>
    <tr><td>\(\vartheta\)</td><td>온도 (Temperature)</td><td>°C</td></tr>
    <tr><td>\(\nu\)</td><td>동점도 (Kinematic viscosity)</td><td>㎟/s</td></tr>
    <tr><td>\(\zeta\)</td><td>열 성능비 (Rated heat ratio)</td><td>-</td></tr>
    <tr><td>\(\rho\)</td><td>밀도 (Density)</td><td>kg/m³</td></tr>
  </tbody>
</table>

### Subscripts

<table class="nomenclature">
  <thead style="background:#f5f7fa;">
    <tr><th>Subscript</th><th>Meaning</th><th>Subscript</th><th>Meaning</th></tr>
  </thead>
  <tbody>
    <tr><td>a</td><td>연간 (Annual)</td><td>Abgl</td><td>평형 (Balancing)</td></tr>
    <tr><td>Adap</td><td>적응 (Adaptation)</td><td>av</td><td>평균 (Average)</td></tr>
    <tr><td>aux</td><td>보조 (Auxiliary)</td><td>C, c</td><td>냉방/냉열 (Cooling, Refrigeration)</td></tr>
    <tr><td>\(C^{*}\)</td><td>HVAC 냉방 (HVAC cooling)</td><td>ce</td><td>전달 (Transfer)</td></tr>
    <tr><td>cl</td><td>냉매 (Refrigerant)</td><td>f</td><td>2차 에너지 (Final energy)</td></tr>
    <tr><td>d</td><td>분배, 시간주기 (Distribution, Period)</td><td>e</td><td>효율 (Efficiency)</td></tr>
    <tr><td>el</td><td>전력 (Electric power)</td><td>elektr</td><td>전기적 (Electrical)</td></tr>
    <tr><td>H, h</td><td>가열·예열·재열 (Heating, Pre-heating, Re-heating)</td><td>\(H^{*}\)</td><td>HVAC 가열 (HVAC heating)</td></tr>
    <tr><td>hr</td><td>열회수기 (Heat recovery)</td><td>hydr</td><td>수압적 (Hydraulic)</td></tr>
    <tr><td>l</td><td>냉각수/냉수; 기간 (Cooling water; Period)</td><td>\(m^{*}\)</td><td>증기가습 (Steam humidification)</td></tr>
    <tr><td>max</td><td>최대 (Maximum)</td><td>mh</td><td>가습 제어 (Humidification control)</td></tr>
    <tr><td>min</td><td>최소 (Minimum)</td><td>mth</td><td>월 (Month)</td></tr>
    <tr><td>n</td><td>특정 용도 \(n\) (Usage \(n\))</td><td>op</td><td>운전 (Operation)</td></tr>
    <tr><td>outg</td><td>공급량 (Output)</td><td>pumpe</td><td>펌프 (Pump)</td></tr>
    <tr><td>R</td><td>재냉 (Recooling)</td><td>rd</td><td>회수 (Recovered)</td></tr>
    <tr><td>reg</td><td>재생에너지 (Renewable)</td><td>sens</td><td>현열 (Sensible)</td></tr>
    <tr><td>t</td><td>온도 (Temperature)</td><td>therm</td><td>열적 (Thermal)</td></tr>
    <tr><td>VC</td><td>중앙 냉각 유닛 (Central cooling unit)</td><td>vc</td><td>공기 냉방 (Cooling air)</td></tr>
    <tr><td>x</td><td>절대 습도 (Humidity ratio)</td><td>Z</td><td>실 (Zone)</td></tr>
  </tbody>
</table>

## 2.1. 개요

냉방 에너지소요량에서는 냉방 시스템의 각 단계(전달, 분배, 저장, 생산)에서 계산된 손실, 소요량, 보조에너지를 종합하여, 최종적으로 냉열 생산기기(히트펌프 등)가 공급해야 하는 총에너지 소요량을 산정하는 방법을 기술합니다.

---

<center>
<img alt="제 2.2장에서 다루는 범위" src="https://verycoldplay.github.io/eco2_guide_center/_images/2.1_1.png" style="max-width: 50%;">
<div><strong>Figure 2.1-1. 제 2장에서 다루는 범위</strong></div>
</center>
<center>
<img alt="HVAC 시스템 냉각 유닛 계산 과정" src="https://verycoldplay.github.io/eco2_guide_center/_images/2.1_2.png" style="max-width: 50%;">
<div><strong>Figure 2.1-2. HVAC 시스템 냉각 유닛 계산 과정</strong></div>
</center>
<center>
<img alt="실내냉방 시스템 계산 과정" src="https://verycoldplay.github.io/eco2_guide_center/_images/2.1_3.png" style="max-width: 50%;">
<div><strong>Figure 2.1-3. 실내냉방 시스템 계산 과정</strong></div>
</center>

---

## 2.1.1. 공조 시스템 급기 온도 설정

공조 시스템은 실내 열적 쾌적도를 유지해야 하므로 시스템 터미널 유닛(terminal unit) 출구의 급기 온도와 존의 평균 실내 온도 간의 차가 아래 표를 초과해서는 안됩니다.

<center>
<div><strong>Table 2.1.1-1. 공조 시스템에 유형에 따른 급기 온도 차 표준값 (에너지 성능 증명을 위해서만 사용하고, 실제 설계에 사용되지 않음)</strong></div>
<img alt="공조 시스템에 유형에 따른 급기 온도 차 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_tables/3_2.1.1_1.png" style="max-width: 80%;">
</center>

## 2.2. 공조 냉방 개요

공조 에너지요구량에서 산정한 요구량 중 냉열 에너지요구량만 분리하여 공조기의 냉방 에너지소요량을 산정합니다. 공조기기의 냉각유닛 (e.g. Cooling coil)에 대한 냉열 생산기기의 냉열 에너지공급량과 실내냉방 시스템에 대한 냉열 생산기기의 냉열 에너지공급량은 개별 냉열 사용기기 별로 분리되어 최종 에너지소요량에 합산되고, 개별 냉열 생산기기와 분배 시스템의 에너지소요량은 총 에너지소요량 산정 과정에서 합산됩니다.

### 2.2.1. 공조기 냉열 에너지요구량($Q_{c*,b}$)

 * 공조기 냉각 유닛의 냉열 에너지요구량은 2.2에서 산정한 존의 냉방을 위한 냉열 에너지요구량($Q_{vc,b}$)과 전달 ($Q_{vc,ce}$), 분배 ($Q_{vc,d}$)과정의 손실을 합하여 산정합니다.

$$
Q_{c^{*},b} = Q_{vc,b} + Q_{vc,ce} + Q_{vc,d}\tag{2.2.1-1}
$$

**- 공조냉방 전달 손실($Q_{vc,ce}$)**: 별도의 효율 값을 가지고 있지 않는 경우, 전달 과정 효율은 표준값 1을 적용합니다.

$$Q_{vc,ce} = (1-\eta_{vc,ce}) \cdot Q_{vc,b}\tag{2.2.1-2}$$

**- 공조냉방 분배 손실($Q_{vc,d}$)**: 건물 내부에서 분배가 이루어지는 경우, 분배 열 손실은 0으로 가정합니다. 건물 외부에서 분배할 경우 외부 배관의 열손실을 고려해야 합니다. 이 때 배관 단열재의 열전도율은 최소 0.04 W/mK, 두께는 50 mm 로 가정합니다.

$$
Q_{vc,d} = 0 \quad \text{(분배가 건물 내부에서 이루어질 때)}\tag{2.2.1-3}
$$

$$
Q_{vc,d} = f_{vc,d} \cdot A_{K,A} \cdot t_{c^{*},op,mth} \quad \text{(분배가 건물 외부에서 이루어질 때)} \tag{2.2.1-4}
$$

$$
f_{vc,d} = 9\,{W/m^2} \tag{2.2.1-5}
$$

> Where,  
>
> • $Q_{c^{*},b}:$ HVAC 냉각유닛의 냉열 에너지요구량 (해당 월 기준) [kWh]  
> • $Q_{vc,b}:$ 존의 냉방을 위한 냉열 에너지요구량 (해당 월 기준) [kWh]  
> • $Q_{vc,d}:$ 공조 냉각 시 공조기에서 존까지의 전달 열 손실량 (해당 월 기준) [kWh]  
> • $f_{vc,d}:$ 공조 냉각 시 공조기에서 존까지의 분배 열 손실량 (해당 월 기준) [kWh]  

* 누기 손실: ECO2에서 덕트 누기는 고려하지 않습니다. 중앙 공조기의 설계 풍량은 누기를 무시하고 각 존의 요구 풍량을 합산합니다.

### 2.2.2. 공조기 냉각 유닛의 운전 시간 ($t_{C^{*},op,mth}$)

공조기 냉각 유닛의 월별 운전 시간 ($t_{C^{*},op,mth}$)은 공조기 냉각 유닛의 연간 운전 시간 ($t_{C}$)으로부터 계산합니다.

$$
t_{c^{*},op,mth} = t_{C,r} \cdot \frac{b_{vc,mth}}{b_{vc,a}} \tag{2.2.2-1}
$$

* ECO2에서 현재 연간 공조/냉방/난방 운전 시간은 용도프로필의 일일 운전 시간과 연간 운전 일 수로 계산합니다.

$$
t_{C,r} = t_{v,op,d} * d_{op,a} \tag{2.2.2-2}
$$

$$
b_{vc,mth} = \frac{Q_{vc,b}}{\dot{Q}_{c^{*},max}} \tag{2.2.2-2}
$$

$$
b_{vc,a} = \sum_{m=1}^{12} b_{vc,mth} \tag{2.2.2-3}
$$

> Where,  
> 
> • $t_{c^{*},op,mth}:$ 공조기 냉각 유닛의 월별 운전 시간 [h]  
> • $t_{C,r}:$ 연간 상대적 냉방 운전 시간 [h]  
> • $t_{v,op,d}:$ 일일 공조기 운전 시간 (용도프로필 참고) [h/a]  
> • $d_{op,a}:$ 공조/냉방/난방 시스템의 연간 운전 일 수 (용도프로필 참고) [d/a]  
> • $b_{vc}:$ HVAC 최대 출력 운전 시간 (월별, 연간) [h]  
> • $Q_{vc,b}:$ 존의 냉방을 위한 냉열 에너지요구량 [kWh]  
> • $\dot{Q}_{c^{*},max}:$ HVAC 시스템 냉각유닛의 최대 출력 [kW]  

---

## 2.3. 냉열 생산기기의 제어, 전달, 분배, 저장 열 손실:

### 2.3.1. 개요

공조기의 냉각유닛과 실내냉방 시스템에 대한 냉열 에너지공급량은 개별적으로 계산되고 (2.3.1, 2.3.2), 합산되어 냉열 생산기기의 에너지소요량을 계산합니다.

### 2.3.2. HVAC 시스템 냉각유닛에 대한 냉열 에너지공급량($Q_{c*,outg}$):

HVAC 시스템 냉각유닛에 대한 냉열 에너지공급량은 냉각유닛의 냉열 에너지요구량($Q_{c^{*},b}$)과 냉열 생산기기로부터 전달 ($Q_{c^{*},ce}$), 분배 ($Q_{c^{*},d}$), 저장 ($Q_{c^{*},s}$)과정의 손실을 합산합니다.

$$
Q_{c^{*},outg} = Q_{c^{*},b} + Q_{c^{*},ce} + Q_{c^{*},d} + Q_{c^{*},s} \tag{2.3.2-1}
$$

* 전달 손실($Q_{c*,d}$):  
<div align="center">
$$
Q_{c^{*},ce} = [(1 - \eta_{c^{*},ce}) + (1 - \eta_{c^{*},ce,sens})] \cdot Q_{c^{*},b} \tag{2.3.2-2}
$$</div>

* 분배 손실($Q_{c*,d}$):  
<div align="center">$$
Q_{c^{*},d} = (1 - \eta_{c^{*},d}) \cdot Q_{c^{*},b} \tag {2.3.2-3}
$$</div>

* 저장 손실($Q_{c*,s}$): ECO2에서 냉열 저장 손실은 무시합니다.
$$
Q_{c^{*},s} = 0 \tag{2.3.2-4} 
$$

> Where,  
>
> • $Q_{c^{*},outg}:$ HVAC 시스템 냉각유닛에 대한 냉열 에너지공급량 (해당 월 기준) [kWh]  
> • $Q_{c^{*},b}:$ HVAC 시스템 냉각유닛의 냉열 에너지요구량 (해당 월 기준) [kWh]  
> • $Q_{c^{*},ce}:$ HVAC 시스템 냉각유닛의 전달 손실 [kWh]  
> • $Q_{c^{*},d}:$ HVAC 시스템 냉각유닛의 분배 손실 [kWh]  
> • $Q_{c^{*},s}:$ HVAC 시스템 냉각유닛의 저장 손실 [kWh]  
> • $\eta_{c^{*},ce}:$ HVAC 시스템 냉각유닛의 냉열전달 효율  
> • $\eta_{c^{*},ce,sens}:$ HVAC 시스템 냉각유닛의 냉열 중 현열 전달 효율  

* HVAC 시스템 냉각유닛의 현열 전달 효율은 공기 냉방에서 의도하지 않은 제습도 고려하며, 존의 공조 에너지요구량 계산에서는 이에 대해 고려하지 않습니다.


* 공조기, 제습 옵션이 있는 냉수 사용 실내냉방 시스템, 개별 실용 에어컨을 사용할 경우, 실내 냉방과 HVAC 냉방의 가장 불리한 효율인 현열 공기냉방 전달손실 효율 ($\eta_{c^{*},ce,sens}$)은 외기 냉방을 위해 한번만 적용되어야 하며, 실내 냉방 시 냉방 전달손실 효율 ($\eta_{c,ce,sens}$)은 1을 적용합니다. 


<center>
<div><strong>Table 2.3.2-1. 냉방 공조시설 계수 (연평균 값)</strong></div>
<img alt="냉방 공조시설 계수 (연평균 값)" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.2_5.png" style="max-width: 80%;">
</center>

* 표에 없는 냉수 온도일 시, 보간 값을 사용합니다.

* 다수의 냉열 생산기기를 사용 시, HVAC 공기 냉방을 위한 냉열 에너지공급량은 각 냉열 생산기기에 대해 개별적으로 계산되어 이후 각 기기의 에너지소요량을 계산합니다.

### 2.3.3. 실내냉방 시스템 에너지공급량($Q_{c,outg}$)

실내냉방 시스템의 에너지공급량은 존의 실내냉방 에너지요구량($Q_{c,b}$)과 전달($Q_{c,ce}$), 분배($Q_{c,d}$), 저장($Q_{c,s}$) 손실을 합산합니다.

$$
Q_{c,outg} = Q_{c,b} + Q_{c,ce} + Q_{c,d} + Q_{c,s} \tag{2.3.3-1}
$$

* 전달 손실(\(Q_{c,ce}\)):  

<div align="center">
$$
Q_{c,ce} = [(1 - \eta_{c,ce}) + (1 - \eta_{c,ce,sens})] \cdot Q_{c,b} \tag{2.3.3-2}
$$</div>

* 분배 손실(\(Q_{c,d}\)):  
<div align="center">$$
Q_{c,d} = (1 - \eta_{c,d}) \cdot Q_{c,b} \tag{2.3.3-3}
$$</div>

* 저장 손실(\(Q_{c,s}\)): ECO2에서 냉열 저장 손실은 무시합니다.  
<div align="center">$$
Q_{c,s} = 0 \tag{2.3.3-4}
$$</div>

<center>
<div><strong>Table 2.3.3-1. 실내 냉방시설 계수 (연평균 값)</strong></div>
<img alt="실내 냉방시설 계수 (연평균 값)" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.3_6.png" style="max-width: 80%;">
</center>

### 2.3.4. 실내 냉방 팬의 보조에너지 (Auxiliary Energy)

* 실내 공조용 보조 팬의 전기 에너지요구량 ($Q_{c,ce,aux}$): 실내 공조용 팬의 전기 에너지요구량은 장비 유형과 각 장비의 설계에 따라 계산됩니다. 명시된 에너지요구량은 다단 속도 제어가 있는 장비가 기준입니다. (1000 시간의 팬 운전 및 500 시간의 냉방 시스템 최대 출력 운전 시간 기반)

$$
Q_{c,ce,aux} = f_{c,ce,aux} \cdot Q_{c,outg} \cdot \frac{t_{c,op}}{1000\, [h]} \tag{2.3.4-1}
$$

> Where,  
>
> • $f_{c,ce,aux}:$ 팬의 단위 에너지요구량 계수  
> • $Q_{c,outg}:$ 실내냉방 냉열 에너지요구량 (해당 월 기준) [h]  
> • $t_{C,op}:$ 월별 실내 냉방 운전 시간(용도프로필 참고) [h]  

### 2.3.5. 냉각수 및 냉수 분배에 대한 보조에너지

<center>
<div><strong>Table 2.3.5-1. 실내 냉방 팬의 단위 에너지 요구량 표준치</strong></div>
<img alt="실내 냉방 팬의 단위 에너지 요구량 표준치" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.4_2.png" style="max-width: 80%;">
</center>

<center>
<div><strong>Table 2.3.5-2. 냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수</strong></div>
<img alt="냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수1" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.5_1.png" style="max-width: 80%;">
<img alt="냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수2" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.5_1_2.png" style="max-width: 80%;">
<img alt="냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수3" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.5_1_3.png" style="max-width: 80%;">
</center>

<center>
<img alt="냉각수 및 냉수 펌프 에너지 요구량 계산 과정" src="https://verycoldplay.github.io/eco2_guide_center/_images/2.3.5_2.png" style="max-width: 80%;">
<div><strong>Figure 2.3.5-2. 냉각수 및 냉수 펌프 에너지 요구량 계산 과정</strong></div>
</center>

* 실내 냉방 및 공조기에서, 펌프의 전기 에너지 수요는 시스템 내 모든 펌프 분배망에 대해 건물의 계산 존 또는 중앙 환기 시스템의 정격 냉각 부하를 기준으로 계산합니다. 여기서, 평가 대상 분배 회로의 개별 냉동 또는 냉방 용량, 운전 시간, 그리고 관련된 기간별 냉열 에너지가 사용됩니다. 냉수 분배망은 아래 첨자 '$Z$'로 식별되며, 대부분의 경우 건물 내 냉수 분배는 여러 존과 연결된 하나의 중앙 공급 유닛 ($Z$) (e.g. 1차 및 2차 분배망)이 담당합니다. 이러한 경우, 냉각 용량 (e.g. $\dot{Q}_{c}, \dot{Q}_{c^{*}}$) 및 개별 존의 냉방 에너지요구량 (e.g.$Q_c, Q_{c^{*}}$)은 모두 중앙 냉수 분배망 ($Z$)의 에너지 수요 계산에서 합산됩니다. 분배망 ($Z$)의 펌프 운전시간은 냉방 요구의 최대 시간으로 가정합니다.

#### 2.3.5.1 냉수 분배망의 전기 에너지요구량
* 냉수 분배망의 연간 전기 에너지요구량 ($Q_{Z,aux,d,a}$)은 고려하는 기간들의 에너지요구량의 합으로 정해집니다. 기간은 아래첨자 '$I$'로 표시합니다. (e.g. 연간 = 1년, 월별 = 12 개월)
$$
Q_{Z,aux,d,a} = \sum_{l=1}^{n} Q_{Z,aux,d,l} \tag{2.3.5-1}
$$

* 냉수 분배망의 기간별 전기 에너지요구량($Q_{Z,aux,d,l}$)은 수력학적 에너지 요구량($W_{d,hydr,l}$)과 분배망의 소비지수($e_{d,l}$)의 곱으로 계산합니다.
$$
Q_{Z,aux,d,l} = W_{d,hydr,l} \cdot e_{d,l} \tag{2.3.5-2}
$$

> Where,  
>
> • $Q_{Z,aux,d,a}:$ 냉수 분배망의 연간 전기 에너지요구량 [kWh]  
> • $Q_{Z,aux,d,l}:$ 냉수 분배망의 기간별 전기 에너지요구량 [kWh]  
> • $W_{d,hydr,l}:$ 기간별 수력학적 에너지요구량 [kWh]  
> • $e_{d,l}:$ 기간별 분배망의 소비지수  

#### 2.3.5.2 수력학적 (Hydraulic) 에너지요구량

* 특정 기간 내 냉수 및 냉각수 분배 시스템의 수력학적 에너지요구량($W_{d,hydr,l}$)은 설계 조건에서의 수력 동력 (hydraulic power) ($P_{d,hydr}$), 펌프 운전시간($t_{d,l}$), 운전시간 동안의 평균 분배 부하율($β_{d,l}$)로 계산합니다.
$$
W_{d,hydr,l} = \frac{P_{d,hydr}}{1000} \cdot t_{d,l} \cdot \beta_{d,l} \cdot f_{Abgl} \tag{2.3.5-3}
$$

$$
P_{d,hydr} = 1000 \cdot \Delta p_{Z} \cdot \frac{\dot{V}_{Z}}{3600 [s/h]} \tag{2.3.5-4}
$$

* 설계 유량($\dot{V}_{Z}$): 설계 유량은 설계 조건에서의 냉각 용량($\dot{Q}_Z$)과 공급-환수 간 온도차($Δθ_{Z,cl}$), 분배망 내 냉매 물성치로 계산합니다.  
<div align="center">
$$
\dot{V}_{Z} = \frac{3600 [s/h] \cdot \dot{Q}_{Z}}{\Delta \vartheta_{Z,cl} \cdot C_{cl} \cdot \rho_{cl}} \tag{2.3.5-5}
$$</div>

* 수냉식 냉동기의 경우, 냉수 분배망의 정격 냉각 용량 ($\dot{Q}_{Z}$)은 정격 재냉각 출력 ($\dot{Q}_{R,outz}$)과 같다고 가정합니다.  
<div align="center">
$$
\dot{Q}_{Z} = \dot{Q}_{R,outz} \tag{2.3.5-6}
$$</div>  

<div align="center">
$$
\dot{Q}_{z}=\dot{Q}_{R,outg}=\dot{Q}_{c,outg} + (1 + \frac{1}{EER}) \tag{2.3.5-7}
$$</div>

* 재냉각 순환망에서 열에너지는 아래 식으로 계산합니다.
$$
Q_{Z} = Q_{C,outg} \cdot (1 + \frac{1}{SEER}) \tag {2.3.5-8}
$$

* 흡수식 냉동기의 경우 SEER 대신 평균 열성능비 ($ζ_{av}$)을 사용합니다.

> Where,  
>
> • $W_{d,hydr,l}:$ 수력학적 에너지요구량 [kWh]  
> • $P_{d,hydr}:$ 설계 조건에서 냉수 분배망의 수력 동력 [W]  
> • $t_{d,l}:$ 기간별 펌프 운전시간 [h]  
> • $\beta_{d,l}:$ 기간별 평균 분배 부하율  
> • $f_{Abgl}:$ 수력학적 보정계수  
> • $Δp_{Z}:$ 설계 조건에서 냉수 분배망의 압력 손실 [kPa]  
> • $\dot{V}_{Z}:$ 설계 조건에서 냉수 분배망의 유량 [$m^{3}/h$]  
> • $\dot{Q}_{z}:$ 설계 조건에서 냉수 분배망의 정격 냉방/냉각 용량 [kW]  
> • $\Delta \vartheta_{Z,cl}:$ 설계 조건에서 냉수 분배망의 급수/환수 온도 차 [K]  
> • $c_{cl}:$ 냉매 비열 [$kJ/kg \cdot K$]  
> • $ρ_{cl}:$ 냉매 밀도 [$kJ/m^{3}$]  
> • $Q_{C,outg}:$ 냉동기의 냉열 에너지공급량 (해당 월 기준) [kWh]  
> • SEER : 압축식 냉동기의 연간 냉각 에너지 효율  

#### 2.3.5.3. 설계 조건에서 압력 손실

* 설계 조건에서 냉수 분배망의 압력 손실($Δp_{Z}$): 설계 조건에서 압력손실은 배관의 저항(다양한 개별 저항 포함)과 추가 저항 요소의 함수입니다. 압력 손실은 가장 불리한 공급 구간 또는 망에 연결된 가장 불리한 부하를 기준으로 결정합니다. 배관망 정보가 주어지는 경우, 상세한 계산을 적용합니다. 대안으로, 근사법에서는 개별 저항에 대한 현실적인 추정값들이 사용됩니다.
$$
\Delta p_Z = R \cdot L_{max} \cdot (1 + z) + \Delta p_{WUE} + \Delta p_{RV} + \Delta p_{WUV} \tag{2.3.5-9}
$$

> Where,  
>
> • $\Delta p_Z:$ 설계 조건에서 냉수 분배망의 압력 손실 [kPa]  
> • $R:$ 배관 압력손실 [kPa/m]  
> • $L_{max}:$ 분배망 중 최대 길이 [m]  
> • $z:$ 배관 마찰 손실에서 개별 저항의 비율  
> • $Δp_{WUE}:$ 생산기기에서 열교환기의 압력 손실  
> • $Δp_{RV}:$ 제어 밸브의 압력 손실  
> • $Δp_{WUV}:$ 말단유닛 (Terminal unit) 열교환기의 압력 손실  

* Δp의 근사값: 아래에 제시된 개별 구성요소의 압력 손실에 대한 근사값은 해당 분배망의 설계에 따라 식 (2.3.5-8)에 사용되어야 합니다. 주어진 값은 분배망 계획(planning) 시 사용하기 위한 지침 값입니다. 모든 경우에, 목표하는 투자 비용 및 운전 비용에 따라 결정되는 배관의 최소 및 최대 치수 값이 설계 사양으로 정의될 것입니다.
* 배관 마찰 손실은 배관의 길이와 분배망 유형 (망의 topology, e.g. 배관 elbow, 밸브 개수 등), 평균 유량, 배관 안쪽 표면의 매끄러움에 따라 결정됩니다. Table 2.3.5.1-2에서 단위 압력 손실 R과 개별 유동 저항의 추가적인 비율 "$z$"에 대한 근사값이 주어집니다.

<center>
<div><strong>Table 2.3.5.3-1. 배관망에서 단위 길이당 압력 손실 R 및 개별 유동저항의 추가적인 비율 z</strong></div>
<img alt="배관망에서 단위 길이당 압력 손실 R 및 개별 유동저항의 추가적인 비율 z" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.5.1_2.png" style="max-width: 80%;">
</center>

* 냉각망, 1차 망, 냉수 분배망에서 배관의 최대 길이는 냉열 생산기기와 부하 측에 있는 해당 열교환 기기 사이 거리의 두 배의 함수입니다. 직사각형 건물의 경우, 냉수 분배망의 최대 배관 길이는 외형 치수를 사용해 근사 값으로 계산될 수 있습니다.
$$
L_{max} = 2 \cdot (L + \frac{B}{2} + h_G \cdot n_G + 10) \tag{2.3.5-10}
$$

> Where,  
>
> • $L:$ 건물 길이 [m]  
> • $B$:$ 건물 폭 [m]  
> • $h_{G}$:$ 평균 층 높이 [m]  
> • $n_{G}$:$ 층 개수  

<center>
<div><strong>Table 2.3.5.3-2. 분배 배관망의 구성요소에 대한 압력 손실 추정값</strong></div>
<img alt="분배 배관망의 구성요소에 대한 압력 손실 추정값" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.5.1_4.png" style="max-width: 80%;">
</center>

* 연속감압밸브 (Continuous-control throttle valve)의 압력손실($Δp_{RV,stetig}$): 밸브 authority($a$)와 말단 유닛 열교환기의 압력손실($Δp_{WUV}$)을 이용하여 계산합니다.

$$
\Delta p_{RV,stetig} = ( \frac{1 - a}{a} ) \cdot \Delta p_{WUV} \tag{2.3.5-11}
$$

Table 2.3.5.3-2. 의 추정값들은 물 온도 10 °C ($\nu \approx 1{,}5\ mm^2/s$) 에서 유효합니다. 만약 동점성 계수 > 4 $mm^{2}/s$인 냉매나 Flo-Ice를 사용할 경우, 배관망과 열교환기에서 압력 손실은 개별로 산정해야 합니다. 배관 균형을 위한 제어 밸브의 압력 손실 계산은 상세 설계 시에만 가능합니다.

#### 2.3.5.4. 펌프 운전시간

* 펌프 운전시간($t_{d,l}$): 공조기에서 공기 냉각을 위한 요구 운전시간과 냉동기와 같이 운전되는 펌프 (응축기의 재냉각 및 증발기 순환망의 1차측 펌프)의 요구 운전시간은 2.2.2. 에 따라 각 이용단위 / 존에 대해 월별로 정해집니다. 냉수 분배망에서 펌프 운전시간은 시스템 설계에 따라 달라지며, 분배망에서 결정된 요구 운전시간을 초과할 수 있습니다 (펌프를 수요 제어 (demand controlled)로 운전하지 않거나 (분배망을 저온으로 유지하기 위해) 중단 없는 냉방 에너지 공급이 요구되는 경우 등). 
* 만약 여러 개의 다른 사용 유닛 / 존에 동일한 분배망이 연결되어 있을 경우, 이 분배망의 펌프 운전시간은 최대로 요구되는 운전시간을 가진 존을 기준으로 합니다. 이 경우, 요구되는 대표 냉열 에너지는 개별 사용유닛/존의 에너지 요구의 총합입니다.
* 운전 모드는 크게 4가지로 구분되는데, 모드 1은 완전한 수요 제어 운전에 적용하며, 모드 2~4는 공급 제어 운전에 적용됩니다 (Table 2.3.5.4-1.).

<center>
<div><strong>Table 2.3.5.4-1. 운전 모드</strong></div>
<img alt="운전 모드" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.5.2_1.png" style="max-width: 80%;">
</center>

#### 2.3.5.5. 평균 부하율

* 분배 과정의 평균 부하율($β_{d,l}$): 분배 과정의 평균 부하율은 시스템 내 모든 펌프 분배망에 대해 설계 조건에서의 냉방 용량, 냉수 분배망의 에너지요구량, 해당 기간 내 운전시간에 기반하여 계산됩니다.

$$
\beta_{d,l} = \frac{Q_{Z,outg,l}}{\dot{Q}_Z \cdot t_{d,l}} \tag{2.3.5-12}
$$

* 초과 유량 장치 보정: 분배 배관망에 초과 유량 장치(밸브, 배관 등)가 설치된 경우, 평균 수력학적 요구에 미치는 영향은 아래 식으로 평가되어야 합니다.

$$
\beta_{d,l} = \beta'_{d,l} + (1 - \beta'_{d,l}) \cdot ( \frac{\dot{V}_{Z,min}}{\dot{V}_Z} ) \tag{2.3.5-13}
$$

* 최소 유량은 냉수 분배망의 요구 또는 냉열 소비측 망에 있는 과압 방지 밸브 (overpressure relief valve, 시스템 압력 손실, 펌프 특성, 밸브 작동 압력의 상호작용에 따라 기능이 결정됨)에 기반하여 계산되어야 합니다.
* 1차 배관망의 수력학적 분리되어 있거나 (e.g. 수력학적으로 분리된 line valve 또는 평행으로 연결된 저장 장치) 또는 냉열 소비측 망에 전향 밸브 (deflection valve)를 사용할 경우, 관련된 공급 펌프에 $\beta_{d} = 1$ 을 적용할 수 있습니다.

> Where,  
>
> • $Q_{Z,outg,l}:$ 설계 조건에서 냉수 분배망의 정격 냉방/냉각 용량 [kW]  
> • $\dot{Q}_Z:$ 냉수 분배망의 냉열 에너지요구량 (기간별) [kWh]  
> • $t_{d,l}:$ 펌프 운전시간 [h]  
> • $\dot{V}_{Z,min}:$ 냉수 분배망의 최소 유량 [$m^{3}/s$]  
> • $\dot{V}_{Z}:$ 설계 조건에서 냉수 분배망의 유량 [$m^{3}/s$] (Eq. 2.3.5-5)  

* 수력학적 평형 보정계수($f_{Abgl}$):
  * 수력학적 평형인 배관망: $f_{Abgl}$ = 1.0
  * 수력학적 평형이 아닌 배관망: $f_{Abgl}$ = 1.25

#### 2.3.5.4. 소비지수 (Expenditure factor)

* 시스템에 설치된 펌프의 운전은 고려하는 시간 주기 내에 냉수 분배에 대한 소비지수로 평가되며, 소비지수는 펌프 크기, 효율, 부분부하, 제어 특성으로부터 도출되는, 펌프의 연간 전력 수요에 영향을 미치는 핵심 요소들을 반영합니다.
$$
e_{d,l} = f_e \cdot ( C_{P1} + C_{P2} \cdot \beta_{d,l}^{-1} ) \tag{2.3.5-14}
$$

* 펌프 효율계수($f_{e}$): 펌프의 효율 계수는 펌프의 전체 효율을 반영하며, 펌프의  수력학적 부분 효율과 모터 효율의 곱의 역수입니다.
* 설계 점에서의 펌프 전력 소비 데이터가 있는 경우:
$$
f_e = \frac{P_{pumpe}}{P_{d,hydr}} \tag{2.3.5-15}
$$

* 데이터가 없는 경우: 근사식을 사용합니다.
$$
f_e = (1.25 + \sqrt{ \frac{200}{P_{d,hydr}} } ) \cdot f_{Adap} \cdot b \tag{2.3.5-16}
$$

* 근사식은 아래 상황에서 유효합니다. 
  * 방사형 원심 펌프 (Radial centrifugal pump)(펌프 정격 설계 점에서 효율 등급 1의 모터를 사용하는 경우. 정격 설계 점에서 운전하지 않거나 수력학적 부분과 모터가 일치하지 않는 상태에서 운전할 경우, $f_{e}$ 값은 상승합니다.)
  * 최대 압력 손실이 아래와 같을 때 
    * Δp ≤ 0.6 bar ($P_{hydr}$ < 0.2 kW인 경우)
    * Δp ≤ 1.5 bar (0.2 < $P_{hydr}$ < 0.5 kW인 경우)
    * Δp ≤ 4.0 bar ($P_{hydr}$ > 0.5 kW인 경우)
  * 20 °C의 물 ($\nu \approx 1.0\, mm^{2}/s$)

> Where,  
>
> • $f_{e}:$ 펌프 효율계수  
> • $C_{P1}$, $C_{P2}:$ 펌프 운전방식에 따른 상수 (Table 2.3.5.4-1.)  
> • $P_{pumpe}:$ 설계 점에서 펌프 전력 소비 [W]  
> • $P_{d,hydr}:$ 설계 조건에서 냉수 분배망의 수력 동력 [W]  
> • $f_{Adap}$ = 펌프 운전 점 (operating point)에 대한 적응 보정계수  
> • $b$ = 건물 범주에 따른 평가계수(기존 건물 = 1.2, 신축 = 1.0)  

* 고점성 냉매 사용 시 펌프 효율계수 보정: 동점성 계수($ν_{cl}$)가 4 $mm^{2}/s$를 초과하는 냉매 또는 Flo-Ice를 사용하는 경우, $f_{e}$의 가정 값은 별도로 결정되어야 합니다. $4\, mm^{2}/s \le \nu \le 40\, mm^{2}/s$ 인 냉매의 경우, 보정된 $f_{e}$는 위에서 언급된 펌프 유형과 양정, 식 2.3.5.4-3 으로 계산된 $f'_{e}$에 따라 계산될 수 있습니다.  
<div align="center">
$$
f_e = f'_e \cdot ( 1 + ( \frac{\nu_{cl}^2}{16 \cdot P_{d,hydr}} )^{0.4} ) \tag{2.3.5-17}
$$</div>

* 적응 보정계수($f_{Adap}$): 실제 설치된 펌프와 설계조건 하에서 최적화된 펌프의 전력 소비 차이를 고려하여 실제 운전 점에서의 펌프 전력 소비를 반영합니다. 펌프의 실제 운전점은 항상 설계유량과 연관되어 있습니다. 조정이 불가능한 펌프의 경우, 실제 운전 점과 설계점 사이에 다소 큰 차이가 있을 것이며, 조정 가능한 펌프의 경우, 일반적으로 설계 점 값에 가깝게 조정될 수 있습니다.
  * 성능이 알려진/최적으로 조정된 펌프: $f_{Adap}$ = 1.0
  * 성능을 모르는 경우:
    * 표준 펌프: $f_{Adap}$ = 1.2 
    * 속도 제어로 적응된 펌프: $f_{Adap}$ = 1.05

* 운전 시 펌프 동력 제어: 변유량 (VAV) 시스템 분배 배관망의 수력학적 요구에 맞춰 펌프 동력을 제어함으로써 에너지요구량을 상당히 절감할 수 있습니다. 펌프의 동력 조절은 아래 제어를 통해 가능합니다.
  * 내회전 속도 제어 ($\Delta p =$ 일정 또는 $\Delta p =$ 가변) 
  * 외회전 속도 제어 
  * 병렬 펌프 (e.g. 이중 펌프 등) 운전 시 부분 가동/정지

* 펌프의 제어 방식(비제어/제어)에 따른 펌프 동력 감소를 설명하는 상수($C_{P1}$, $C_{P2}$)가 결정되며, 소비지수 계산(식 2.3.5-14)에 사용합니다.

<center>
<div><strong>Table 2.3.5.4-1. 펌프 운전방식에 따른 상수 \(C_{P1}\), \(C_{P2}\)</strong></div>
<img alt="펌프 운전방식에 따른 상수 Cp1, Cp2" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.3.5.4_5.png" style="max-width: 80%;">
</center>

* 병렬 펌프에서 펌프 전환: 변유량 시스템 및 완만한 시스템 특성 곡선을 갖는 분배 배관망의 경우, 병렬 펌프를 사용하여 상당히 효과적으로 부분 부하 대응이 가능합니다. 이러한 분배망의 경우, 부하에 따른 개별 펌프의 가동/정지 운전으로 에너지 소비를 상당히 절감할 수 있습니다. 분배망의 평균 부하율($β_{d}$)이 0.7 미만인 경우, 병렬 펌프 가동/정지에 의한 유량 적응 운전 소비지수는 Table 2.3.5.4-1.의 제어 운전의 $C_{P1}$, $C_{P2}$ 값을 사용하여 계산할 수 있습니다.

---

## 2.4. 냉열 생산에 대한 2차 에너지소요량 (Energy use)

* 냉열 생산을 위한 2차 에너지소요량은 냉동기의 종류, 사용 냉매, 제어 방식, 운전 온도 및 건물 용도 등에 따라 달라지는 특성치를 기준으로 산정됩니다. 이 특성치들은 시간별 에너지 요구량을 기반으로 계산되며 Annex A. 에 요약되어 있습니다. 기후 조건은 지역별 TMY 데이터를 사용합니다. 
* 냉방 싯스템의 2차 에너지소요량 계산을 위해 아래 매개변수가 필요합니다.
  * 2.3.2./ 2.3.3. 에서 계산된 HVAC/실내냉방 시스템의 냉열 에너지공급량 ($Q_{c^{*},outg}$/$Q_{c,outg}$)
  * 냉동기 유형
  * 사용된 냉매 유형
  * 압축기 유형 및 부분부하 제어
  * 실질 온도 수준 (Net temperature level)
  * 재냉각 유형 및 부분부하 제어
  * 건물 용도프로필
* 특성치 방법을 사용하면 재냉각을 위한 보조에너지 사용을 포함한 압축식 냉동기에 대한 보조에너지 소요량, 흡수식 냉동기에 대한 열에너지 소요량 계산이 가능합니다. Table 2.4-1. 의 시스템에 대하여 특성치 방법으로 평가가 가능합니다 (회색 부분 제외). 

<center>
<div><strong>Table 2.4-1. 특성치 방법으로 평가되는 냉열 생산 시스템의 개요</strong></div>
<img alt="배관의 열관류율" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4_1.png" style="max-width: 80%;">
</center>

* 특성치 방법은 다양한 일반적인 냉동 장비들의 평가에 적합합니다. 특성치 방법에서 다루지 않는 모든 시스템 유형 및 상세한 에너지 분석을 위해서는 상세한 방법을 사용해야 합니다. 이러한 경우, 요구되는 냉열 에너지공급량은 시간별 에너지요구량을 기준으로 한 시간 간격 계산을 적용해야 합니다. 2차 에너지소요량 및 재냉각 과정은 별도의 증명 계산을 통해 결정되어야 합니다. 결과물 또한 별도로 구분되어야 하며, 해당 모델링의 기반과 경계조건은 별도로 문서화되어야 합니다.
* 일반적으로, 냉열 생산을 위한 2차 에너지소요량은 냉열 생산기기의 에너지소요량과 재냉각 과정의 에너지소요량의 합입니다.
* 이 계산에서, 냉열 생산기기의 2차 에너지소요량은 압축기 냉동기의 경우 전기 에너지소요량 또는 흡수식 냉동기의 경우 열에너지 소요량으로 구별되어야 합니다. 재냉각 기기를 위한 에너지소요량은 전기 에너지만 고려합니다.
* 냉방을 위한 2차 에너지소요량은 냉열 공급영역에 맞게 계획된 각 냉동기에 대해 개별적으로 계산되어야 합니다. 냉열 공급영역은 건물의 조닝과 반드시 일치하지는 않습니다.
  

### 2.4.1. 냉방을 위한 냉열 에너지공급량 (Energy output)
* 한 특정 냉동기에 의해 냉열을 공급받는 건물 존들을 하나의 냉열 공급영역 (Cooled sector)이라 합니다. 한 냉열 공급영역에 대해, 상이한 용도를 가진 여러 용도가 존재할 수 있습니다. 반대로, 여러 존이 동일한 용도프로필을 가질 수도 있습니다. 건물의 존 안에서, 실내 공조를 위한 냉열 에너지는 HVAC 시스템 또는 실내냉방 시스템으로 공급됩니다. Table 2.4-2. 는 세 가지 다른 용도와 각 용도 별로 서로 다른 수의 건물 존을 갖는 예제이며 조닝 기준을 설명합니다.

<center>
<div><strong>Table 2.4-2. 냉열공급을 위한 조닝</strong></div>
<img alt="냉열공급을 위한 조닝" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4_2.png" style="max-width: 80%;">
</center>

* 한 냉동기가 각 시스템의 냉각 유닛에 공급하는 연간 냉열 에너지공급량은 각 용도 종류 n (용도프로필 참고)으로 나누어 계산합니다. $j$ 개의 건물 존에 대해 공조 시스템과 실내냉방 시스템으로 공급된 각 월별 냉열 에너지공급량을 연간으로 합산하여 냉동기의 연간 총 냉열 에너지공급량을 계산합니다.  
<div align="center">
$$
Q_{C,outg,a,n} = Q_{c,outg,a,n} + Q_{c^{*},outg,a,n} = \sum_{1}^{j} (\sum_{1}^{12} Q_{c,outg,mth,j} + \sum_{1}^{12} Q_{c^{*},outg,mth,j} ) \tag{2.4-3}
$$</div>

* 냉열 공급이 HVAC / 실내냉방 시스템 중 하나에만 공급된다면, 해당되지 않는 항은 0이 됩니다.
* 냉동기 총 연간 냉열 에너지공급량($Q_{C,outg,a}$): 냉열 공급영역을 담당하는 냉동기의 연간 냉열 에너지공급량의 총합은 모든 용도 n에 대한 연간 냉열 에너지공급량의 합입니다.
<div align="center">
$$
Q_{C,outg,a} = \sum^{n}_{1} Q_{C,outg,a,n} \tag{2.4-4}
$$</div>

> Where,  
>
> • $Q_{C,outg,a,n}:$ 용도 n의 공조를 위한 연간 냉열 에너지공급량 [kWh]  
> • $Q_{c,outg,a,n}:$ 용도 n의 실내냉방 시스템으로의 연간 냉열 에너지공급량 [kWh]  
> • $Q_{c^{*},outg,a,n}:$ 용도 n의 HVAC 시스템으로의 연간 냉열 에너지공급량 [kWh]  
> • $Q_{c,outg,mth,j}:$ 존 j의 실내냉방 시스템으로의 월별 냉열 에너지공급량 [kWh]  
> • $Q_{c^{*},outg,mth,j}:$ 존 j의 HVAC 시스템으로의 월별 냉열 에너지공급량 [kWh]  
> • $Q_{C,outg,a}:$ 연간 냉열 에너지공급량 [kWh]  
  

### 2.4.2. 압축식 냉동기의 2차 에너지소요량
* 압축식 냉동기의 2차 에너지소요량 ($Q_{C,f,elektr}$)은  에너지성능지수 (EER)과 평균 부분부하율 ($PLV_{av}$)로 계산할 수 있습니다.
$$
EER \cdot PLV_{av} = SEER = \frac{Q_{C,outg,a}}{Q_{C,f,elektr}} \tag{2.4-5}
$$

$$
Q_{C,f,elektr} = \frac{Q_{C,outg,a}}{EER \cdot PLV_{av}} \tag{2.4-6}
$$

* 에너지성능지수(EER): 정격 냉각 성능($\dot{Q}_{C,outg}$)을 전기적 정격 동력($P_{C,elektr}$)으로 나눈 값입니다.
$$
EER = \frac{\dot{Q}_{C,outg}}{P_{C,elektr}} \tag{2.4-7}
$$

> Where,  
>
> • $EER:$ 에너지 성능지수 (Energy efficiency ratio) [kW/kW]  
> • $SEER:$ 계절별 에너지 성능지수 (Seasonal energy efficiency ratio) [kWh/kWh]  
> • $PLV_{av}:$ 평균 부분부하율  
> • $Q_{C,outg,a}:$ 연간 냉열 에너지공급량 [kWh]  
> • $Q_{C,f,elektr}:$ 압축식 냉동기의 2차 에너지소요량 [kWh]  
> • $\dot{Q}_{C,outg}:$ 압축식 냉동기의 정격 냉열 출력 [kW]  
> • ${P}_{C,elektr}:$ 압축식 냉동기 가동 시 정격 전력 수요 [kW]  
  

* 평균 부분부하율($PLV_{av}$): 냉동기의 EER은 부분부하 조건에 따라 변하며, 변하는 조건들은 평균 부분부하율로 대표됩니다. 평균 부분부하율은 냉동기의 실질적인 부분부하, 냉각수 온도, 외기온도 영향, 부분 부하에서 불일치하는 열교환기의 영향을 고려합니다. 
* 한 용도 당 하나의 실내냉방 시스템 또는 HVAC 시스템만으로 냉열이 공급되는 경우, 부분부하율 $PLV_{av}$를 직접적으로 에너지 평가에 사용할 수 있습니다. 냉열 공급 시 HVAC 및 실내냉방 시스템을 병행으로 사용하는 경우, 부분부하율은 실내냉방 시스템과 HVAC 시스템에 대한 백분율 비율에 따라 가중되어야 합니다.

$$
PLV_{av,n} = \frac{Q_{c,outg,a,n} \cdot PLV_{av} + Q_{c^{*},outg,a,n} \cdot PLV_{av}}{Q_{C,outg,a,n}} \tag{2.4-8}
$$

$$
PLV_{av} = \frac{ \sum_{1}^{n} ( Q_{C,outg,a,n} \cdot PLV_{av,n} ) }{ Q_{C,outg,a} } \tag{2.4-9}
$$

### 2.4.2.1 수냉식 냉동기(Compressor-type refrigeration unit, Water-cooled)
* 제어 방식: 특성치-방법에서는 Table 2.4.2.1-1.의 압축기 유형 및 제어 방식을 고려합니다.
<center>
<div><strong>Table 2.4.2.1-1. 특성치 방법에서 수냉식 냉동기에 대한 부분부하제어의 종류</strong></div>
<img alt="특성치-방법에 있어 수냉식 압축냉동기에 대한 부분부하제어의 종류" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4.1_1.png" style="max-width: 80%;">
</center>

* 수냉식 냉동기의 EER은 설계/제조사에 따라 편차가 크며, 특성치 방법에서는 해당 압축기 유형별 정격 EER의 표준값으로 Table 2.4.2.1-2. 에 있는 값을 사용합니다. 표준 EER 값은 명시된 경계 조건 및 오염 계수 0.044 $m^{2}K/kW$조건에서 사용됩니다. 특성치 방법을 적용할 경우, Table 2.4.1.1-2.에 제시된 표준값만 사용해야 하며, 정격 EER에 대한 제품 데이터는 사용할 수 없습니다. 또한, 정격 냉방 EER은 해당 냉동 과정에 사용되는 냉매에 따라 선택되어야 합니다. 사용된 냉매를 알 수 없을 경우, R134a가 표준으로 사용됩니다. 냉각수 온도는 사용되는 재냉각 유형을 기준으로 선택되어야 합니다. 
냉각수 입/출구 온도는 건식 냉각기 (글리콜 비율 30 %)의 경우 40/45 $^{\circ}C$로, 증발식 재냉각기의 경우 27/33 $^{\circ}C$로 가정합니다. 
* 실질 온도 수준 (Net temperature level)은 설계 및 부하 측의 제어 및 열교환 방식에 의해 결정되며 설계 운전조건 (정격 용량 기준)에 맞게 특정되어야 합니다.
  * 간접 시스템 (e.g. Water cooling)의 경우: 냉수 출구 온도가 설계 변수로 적용되어야 합니다.
  * 직접 증발 시스템 (e.g. Direct evaporation system)의 경우: 평균 증발 온도가 설계 변수로 적용되어야 합니다.
* 조건이 변하는 경우, 보간값을 사용합니다.

<center>
<div><strong>Table 2.4.2.1-2. 수냉식 냉동기에 대한 에너지성능계수 (EER) 표준값</strong></div>
<img alt="수냉식 압축냉동기에 대한 에너지성능계수 EER 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4.1_2.png" style="max-width: 80%;">
</center>

* 특정 용도 및 고려되는 냉동기 유형에 대한 연간 평균 부분부하율은 Annex A.의 값을 사용합니다. 용도가 다른 경우, 가장 유사한 용도를 선택하고, 그 외의 경우 개인 사무실의 부분부하율 값을 적용합니다. 하나의 냉열 공급영역 내에 다수 용도가 있는 경우, 부분부하율은 각 용도의 비율에 따라 가중치로 식 (2.4-9)를 적용하여 계산합니다.
* 또한, 부분부하율은 냉방 유형(HVAC, 실내냉방)의 함수입니다. HVAC의 경우, 요구되는 공조 기능에 따라 구별되어야 합니다. 실내냉방과 HVAC이 병렬로 가동할 경우, 부분부하율은 각 시스템의 비율에 따라 가중치로 식 (2.4-8)을 적용하여 계산되어야 합니다.
* 수냉식 냉동기의 경우, 부분부하율은 냉각수 제어 유형에도 영향을 받습니다. 압축기 출력 제어 및 온도식/전자식 팽창 밸브가 있는 냉각기는 가변 냉각수 조건 운전이 가능합니다.
* 외기조건이 설계조건과 다르고 외기/습구 온도가 낮은 경우, 냉각수 입구 온도가 낮아짐에 따라 냉방 에너지 수요가 감소합니다 (부분부하율의 증가).
* 특성치 방법을 위해 결정된 부분부하율은 출력 제어가 되는 모든 압축기에 대해 최소 냉각수 출구 온도를 20 $^{\circ}C$로 설정합니다. 만약 일정한 냉각수 조건의 냉각수 제어 사용이 계획된 경우, 부분부하율은 왼쪽 열의 값을, 가변 냉각수 조건의 경우, 오른쪽 열의 값을 사용해야 합니다.

### 2.4.2.2. 공랭식 냉동기(Air-cooled chiller)
* 제어 방식: 특성치 방법에서는 Table 2.4.2.2-1.의 압축기 유형 및 제어 방식을 고려합니다.
<center>
<div><strong>Table 2.4.2.2-1. 특성치 방법에 있어 공랭식 냉동기에 대한 부분부하 제어의 종류</strong></div>
<img alt="특성치-방법에 있어 공랭식 압축냉동기에 대한 부분부하제어의 종류" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4.2_1.png" style="max-width: 80%;">
</center>

* 공랭식 냉동기의 정격 EER은 설계/제조사에 따라 편차가 큽니다. 특성치 방법의 경우, 해당 압축기의 유형별 정격 EER의 표준값은 Table 2.4.2-2.의 값을 사용합니다. 표의 표준값은 외기온도 32$^{\circ}C$ (습구온도 21 $^{\circ}C$) 및 0.044 $m^{2}K/kW$의 오염 계수를 가정합니다. 특성치 방법을 적용할 경우, Table 2.4.2.2-2.의 표준값만 사용해야 하며, 정격 EER에 대한 제품 데이터는 사용할 수 없습니다. 또한, 정격 냉방 EER은 해당 냉동 과정에 사용되는 냉매에 따라 선택되어야 합니다. 사용된 냉매를 알 수 없을 경우, R134a가 표준으로 사용됩니다.
* 실질 온도 수준 (Net temperature level)은 설계 및 부하 측의 제어 및 열교환 방식에 의해 결정되며 설계 운전조건 (정격 용량 기준)에 맞게 특정되어야 합니다.
  * 간접 시스템 (e.g. Water cooling)의 경우: 냉수 출구 온도가 설계 변수로 적용되어야 합니다.
  * 직접 증발 시스템 (e.g. Direct evaporation system)의 경우: 평균 증발 온도가 설계 변수로 적용되어야 합니다.
* 조건이 변하는 경우, 보간값을 사용합니다.
* 공랭식 냉동기에 대해 정격 EER은 모든 시스템 내 보조에너지 요구량 (특히 재냉각 팬을 위한 전기 에너지)를 포함합니다.

<center>
<div><strong>Table 2.4.2.2-2. 공랭식 냉동기에 대한 에너지성능계수 EER 표준값</strong></div>
<img alt="공랭식 압축냉동기에 대한 에너지성능계수 EER 표준값" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4.2_2.png" style="max-width: 80%;">
</center>

* 특정 용도 및 고려되는 냉동기 유형에 대한 연간 평균 부분부하율은 Annex A.의 값을 사용합니다. 용도가 다른 경우, 가장 유사한 용도를 선택하고, 그 외의 경우 개인 사무실의 부분부하율 값을 적용합니다. 하나의 냉열 공급영역 내에 다수 용도가 있는 경우, 부분부하율은 각 용도의 비율에 따라 가중치로 식 (2.4-9)를 적용하여 계산합니다.
* 또한, 부분부하율은 냉방 유형(HVAC, 실내냉방)의 함수입니다. HVAC의 경우, 요구되는 공조 기능에 따라 구별되어야 합니다. 실내냉방과 HVAC이 병렬로 가동할 경우, 부분부하율은 각 시스템의 비율에 따라 가중치로 식 (2.4-8)을 적용하여 계산되어야 합니다.

### 2.4.2.3. 공랭식 실내냉방시스템(Room air conditioning system, Air-cooled)
* 제어 방식: 특성치 방법에서는 Table 2.4.2.3-1.의 부분 부하 제어 종류를 고려합니다.
<center>
<div><strong>Table 2.4.2.3-1. 특성치 방법에 있어 공랭식 실내냉방시스템에 대한 부분부하제어의 종류</strong></div>
<img alt="특성치-방법에 있어 공랭식 실내냉방시스템에 대한 부분부하제어의 종류" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4.3_1.png" style="max-width: 80%;">
</center>

* 실내냉방 시스템의 EER 표준값은 Table 2.4.2.3-2. 및 Table 2.4.2.3-3. 에 있습니다. 표준 EER 값은 외기온도 32 $^{\circ}C$ (습구온도 21 $^{\circ}C$) 및 실내온도 26 $^{\circ}C$ (습구온도 19 $^{\circ}C$)을 가정합니다.
* 에너지요구량 계산 시, 표의 정격 EER 표준값만 사용해야 하며 제품 데이터의 정격 EER 값은 사용할 수 없습니다.
* 이러한 제한은 냉수 시스템과 실내냉방 시스템의 에너지 사용량을 공정하게 비교하기 위해 필요합니다.

<center>
<div><strong>Table 2.4.2.3-2. 12kW 이하의 공랭식 실내냉방시스템에 대한 에너지성능지수 EER</strong></div>
<img alt="12kW 이하의 공랭식 실내냉방시스템에 대한 에너지성능지수 EER" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4.3_2.png" style="max-width: 80%;">
</center>
<center>
<div><strong>Table 2.4.2.3-3. 12kW 이상의 공랭식 실-공조시스템에 대한 에너지성능계수 EER</strong></div>
<img alt="12kW 이상의 공랭식 실-공조시스템에 대한 에너지성능계수 EER" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.4.3_3.png" style="max-width: 80%;">
</center>

* 특정 용도 및 고려되는 냉동기 유형에 대한 연간 평균 부분부하율은 Annex A.의 값을 사용합니다. 용도가 다른 경우, 가장 유사한 용도를 선택하고, 그 외의 경우 개인 사무실의 부분부하율 값을 적용합니다. 하나의 냉열 공급영역 내에 다수 용도가 있는 경우, 부분부하율은 각 용도의 비율에 따라 가중치로 식 (2.4-9)를 적용하여 계산합니다.

---

## 2.5. 흡수식 냉동기의 열 에너지요구량
* 흡수식 냉동기 운전에 요구되는 열 에너지공급량을 계산합니다. 흡수식 냉동기의 에너지 계산은 정격 열성능비(ζ)와 평균 부분부하율($PLV_{av}$)을 기반으로 합니다.
$$
\zeta_{av} = \zeta \cdot PLV_{av} = \frac{Q_{C,outg,a}}{Q_{C,outg,therm}} \tag{2.5-1}
$$

* 흡수식 냉동기 운전을 위한 열 에너지공급량($Q_{C,outg,therm}$): 흡수식 냉동기의 연간 냉열 에너지공급량($Q_{C,outg,a}$)과 연간 평균 열성능비($ζ_{av}$)로 계산됩니다.
$$
Q_{C,outg,therm} = \frac{Q_{C,outg,a}}{\zeta \cdot PLV_{av}} \tag{2.5-2}
$$

* 정격 열성능비(ζ): 흡수식 냉동기의 정격 냉열 출력($\dot{Q}_{C,outg}$)과 정격 열 소비($\dot{Q}_{C,therm}$)의 비율 입니다.  

<div align="center">$$
\zeta = \frac{\dot{Q}_{C,outg}}{\dot{Q}_{C,therm}} \tag{2.5-3}
$$</div>  

> Where,  
>
> • $ζ:$ 정격 열성능비 [kW/kW]  
> • $ζ_{av}:$ 연간 평균 열성능비 [kWh/kWh]  
> • $Q_{C,outg,therm}:$ 흡수식 냉동기 운전에 요구되는 열 에너지공급량 [kWh]  
> • $\dot{Q}_{C,outg}:$ 흡수식 냉동기의 정격 냉열 출력 [kW]  
> • $\dot{Q}_{C,therm}:$ 흡수식 냉동기의 정격 열 소비 [kW]  

* 흡수식 냉동기의 열성능비는 부분부하 조건에 따라 변하며 부분부하율은 실제 부분부하 특성, 냉각수 온도의 영향, 부분부하 조건에서 치수가 부정확하게 산정될 수 있는 열교환기의 영향을 반영합니다.
* 특성치 방법에서는 1단 $H_{2}O/LiBr$ 흡수식 냉동기만 고려합니다.
* 정격 열성능비는 제품에 설계/제조사에 따라 다르며, 특성치 방법에서는 Table 2.5-1.의 정격 열성능비 값만 사용해야 합니다. 표에 데이터가 없는 경우, 시스템 경계 조건이 허용되지 않음을 나타냅니다. 이 정격 열성능비 값은 표에 명시된 경계 조건 및 0.044 $m^{2}K/kW$의 오염 계수를 가정합니다.
* 1단 흡수식 냉동기의 정격 열성능비는 사용가능한 열매체 (heating medium) 온도에 기반하여 선택되어야 하며, 중간값은 보간하여 계산합니다.
* 냉각수 온도는 사용되는 재냉각 유형에 따라 선택되어야 하며, 냉각수 입/출구 온도는 건식 냉각기 (글리콜 함량 30 %)의 경우 40/45 $^{\circ}C$로, 증발식 재냉각기의 경우 27/33 $^{\circ}C$로 가정합니다. 증발식 재냉각기가 일반적으로 권장됩니다.
* 실질 온도 수준 (Net temperature level)은 설계 및 부하 측의 제어 및 열교환 방식에 따라 결정됩니다. 이 값은 설계 운전조건 (정격 용량 기준)에 맞게 특정되어야 하며, 냉수 출구 온도가 설계 사양 변수 (design specification parameter)로 사용됩니다. 조건이 달라지는 경우, 보간한 값을 사용합니다.

<center>
<div><strong>Table 2.5-1. 정격 열성능비</strong></div>
<img alt="열성능비" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.5_4.png" style="max-width: 80%;">
</center>

* 특정 용도에 대한 연간 평균 부분부하율은 Annex A.의 값을 사용합니다. 용도가 다른 경우, 가장 유사한 용도를 선택하고, 그 외의 경우 개인 사무실의 부분부하율 값을 적용합니다. 하나의 냉열 공급영역 내에 다수 용도가 있는 경우, 부분부하율은 각 용도의 비율에 따라 가중치로 식 (2.4-9)를 적용하여 계산합니다.
* 또한, 부분부하율은 냉방 유형(HVAC, 실내냉방)의 함수입니다. HVAC의 경우, 요구되는 공조 기능에 따라 구별되어야 합니다. 실내냉방과 HVAC이 병렬로 가동할 경우, 부분부하율은 각 시스템의 비율에 따라 가중치로 식 (2.4-8)을 적용하여 계산되어야 합니다.
* 부분부하율은 냉각수 제어 유형에도 영향을 받습니다. Annex A. 의 다양한 용도별 부분부하 값은 증발식 재냉각기의 경우 27 $^{\circ}C$, 건식 재냉각기의 경우 40 $^{\circ}C$로 제어되는 냉각수 유입 온도를 반영합니다.
* 외기조건이 설계조건과 다르고 외기/습구 온도가 낮은 경우, 냉각수 입구 온도가 낮아짐에 따라 냉방 에너지 수요가 감소합니다 (부분부하율의 증가).
* 가변 냉각수 유입 온도에 대한 부분부하 값은 1단 흡수식 냉동기에 대해 최소 냉각수 출구 온도를 20 $^{\circ}C$로 설정합니다. 만약 일정한 냉각수 조건의 냉각수 제어 사용이 계획된 경우, 부분부하율은 왼쪽 열의 값을, 가변 냉각수 조건의 경우, 오른쪽 열의 값을 사용해야 합니다.
  

* 다른 절과 연계되는 변수:
흡수식 냉동기의 가열을 위한 열매체로 증기를 사용하므로 흡수식 냉동기의 운전을 위한 열 에너지공급량은 가습 에너지소요량에서 계산합니다.
* 월별 열 에너지공급량($Q_{C,outg,therm,mth}$): 특성치 방법에서 흡수식 냉동기의 운전을 위한 열 에너지공급량 ($Q_{C,outg,therm,a}$)은 연간으로 계산되므로 월별 값으로 환산되어야 합니다. 비율은 흡수식 냉동기의 각 월별 냉열 에너지공급량과 연간 냉열 에너지공급량의 비율을 따릅니다 (식 2.5-4).
* 이를 위해, 각 용도 n에 대한 월별 흡수식 냉동기의 냉열 에너지공급량이 먼저 계산되어야 하고, 냉열 공급영역과 관련된 용도를 합산해야 합니다.

$$
Q_{C,outg,mth,n} = \sum^{j}_{1} (Q_{c,outg,mth,j} + Q_{c^{*},outg,mth,j}) \tag{2.5-4}
$$

$$
Q_{C,outg,mth} = \sum^{n}_{1} Q_{C,outg,mth,n} \tag{2.5-5}
$$

$$
Q_{C,outg,therm,mth} = Q_{C,outg,therm,a} \cdot ( \frac{Q_{C,outg,mth}}{Q_{C,outg,a}} ) \tag{2.5-6}
$$

> Where,  
>
> • $Q_{C,outg,mth,n}:$ 월별 냉열 에너지공급량 (용도 n에 따른) [kWh]  
> • $Q_{c,outg,mth,j}:$ 월별 실내냉방 시스템에 대한 냉열 에너지공급량 (각 존 j) [kWh]  
> • $Q_{c^{*},outg,mth,j}:$ 월별 HVAC 시스템에 대한 냉열 에너지공급량 (각 존 j) [kWh]  
> • $Q_{C,outg,mth}:$ 월별 냉열 에너지공급량 [kWh]  
> • $Q_{C,outg,therm,mth}:$ 흡수식 냉동기에 대한 월별 열 에너지공급량 [kWh]  

* 정격 가열 성능($\dot{Q}_{C,therm}$): 온수 난방 배관망을 열 공급에 사용할 경우, 흡수식 냉동기 운전을 위한 정격 열 에너지요구량은 난방 에너지소요량 절에서 열 생산기기의 총 열 에너지공급량 계산을 위한 입력값으로 사용됩니다.

$$
\dot{Q}_{C,therm} = \frac{\dot{Q}_{C,outg}}{\zeta} (\dot{Q}_{C,outg} = \sum(\dot{Q}_{C,max}; \dot{Q}_{C^{*},max}) \tag{2.5-7}
$$

> Where,  
>
> • $\dot{Q}_{C,therm}:$ 흡수식 냉동기의 정격 열 출력 [kW]  
> • $\dot{Q}_{C,outg}:$ 흡수식 냉동기의 정격 냉열 출력 [kW]  
> • $\zeta:$ 정격 열성능비 [kW/kW]  

---

## 2.6. 재냉각의 에너지소요량 (Energy use)
* 재냉각의 에너지소요량은 재냉각기의 기기 구성 특징에 기반을 둔 전기 에너지 수요($q_{R,elektr}$)과 재냉각의 평균 이용 계수($f_{R,av}$)을 기반으로 계산합니다.
<div align="center">
$$
Q_{C,f,R,elektr} = \dot{Q}_{R,outg} \cdot q_{R,elektr} \cdot f_{R,av} \cdot t_{R,op} \tag{2.6-1}
$$</div>

$$
\dot{Q}_{R,outg} = \dot{Q}_{c,outg} \cdot (1 + \frac{1}{EER}) \quad \text{(압축식 냉동기)} \tag{2.6-2}
$$

$$
\dot{Q}_{R,outg} = \dot{Q}_{c,outg} \cdot (1 + \frac{1}{\zeta}) \quad \text{(흡수식 냉동기)} \tag{2.6-3}
$$

> Where,  
>
> • $Q_{C,f,R,elektr}:$ 재냉각 시스템의 전기 에너지소요량 [kWh]  
> • $\dot{Q}_{R,outg}:$ 재냉각 시스템의 정격 냉열 출력 [kW]  
> • $\dot{Q}_{c,outg}:$ 냉동기의 냉열 출력 [kW]  
> • $q_{R,elektr}:$ 재냉각 시스템의 단위 전기에너지 수요 [kW]  
> • $f_{R,av}:$ 재냉각의 평균 이용 계수  
> • $t_{R,op}:$ 재냉각 운전시간 [h]  
> • $EER:$ 에너지 성능 지수 (압축식 냉동기) [kW/kW]  
> • $\zeta:$ 정격 열성능비 (흡수식 냉동기) [kW/kW]  

* 특성치 방법을 적용할 때, 증발식 재냉각 (개방형 및 밀폐형 냉각수 순환망)과 건식 재냉각 시스템은 구별됩니다. Table 2.6-4.는 보조 방음기 유무에 따른 단위 전기에너지 수요입니다. 

<center>
<div><strong>Table 2.6-4. 재냉각기의 단위 전기에너지 수요 \(q_{R,elektr}\)</strong></div>
<img alt="재냉각기의 고유 전기에너지요구량" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.6_4.png" style="max-width: 80%;">
</center>

* 증발식 재냉각 시스템의 평균 이용 계수 ($f_{R,av}$)는 Annex A. 에서 해당 용도에 대한 $f_{R,VK}$ 값을 사용할 수 있습니다 (개방형/밀폐형 모두 가능). 건식 재냉각 시스템의 경우, $f_{R,TK}$ 값을 사용할 수 있습니다.
* 용도프로필에 없는 용도일 경우, 계획된 용도프로필과 일치하는 용도를 선택해야 합니다. 다른 데이터가 없는 경우, 개인 사무실 용도의 부분부하 값을 사용합니다. 냉동기 평가를 위해 명시된 설계 사양 (design-specification)의 냉각수 온도 수준에 해당하는 값을 적용해야 합니다. 재냉각에 대한 특성치는 냉각수 온도 제어 모드 및 해당 냉동기의 부분부하율 값과 연관되어 선택되어야 합니다.
* 만약 동일한 용도 내에서 단일 실내냉방 시스템 또는 HVAC 시스템에만 냉방 에너지가 공급될 경우, $f_{R,av}$를 에너지 평가에 직접 사용할 수 있습니다. 실내냉방 시스템과 HVAC 시스템이 병렬 운전할 경우, 특성치는 각 시스템의 비율에 따라 가중치 계산되어야 합니다.

$$
f_{R,av,n} = \frac{Q_{c,outg,a,n} \cdot f_{R,av} + Q_{c^{*},outg,a,n} \cdot f_{R,av}}{Q_{C,outg,a,n}} \tag {2.6-4}
$$

$$
Q_{C,outg,a,n} = Q_{c,outg,a,n} + Q_{c^{*},outg,a,n} \tag {2.6-5}
$$

특정 냉열 공급영역에 하나의 용도만 있는 경우, $f_{R,av,n}$은 에너지 평가 계산에 직접적으로 사용 가능합니다. 특정 냉열 공급영역에 여러 용도가 있는 경우, 특성치는 각 용도의 비율에 따라 가중치 계산되어야 합니다.
$$
f_{R,av} = \sum_{1}^{n} ( \frac{Q_{C,outg,a,n} \cdot f_{R,av,n}}{Q_{C,outg,a}} ) \tag {2.6-6}
$$

> Where,  
>
> • $f_{R,av,n}:$ 용도 n에 따른 재냉각 평균 이용 계수  
> • $Q_{C,outg,a,n}:$ 용도 n에 따른 냉동기의 연간 냉열 에너지공급량 [kWh]  
> • $Q_{c,outg,a,n}:$ 용도 n에 따른 실내냉방 시스템으로의 연간 냉열 에너지공급량 [kWh]  
> • $Q_{c^{*},outg,a,n}:$ 용도 n에 따른 HVAC 시스템으로의 연간 냉열 에너지공급량 [kWh]  

* 재냉각 가동시간 ($t_{R,op}$)은 용도마다 HVAC 시스템 냉각유닛 또는 실내냉방 시스템의 월별 요구 운전시간의 연간 합 중 최대값으로 가정합니다. 
$$
t_{R,op,n} = \max (\sum_{1}^{12} t_{c^{*},op,mth};\sum_{1}^{12} t_{c,op,mth})_n \tag{2.6-7}
$$

하나의 냉열 공급영역 내에 여러 용도가 있는 경우, 각 용도에 대한 $t_{R,op,n}$ 중 최대값이 요구 운전시간으로 결정됩니다.
$$
t_{R,op} = \max (t_{R,op,n}) \tag {2.6-8}
$$

* 다른 장과 연계되는 변수:
재냉각 시스템의 전기 에너지소요량 $Q_{C,f,R,elecktr}$의 연간 합이 총 에너지소요량 계산에 사용됩니다.

**-냉각과 분배를 위한 에너지소요량의 구성요소**
* 간접 냉방 시스템에서, 냉각, 제어, 분배를 포합하는 전체 시스템의 에너지 특성을 평가 할 때 Table 2.6-8.의 에너지 변수가 고려되어야 합니다. 

<center>
<div><strong>Table 2.6-8. 간접 냉방 시스템(냉동기)의 에너지평가를 위한 요구량</strong></div>
<img alt="간접 시스템(수냉각기)의 에너지평가를 위한 요구량" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.6_9.png" style="max-width: 80%;">
</center>

* 직접 냉방 시스템에서, 생산, 분배를 포합하는 전체 시스템의 에너지 특성을 평가 할 때 Table 2.6-10.의 에너지 변수가 고려되어야 합니다.

<center>
<div><strong>Table 2.6-10. 직접 냉방 시스템의 에너지평가를 위한 요구량 (직접식 증발기)</strong></div>
<img alt="직접 시스템의 에너지평가를 위한 요구량 (직접 증발기)" src="https://verycoldplay.github.io/eco2_guide_center/_tables/2.6_10.png" style="max-width: 80%;">
</center>

---

## 2.7. 에너지소요량 (Energy use)
냉열 에너지 생산과 관련된 특성치 방법은 연간 값을 기준으로 합니다. 월별 값 계산도 가능하지만, 정확한 분배는 불가능합니다.

### 2.7.1. 압축식 냉동기의 전기 에너지
* 압축식 냉동기와 실내 냉방 시스템의 연간 전기 에너지소요량은 모든 냉열 생산기기의 합으로 계산됩니다.
$$
Q_{c,f,j,elektr} = \sum Q_{c,f} \tag{2.7.1-1}
$$

* 특성치 방법에서는 생산 손실을 이미 고려하므로,
$$
Q_{c,g} = Q_{c^{*},g} = 0 \tag{2.7.1-2}
$$

* 신재생에너지로 생산된 냉열 에너지는 아래 식과 같습니다.  
<div align="center">$$
Q_{c,reg} = Q_{c,outg} - Q_{c,f}\ \text{or} \  Q_{c^{*},reg} = Q_{c^{*},outg} - Q_{c^{*},f} \ \text{or} \ Q_{C,outg} - Q_{C,f} \tag{2.7.1-3}
$$
</div>  


### 2.7.2. 흡수식 냉동기의 열 에너지 (증기)
110℃ 이하 온도에서 필요한 열 에너지는 난방 에너지소요량에서 계산됩니다.
$$
Q_{c,f,j,therm} = Q_{c,f} \tag{2.7.2-1}
$$

증기 공급은 1차 에너지 관점에서 지역난방과 동일하게 다루어집니다.

### 2.7.3. HVAC 및 실내냉방 시스템에 대한 보조에너지 (전기)
* HVAC, 냉동기, 실내냉방 시스템을 위한 연간 총 보조에너지는 모든 냉열 이용유닛/냉열 공급영역에 대해, 실내냉방 및 공조냉방을 위한 모든 HVAC 시스템과 냉동기에 사용된 보조에너지의 총합입니다. 만약 보조에너지를 월별로 계산해야 할 경우, 특성치 방법으로는 불가능하므로, HVAC 시스템에 대해 열 에너지를 비례 분배하는 것이 가능합니다.
$$
Q_{C,max} = \sum Q_{c^{*},aux,a} + \sum Q_{c,aux,a} = \sum Q_{c,ce,aux,a} + \sum Q_{Z,aux,d,a} + \sum Q_{hr,f,aux,a} + \sum Q_{mh,f,aux,a} + \sum Q_{C,f,R,elektrisch} \tag{2.7.3-1}
$$

> Where,  
>
> • $Q_{C,aux}:$ 냉방를 위한 연간 보조에너지 [kWh]  
> • $\sum Q_{c^{*},aux,a}:$ HVAC 시스템의 연간 보조에너지 [kWh]  
> • $\sum Q_{c,aux,a}:$ 실내냉방 시스템의 연간 보조에너지 [kWh]  
> • $\sum Q_{Z,aux,d,a}:$ 중앙 냉수 분배망의 연간 분배 보조에너지 [kWh]  
> • $\sum Q_{hr,f,aux,a}:$ 열회수기의 연간 보조에너지 [kWh] (공조 에너지소요량 참고)  
> • $\sum Q_{mh,f,aux,a}:$ 가습기 펌프의 연간 보조에너지 [kWh] (공조 에너지소요량 참고)  
> • $\sum Q_{C,f,R,elektrisch}:$ 재냉각 시스템의 연간 전기 에너지소요량 [kWh]  

* 증기 생산을 위한 보조에너지는 고려하지 않습니다.
$$
Q_{m^{*},aux} = 0 \tag{2.7.2-2}
$$