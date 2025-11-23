# 3. 급탕 에너지소요량 (Energy use for hot water system)

## Nomenclature

### Symbols


<table class="nomenclature">
  <thead style="background:#f5f7fa;">
    <tr><th>Symbol</th><th>Meaning</th><th>Unit</th></tr>
  </thead>
  <tbody>
    <tr><td>\(\Delta \vartheta\)</td><td>온도차 (Temperature difference)</td><td>K</td></tr>
    <tr><td>d</td><td>일수 (Days)</td><td>d</td></tr>
    <tr><td>f</td><td>계수 (Factor, Coefficient)</td><td>-</td></tr>
    <tr><td>L</td><td>배관 길이 (Pipe length)</td><td>m</td></tr>
    <tr><td>n</td><td>횟수 (Number)</td><td>-</td></tr>
    <tr><td>Q</td><td>에너지 (Energy)</td><td>kWh</td></tr>
    <tr><td>\(\dot{Q}\)</td><td>성능, 출력 (Power, Output)</td><td>kW</td></tr>
    <tr><td>q</td><td>열손실/열손실률 (Heat loss/rate)</td><td>kWh/d</td></tr>
    <tr><td>t</td><td>시간 (Time)</td><td>h</td></tr>
    <tr><td>U</td><td>열관류율 (Heat transfer coefficient)</td><td>W/m²K</td></tr>
    <tr><td>UA</td><td>열손실율 (Heat loss rate)</td><td>W/K</td></tr>
    <tr><td>V</td><td>용량 (Volume)</td><td>ℓ</td></tr>
    <tr><td>\(\eta\)</td><td>효율 (Efficiency)</td><td>-</td></tr>
    <tr><td>\(\vartheta\)</td><td>온도 (Temperature)</td><td>°C</td></tr>
  </tbody>
</table>



### Subscripts

<table class="nomenclature">
  <thead style="background:#f5f7fa;">
    <tr><th>Subscript</th><th>Meaning</th><th>Subscript</th><th>Meaning</th></tr>
  </thead>
  <tbody>
    <tr><td>100%</td><td>정격부하 (100% load)</td><td>70</td><td>ΔT = 70 K 기준</td></tr>
    <tr><td>a</td><td>연간 (Annual)</td><td>aux</td><td>보조 (Auxiliary)</td></tr>
    <tr><td>B</td><td>대기/정지/요소 (Stand-by, Shut down, Components)</td><td>b</td><td>요구량 (Need)</td></tr>
    <tr><td>ce</td><td>전달 (Transmission)</td><td>d</td><td>분배 (Distribution)</td></tr>
    <tr><td>DS</td><td>지역난방 기계실 (Dwelling substation)</td><td>f</td><td>소요량, 계수 (Energy use / factor)</td></tr>
    <tr><td>g</td><td>생산 (Generation)</td><td>gleichzeitig</td><td>동시 (Simultaneous)</td></tr>
    <tr><td>h</td><td>난방 (Heating)</td><td>Hs/Hi</td><td>고위/저위발열량 비 (Gross/Net calorific value)</td></tr>
    <tr><td>I</td><td>존의 비제어적 열유입 (Uncontrolled zone heat gain)</td><td>i</td><td>구간 (Section)</td></tr>
    <tr><td>in</td><td>유입 (Inlet, Gain)</td><td>K</td><td>냉수 (Cold water)</td></tr>
    <tr><td>k</td><td>보일러 (Boiler)</td><td>m</td><td>평균 (Mean, Average)</td></tr>
    <tr><td>mth</td><td>월/월별 (Month, Monthly)</td><td>N</td><td>정격 (Rated/Nominal)</td></tr>
    <tr><td>Nutz</td><td>이용 (Usage)</td><td>outg</td><td>공급량 (Output)</td></tr>
    <tr><td>prim</td><td>1차측 (Primary)</td><td>rB</td><td>설계 운전시간 (Design operation time)</td></tr>
    <tr><td>reg</td><td>신재생 (Renewable)</td><td>S</td><td>저장 (Storage)</td></tr>
    <tr><td>s</td><td>저장 (Storage)</td><td>SB</td><td>대기 (Stand-by)</td></tr>
    <tr><td>sek</td><td>2차측 (Secondary)</td><td>sol</td><td>태양열 (Solar)</td></tr>
    <tr><td>Sp</td><td>순간 최대 취수 (Peak tapping)</td><td>T</td><td>일 (Day)</td></tr>
    <tr><td>verbindung</td><td>연결배관 (Connecting pipes)</td><td>Vorrangig</td><td>순차/우선 (Priority)</td></tr>
    <tr><td>w</td><td>급탕 (Hot water)</td><td></td><td></td></tr>
  </tbody>
</table>



## 3.1. 개요

급탕 에너지소요량에서는 급탕 시스템 (Domestic hot water system)의 열 생산 (generation), 전달 (control and emission), 분배 (distribution), 저장 (storage)의 에너지소요량 (Energy use)를 설명합니다. 열 손실 (Thermal losses)과 보조에너지 (Auxiliary energy)가 산정되며, 난방 존 (heated zone) 내에서 발생할 경우, 존의 부하에 포함됩니다.

### 3.1.1. 급탕 열 생산기기의 열 에너지공급량 (Heat output)

* 급탕 열 생산기기의 열 에너지공급량은 존의 급탕 요구량 및 전달, 분배, 저장 손실을 합산합니다.

$$
Q_{w,outg} = Q_{w,b} + Q_{w,ce} + Q_{w,d} + Q_{w,s} \tag{3.1-1}
$$

### 3.1.2. 급탕 열 생산기기의 열 에너지소요량 (Energy use)

급탕 열 생산기기의 에너지소요량 ($Q_{w,f}$)은 열 생산기기의 열 에너지공급량($Q_{w,outg}$), 생산 손실 ($Q_{w,g}$) 및 신재생에너지 (태양열 등) 및 주변 열 유입에 의해 계산됩니다.

$$
Q_{w,f} = Q_{w,outg} + Q_{w,g} - Q_{w,reg} \tag{3.1-2}
$$

$$
Q_{w,reg} = Q_{w,sol} + Q_{w,in} \tag{3.1-3}
$$

> Where,  
>
> • $Q_{w,f}:$ 급탕 열 생산기기의 열 에너지소요량 (해당 월 기준) [kWh]  
> • $Q_{w,outg}:$ 급탕 열 생산기기의 열 공급량 (해당 월 기준) [kWh]  
> • $Q_{w,g}:$ 급탕 열 생산기기의 열 생산과정 손실 (해당 월 기준) [kWh]  
> • $Q_{w,reg}:$ 신재생에너지(태양열 등) (해당 월 기준) [kWh]  
> • $Q_{w,in}:$ 주변 열 유입 (Ambient heat) (해당 월 기준) [kWh]  
> • $Q_{w,sol}:$  태양열 에너지 유입 (해당 월 기준) [kWh]  

