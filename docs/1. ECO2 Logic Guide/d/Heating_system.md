# 2.1. 난방 시스템의 에너지 소요량 (Energy use) 산정

## 2.1.1. 개요

본 절은 난방 시스템의 각 단계(전달, 분배, 저장, 생산)에서 산출된 손실 (loss), 소요량 (energy use), 보조에너지 (auxiliary energy)를 종합하여, **최종적으로 열 생산기기(보일러, 히트펌프 등)가 공급해야 하는 에너지 소요량**을 산정하는 방법을 기술한다.

<center>
     <img src="../../_images/heating_system.png" style="max-width: 50%;" alt="제 2.1장에서 다루는 범위">
     <div><strong>제 2.1장에서 다루는 범위</strong></div>
</center>


열 생산기기의 에너지 소요량 산정을 위해 건물의 난방 에너지 요구량(\( Q_{h,b} \))에 각 과정에서 발생하는 모든 열손실을 더하여 열 생산기기가 실제로 감당해야 할 열 에너지 공급량(\( Q_{h,outg} \))을 결정한다.  
또한, 이 과정에서 소비되는 모든 보조에너지 공급량, 신재생에너지 시스템에 의한 열획득도 합산한다.

---

## 2.1.2. 생산기기 열 에너지 공급량(heat output)

- 열 생산기기가 공급해야 하는 총 열 공급량(\(Q_{h,outg}\))은 최종적으로 실내에 공급되어야 하는 순수 난방에너지 요구량(Energy need)((Q_{h,b}\))과 열이 사용자에게 도달하기까지의 과정, 즉 전달(\(Q_{h,ce}\)), 분배(\(Q_{h,d}\)), 저장(\(Q_{h,s}\)) 단계에서 발생하는 모든 열손실의 합으로 계산된다.

<div align="center">  
$$
Q_{h,outg} = Q_{h,b} + Q_{h,ce} + Q_{h,d} + Q_{h,s}
$$
</div>

- 열 생산기기가 공조시스템의 가열유닛(Heating coil)에 열을 공급하는 경우, \(Q_{h,b}\) 대신 공조기 가열에 필요한 열량 \(Q_{h*,b}\)를 사용한다.

<div align="center">  
$$
Q_{h,outg} = Q_{h*,b} + Q_{h,ce} + Q_{h,d} + Q_{h,s}
$$
</div>

- 열 생산기기가 흡수식 냉동기에 열을 공급하는 경우, 냉동기 구동에 필요한 열량 \(Q_{c,f}\)를 사용한다.

<div align="center">  
$$
Q_{h,outg} = Q_{c,f} + Q_{h,d} + Q_{h,s}
$$
</div>

- 열 생산기기로부터 열이 공급되는 과정이 다수인 경우, 각각의 과정의 \(Q_{h,outg}\)를 합산한다.

---

### 2.1.2.2. 최종 난방 에너지 소요량

- 건물이 실제로 요구하는 최종 난방 에너지 소요량(\(Q_{h,f}\))은 생산기기의 열에너지 공급량(\(Q_{h,outg}\))과 공급 과정의 열 손실량(\(Q_{h,g}\))을 더한 값에서, 태양열 등 신재생에너지로 공급된 열량(\(Q_{h,reg}\))을 차감하여 계산된다.

<div align="center">  
$$
Q_{h,f} = Q_{h,outg} + Q_{h,g} - Q_{h,reg}
$$  
$$
Q_{h,reg} = Q_{h,sol} + Q_{h,in}
$$
</div>

(단, \( Q_{h,sol} \): 태양열에너지, \( Q_{h,in} \): 주변환경으로부터 열 획득)

---

### 2.1.2.3. 보조에너지

- 난방 시스템에서 보조에너지(\(Q_{h,aux}\))는 열 전달, 분배, 저장, 생산의 각 단계에서 소요되는 모든 보조에너지의 합으로 산출되며 최종 에너지 소요량에 포함된다.

<div align="center">  
$$
Q_{h,aux} = Q_{h,ce,aux} + Q_{h,d,aux} + Q_{h,s,aux} + Q_{h,g,aux}
$$
</div>

---

### 2.1.2.4. 비제어적 열획득(Heat gain)

- 난방 시스템의 전달, 분배, 저장, 생산 과정에서 열 에너지의 일부는 제어되지 않고 난방 중인 실내 공간으로 유입되어 열획득으로 작용할 수 있다. 이 비제어적 열획득(\(Q_{I,h}\))은 열에너지 소요량을 계산할 때 고려되어야 한다.

<div align="center">  
$$
Q_{l,h} = Q_{l,h,s} + Q_{l,h,g}
$$
</div>

---

## 2.1.3. 각 프로세스의 기준 조건 설정