### 3.1.3. 급탕 시스템의 보조에너지 (Auxiliary energy)

급탕 시스템의 보조에너지는 다음과 같습니다.

$$
Q_{w,aux}=Q_{w,ce,aux}+Q_{w,d,aux}+Q_{w,s,aux}+Q_{w,g,aux} \tag{3.1-4}
$$

> Where,  
>
> • $Q_{w,aux}:$ 급탕 시스템의 보조에너지 (해당 월 기준) [kWh]  
> • $Q_{w,ce,aux}:$ 급탕 시스템의 전달 과정 보조에너지 (해당 월 기준) [kWh]  
> • $Q_{w,d,aux}:$ 급탕 시스템의 분배 과정 보조에너지 (해당 월 기준) [kWh]  
> • $Q_{w,s,aux}:$ 급탕 시스템의 저장 과정 보조에너지 (해당 월 기준) [kWh]  
> • $Q_{w,g,aux}:$ 급탕 시스템의 생산 과정 보조에너지 (해당 월 기준) [kWh]  

### 3.1.4. 존으로의 비제어적 열 획득 (Uncontrolled heat gains)

급탕 시스템의 비제어적 열 획득은 다음과 같습니다.

$$
Q_{I,w}=Q_{I,w,d}+Q_{I,w,s}+Q_{I,w,g} \tag{3.1-5}
$$

> Where,  
>
> • $Q_{I,w}:$ 급탕 시스템으로부터 존으로의 비제어적 열 획득 (해당 월 기준) [kWh]  
> • $Q_{I,w,d}:$ 급탕 시스템 분배 손실로부터 존으로의 비제어적 열 획득 (해당 월 기준) [kWh]  
> • $Q_{I,w,s}:$ 급탕 시스템 저장 손실로부터 존으로의 비제어적 열 획득 (해당 월 기준) [kWh]  
> • $Q_{I,w,g}:$ 급탕 시스템 생산 손실로부터 존으로의 비제어적 열 획득 (해당 월 기준) [kWh]  

## 3.2. 경계 조건 설정

제조사의 제품 데이터가 있는 경우, 사용 가능합니다. 제품 데이터가 없는 경우, Table. 3.2-1. 에 주어진 표준값을 사용합니다. 표준값은 평균 이하 수준의 제품들을 대변하므로, 일반적으로 실제 제품/설계 데이터를 사용하는 것이 계산에 유리합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <title>일반적인 경계조건</title>
   <style>
      table {
         border-collapse: collapse;
         width: 80%;
         font-size: 14px;
         text-align: center;
         margin: 0 auto;
      }
      th, td {
         border: 1px solid black;
         padding: 6px 10px;
      }
   </style>
</head>

<p><strong>&lt;Table 3.2-1. 일반적인 경계조건&gt;</strong></p>

<table>
   <tr>
      <th>변수명</th>
      <th>Symbol</th>
      <th>단위</th>
      <th>값</th>
   </tr>

   <tr>
      <td>난방 존의 평균 실내 온도 (난방 에너지요구량에서 설정되지 않을 경우)</td>
      <td>\(\vartheta_{i}\)</td>
      <td>°C</td>
      <td>20</td>
   </tr>

   <tr>
      <td>비난방 존의 평균 실내 온도 (난방 에너지요구량에서 설정되지 않을 경우)</td>
      <td>\(\vartheta_{i}\)</td>
      <td>°C</td>
      <td>13</td>
   </tr>

   <tr>
      <td>순환이 없는/정지된 급탕 분배 배관망의 평균 온도</td>
      <td>\(\vartheta_{w,m}\)</td>
      <td>°C</td>
      <td>25 · U<sup>-0.2</sup></td>
   </tr>

   <tr>
      <td>순환/동파 방지 열선이 있는 급탕 분배 배관망과 온수 탱크의 평균 온도</td>
      <td>\(\vartheta_{w,m}\)</td>
      <td>°C</td>
      <td>50</td>
   </tr>

   <tr>
      <td>냉수 유입 온도</td>
      <td>\(\vartheta_{k}\)</td>
      <td>°C</td>
      <td>10</td>
   </tr>

   <tr>
      <td>순환 루프의 온도차</td>
      <td>\(\Delta \vartheta_{z}\)</td>
      <td>K</td>
      <td>5</td>
   </tr>
</table>

</html>


* 순환 설비가 없거나/정지된 경우, 급탕 배관망의 평균 온도는 단열재의 열관류율의 함수로 주어집니다.

$$
\vartheta_{w,m} = 25 \cdot U^{-0.2} \ [^{\circ}C] \tag{3.2-1}
$$

## 3.3. 급탕 시스템의 전달, 분배, 저장, 생산 손실

### 3.3.1. 전달 손실

사용자 부분에서 사용되지 않고 배출되는 급탕수로 인한 열 손실은 이미 존의 급탕 에너지요구량 $Q_{w,b}$에 포함되어 있으므로 전달 손실 ($Q_{w,ce}$)과 전달 과정 보조에너지 ($Q_{w,ce,aux}$)는 0으로 계산합니다. 사용자 부분에서 버려지는 물은 고려하지 않습니다.

### 3.3.2. 분배 손실

#### 3.3.2.1. 중앙 공급식 급탕 시스템의 분배 손실

* 급탕배관망을 따라 분배되는 중앙 공급식 급탕의 경우, 배관망 중 구간 i에서의 분배 손실은 다음과 같이 계산됩니다.

$$
Q_{w,d,i} = \frac{1}{1000} \cdot U_i \cdot L_i \cdot (\vartheta_{w,m} - \vartheta_i) \cdot d_{Nutz,mth} \cdot t_{Nutz,T} \tag{3.3-1}
$$

* 순환 설비가 있는 시스템의 열 손실은 순환 펌프가 운전하는 동안의 손실과 간헐적 운전 (intermittent operation) 기간 동안의 손실을 포함합니다. 순환 배관 또는 전기 열선이 있는 배관의 경우, 간헐적 운전 동안 $t_{Nutz,T}=24h - z$ (비운전 시간), $\vartheta_{w,m}=25 \cdot U^{-0.2}$를 사용하여 계산되며, 이 때 배관 길이는 순환 배관 총 길이의 절반을 가정합니다.
* 순환 배관이 없는 급탕 시스템과 지관 (branch)은 $t_{Nutz,T}=24$ 및 $\vartheta_{w,m}=25 \cdot U^{-0.2}$를 사용하여 계산합니다.
* 평균 급탕 온도 ($\vartheta_{w,m}$)는 순환 시스템의 부재 또는 간헐적 운전에 따라 사용자 부분에서 발생하는 증가된 출구 손실 (간헐적 운전 시 펌프가 정지한 동안 배관 내에서 식은 물의 버림으로 인한 손실)을 포함합니다.

> Where,  
>
> • $Q_{w,d,i}:$ 급탕배관망 구간 i의 분배 손실 (해당 월 기준) [kWh]  
> • $U_{i}:$ 구간 i 배관 열관류율 [W/mK]  
> • $L_{i}:$ 구간 i 배관 길이 [m]  
> • $\vartheta_{w,m}:$ 배관 구간 i에서의 급탕 평균 온도 $[^{\circ}C]$ (Table 3.2-1.)  
> • $\vartheta_{i}:$ 존의 평균 실내 온도 $[^{\circ}C]$ (Table 3.2-1.)  
> • $d_{Nutz,mth}:$ 월별 급탕 사용 일수 [d]  
> • $t_{Nutz,T}:$ $\vartheta_{w,m}$일 때 일일 사용 시간 [h]  

* 여러 구간으로 구성된 배관 시스템의 전체 열 손실은 구간별 손실의 합계입니다.

$$
Q_{w,d} = \sum Q_{w.d.i} \tag{3.3-2}
$$

* 배관망이 존을 통과하는 경우, 존 내의 구간 i의 열 손실은 존의 비제어적 열 획득으로 고려됩니다.

$$
Q_{I,w,d,i} = Q_{w.d.i} \tag{3.3-3}
$$

* 급탕 시스템의 열 손실은 개별 구간의 길이, 위치 열관류율을 알고 있으면 계산 가능합니다. 이러한 변수들은 Table 3.2-1과 세부 도면을 참고합니다.
* 만약 순환 설비 대신 전기 열선 (Trace heating)이 사용되는 경우, 해당 구간 i 내의 열 손실은 난방/냉방 (해당되는 경우) 운전 중 에너지 밸런스에 열 부하로 고려되어야 합니다. 요구되는 열 에너지는 식 3.3-1. 에 의해 계산되어야 하지만, 에너지 밸런스에서는 보조에너지 ($Q_{w,d,aux}$)로 취급되어야 합니다 (배관 손실을 막기 위한 추가 에너지이므로).

> Where,  
>
> • $Q_{w,d}:$ 전체 급탕 배관망의 분배 손실 (해당 월 기준) [kWh]  
> • $Q_{w.d.i}:$ 급탕배관망 구간 i의 분배 손실 (해당 월 기준) [kWh]  
> • $Q_{I,w,d,i}:$ 구간 i 가 포함된 존의 비제어적 열 획득 (해당 월 기준) [kWh]  

### 3.3.3. 표준값에 대한 경계 조건

* 상세 설계값이 없는 경우, 급탕 시스템의 열 손실은 Table 3.3-1. 의 값을 사용하여 근사가 가능합니다. 일반적인 배관 시스템은 V, S, SL 3개의 다른 구역으로 구성된다고 가정합니다. 구역 V는 열 생산기기로부터 주 공급관 (Main supply pipe)까지의 수평 열 분배 구간이고 S는 주 공급관에서 지관 (branching pipe)까지의 구간, SL은 지관 구간입니다. 급탕 공급은 건물 전체에 균등하게 분포되었다고 것으로 가정합니다.
* $L_{V}$ : 열 생산기기와 수직 배관 간의 (수평) 배관 구간이며 비난방 존 (지하실, 다락방 등) 및 난방 존 (Screed 내부 등)에 위치할 수 있습니다.
* $L_{S}$ : 주 공급관 (대부분 수직)으로 난방 존 내에 위치합니다.
* $L_{SL}$ : 주 공급관과 사용자의 수전 사이를 연결하는 지관이며 순환이 없습니다.

<center>
    <img alt=""
         src="https://verycoldplay.github.io/eco2_guide_center/_images/3.1.2_3.png"
         style="max-width: 50%;">
<div><strong>Figure 3.4-1. 급탕 배관망에서 배관 설계 </strong></div>
</center>

* ECO2에서 배관 길이는 입력값으로 결정됩니다. 배관망 구간이 위치한 존의 실내 온도는 난방 에너지요구량 계산에서 결정된 값을 사용하며, 없을 시 Table 3.3-1.의 표준값을 사용합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <title>일반적인 경계조건</title>
   <style>
      table {
         border-collapse: collapse;
         width: 80%;
         font-size: 14px;
         text-align: center;
         margin: 0 auto;
      }
      th, td {
         border: 1px solid black;
         padding: 6px 10px;
      }
   </style>
</head>

<p><strong>&lt;Table 3.3-1. 일반적인 경계조건&gt;</strong></p>

<table>
   <tr>
      <th>변수</th>
      <th>Symbol</th>
      <th>단위</th>
      <th>구간 V</th>
      <th>구간 S</th>
      <th>구간 SL</th>
   </tr>

   <tr>
      <td>실내 온도</td>
      <td>\(\vartheta_{i}\)</td>
      <td>°C</td>
      <td>난방 에너지요구량 참조</td>
      <td>"</td>
      <td>"</td>
   </tr>

   <tr>
      <td>난방주기가 아닐 때 실내 온도 (난방 에너지요구량에서 결정되지 않을 경우)</td>
      <td>\(\vartheta_{i}\)</td>
      <td>°C</td>
      <td>22</td>
      <td>"</td>
      <td>"</td>
   </tr>

   <tr>
      <td>실내 온도 (난방 에너지요구량에서 결정되지 않을 경우)</td>
      <td>\(\vartheta_{i}\)</td>
      <td>°C</td>
      <td>비 난방 존 13℃ / 난방 존 20℃</td>
      <td>"</td>
      <td>"</td>
   </tr>

</table>

</html>


* 배관의 열관류율은 설계값으로 계산되며, 설계값을 모르는 경우 Table 3.3-2.의 표준값을 적용합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <title>배관의 열관류율</title>
   <style>
      table {
         border-collapse: collapse;
         width: 80%;
         font-size: 14px;
         text-align: center;
         margin: 0 auto;
      }
      th, td {
         border: 1px solid black;
         padding: 6px 10px;
      }
   </style>
</head>

<p><strong>&lt;Table 3.3-2. 배관의 열관류율 \(U_{i}\)&gt;</strong></p>

<table>
   <tr>
      <th rowspan="2">분배</th>
      <th colspan="2">외부에 설치된 수직배관</th>
      <th colspan="2">내부에 설치된 수직배관</th>
   </tr>
   <tr>
      <th>S</th>
      <th>SL</th>
      <th>S</th>
      <th>SL</th>
   </tr>

   <tr>
      <td>V</td>
      <td>0.255</td>
      <td>0.255</td>
      <td>0.255</td>
      <td>0.255</td>
   </tr>