기본적으로 일일 난방이용시간 \( t_{h,Nutz} = 0 \)이면, 부하율 \( \beta_j = 0 \)이다.  
만약 #장의 공조난방 시스템에서 요구사항이 있을 경우, #장에서 산정된 \( t_{h,Nutz} \)를 따르도록 한다.

---

### 2.1.3.1. 평균 부하율(Part load level)

평균 부하율(\( \beta_{i} \))은 시스템의 최대 공급 능력 대비 실제 평균 부하가 어느 정도인지를 나타내는 무차원 변수이다. 각 단계(전달, 분배, 저장, 생산)마다 열손실이 존재하므로, 각 단계의 부하율을 개별적으로 계산한다.

- **열 전달 부하율 \( \beta_{h,ce} \)**

<div align="center">
$$
\beta_{h,ce} = Q_{h,b} / ( \dot{Q}_{dot\,h,max} \cdot t_h )
$$
</div>

- **열 분배 부하율 \( \beta_{h,d} \)**

<div align="center">
$$
\beta_{h,d} = ( Q_{h,b} + Q_{h,ce} ) / ( \dot{Q}_{dot\,h,max} \cdot t_h )
$$
</div>

- **열 저장 부하율 \( \beta_{h,s} \)**

<div align="center">
$$
\beta_{h,s} = ( Q_{h,b} + Q_{h,ce} + Q_{h,d} ) / ( \dot{Q}_{dot\,h,max} \cdot t_h )
$$
</div>

- **열 생산 부하율 \( \beta_{h,g} \)**

<div align="center">
$$
\beta_{h,g} = ( Q_{h,b} + Q_{h,ce} + Q_{h,d} + Q_{h,s} ) / ( \dot{Q}_{dot\,h,max} \cdot t_h )
$$
</div>

(단, \( Q_{h,b} \): 월별 난방 에너지 요구량 [kWh],  
\( Q_{h,max} \): 최대 난방 출력 [kW],  
\( t_{h} \): 월별 난방 시간)

---

### 2.1.3.2. 온도 기반 제어

온도에 따라 자동 조절되는 난방 시스템에서, 개별 프로세스(전달, 분배, 저장, 생산)의 온도는 시스템의 설계 조건에서 평균 부하율과 평균 온도차에 의해 정해진다.

온도 \( \theta_{HK,m(\beta_j)} \)를 산정한다.

- **평균 난방 사이클 온도(\( \theta_{HK,m} \))**

<div align="center">
$$
\theta_{HK,m(\beta_j)} = 0.5 \cdot ( \theta_{VL,m(\beta_j)} + \theta_{RL,m(\beta_j)} )
$$
</div>

- **평균 온도차(\( \Delta \theta_{HK,m}(\beta_i) \))**

<div align="center">
$$
\Delta \theta_{HK,m}(\beta_i) = \theta_{VL,m}(\beta_i) - \theta_{RL,m}(\beta_i)
$$</div>


- **평균 공급 온도(\(\theta_{VL,m}\))**

<div align="center">
$$
\theta_{VL,m}(\beta_i) = (\theta_{VA} - \theta_{i,h,\text{soll}}) \cdot \beta_i^{\frac{1}{n}} + \theta_{i,h,\text{soll}}
$$
</div>


- **평균 환수 온도(\( \theta_{RL,m} \))**

<div align="center">
$$
\theta_{RL,m(\beta_i)} = ( \theta_{RA} - \theta_{i,h,soll} ) \cdot \beta_j^{(1/n)} + \theta_{i,h,soll}
$$
</div>

(단,  
- \( \beta_i \) : 2.1.3.1에서 계산된 각 프로세스의 평균 부하율  
- \( \theta_{VA} \) : 난방 시스템의 설계 조건 공급 온도 (℃)  
- \( \theta_{RA} \) : 난방 시스템의 설계 조건 환수 온도 (℃)  
- \( n \) : 방열지수 (라디에이터 = 1.33, 바닥 난방 = 1.1)  
- \( \theta_{i,h,\text{soll}} \) : 난방 시스템 가동 시간 동안의 실내 온도 (℃)
)

---

- **작동 유체(Working fluid)의 평균 초과 온도 \( \Delta \theta_A \)**

<div align="center">
$$
\Delta \theta_A = ( \theta_{VA} + \theta_{RA} ) / 2 - \theta_{i,h,soll}
$$
</div>

> 혼합기(mixer)가 설치된 정온 보일러의 경우, 전달과 분배 과정에서 초과 온도 값 적용, 혼합기가 없는 정온 보일러의 평균 온도 = 70℃ 적용