</table>

</html>


### 3.3.4. 가열된 온수의 순환을 위한 보조에너지

* 순환 펌프의 운전을 위한 보조에너지는 분배 시스템의 수력학적 (Hydraulic) 요구량과 펌프 운전을 의미하는 소비지수 (Expenditure factor)를 기반으로 계산됩니다.
$$
Q_{w,d,aux} = W_{w,d,hydr} \cdot e_{w,d,aux} \tag{3.3-4}
$$

* 급탕 시스템의 수력학적 에너지요구량은 설계점에서의 순환펌프 출력과 순환 운전시간으로 계산됩니다.

$$
W_{w,d,hydr} = \frac {P_{hydr}}{1000} \cdot d_{Nutz,mth} \cdot z \tag{3.3-5}
$$

* 순환펌프의 운전시간 z는 일일 이용 시간 $t_{Nutz}$입니다.

$$
z = t_{Nutz} \tag{3.3-6}
$$

> Where,  
>
> • $Q_{w,d,aux}:$ 급탕 분배 보조에너지 (해당 월 기준) [kWh]  
> • $W_{w,d,hydr}:$ 수력학적 에너지요구량 (해당 월 기준) [kWh]  
> • $e_{w,d,aux}:$ 순환 펌프 운전에 대한 소비지수  
> • $P_{hydr}:$ 설계점에서의 펌프 출력 (입력값) [W]  
> • $d_{Nutz,mth}:$ 급탕 사용 일 수 (해당 월 기준) [d]  
> • $z:$ 순환 펌프 일일 운전시간 [h]  

### 3.3.5. 소비지수
급탕 시스템 순환 펌프의 소비지수는 아래 식으로 계산됩니다.
$$
e_{w,d,aux} = f_e \cdot (C_{P1} + C_{P2}) \tag{3.3-6}
$$

$$
f_e = \frac{P_{P}}{P_{hydr}} \tag{3.3-7}
$$

> Where,  
>
> • $P_{hydr}:$ 설계점에서의 펌프 출력 (입력값) [W]  
> • $P_{P}:$ 펌프의 정격 전력 소비 (입력값) [W]  
> • $e_{w,d,aux}:$ 순환 펌프 운전에 대한 소비지수  
> • $f_e:$ 효율 계수  
> • $C_{P1, C_{P2}}:$ 순환 펌프 제어에 따른 계수  

<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <title>순환 펌프 제어 계수</title>
   <style>
      table {
         border-collapse: collapse;
         width: 80%;
         font-size: 14px;
         text-align: center;
         margin: 0 auto;
      }
      th, td {
         border: 1px solid black;
         padding: 6px 10px;
      }
   </style>
</head>

<p><strong>&lt;Table 3.3-3. 순환 펌프 제어에 따른 계수 \(C_{P1}, C_{P2}\)&gt;</strong></p>

<table>
   <tr>
      <th>펌프제어</th>
      <th>\(C_{P1}\)</th>
      <th>\(C_{P2}\)</th>
   </tr>

   <tr>
      <td>비제어</td>
      <td>0.25</td>
      <td>0.94</td>
   </tr>

   <tr>
      <td>제어</td>
      <td>0.50</td>
      <td>0.63</td>
   </tr>
</table>

</html>


### 3.3.6. 저장 손실
급탕을 위한 저장 탱크는 간접 가열식, 태양열 복합, 전기 가열식, 가스 가열식을 고려합니다.

#### 3.3.6.1. 간접 가열식 저장 탱크
간접 가열식 저장 탱크의 경우, 계산 기간동안의 총 열 출력을 손실이라고 가정합니다.
$$
Q_{w,s} = f_{verbindung} \cdot \frac{(50 - \vartheta_i)}{45} \cdot d_{Nutz,mth} \cdot q_{B,S} \tag{3.3-8}
$$

* 계수 $f_{verbindung}$는 저장 탱크와 관련된 배관으로 인해 발생하는 추가적인 열 손실을 일괄적으로 고려한 연결 배관 열손실 계수이며 표준값은 1.2입니다. 급탕 저장 탱크의 대기 열 손실은 저장된 온수와 설치된 공간의 평균 온도차 45 K를 기준으로 측정되며, 저장 손실은 대기 열 손실 ($q_{B,S}$)을 기준으로 결정됩니다.
* 만약 저장 탱크가 난방 존 내에 위치한다면, 에너지 밸런스 관점에서 발생한 저장 손실은 난방 에너지요구량 계산에서 고려되어야 합니다. 이 경우, 저장 손실은 존의 비제어적 열 획득과 같습니다.
$$
Q_{I,w,s} = Q_{w,s} \tag{3.3-9}
$$

* 만약 대기 열 손실 ($q_{B,S}$)가 주어지지 않은 경우, 입력값으로 주어진 저장 탱크 용량을 기준으로 아래 식으로 계산합니다.

저장 탱크 용량 1000 $l$ 이하:
$$
q_{B,S} = 0.8 + 0.02 \cdot V^{0.77} \tag{3.3-9}
$$

저장 탱크 용량 1000 $l$ 초과:
$$
q_{B,S} = 0.39 \cdot V^{0.35} + 0.5 \tag{3.3-10}
$$

> Where,  
>
> • $Q_{w,s}:$ 급탕 저장 탱크의 대기 열 손실 (해당 월 기준) [kWh]  
> • $f_{verbindung}:$ 연결 배관 열손실 계수, 표준값 = 1.2 (저장 탱크가 열 생산기기와 같은 실에 있는 경우)  
> • $\vartheta_i:$ 존의 실내 온도 [$^{\circ}C$]  
> • $d_{Nutz,mth}:$ 급탕 사용 일 수 [d]  
> • $q_{B,S}:$ 일일 대기 열 손실 [kWh]  
> • $Q_{I,w,s}:$ 급탕 저장 손실로 인한 비제어적 열 획득 (해당 월 기준) [kWh]  
> • $V:$ 저장 탱크 용량 [$l$]  

#### 3.3.6.2. 태양열 복합 저장 탱크
간접 가열식 급탕 저장 탱크의 계산 시간동안 주변으로 방출되는 총 열량은 손실로 가정합니다. 만약 급탕 저장 탱크의 하단 부분의 물 일부를 오직 태양열 저장 용도로만 사용하여 태양열 에너지에 의해서만 가열된다면, 해당되는 부피의 열 손실은 고려하지 않습니다. 
<div align="center">$$
Q_{w,s} = f_{verbindung} \cdot (UA)_{sb,s,a} \cdot \Delta \vartheta_{i} \cdot 24 \cdot 3600 \cdot d_{Nutz,mth} \cdot \frac{V_{s,aux}}{V_{s,aux} + V_{s,sol}} \tag{3.3-11}
$$
</div>