- 건물을 리모델링 하는 경우, 설계 온도는 맞춰질 수 있다. 새로운 자세한 설계가 수립되지 않은 경우, 아래 표의 설계 온도를 사용하도록 한다. 중간 값일 경우, 한 단계 높은 온도 쌍을 선택하도록 한다.

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>설계 온도</title>
  <style>
    table {
      border-collapse: collapse;
      width: 80%;
      font-family: "Malgun Gothic", sans-serif;
      font-size: 14px;
      text-align: center;
    }
    th, td {
      border: 1px solid black;
      padding: 6px 10px;
    }
  </style>
</head>
<body>

<table>
  <tr>
    <th rowspan="2">기존 설계 온도</th>
    <th colspan="3">새 설계 온도에서 Q̇<sub>N,neu</sub> / Q̇<sub>N,alt</sub></th>
  </tr>
  <tr>
    <th>70/55 ℃</th>
    <th>55/45 ℃</th>
    <th>35/28 ℃</th>
  </tr>
  <tr>
    <td>90/70 ℃</td>
    <td>63.8 %</td>
    <td>40.6 %</td>
    <td>11.3 %</td>
  </tr>
  <tr>
    <td>70/55 ℃</td>
    <td>-</td>
    <td>63.7 %</td>
    <td>17.8 %</td>
  </tr>
  <tr>
    <td>55/45 ℃</td>
    <td>-</td>
    <td>-</td>
    <td>27.9 %</td>
  </tr>
</table>

</body>
</html>

- 축열조가 없는 열 생산기기의 경우 평균 공급/환수 온도는 <div>
$$
\theta_{HK,m}(\beta_i) = 0.5 \cdot \left( \theta_{VL,m}(\beta_i) + \theta_{RL,m}(\beta_i) \right)
$$
</div> 식으로 구한다.

- 상이한 난방 배관망이 설치된 경우, 최대 온도는 열 생산기기가 충족해야 하는 요구 사항에 따른다.

- 정온 보일러와 바이오매스 보일러는 평균 온도를 70 °C로 가정한다.

- 콘덴싱 보일러의 효율 계산에서 환수 온도가 고려되어야 한다.

- 저온 및 콘덴싱 보일러에서 준비 손실은 평균 난방 배관망 온도에 관련된다. 


---

### 2.1.3.3. 보일러 정격 출력(Rated output) 산정

- **보일러 정격출력(\( \dot{Q}_{N,h} \))**: 보일러의 정격 출력을 산정하기 위해 첫 번째로 모든 연결된 열 소비기기의 최대 출력이 결정되어야 한다. 동시 발생하는 수요에 따라 보일러의 정격 출력은 가장 큰 단일 수요 또는 동시 발생하는 수요의 합 중에서 결정된다.  

- **난방 시스템의 보일러 정격 출력(\(Q_{N,h}\))**:

<div align="center">
$$
\dot{Q}_{dot\,N,h} = 1.3 \cdot \dot{Q}_{dot\,h,max}
$$
</div>

- 이미 열 생산기기가 설치된 기존 건물의 경우, 정격 출력은 설치된 기기의 값을 이용한다. 설치된 기기 값을 알 수 없는 경우, 아래 식을 사용한다.

<div align="center">
$$
\dot{Q}_{N,h} = 2.5 \cdot \dot{Q}_{h,\text{max}}
$$
</div>

(단, \( \dot{Q}_{h,\text{max}} \) : 건물의 최대 열 부하 (kW))

- **동시 열 부하(난방, 급탕, 공조 등) 발생 시**:

- 동시에 여러 가지의 열 부하가 발생할  경우, 보일러의 정격출력은 **동시에 발생하는 부하들의 합**으로 또는 **우선순위가 높은 부하 중 가장 큰 값**으로 결정된다.

<div align="center">
$$
\dot{Q}_N = \max\left( \sum \dot{Q}_{N,\text{gleichzeitig}} , \dot{Q}_{\text{vorrang}} \right)
$$
</div>

---

### 2.1.3.4. 운전 시간