* 대기 열 손실 값이 주어지지 않은 경우, 아래 식으로 계산합니다.
$$
q_{B,S} = (0.4 + 0.2 \cdot (V_{s,aux} + V_{s,sol})^{0.4}) \cdot \frac{V_{s,aux}}{V_{s,aux} + V_{s,sol}} \tag{3.3-12}
$$

* 식 3.3-11.로 계산된 일일 대기 열 손실 값은 특정 대기 열 손실 계산에 사용됩니다. 대기 저장 탱크가 전기 히터로부터 보조 가열을 받는 경우, $f_{verbindung} = 1$을 적용합니다.
* 이러한 가정들은 최대 1,000 $l$까지만 유효하며, 이를 초과할 경우, 여러 대의 최대 1,000 $l$ 저장 탱크로 분리하여 계산합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
   <meta charset="UTF-8">
   <title>저장 탱크 관련 변수</title>
   <style>
      table {
         border-collapse: collapse;
         width: 80%;
         font-size: 14px;
         text-align: center;
         margin: 0 auto;
      }
      th, td {
         border: 1px solid black;
         padding: 6px 10px;
      }
   </style>
</head>

<p><strong>&lt;Table 3.3-4.&gt;</strong></p>

<table>
   <tr>
      <th>변수</th>
      <th>의미</th>
      <th>단위</th>
      <th>값</th>
   </tr>

   <tr>
      <td>\(V_{S,aux}\)</td>
      <td>저장 탱크의 윗 부분 (대기 상태) 용량</td>
      <td>ℓ</td>
      <td>입력값</td>
   </tr>

   <tr>
      <td>\(V_{S,sol}\)</td>
      <td>저장 탱크의 아랫 부분 (태양열 용) 용량</td>
      <td>ℓ</td>
      <td>\(V_{S,sol} = 2 \cdot (L_G \cdot B_G \cdot n_G)^{0.9}\)</td>
   </tr>

   <tr>
      <td>\(q_{B,s}\) (태양열 복합 저장 탱크)</td>
      <td>저장 탱크의 대기 열 손실 (태양열 복합 저장 탱크)</td>
      <td>kWh/day</td>
      <td>식 (3.3-12)</td>
   </tr>

   <tr>
      <td>\(q_{B,s}\) (개별 저장 탱크)</td>
      <td>저장 탱크의 대기 열 손실 (개별 저장 탱크)</td>
      <td>kWh/day</td>
      <td>식 (3.3-9), (3.3-10)</td>
   </tr>

</table>

</html>




> Where,  
>
> • $Q_{w,s}:$ 급탕 저장 탱크의 대기 열 손실 (해당 월 기준) [kWh]  
> • $f_{verbindung}:$ 열 생산기기-저장 탱크 간 연결 배관 손실 계수  
> • $(UA)_{sb,s,a}:$ 측정된 대기 열 손실율 [W/K]  
> • $\Delta \vartheta_{i}:$ 저장 탱크와 탱크 주변 간의 평균 온도차 (태양열 시스템: 47 K) [W]  
> • $d_{Nutz,mth}:$ 급탕 사용 일 수 (해당 월 기준) [d]  
> • $V_{s,aux}:$ 저장 탱크 윗 부분의 용량 [$l$]  
> • $V_{s,sol}:$ 저장 탱크 아랫 부분의 용량 (태양열) [$l$]  
> • $q_{B,S}:$ 일일 대기 열 손실 [kWh]  
> • $L_{G}:$ 건물의 최대 길이 (length) [m]  
> • $B_{G}:$ 건물의 최대 폭 (width) [m]  
> • $n_{G}:$ 난방 존의 개수  


#### 3.3.6.3. 간접 가열식 급탕 저장 탱크 운전을 위한 보조에너지
$$
Q_{w,s,aux} = \frac{P_{P} \cdot t_{P}}{1000} \tag{3.3-13}
$$

* 펌프 운전시간은 열 생산기기 운전시간의 1.1 배로 고려합니다.
$$
t_{P} = \frac{Q_{w,outg} \cdot 1.1}{\dot{Q}_{N}} \tag{3.3-14}
$$

> Where,  
>
> • $Q_{w,s,aux}:$ 급탕 저장 탱크 운전을 위한 보조에너지 (해당 월 기준) [kWh]  
> • $Q_{w,outg}:$ 급탕 시스템에 대한 열 에너지공급량 (해당 월 기준) [kWh]  
> • $\dot{Q}_{N}:$ 열 생산기기의 정격 출력 [kW]  
> • $P_{P}:$ 펌프의 정격 전력 소비 (입력값) [W]  
> • $t_{P}:$ 순환 펌프의 운전 시간 (해당 월 기준) [h]  

#### 3.3.6.4. 전기 가열식 급탕 저장 탱크
전기 가열식 저장 탱크의 열 손실 계산에서, 계산 기간 동안 전체 열 공급량은 손실로 고려된다고 가정합니다.
$$
Q_{w,s} = \frac{(55 - \vartheta_i)}{45} \cdot d_{Nutz,mth} \cdot q_{B,S} \tag{3.3-15}
$$

* 저장 탱크의 일일 열 손실 $q_{B,S}$는 저장 탱크와 설치된 공간 간의 평균 온도차 45 K 를 기준으로 측정되어야 합니다. 저장 탱크가 난방 존 내에 위치할 경우 탱크의 열 손실은 존의 비제어적 열 유입으로 고려됩니다. 

$$
Q_{I,w,s} = Q_{w,s} \tag{3.3-16}
$$

* 일일 대기 열 손실의 측정값이 없을 경우, 아래 식으로 근사값을 계산합니다 (DIN EN 60379에서 최소 요구량의 80 % 기준).
$$
q_{B,S} = 0.29 + 0.019 \cdot V^{0.8} \tag{3.3-17}
$$

> Where,  
>
> • $Q_{w,s}:$ 급탕 저장 탱크의 대기 열 손실 (해당 월 기준) [kWh]  
> • $\vartheta_{i}:$ 존의 실내 온도 [$^{\circ}C$]  
> • $d_{Nutz,mth}:$ 급탕 사용 일 수 (해당 월 기준) [d]  
> • $q_{B,S}:$ 일일 대기 열 손실 [kWh]  
> • $Q_{I,w,s}:$ 존의 비제어적 열 획득 (해당 월 기준) [kWh]  
> • $V:$ 저장 탱크 용량 (입력값) [$l$]  

#### 3.3.6.5. 가스 가열식 급탕 저장 탱크
가스 가열식의 경우, 급탕 탱크에서 방열되는 전체 열량은 손실로 고려됩니다.
$$
Q_{w,s} = \frac{(55 - \vartheta_i)}{50} \cdot d_{Nutz,mth} \cdot q_{B,S} \tag{3.3-18}
$$

* 가스 가열식 급탕 저장 탱크의 일일 대기 열 손실은 저장 탱크와 설치된 공간 간의 평균 온도차 50 K 를 기준으로 측정되어야 합니다. 열 생산이 저장 탱크에서 이루어지므로 이와 관련된 손실을 고려해야 합니다.
* 일일 열 손실의 측정값이 없을 경우, 아래 근사식을 사용합니다 (DIN EN 89의 단위 정격 열 유입 0.07 kW/$l$ 기준 최소 요구량의 80 %).
$$
q_{B,S} = 2.0 + 0.033 \cdot V^{1.1} \tag{3.3-19}
$$

* 저장 탱크의 용량은 최대 500 $l$까지만 유효하며, 이를 초과할 경우, 여러 대의 최대 500 $l$ 저장 탱크로 분리하여 열 손실을 합산합니다.

> Where,  
>
> • $Q_{w,s}:$ 급탕 저장 탱크의 대기 열 손실 (해당 월 기준) [kWh]  
> • $\vartheta_{i}:$ 존의 실내 온도 [$^{\circ}C$]  
> • $d_{Nutz,mth}:$ 급탕 사용 일 수 (해당 월 기준) [d]  
> • $q_{B,S}:$ 일일 대기 열 손실 [kWh]  
> • $Q_{I,w,s}:$ 존의 비제어적 열 획득 (해당 월 기준) [kWh]  
> • $V:$ 저장 탱크 용량 (입력값) [$l$]  

## 3.4. 열 생산
급탕을 위한 열 공급을 위해 여러 열 생산기기 (e.g. 태양열, 보일러, 히트펌프, 전기 열선 등)가 사용 가능합니다. 열 에너지요구량의 총합은 모든 열 생산기기의 열 에너지공급량의 총합과 같아야 합니다.

$$
\sum_{j} Q_{w,outg,j} = \sum_{k} Q_{in,d,k} \tag{3.4-1}
$$

* 만약 여러 개의 열 생산기기가 있는 경우, 분배 시스템의 열 에너지요구량의 총합 ($Q_{in,d,t}$)은 사용 가능한 열 생산기기들에 분배됩니다. 계산은 각 열 생산기기의 에너지공급량 ($Q_{w,outg,j}$)를 기준으로 개별적으로 수행되어야 합니다.
* 시스템의 다른 부분 (e.g. 배기열 히트펌프, 태양열 등)에서 열이 공급된다면, 열 생산량에 고려되어야 합니다. 추가 열원 (e.g. 보일러)에 의해 충족되어야 하는 잔여 열 에너지공급량은 아래 식으로 계산됩니다.
* 여러 개의 열 생산기기가 사용될 경우, 에너지 생산에 사용된 순서대로 계산되어야 합니다.
<div align="center">
$$
Q^{*}_{w,outg} = Q_{w,outg} - Q_{w,sol} - Q_{rv,w,outg} \tag{3.4-2}
$$</div>

> Where,  
>
> • $Q_{w,outg,j}:$ 열 생산기기 j 의 에너지공급량 (해당 월 기준) [kWh]  
> • $Q_{in,d,k}:$ 분배 시스템 k 의 유입 에너지 (해당 월 기준) [kWh]  
> • $Q^{*}_{w,outg}:$ 잔여 열 에너지공급량 (해당 월 기준) [kWh]  
> • $Q_{w,outg}:$ 열 생산기기로부터 급탕 시스템으로의 열 에너지공급량 [kWh]  
> • $Q_{w,sol}:$ 급탕 온수 생산을 위한 태양열 시스템의 열 에너지공급량 (입력값) (해당 월 기준) [kWh]  
> • $Q_{rv,w,outg}:$ 급탕 시스템에 대한 환기유닛의 열 에너지공급량 (해당 월 기준) [kWh] (ECO2에서 현재 고려되지 않으므로 0)  

### 3.4.1. 전기 히터
전기 히터의 경우, 열 공급량에 계수를 고려하여 에너지소요량을 계산합니다. 보조에너지는 0으로 가정합니다.
$$
Q_{w,f} = 1.0 \cdot Q_{w,outg} \tag{3.4-3}
$$

### 3.4.2. 보일러가 여러 개일 경우
보일러가 여러 개일 경우, 난방 에너지소요량 1.4.6.1.을 참고합니다.

### 3.4.3. 급탕 열 생산을 위한 에너지 소비의 결정
난방과 급탕에 동일한 열 생산기기를 사용한다면, 에너지소요량 계산 시 운전시간만 추가로 고려합니다. 난방/급탕/환기/공조를 위해 건물에서 요구하는 열 생산기기의 최대 출력은 병렬로 요구되는 모든 부하의 합 또는 우선순위 기반 순차적 운전에서 최대 부하 중 최대값으로 정해집니다.
<div align="center">
$$
\dot{Q}_{N,max} = max(\sum \dot{Q}_{N,gleichzeitig}, \dot{Q}_{Vorrang}) \tag{3.4-4}
$$</div>

> Where,  
>
> • $\dot{Q}_{N,max}:$ 보일러에 요구되는 최대 정격 출력 [kW]  
> • $\dot{Q}_{N,gleichzeitig}:$ 동시에 요구되는 출력의 총합 [kW]  
> • $\dot{Q}_{Vorrang}:$ 우선순위 기반 순차적 운전에서 요구되는 가장 큰 출력 [kW]  

#### 3.4.3.1. 연료 장전식 보일러
보일러의 열 손실과 보조에너지 ($Q_{TW,g,aux}$)는 정격 열 출력 ($\dot{Q}_{N}$), 정격 출력 효율 ($\eta_{100\%}$), 대기 열 손실 ($q_{B,70}$), 보일러 보조 장치들(제어기 등)의 소비 전력 ($P_{aux}$)으로 계산됩니다. 만약 태양열 시스템을 사용할 경우, 열 에너지공급량 ($Q_{w,outg}$) 대신 잔여 열 에너지공급량 ($Q_{w^{*},outg}$)을 사용합니다.
$$
Q_{w,g} = Q_{w,g,100\%} \cdot t_{w,100\%} \cdot d_{Nutz,mth} + Q_{B,w} \cdot (d_{Nutz,mth} - d_{h,rB}) \tag{3.4-5}
$$

* $d_{h,rB} \gt d_{Nutz,mth}$ 일 경우, $d_{Nutz,mth} - d_{h,rB} = 0$ 입니다.
$$
Q_{w,g,100\%} = \frac{(f_{HS/Hi} - \eta_{k,100\%})}{\eta_{k,100\%}} \cdot \frac{Q_{w,outg}}{d_{Nutz,mth}} \tag{3.4-6}
$$