건물 난방/급탕 요구량(# 절)에서 야간감소/정지 또는 주말감소/정지가 고려되었다면, 보일러 운전에서도 동일하게 고려해야 한다.

- **난방 시스템의 운전 시간 설계**: 분배 배관망 및 열 생산 과정의 열 손실 계산을 위해 야간이나 주말의 운전 감소/정지, 온도 저하, 지속 운전 방식을 고려하는 일일 운전 시간이 사용된다.

- **일일 설계 운전시간 \( t_{h,rL,T} \)**  
  $$
  t_{h,rL,T} = 24 - f_{L,NA} \cdot (24 - t_{h,op})
  $$
  - \( f_{L,NA} \): 야간감소/정지에 대한 운전시간계수  
  - \( t_{h,op} \): 일일 난방 시간

  - **지속 운전**: \( f_{L,NA} = 0 \)  
  - **야간 정지**: \( f_{L,NA} = 1 \)  
  - **야간 감소**:  
    $$
    f_{L,NA} = 1 - \frac{\theta_{NA,Grenz} - \theta_e}{\theta_{NA,Grenz} - \theta_{e,min}}
    $$

    - \( \theta_{NA,Grenz} \) = 야간 감소 한계 온도 = \(10^\circ\mathrm{C} \)  
    - \( \theta_e \): 월 평균 외기 온도(℃)
    - \( \theta_{e,min} \): 일평균 설계 온도(℃)

---

- **월별 설계 운전일 \( d_{h,rB} \)**  
  $$
  d_{h,rB} = d_{mth} \cdot \left( \frac{365 - f_{L,WA} \cdot (365 - d_{Nutz,A})}{365} \right)
  $$

  - \( d_{mth} \): 월별 일수  
  - \( d_{Nutz,A} \): 연간 이용기간  
  - \( f_{L,WA} \): 주말 운전 감소/정지 계수

  - **지속 운전**: \( f_{L,WA} = 0 \)  
  - **주말 정지**: \( f_{L,WA} = 1 \)  
  - **주말 감소**:  
    $$
    f_{L,WA} = 1 - \frac{\theta_{WA,Grenz} - \theta_e}{\theta_{WA,Grenz} - \theta_{e,min}}
    $$

    - \( \theta_{WA,Grenz} \) = 주말 감소 한계 온도 = \( 15^\circ\mathrm{C} \)

---

- **월별 계산 난방 운전시간 \( t_{h,rL} \)**  
  $$
  t_{h,rL} = t_{h,rL,T} \cdot d_{h,rB}
  $$

- 상이한 난방 배관망 운전 또는 난방 시스템 이외의 열 생산기기가 존재하거나 배관망에 다른 열 수요를 갖는 에너지원(냉동기, 공조장치, 온수 등)이 연결되어 있는 경우, 가장 오랜 시간 수요가 발생하는 에너지원의 운전시간을 적용함.

<div align="center">
$$
t_{h,rL} = t_{h,rL,T} \cdot d_{h,rB}
$$</div>


---

- **월별 난방일수 \( d_{h,mth} \)**:  
  $$
  d_{h,mth} = \frac{t_{h,rL,T}^*}{24}
  $$

- **월별 이용일수 \( d_{Nutz,mth} \)**:  
  $$
  d_{Nutz,mth} = \frac{d_{Nutz,A}}{365} \cdot d_{mth}
  $$

- **일년 단위 산정치의 월별 분배**: 

난방 시스템 구성요소 중 에너지 요구량이 존 별 대차대조에 영향을 미치지 않는 요소(순환펌프 등)는 일 년 단위로 계산하여도 무방하다. 에너지 요구량을 월별로 비교해야 하는 경우, 일 년 요구량인 \(W_{h,d,e,a}\)로부터 월별 요구량 \(W_{h,d,e,M}\)를 계산한다.

<div align="center">
$$
W_{h,d,e,M} = W_{h,d,e,a} \cdot \frac{ \beta_{h,d,M} \cdot t_{\text{Nutz,mth}} }{ \beta_{h,d,a} \cdot t_{h,op} \cdot d_{\text{Nutz,a}} }
$$</div>

---

## 2.1.4. 열 손실 및 보조에너지 계산

### 2.1.4.1. 전달 과정의 열 손실

- 실내 난방 에너지 전달 과정의 열 손실(Q_h,ce)과 열 전달 총 이용효율 (η_h,ce)은 아래와 같이 정의한다.

  $$
  Q_{h,ce} = \left( \frac{f_{Radiant} \cdot f_{int} \cdot f_{hwdr}}{\eta_{h,ce}} - 1 \right) \cdot Q_{h,b}
  $$

- \( f_{\text{Radiant}} \) : 복사 영향 계수  
- \( f_{\text{int}} \) : 간헐 운전 계수  
- \( f_{\text{hydr}} \) : 수력학적 균형 계수 = 1  


- \( \eta_{h,\text{ce}} \) : 열 전달 총 이용효율  
- \( \eta_{h,\text{ce}} \) = 실내 열전달 총 효율  
- \( \eta_{h,\text{ce}} = \dfrac{1}{4 - (\eta_L + \eta_C + \eta_B)} \)

  - \( \eta_L \) : 실내 공기온도의 수직 분포에 대한 효율  
  - \( \eta_C \) : 실내 온도제어에 대한 효율  
  - \( \eta_B \) : 외피 열손실에 대한 효율

  일반적인 상황에서 \(f_{Radiant}\)(h > 4m인 대형 홀 공간에서 중요)와 \(f_{int}\)(실내 온도감소 고려)는 1로 설정한다.

- 연간 열 손실(\(Q_{h,ce,a}\))은 월별 계산한 열 손실의 합과 같다.

 <div align="center">
 $$
Q_{h,ce,a} = \sum Q_{h,ce}
$$</div>