$$
Q_{B,w} = q_{B,\vartheta} \cdot \frac{\dot{Q}_N}{\eta_{k,100\%}} \cdot (t_{Nutz,T} - t_{w,100\%}) \cdot f_{HS/Hi} \tag{3.4-7}
$$

$$
q_{B,\vartheta} = q_{B,70} \cdot \frac{(\vartheta_{g,m} - \vartheta_{i})}{(70-20)} \tag{3.4-8}
$$

$$
t_{w,100\%} = \frac{Q_{w,outg}}{\dot{Q}_{N} \cdot d_{Nutz,mth}} \tag{3.4-9}
$$

> Where,  
>
> • $Q_{w,g}:$ 보일러의 열 손실 (해당 월 기준) [kWh]  
> • $Q_{w,g,100\%}:$  보일러의 일일 열 손실 [kWh]  
> • $Q_{w,outg}:$ 열 생산기기로부터 급탕 시스템으로의 열 에너지공급량 (해당 월 기준) [kWh]  
> • $Q_{B,w}:$ 운전 정지 시 보일러의 대기 열 손실 [kWh]  
> • $f_{HS/Hi}:$ 연료의 고위/저위 발열량 비  
> • $\eta_{100\%}:$ 보일러의 정격 출력 효율 (입력값)  
> • $t_{w,100\%}:$ 정격 출력 시 급탕 열 생산을 위한 보일러의 일일 운전시간 [h]  
> • $d_{Nutz,mth}:$ 급탕 사용 일 수 (해당 월 기준) [d]  
> • $d_{h,rB}:$ 월별 설계 운전 일 수 [d]  
> • $t_{Nutz,T}:$ 일일 사용 시간 [h]  
> • $q_{B,70}:$ 평균 온도 70 $^{\circ}C$ 에서 대기 열 손실 [-]  
> • $\vartheta_{g,m}:$ 대기 모드 시 평균 보일러 온도 [$^{\circ}C$]  
> • $\vartheta_{i}:$ 보일러 설치 공간의 실내 온도 [$^{\circ}C$]  
> • $\dot{Q}_{N}:$ 열 생산기기의 정격 출력 [kW]  

보일러가 난방 존에 설치된 경우, 보일러의 외피 열 손실 ($q_s,\vartheta$)은 존의 비제어적 열 획득으로 고려됩니다.

대기압 가스 보일러 (Atmospheric gas boiler)일 경우:
$$
q_{s,\vartheta} = 0.5 \cdot q_{B,\vartheta} \tag{3.4-10}
$$

이외의 보일러일 경우:
$$
q_{s,\vartheta} = 0.75 \cdot q_{B,\vartheta} \tag{3.4-11}
$$

$$
Q_{I,w,g} = q_{s,\vartheta} \cdot \frac{\dot{Q}_{N}}{\eta_{k,100\%}} \cdot ((t_{Nutz,T} - t_{w,100\%}) \cdot (d_{Nutz,mth} - d_{h,rB}) + t_{w,100\%} \cdot d_{Nutz,mth}) \tag{3.4-12}
$$

* $d_{h,rB} \gt d_{Nutz,mth}$ 일 경우, $d_{Nutz,mth} - d_{h,rB} = 0$ 입니다.

> Where,  
>
> • $q_{s,\vartheta}:$ 보일러의 외피 열 손실 [-]  
> • $Q_{I,w,g}:$ 비제어적 열 획득 (해당 월 기준) [kWh]  

#### 3.4.3.2. 보일러 운전을 위한 보조에너지
보일러 운전을 위한 보조에너지는 보일러의 보조 장치의 전력 소비 ($P_{aux}$)로 계산됩니다. $P_{aux}$는 최대 부하, 정격 출력 유량, 공급/환수 온도 차 20 K 조건 기준에서 측정된 값입니다. 펌프 운전에 의한 보조에너지는 3.3.6.3. 에서 고려합니다.
$$
Q_{w,g,aux} = P_{aux,100} \cdot t_{w,100\%} \cdot d_{Nutz,mth} + P_{aux,SB} \cdot (24 - t_{w,100\%}) \cdot (d_{Nutz,mth} - d_{h,rB}) \tag{3.4-13}
$$

* $d_{h,rB} \gt d_{Nutz,mth}$ 일 경우, $d_{Nutz,mth} - d_{h,rB} = 0$ 입니다.

> Where,  
>
> • $Q_{w,g,aux}:$ 정격 출력 시 보일러의 보조에너지 (해당 월 기준) [kWh]  
> • $P_{aux,100}:$  보일러의 보조에너지 소비 (해당 월 기준) [kW]  
> • $P_{aux,SB}:$ 대기 모드 시 보일러의 보조에너지 소비 [kW]  
> • $t_{w,100\%}:$ 정격 출력 시 급탕 열 생산을 위한 보일러의 일일 운전시간 [h]  
> • $d_{Nutz,mth}:$ 급탕 사용 일 수 (해당 월 기준) [d]  
> • $d_{h,rB}:$ 월별 설계 운전 일 수 [d]  

#### 3.4.3.3. 계산을 위한 표준값
* 보일러의 대기 열 손실 ($q_{B,70}$) 은 보일러의 정격 출력에 대한 함수로 주어집니다. 
$$
q_{B,70} = \frac{(E \cdot (\dot{Q}_{N})^{F})}{100} \tag{3.4-14}
$$

Table 3.4-1. 보일러 유형에 따른 대기열손실 계수
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>보일러 유형에 따른 대기열손실 계수</title>
<style>
    table {
        border-collapse: collapse;
        width: 80%;
        font-size: 14px;
        text-align: center;
        margin: 0 auto;
    }
    th, td {
        border: 1px solid black;
        padding: 6px 10px;
    }
</style>
</head>

<p><strong>&lt;표 3.2.9-11&gt; 보일러 유형에 따른 대기열손실 계수</strong></p>

<table>

    <!-- Header -->
    <tr>
        <th>보일러형식</th>
        <th>연식</th>
        <th>계수 E</th>
        <th>계수 F</th>
    </tr>

    <!-- 표준난방보일러 -->
    <tr><th colspan="4">표준난방보일러</th></tr>

    <!-- 가스보일러 -->
    <tr>
        <td rowspan="3">가스보일러</td>
        <td>1978 이전</td>
        <td>8.0</td>
        <td>-0.27</td>
    </tr>
    <tr>
        <td>1978 ~ 1994</td>
        <td>7.0</td>
        <td>-0.30</td>
    </tr>
    <tr>
        <td>1994 이후</td>
        <td>8.5</td>
        <td>-0.40</td>
    </tr>

    <!-- 연료분사식 보일러 (기름/가스) -->
    <tr>
        <td rowspan="3">연료분사식 보일러 (기름/가스)</td>
        <td>1978 이전</td>
        <td>9.0</td>
        <td>-0.28</td>
    </tr>
    <tr>
        <td>1978 ~ 1994</td>
        <td>7.5</td>
        <td>-0.31</td>
    </tr>
    <tr>
        <td>1994 이후</td>
        <td>8.5</td>
        <td>-0.40</td>
    </tr>

    <!-- 저온보일러 -->
    <tr><th colspan="4">저온보일러</th></tr>

    <!-- 가스보일러 -->
    <tr>
        <td rowspan="2">가스보일러</td>
        <td>1994 이전</td>
        <td>6.0</td>
        <td>-0.32</td>
    </tr>
    <tr>
        <td>1994 이후</td>
        <td>4.5</td>
        <td>-0.40</td>
    </tr>

    <!-- 콤비보일러 -->
    <tr>
        <td rowspan="2">콤비보일러</td>
        <td>1994 이후</td>
        <td>\( q_{B,70℃} = 0.022 \)</td>
        <td></td>
    </tr>
    <tr>
        <td>1994 이후</td>
        <td>\( q_{B,70℃} = 0.012 \)</td>
        <td></td>
    </tr>

    <!-- 연료분사식 보일러 (기름/가스) -->
    <tr>
        <td rowspan="2">연료분사식 보일러 (기름/가스)</td>
        <td>1994 이전</td>
        <td>7.0</td>
        <td>-0.37</td>
    </tr>
    <tr>
        <td>1994 이후</td>
        <td>4.25</td>
        <td>-0.40</td>
    </tr>

    <!-- 콘덴싱보일러 (기름/가스) -->
    <tr>
        <td rowspan="2">콘덴싱보일러 (기름/가스)</td>
        <td>1994 이전</td>
        <td>7.0</td>
        <td>-0.37</td>
    </tr>
    <tr>
        <td>1994 이후</td>
        <td>4.0</td>
        <td>-0.40</td>
    </tr>

    <!-- 콤비보일러 (11kW, 18kW 및 24kW) -->
    <tr>
        <td rowspan="2">콤비보일러 (11kW, 18kW 및 24kW)</td>
        <td>1994 이전</td>
        <td>\( q_{B,70℃} = 0.022 \)</td>
        <td></td>
    </tr>
    <tr>
        <td>1994 이후</td>
        <td>\( q_{B,70℃} = 0.012 \)</td>
        <td></td>
    </tr>

</table>

</html>


* 보일러 운전을 위한 보조에너지 ($P_{aux,100}, P_{aux,SB}$)는 보일러 정격 출력의 함수로 주어집니다. 

* 강제 급배기식 보일러 (Boiler with forced draught burner):
$$
P_{aux,100} = \frac{45 \cdot (\dot{Q}_{N})^{0.48}}{1000} \tag{3.4-15}
$$

$$
P_{aux,SB} = 0.015 \tag{3.4-16}
$$

* 250 kW 이하 대기압식 보일러 (Boiler with Atmospheric burner):
$$
P_{aux,100} = \frac{0.35 \cdot (\dot{Q}_{N}) + 40}{1000} \tag{3.4-17}
$$

$$
P_{aux,SB} = 0.015 \tag{3.4-18}
$$

* 250 kW 이상 대기압식 보일러 (Boiler with Atmospheric burner):
$$
P_{aux,100} = \frac{0.7 \cdot (\dot{Q}_{N}) + 80}{1000} \tag{3.4-19}
$$

$$
P_{aux,SB} = 0.015 \tag{3.4-20}
$$

표준 보일러의 경우:  
• 대기압식 가스 보일러:  
<div align="center">$$
P_{aux,100} = \frac{0.148 \cdot (\dot{Q}_{N}) + 40}{1000} \tag{3.4-21}
$$</div>

• 강제 급배기식 보일러(기름/가스):  
<div align="center">$$
P_{aux,100} = \frac{45 \cdot (\dot{Q}_{N})^{0.48}}{1000} \tag{3.4-22}
$$</div>

저온 보일러의 경우:  
• 대기압식 가스 보일러:
$$
P_{aux,100} = \frac{0.148 \cdot (\dot{Q}_{N}) + 40}{1000} \tag{3.4-23}
$$

• 강제 급배기식 보일러(기름/가스):
$$
P_{aux,100} = \frac{45 \cdot (\dot{Q}_{N})^{0.48}}{1000} \tag{3.4-24}
$$

• 콘덴싱 보일러(기름/가스):
$$
P_{aux,100} = \frac{45 \cdot (\dot{Q}_{N})^{0.48}}{1000} \tag{3.4-25}
$$

• 전기적 제어 보일러의 경우, $P_{aux,SB} = 0.02 kW$ 입니다.

### 3.4.4. 직접 가열식 저장 탱크 (가스)
가스로 직접 가열되는 저장 탱크의 경우, 열 손실은 보일러처럼 계산되며, 대기 열 손실은 3.3.6.5. 에서 계산됩니다. 정격 출력 효율 $\eta_{100\%}$ 는 82 %로 가정합니다 (DIN EN 89). 
$$
Q_{w,g} = Q_{w,g,100\%} \cdot d_{Nutz,mth} \tag{3.4-26}
$$

$$
Q_{w,g,100\%} = \frac{(f_{HS/Hi} - \eta_{100\%})}{\eta_{100\%}} \cdot \frac{Q_{w,outg}}{d_{Nutz,mth}} \tag{3.4-26}
$$

> Where,  
>
> • $Q_{w,g}:$ 가열식 저장 탱크의 열 손실 (해당 월 기준) [kWh]  
> • $Q_{w,g,100\%}:$ 가열식 저장 탱크의 일일 열 손실 [kWh]  
> • $Q_{w,outg}:$ 열 생산기기의 급탕용 열 에너지공급량 (해당 월 기준) [kWh]  
> • $f_{HS/Hi}:$ 고위/저위발열량 비  
> • $d_{Nutz,mth}:$ 급탕 사용 일 수 (해당 월 기준) [d]  

* 단순화를 위해, 보조에너지 요구량 ($Q_{w,g,aux}$) 는 0으로 가정합니다.

### 3.4.5. 지역 난방 (District heating)
* 지역난방 시 건물 기계실에서의 열 손실 ($Q_{w,g}$):
$$
Q_{w,g} = H_{DS} \cdot (\vartheta_{DS} - \vartheta_{i}) \tag{3.4-27}
$$

* 지역난방 열 손실은 난방 에너지소요량 1.4.7.5.를 참고합니다.

* 급탕 배관망에서 2차측 평균 온도 $\vartheta_{sek,DS}$ 는 아래와 같습니다.
$$
\vartheta_{sek,DS} = \vartheta_{g,m} = 50 \ or \ 40 \ ^{\circ}C \tag{3.4-28}
$$

